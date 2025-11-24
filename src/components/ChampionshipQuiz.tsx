import React from "react";

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
            // Aquí podrías actualizar los likes en localStorage si lo deseas
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

    function generarPregunta() {
        if (preguntasUsadas.length >= 25) {
            setPreguntaActual("");
            setRespuestaCorrecta("");
            setFeedback("¡Has completado las 25 preguntas del campeonato!");
            setBloqueado(true);

            // Calcular estadísticas de la sesión
            const userStr = typeof window !== "undefined" ? localStorage.getItem("user") : null;
            let nick = "";
            let centro = "";
            let curso = "";
            if (userStr) {
                const userObj = JSON.parse(userStr);
                nick = userObj.nick;
                centro = userObj.centro;
                curso = userObj.curso;
            }
            // (Ya declaradas arriba)

            // Recuperar respuestas y likes
            const respuestasStr = localStorage.getItem(`respuestas_campeonato_${nick}`);
            let respuestasArr = respuestasStr ? JSON.parse(respuestasStr) : [];
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

            // Sumar acumulado de la temporada
            const keyIndividual = `campeonato_individual_${temporadaKey}`;
            let tablaIndividual: Record<string, any> = {};
            try { tablaIndividual = JSON.parse(localStorage.getItem(keyIndividual) || '{}'); } catch { tablaIndividual = {}; }
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

            // (Ya declaradas arriba)

            // Guardar datos según tipo de usuario
            if (userStr) {
                const userObj = JSON.parse(userStr);
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
                localStorage.setItem(keyIndividual, JSON.stringify(tablaIndividual));
                // Si ha superado la competición, sumar competicionesSuperadas para cualquier tipo de usuario
                if (ganadoSesion === 1) {
                    userObj.competicionesSuperadas = (userObj.competicionesSuperadas || 0) + 1;
                    localStorage.setItem("user", JSON.stringify(userObj));
                    let usersArr = [];
                    try { usersArr = JSON.parse(localStorage.getItem("users") || "[]"); } catch { usersArr = []; }
                    const nickActual = (userObj.nick || "").toLowerCase().replace(/\s+/g, "");
                    let actualizado = false;
                    usersArr = usersArr.map((u: any) => {
                        const nickU = (u.nick || "").toLowerCase().replace(/\s+/g, "");
                        if (nickU === nickActual) {
                            actualizado = true;
                            return { ...u, ...userObj };
                        }
                        return u;
                    });
                    if (!actualizado) usersArr.push(userObj);
                    localStorage.setItem("users", JSON.stringify(usersArr));
                    // Emitir evento para refrescar perfil y estadísticas
                    window.dispatchEvent(new Event('profileUpdate'));
                    window.dispatchEvent(new Event('storage'));
                }
            }

            // Guardar datos CENTROS
            const keyCentros = `campeonato_centros_${temporadaKey}`;
            let tablaCentros: Record<string, any> = {};
            try { tablaCentros = JSON.parse(localStorage.getItem(keyCentros) || '{}'); } catch { tablaCentros = {}; }
            if (centro) {
                if (!tablaCentros[centro]) tablaCentros[centro] = { ganados: 0, perdidos: 0, preguntasAcertadas: 0, preguntasFalladas: 0, likes: 0 };
                tablaCentros[centro].ganados += ganado;
                tablaCentros[centro].perdidos += perdido;
                tablaCentros[centro].preguntasAcertadas += acertadas;
                tablaCentros[centro].preguntasFalladas += falladas;
                tablaCentros[centro].likes += likes;
            }
            localStorage.setItem(keyCentros, JSON.stringify(tablaCentros));

            // Guardar datos DOCENTES
            const keyDocentes = `campeonato_docentes_${temporadaKey}`;
            let tablaDocentes: Record<string, any> = {};
            try { tablaDocentes = JSON.parse(localStorage.getItem(keyDocentes) || '{}'); } catch { tablaDocentes = {}; }
            if (userStr) {
                const userObj = JSON.parse(userStr);
                if (userObj.tipo === "Docente") {
                    // Normalizar nick para evitar problemas de coincidencia
                    const nickDocente = (userObj.nick || "").toLowerCase().replace(/\s+/g, "");
                    if (!tablaDocentes[nickDocente]) tablaDocentes[nickDocente] = { ganados: 0, perdidos: 0, preguntasAcertadas: 0, preguntasFalladas: 0, likes: 0 };
                    tablaDocentes[nickDocente].ganados += ganado;
                    tablaDocentes[nickDocente].perdidos += perdido;
                    tablaDocentes[nickDocente].preguntasAcertadas += acertadas;
                    tablaDocentes[nickDocente].preguntasFalladas += falladas;
                    tablaDocentes[nickDocente].likes += likes;
                }
            }
            localStorage.setItem(keyDocentes, JSON.stringify(tablaDocentes));
            // Guardar también en el perfil del usuario
            if (userStr) {
                const userObj = JSON.parse(userStr);
                userObj.ganados = (userObj.ganados || 0) + ganado;
                userObj.perdidos = (userObj.perdidos || 0) + perdido;
                userObj.respuestasAcertadas = (userObj.respuestasAcertadas || 0) + acertadas;
                userObj.preguntasFalladas = (userObj.preguntasFalladas || 0) + falladas;
                // Sumar likes positivos y negativos
                userObj.likes = (userObj.likes || 0) + likes;
                localStorage.setItem("user", JSON.stringify(userObj));
                // Actualizar también el array 'users' para que el perfil esté sincronizado
                let usersArr = [];
                try { usersArr = JSON.parse(localStorage.getItem("users") || "[]"); } catch { usersArr = []; }
                // Buscar por nick normalizado
                const nickActual = (userObj.nick || "").toLowerCase().replace(/\s+/g, "");
                let actualizado = false;
                usersArr = usersArr.map((u: any) => {
                    const nickU = (u.nick || "").toLowerCase().replace(/\s+/g, "");
                    if (nickU === nickActual) {
                        actualizado = true;
                        return { ...u, ...userObj };
                    }
                    return u;
                });
                // Si no estaba, lo añadimos
                if (!actualizado) usersArr.push(userObj);
                localStorage.setItem("users", JSON.stringify(usersArr));
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

    function comprobarRespuesta() {
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
            const userStr = localStorage.getItem("user");
            if (userStr) {
                const userObj = JSON.parse(userStr);
                userObj.likes = (userObj.likes || 0) + likesDelta;
                localStorage.setItem("user", JSON.stringify(userObj));

                // Guardar respuesta en el historial de campeonato
                const respuestasKey = `respuestas_campeonato_${userObj.nick}`;
                let respuestasArr = [];
                try { respuestasArr = JSON.parse(localStorage.getItem(respuestasKey) || '[]'); } catch { respuestasArr = []; }
                respuestasArr.push({
                    pregunta: preguntaActual,
                    respuestaUsuario,
                    respuestaCorrecta,
                    correcta: esCorrecta,
                    tiempo: timeLeft,
                    likes: likesDelta
                });
                localStorage.setItem(respuestasKey, JSON.stringify(respuestasArr));
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
