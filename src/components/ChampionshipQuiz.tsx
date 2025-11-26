import React from "react";
import { ChampionshipAPI } from "../utils/championship";
import { UserPreferencesAPI } from "../utils/preferences";

interface ChampionshipQuizProps {
    userGrade: number;
    userSchool: string;
}

const ChampionshipQuiz: React.FC<ChampionshipQuizProps> = ({ userGrade, userSchool }) => {
    const [preguntaActual, setPreguntaActual] = React.useState<string>("");
    const [respuestaCorrecta, setRespuestaCorrecta] = React.useState<string>("");
    const [respuestaUsuario, setRespuestaUsuario] = React.useState<string>("");
    const [feedback, setFeedback] = React.useState<string>("");
    const [preguntasUsadas, setPreguntasUsadas] = React.useState<string[]>([]);
    const [timeLeft, setTimeLeft] = React.useState<number>(300); // 5 minutos
    const [bloqueado, setBloqueado] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!preguntaActual || bloqueado) return;
        if (timeLeft === 0) {
            setBloqueado(true);
            setFeedback("⏰ Tiempo agotado. No puedes responder esta pregunta. -3 likes");
            // Aquí podrías actualizar los likes en la base de datos si lo deseas
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, preguntaActual, bloqueado]);
    // Cargar preguntas de campeonato según el curso
    let preguntas: any[] = [];
    try {
        preguntas = require(`../questions/campeonato-${userGrade}primaria.json`);
    } catch {
        preguntas = [];
    }

    async function generarPregunta() {
        if (preguntasUsadas.length >= 25) {
            setPreguntaActual("");
            setRespuestaCorrecta("");
            setFeedback("¡Has completado las 25 preguntas del campeonato!");
            setBloqueado(true);

            // Calcular estadísticas de la sesión
            const nick = typeof window !== "undefined" ? sessionStorage.getItem("currentUserNick") : null;
            let centro = "";
            let curso = "";
            if (nick) {
                const userObj = await UserPreferencesAPI.getPreference(nick, "profile") as any;
                centro = userObj?.centro || "";
                curso = userObj?.curso || "";
            }

            // Recuperar respuestas desde la API
            let respuestasArr: any[] = [];
            if (nick) {
                const respuestasData = await ChampionshipAPI.getChampionshipData(nick, 'respuestas_campeonato') as any;
                respuestasArr = respuestasData || [];
            }
            // Contar acertadas y falladas de la sesión
            const acertadasSesion = respuestasArr.filter((r: any) => r.correcta).length;
            const falladasSesion = respuestasArr.filter((r: any) => !r.correcta).length;
            const likesSesion = respuestasArr.reduce((sum: number, r: any) => sum + (r.likes || 0), 0);
            // Temporada actual: formato tYYYY (declarar antes de cualquier uso)
            const now = new Date();
            let temporada = now.getFullYear();
            if (now.getMonth() + 1 >= 10) temporada += 1;
            const temporadaKey = `t${temporada}`;
            // Solo se considera ganada si acierta más de 12
            const ganadoSesion = acertadasSesion > 12 ? 1 : 0;
            const perdidoSesion = acertadasSesion <= 12 ? 1 : 0;

            // Guardar datos según tipo de usuario
            if (nick) {
                // Sumar acumulado de la temporada
                const keyIndividual = `campeonato_individual_${temporadaKey}`;
                let tablaIndividual: Record<string, any> = {};
                try { tablaIndividual = (await ChampionshipAPI.getChampionshipData(nick, keyIndividual) as any) || {}; } catch { tablaIndividual = {}; }
                let acertadas = acertadasSesion;
                let falladas = falladasSesion;
                let likes = likesSesion;
                let ganado = ganadoSesion;
                let perdido = perdidoSesion;
                if (tablaIndividual[nick]) {
                    acertadas += tablaIndividual[nick].acertadas || 0;
                    falladas += tablaIndividual[nick].falladas || 0;
                    likes += tablaIndividual[nick].likes || 0;
                    ganado += tablaIndividual[nick].ganado || 0;
                    perdido += tablaIndividual[nick].perdido || 0;
                }

                const userObj = (await UserPreferencesAPI.getPreference(nick, "profile") as any) || {};
                // Guardar tablaIndividual para todos los tipos
                tablaIndividual[nick] = {
                    centro,
                    curso,
                    acertadas,
                    falladas,
                    likes,
                    ganado,
                    perdido,
                    fecha: now.toISOString()
                };
                await ChampionshipAPI.setChampionshipData(nick, keyIndividual, tablaIndividual);
                // Si ha superado la competición, sumar competicionesSuperadas para cualquier tipo de usuario
                if (ganadoSesion === 1) {
                    userObj.competicionesSuperadas = (userObj.competicionesSuperadas || 0) + 1;
                    await UserPreferencesAPI.setPreference(nick, "profile", userObj);
                    // Aquí no hay array 'users' en la base de datos, así que omito esa parte por ahora
                    // Emitir evento para refrescar perfil y estadísticas
                    window.dispatchEvent(new Event('profileUpdate'));
                    window.dispatchEvent(new Event('storage'));
                }

                // Guardar datos CENTROS
                const keyCentros = `campeonato_centros_${temporadaKey}`;
                let tablaCentros: Record<string, any> = {};
                try { tablaCentros = (await ChampionshipAPI.getChampionshipData(nick, keyCentros) as any) || {}; } catch { tablaCentros = {}; }
                if (centro) {
                    if (!tablaCentros[centro]) tablaCentros[centro] = { ganados: 0, perdidos: 0, preguntasAcertadas: 0, preguntasFalladas: 0, likes: 0 };
                    tablaCentros[centro].ganados += ganado;
                    tablaCentros[centro].perdidos += perdido;
                    tablaCentros[centro].preguntasAcertadas += acertadas;
                    tablaCentros[centro].preguntasFalladas += falladas;
                    tablaCentros[centro].likes += likes;
                }
                await ChampionshipAPI.setChampionshipData(nick, keyCentros, tablaCentros);

                // Guardar datos DOCENTES
                const keyDocentes = `campeonato_docentes_${temporadaKey}`;
                let tablaDocentes: Record<string, any> = {};
                try { tablaDocentes = (await ChampionshipAPI.getChampionshipData(nick, keyDocentes) as any) || {}; } catch { tablaDocentes = {}; }
                if (userObj && userObj.tipo === "Docente") {
                    // Normalizar nick para evitar problemas de coincidencia
                    const nickDocente = (nick || "").toLowerCase().replace(/\s+/g, "");
                    if (!tablaDocentes[nickDocente]) tablaDocentes[nickDocente] = { ganados: 0, perdidos: 0, preguntasAcertadas: 0, preguntasFalladas: 0, likes: 0 };
                    tablaDocentes[nickDocente].ganados += ganado;
                    tablaDocentes[nickDocente].perdidos += perdido;
                    tablaDocentes[nickDocente].preguntasAcertadas += acertadas;
                    tablaDocentes[nickDocente].preguntasFalladas += falladas;
                    tablaDocentes[nickDocente].likes += likes;
                }
                await ChampionshipAPI.setChampionshipData(nick, keyDocentes, tablaDocentes);
                // Guardar también en el perfil del usuario
                const userObjFinal = (await UserPreferencesAPI.getPreference(nick, "profile") as any) || {};
                userObjFinal.ganados = (userObjFinal.ganados || 0) + ganado;
                userObjFinal.perdidos = (userObjFinal.perdidos || 0) + perdido;
                userObjFinal.respuestasAcertadas = (userObjFinal.respuestasAcertadas || 0) + acertadas;
                userObjFinal.preguntasFalladas = (userObjFinal.preguntasFalladas || 0) + falladas;
                // Sumar likes positivos y negativos
                userObjFinal.likes = (userObjFinal.likes || 0) + likes;
                await UserPreferencesAPI.setPreference(nick, "profile", userObjFinal);
                // Actualizar también el array 'users' - omitido por ahora ya que no hay API para eso
            }
            return;
        }
        setTimeLeft(300);
        setBloqueado(false);
        const restantes = preguntas.filter((p: any) => !preguntasUsadas.includes(p.pregunta));
        if (restantes.length === 0) {
            setPreguntaActual("");
            setRespuestaCorrecta("");
            setFeedback("¡No hay más preguntas disponibles en el banco!");
            setBloqueado(true);
            return;
        }
        const random = Math.floor(Math.random() * restantes.length);
        setPreguntaActual(restantes[random].pregunta);
        setRespuestaCorrecta(restantes[random].respuesta);
        setRespuestaUsuario("");
        setFeedback("");
        setPreguntasUsadas([...preguntasUsadas, restantes[random].pregunta]);
    }

    async function comprobarRespuesta() {
        // Normalizar para comparar respuestas
        function normalizar(str: string) {
            return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\s+/g, "").trim();
        }
        if (bloqueado) return;
        const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
        setBloqueado(true);
        let likesDelta = 0;
        if (esCorrecta) {
            setFeedback("¡Correcto! 🎉");
            likesDelta = timeLeft > 120 ? 2 : 1;
        } else {
            setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta}`);
            likesDelta = timeLeft > 120 ? -1 : -2;
        }
        if (typeof window !== "undefined") {
            const nick = sessionStorage.getItem("currentUserNick");
            if (nick) {
                const userObj = (await UserPreferencesAPI.getPreference(nick, "profile") as any) || {};
                userObj.likes = (userObj.likes || 0) + likesDelta;
                await UserPreferencesAPI.setPreference(nick, "profile", userObj);

                // Guardar respuesta en el historial de campeonato usando la API
                const respuestasData = (await ChampionshipAPI.getChampionshipData(nick, 'respuestas_campeonato') as any) || [];
                const respuestasArr = respuestasData || [];
                respuestasArr.push({
                    pregunta: preguntaActual,
                    respuestaUsuario,
                    respuestaCorrecta,
                    correcta: esCorrecta,
                    tiempo: timeLeft,
                    likes: likesDelta
                });
                await ChampionshipAPI.setChampionshipData(nick, 'respuestas_campeonato', respuestasArr);
            }
        }
    }

    return (
        <div className="p-4 bg-yellow-100 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Modo Campeonato</h2>
            <p>Curso seleccionado: {userGrade}º Primaria</p>
            <p>Centro escolar: {userSchool || "No especificado"}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={generarPregunta}>
                Generar pregunta de campeonato
            </button>
            {preguntaActual && (
                <div className="mt-4">
                    <div className="font-semibold mb-2">{preguntaActual}</div>
                    <div className="font-bold text-lg mb-2">⏰ Tiempo: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} min</div>
                    <input
                        type="text"
                        className="border rounded px-2 py-1 w-full mb-2"
                        value={respuestaUsuario}
                        onChange={e => setRespuestaUsuario(e.target.value)}
                        placeholder="Escribe tu respuesta aquí"
                        disabled={bloqueado}
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={comprobarRespuesta} disabled={bloqueado}>
                        Enviar respuesta
                    </button>
                    {feedback && <div className="mt-2 font-bold">{feedback}</div>}
                </div>
            )}
            {feedback && !preguntaActual && <div className="mt-2 font-bold text-red-600">{feedback}</div>}
        </div>
    );
};

export default ChampionshipQuiz;
