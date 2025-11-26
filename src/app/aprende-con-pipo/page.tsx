"use client";
// Tabla individual de docentes por temporada
import React from "react";
import ChampionshipQuiz from "../../components/ChampionshipQuiz";
import TournamentQuiz from "../../components/TournamentQuiz";
import { ChampionshipAPI } from "../../utils/championship";
import { UsersAPI } from "../../utils/users";

async function getTablaDocentes(temporada: number) {
    if (typeof window === "undefined") return {};
    const responseCampeonato = await fetch(`/api/campeonatos?temporada=t${temporada}&tipo=individual`);
    const tabla = await responseCampeonato.json();
    const responseUsers = await fetch('/api/users');
    const usersArr = await responseUsers.json();
    const docentes = usersArr.filter((u: any) => u.tipo === "docente");
    const resultado: Record<string, number> = {};
    docentes.forEach((doc: any) => {
        if (tabla[doc.nick]) {
            resultado[doc.nick] = tabla[doc.nick];
        }
    });
    // Ordenar y limitar a los 25 mejores
    const ordenados = Object.entries(resultado)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .slice(0, 25);
    return Object.fromEntries(ordenados);
}

export default function AprendeConPipo() {
    // Estado para mostrar modo competición
    const [modoCompeticion, setModoCompeticion] = React.useState(false);
    const [torneoIniciado, setTorneoIniciado] = React.useState(false);
    const [modoTorneoManual, setModoTorneoManual] = React.useState(false);
    const [isPremium, setIsPremium] = React.useState(false);
    // Estado para modo torneo premium
    const [modoTorneo, setModoTorneo] = React.useState(false);
    const [torneoActivo, setTorneoActivo] = React.useState<any>(null);
    // Estado para curso seleccionado en ChampionshipQuiz
    const [cursoCompeticion, setCursoCompeticion] = React.useState(1);
    // Estado para centro escolar (puedes adaptar según tu lógica de usuario)
    const [centroCompeticion, setCentroCompeticion] = React.useState("");
    // Ejemplo de cursos y asignaturas
    const cursos = ["1º Primaria", "2º Primaria", "3º Primaria", "4º Primaria", "5º Primaria", "6º Primaria"];
    const asignaturas = ["Naturaleza", "Matemáticas", "Lenguaje", "Literatura", "Inglés", "Geografía", "Historia", "General", "Campeonato"];

    // Lógica de temporada
    function getCurrentSeason() {
        const now = new Date();
        const year = now.getFullYear();
        // Temporada inicia el 1 de octubre y termina el 30 de septiembre del siguiente año
        if (now.getMonth() + 1 < 10) {
            // Antes de octubre, temporada es del año anterior
            return year - 1;
        }
        return year;
    }
    // Obtener todas las temporadas guardadas
    async function getTemporadasDisponibles() {
        const response = await fetch('/api/campeonatos');
        const campeonatos = await response.json();
        const temporadasNumeros = campeonatos.map((c: any) => parseInt(c.temporada.replace('t', ''))).filter((n: any): n is number => !isNaN(n));
        const temporadasSet = new Set<number>(temporadasNumeros);
        const temporadas: number[] = Array.from(temporadasSet);
        // Siempre mostrar la actual aunque no tenga datos
        const currentSeason = getCurrentSeason();
        if (!temporadas.includes(currentSeason)) {
            temporadas.push(currentSeason);
        }
        return temporadas.sort((a, b) => b - a); // Descendente
    }

    // Estado para temporada seleccionada
    const [temporadaSeleccionada, setTemporadaSeleccionada] = React.useState<number>(getCurrentSeason());

    // Actualizar temporada seleccionada desde el desplegable
    function handleTemporadaChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setTemporadaSeleccionada(Number(e.target.value));
    }

    // Likes individuales por temporada
    async function getLikesIndividual(nick: string, temporada: number): Promise<number> {
        if (typeof window === "undefined") return 0;
        const response = await fetch(`/api/campeonatos?temporada=t${temporada}&tipo=individual&nick=${nick}`);
        const data = await response.json();
        return data.length > 0 ? data[0].likes || 0 : 0;
    }

    async function getLikesCentro(centro: string, temporada: number): Promise<number> {
        if (typeof window === "undefined") return 0;
        const response = await fetch(`/api/campeonatos?temporada=t${temporada}&tipo=centros`);
        const data = await response.json();
        const centroData = data.find((c: any) => c.nick === centro);
        return centroData ? centroData.likes || 0 : 0;
    }

    async function sumarLikes(nick: string, centro: string, cantidad: number): Promise<void> {
        if (typeof window === "undefined") return;
        const temporada = `t${getCurrentSeason()}`;
        // Actualizar likes individuales
        await fetch('/api/campeonatos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ temporada, tipo: 'individual', nick, likes: cantidad })
        });
        // Actualizar likes de centro
        await fetch('/api/campeonatos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ temporada, tipo: 'centros', nick: centro, likes: cantidad })
        });
    }

    async function sumarLikesPerfil(nick: string, cantidad: number): Promise<void> {
        if (typeof window === "undefined") return;
        // Actualizar likes del usuario
        const response = await fetch(`/api/users/${nick}`);
        const user = await response.json();
        const newLikes = (parseFloat(user.likes) || 0) + cantidad;
        await fetch(`/api/users/${nick}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ likes: newLikes })
        });
        // Actualizar también el objeto user en sessionStorage
        const userStr = sessionStorage.getItem("user");
        if (userStr) {
            const userObj = JSON.parse(userStr);
            if (userObj.nick === nick) {
                userObj.likes = newLikes;
                sessionStorage.setItem("user", JSON.stringify(userObj));
            }
        }
    }

    function getTablaIndividual(temporada: number) {
        if (typeof window === "undefined") return {};
        const key = `campeonato_individual_t${temporada}`;
        return JSON.parse(localStorage.getItem(key) || '{}');
    }
    function getTablaCentro(temporada: number) {
        if (typeof window === "undefined") return {};
        const key = `campeonato_centro_t${temporada}`;
        return JSON.parse(localStorage.getItem(key) || '{}');
    }

    // Estado para selección de curso y asignatura - SISTEMA ANTI-TRAMPA
    const [usuarioActual, setUsuarioActual] = React.useState<any>(null);
    const [cursoUsuario, setCursoUsuario] = React.useState<string>("1º Primaria");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = React.useState<string>("Matemáticas");
    const [preguntaActual, setPreguntaActual] = React.useState<string>("");
    const [objetoPreguntaActual, setObjetoPreguntaActual] = React.useState<any>(null);
    const [respuestaCorrecta, setRespuestaCorrecta] = React.useState<string>("");
    const [respuestaUsuario, setRespuestaUsuario] = React.useState<string>("");
    const [feedback, setFeedback] = React.useState<string>("");
    // Estado para el temporizador: 5 minutos (300 segundos)
    const [timeLeft, setTimeLeft] = React.useState<number>(300); // 5 minutos por pregunta
    const [bloqueado, setBloqueado] = React.useState<boolean>(false);

    // Función para manejar la finalización del torneo premium

    // ✅ SISTEMA ANTI-TRAMPA: Cargar usuario automáticamente al iniciar
    React.useEffect(() => {
        if (typeof window === "undefined") return;

        const userStr = sessionStorage.getItem("user") || sessionStorage.getItem("user");
        if (userStr) {
            try {
                const userObj = JSON.parse(userStr);
                setUsuarioActual(userObj);

                // Verificar si es premium
                if (userObj.premium && userObj.premiumExpiracion && new Date(userObj.premiumExpiracion) > new Date()) {
                    setIsPremium(true);
                }

                // ✅ SISTEMA DOCENTES: Detectar curso del usuario automáticamente
                let cursoDetectado = "1º Primaria";

                // Si es docente, usar 6º curso por defecto (preguntas más difíciles)
                const esDocente = userObj.esProfesor || userObj.tipo === "docente" || userObj.tipo === "Docente";

                if (esDocente) {
                    cursoDetectado = "6º Primaria";
                } else if (userObj.curso) {
                    // Para estudiantes, usar su curso real
                    if (typeof userObj.curso === "string") {
                        const match = userObj.curso.match(/(\d)/);
                        if (match) {
                            const numero = parseInt(match[1]);
                            cursoDetectado = `${numero}º Primaria`;
                        }
                    } else if (typeof userObj.curso === "number") {
                        cursoDetectado = `${userObj.curso}º Primaria`;
                    }
                }
                setCursoUsuario(cursoDetectado);

                // Verificar si hay un torneo premium activo
                const torneoActivoStr = sessionStorage.getItem('torneo_activo_premium');
                if (torneoActivoStr) {
                    const torneoData = JSON.parse(torneoActivoStr);
                    setTorneoActivo(torneoData);
                    setModoTorneo(true);
                }

                // Verificar si viene del torneo desde URL
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('modo') === 'torneo') {
                    setModoTorneo(true);
                }

            } catch (error) {
                console.error("Error cargando datos del usuario:", error);
            }
        }
    }, []);

    // Función para manejar la finalización del torneo premium

    // Temporizador para modo clásico
    React.useEffect(() => {
        if (!preguntaActual || bloqueado) return;
        if (timeLeft === 0) {
            setBloqueado(true);
            setFeedback("⏰ Tiempo agotado. No puedes responder esta pregunta. -2 likes");
            if (typeof window !== "undefined") {
                const userStr = sessionStorage.getItem("user");
                if (userStr) {
                    const userObj = JSON.parse(userStr);
                    sumarLikesPerfil(userObj.nick, -2);
                }
            }
            return;
        }
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft, preguntaActual, bloqueado]);

    // Cargar preguntas de todos los archivos según curso automático y materia
    const preguntas = React.useMemo(() => {
        let cursoNum = 1;
        if (cursoUsuario) {
            const match = cursoUsuario.match(/(\d+)/);
            if (match) cursoNum = Number(match[1]);
        }
        const materias = [
            "matematicas", "lenguaje", "literatura", "historia", "geografia", "naturaleza", "ingles", "general", "campeonato"
        ];
        let todas: any[] = [];
        for (const materia of materias) {
            try {
                // @ts-ignore
                const preguntasMateria = require(`../../questions/${materia}-${cursoNum}primaria.json`);
                todas = todas.concat(preguntasMateria);
            } catch {
                // Si no existe el archivo, lo ignora
            }
        }
        return todas;
    }, [cursoUsuario]);

    // Filtrar preguntas por asignatura
    const preguntasFiltradas = React.useMemo(() => {
        if (asignaturaSeleccionada === "General") return preguntas;
        // Filtrar solo preguntas con categoria igual a la asignatura seleccionada
        const filtradas = preguntas.filter((p: any) => p.categoria === asignaturaSeleccionada);
        return filtradas;
    }, [preguntas, asignaturaSeleccionada]);

    // Estado para preguntas ya usadas en la sesión
    const [preguntasUsadas, setPreguntasUsadas] = React.useState<string[]>([]);

    // Función para manejar la finalización del torneo premium

    function generarPregunta() {
        if (preguntasFiltradas.length === 0) {
            setPreguntaActual("");
            setObjetoPreguntaActual(null);
            setRespuestaCorrecta("");
            setFeedback("No hay preguntas para esta asignatura.");
            setBloqueado(false);
            setTimeLeft(300);
            setPreguntasUsadas([]);
            return;
        }
        // Filtrar preguntas no usadas
        const restantes = preguntasFiltradas.filter((p: any) => !preguntasUsadas.includes(p.pregunta));
        if (restantes.length === 0) {
            setPreguntaActual("");
            setObjetoPreguntaActual(null);
            setRespuestaCorrecta("");
            setFeedback("¡Has respondido todas las preguntas disponibles!");
            setBloqueado(true);
            setTimeLeft(300);
            setPreguntasUsadas([]);
            return;
        }
        const random = Math.floor(Math.random() * restantes.length);
        const preguntaSeleccionada = restantes[random];
        setPreguntaActual(preguntaSeleccionada.pregunta);
        setObjetoPreguntaActual(preguntaSeleccionada);  // Guardar objeto completo
        setRespuestaCorrecta(preguntaSeleccionada.respuesta);
        setRespuestaUsuario("");
        setFeedback("");
        setBloqueado(false);
        setTimeLeft(300);
        setPreguntasUsadas([...preguntasUsadas, preguntaSeleccionada.pregunta]);
    }

    // Función para comprobar respuesta
    function comprobarRespuesta() {
        if (bloqueado) return;
        let likesDelta = 0;

        // ✅ SISTEMA DOCENTES: Detectar si es docente para ajustar puntuación
        const esDocente = usuarioActual?.esProfesor || usuarioActual?.tipo === "docente" || usuarioActual?.tipo === "Docente";
        const multiplicadorDocente = esDocente ? 0.5 : 1; // Los docentes reciben la mitad de puntos

        function normalizar(str: string) {
            return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\s+/g, "").trim();
        }
        const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
        setBloqueado(true);
        if (esCorrecta) {
            if (timeLeft > 120) {
                const puntosBase = 1 * multiplicadorDocente;
                setFeedback(`¡Correcto! 🎉 +${puntosBase} like${puntosBase !== 1 ? 's' : ''}${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = puntosBase;
            } else {
                const puntosBase = 0.5 * multiplicadorDocente;
                setFeedback(`¡Correcto! 🎉 +${puntosBase} likes${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = puntosBase;
            }
            // Guardar respuestas acertadas en la base de datos
            if (typeof window !== "undefined" && usuarioActual) {
                (async () => {
                    try {
                        // Actualizar preguntasAcertadas del usuario
                        const updatedUser = {
                            ...usuarioActual,
                            preguntasAcertadas: (usuarioActual.preguntasAcertadas || 0) + 1
                        };
                        await UsersAPI.updateUser(updatedUser);

                        // Actualizar sessionStorage
                        sessionStorage.setItem("user", JSON.stringify(updatedUser));

                        // ✅ NUEVO: Guardar respuestas acertadas por asignatura específica
                        if (objetoPreguntaActual && objetoPreguntaActual.categoria) {
                            const asignaturaNormalizada = objetoPreguntaActual.categoria.toLowerCase();

                            // Mapear categorías a nombres de asignatura consistentes
                            const mapaAsignaturas: { [key: string]: string } = {
                                'matemáticas': 'matematicas',
                                'historia': 'historia',
                                'geografía': 'geografia',
                                'literatura': 'literatura',
                                'inglés': 'ingles',
                                'naturaleza': 'naturaleza',
                                'lenguaje': 'lenguaje',
                                'general': 'general'
                            };
                            const asignaturaFinal = mapaAsignaturas[asignaturaNormalizada] || asignaturaNormalizada;

                            // Cargar datos actuales de asignaturas
                            const asignaturasData = await ChampionshipAPI.getChampionshipData(usuarioActual.nick, 'asignaturas') as Record<string, number>;
                            const currentCount = asignaturasData[asignaturaFinal] || 0;
                            asignaturasData[asignaturaFinal] = currentCount + 1;

                            // Guardar datos actualizados
                            await ChampionshipAPI.setChampionshipData(usuarioActual.nick, 'asignaturas', asignaturasData);
                        }
                    } catch (error) {
                        console.error('Error saving user stats:', error);
                    }
                })();
            }
        } else {
            if (timeLeft > 120) {
                const penalizacionBase = -0.5 * multiplicadorDocente;
                setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta} ${penalizacionBase} likes${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = penalizacionBase;
            } else {
                const penalizacionBase = -1 * multiplicadorDocente;
                setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta} ${penalizacionBase} like${Math.abs(penalizacionBase) !== 1 ? 's' : ''}${esDocente ? ' (Docente: 50% puntos)' : ''}`);
                likesDelta = penalizacionBase;
            }
            // Guardar preguntas falladas en users
            if (typeof window !== "undefined") {
                const userStr = sessionStorage.getItem("user");
                const usersStr = sessionStorage.getItem("users");
                if (userStr && usersStr) {
                    const userObj = JSON.parse(userStr);
                    const usersArr = JSON.parse(usersStr);
                    const idx = usersArr.findIndex((u: any) => u.nick === userObj.nick);
                    if (idx !== -1) {
                        usersArr[idx].preguntasFalladas = (usersArr[idx].preguntasFalladas || 0) + 1;
                        sessionStorage.setItem("users", JSON.stringify(usersArr));
                    }
                }
            }
        }
        if (typeof window !== "undefined") {
            const userStr = sessionStorage.getItem("user");
            if (userStr) {
                const userObj = JSON.parse(userStr);
                sumarLikesPerfil(userObj.nick, likesDelta);
            }
        }
    }

    // Función para manejar la finalización del torneo premium
    function handleTournamentComplete(aciertos: number, puntuacionTotal: number) {
        if (torneoActivo && usuarioActual) {
            // Actualizar estadísticas del usuario en torneos premium
            (async () => {
                try {
                    const userStats = await ChampionshipAPI.getChampionshipData(usuarioActual.nick, 'competiciones_premium') as { victorias: number; participaciones: number; puntuacionTotal: number };
                    const currentStats = userStats || { victorias: 0, participaciones: 0, puntuacionTotal: 0 };
                    currentStats.participaciones += 1;
                    currentStats.puntuacionTotal += puntuacionTotal;

                    // Guardar estadísticas actualizadas
                    await ChampionshipAPI.setChampionshipData(usuarioActual.nick, 'competiciones_premium', currentStats);
                } catch (error) {
                    console.error('Error saving tournament stats:', error);
                }
            })();

            // Reset tournament state
            setTorneoIniciado(false);
            setModoTorneo(false);
            setTorneoActivo(null);
        }
    }

    // Renderizado principal del componente
    return (
        <div className="min-h-screen bg-green-100 p-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">Aprende con Pipo</h1>
            <div className="flex items-stretch mx-auto" style={{ transform: 'translateX(-80px)' }}>
                <img src="/trofeo16.jpg" alt="Trofeo 16" className="h-40 object-contain mr-4" />
                <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-6 mx-auto">
                    {!modoCompeticion ? (
                        <>
                            {/* ✅ SISTEMA ANTI-TRAMPA: Información del usuario detectada automáticamente */}
                            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-2 border-blue-200 mb-4">
                                <h3 className="text-lg font-bold text-blue-800 mb-2">🛡️ Sistema Anti-Trampa Activo</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="font-semibold text-blue-700">👤 Usuario:</span>
                                        <span className="ml-2 text-gray-800">{usuarioActual?.nick || "No detectado"}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-blue-700">🎓 Curso detectado:</span>
                                        <span className="ml-2 text-gray-800 font-semibold">{cursoUsuario}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-blue-700">🏫 Centro:</span>
                                        <span className="ml-2 text-gray-800">{usuarioActual?.centro || "No asignado"}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-blue-700">👥 Tipo:</span>
                                        <span className="ml-2 text-gray-800">
                                            {(usuarioActual?.esProfesor || usuarioActual?.tipo === "docente" || usuarioActual?.tipo === "Docente") ? "Docente" : "Estudiante"}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                                    <p className="text-xs text-yellow-800">
                                        🔒 <strong>Solo podrás responder preguntas de tu nivel</strong> para garantizar puntuaciones justas.
                                    </p>
                                    {(usuarioActual?.esProfesor || usuarioActual?.tipo === "docente" || usuarioActual?.tipo === "Docente") && (
                                        <p className="text-xs text-orange-800 mt-2">
                                            👩‍🏫 <strong>Modo Docente:</strong> Preguntas de 6º curso y puntuación reducida al 50% para equilibrar la dificultad.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                                <label className="font-semibold">Asignatura:</label>
                                <select className="border rounded px-2 py-1" value={asignaturaSeleccionada} onChange={e => setAsignaturaSeleccionada(e.target.value)}>
                                    {asignaturas.map(a => <option key={a} value={a}>{a}</option>)}
                                </select>
                                <div className="text-sm text-gray-600">
                                    (Curso fijo: <strong>{cursoUsuario}</strong>)
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={generarPregunta}>
                                Generar pregunta
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 self-center" onClick={() => {
                                // Obtener curso y centro escolar del usuario desde localStorage
                                let cursoUsuario = 1;
                                let centroUsuario = "";
                                if (typeof window !== "undefined") {
                                    const userStr = sessionStorage.getItem("user");
                                    if (userStr) {
                                        const userObj = JSON.parse(userStr);
                                        // El curso puede estar como número (1-6) o como texto ("6º", "5º", ...)
                                        let cursoNum = 1;
                                        if (userObj.curso) {
                                            if (typeof userObj.curso === "string") {
                                                const match = userObj.curso.match(/(\d)/);
                                                if (match) cursoNum = Number(match[1]);
                                            } else if (typeof userObj.curso === "number") {
                                                cursoNum = userObj.curso;
                                            }
                                        }
                                        if (!isNaN(cursoNum) && cursoNum >= 1 && cursoNum <= 6) {
                                            cursoUsuario = cursoNum;
                                        }
                                        // Centro escolar
                                        if (userObj.centro) {
                                            centroUsuario = userObj.centro;
                                        }
                                    }
                                }
                                setModoCompeticion(true);
                                setCursoCompeticion(cursoUsuario);
                                setCentroCompeticion(centroUsuario);
                            }}>
                                Modo competición
                            </button>
                            {
                                isPremium && (
                                    <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4 self-center" onClick={() => {
                                        setModoTorneoManual(true);
                                    }}>
                                        Modo torneo
                                    </button>
                                )
                            }
                            {
                                preguntaActual && (
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
                                            Comprobar respuesta
                                        </button>
                                        {feedback && <div className="mt-2 font-bold">{feedback}</div>}
                                    </div>
                                )
                            }
                            {feedback && !preguntaActual && <div className="mt-2 font-bold text-red-600">{feedback}</div>}
                        </>
                    ) : (
                        <div className="mt-4">
                            <ChampionshipQuiz userGrade={cursoCompeticion} userSchool={centroCompeticion} />
                            <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4" onClick={() => setModoCompeticion(false)}>
                                Salir de competición
                            </button>
                        </div>
                    )
                    }
                </div >
                <img src="/logo-pipo.jpg" alt="Logo Pipo" className="h-40 object-contain ml-4" />
            </div >

            {/* Tabla Docentes */}
            < div className="mt-8" >
                <h2 className="text-xl font-bold mb-2">Ranking Docentes</h2>
                <table className="w-full border mb-4" style={{ backgroundColor: '#fffbe6' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#fff9c4' }}>
                            <th className="p-2">Docente</th>
                            <th className="p-2">Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(getTablaDocentes(temporadaSeleccionada)).map(([nick, likes]) => (
                            <tr key={nick}>
                                <td className="border p-2">{nick}</td>
                                <td className="border p-2">{likes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div >
    );
}

