(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/normalizadores.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utilidades para normalizar datos que provienen de localStorage o de la API
// Objetivo: evitar renderizar objetos directamente en JSX y mantener consistencia
__turbopack_context__.s([
    "normalizarEventoEspecial",
    ()=>normalizarEventoEspecial,
    "normalizarValorPremio",
    ()=>normalizarValorPremio
]);
const normalizarValorPremio = (valor)=>{
    if (valor == null) return "";
    if (typeof valor === 'string') return valor;
    if (typeof valor === 'number') return String(valor);
    if (typeof valor === 'object') {
        // Preferimos campos legibles: nombre > titulo > descripcion
        // Si no hay ninguno, guardamos JSON como fallback.
        return valor.nombre || valor.titulo || valor.descripcion || JSON.stringify(valor);
    }
    // Guardar algo sensato para otros tipos
    return String(valor);
};
const normalizarEventoEspecial = (evento)=>{
    if (!evento) return null;
    if (typeof evento === 'string') {
        return {
            nombre: evento,
            descripcion: evento,
            emoji: '',
            tipo: ''
        };
    }
    if (typeof evento === 'object') {
        return {
            nombre: evento.nombre || evento.tipo || '',
            descripcion: evento.descripcion || evento.bonus || '',
            emoji: evento.emoji || '',
            tipo: evento.tipo || '',
            multiplicador: evento.multiplicador || null
        };
    }
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/centros-competencia/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CentrosCompetencia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$normalizadores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/normalizadores.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CentrosCompetencia() {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [centros, setCentros] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [centrosAnuales, setCentrosAnuales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [miCentro, setMiCentro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filtroMes, setFiltroMes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("actual");
    const [modoVisualizacion, setModoVisualizacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("actual");
    const [mesSeleccionado, setMesSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const fechaActual = new Date();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [mesesDisponibles, setMesesDisponibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historialGanadores, setHistorialGanadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [premiosDelMes, setPremiosDelMes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usuario, setUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ MODO VACACIONES: Estados para funcionalidades especiales
    const [modoVacaciones, setModoVacaciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tipoVacacion, setTipoVacacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [eventoEspecial, setEventoEspecial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ COMPETENCIAS POR ASIGNATURA: Estados para filtros específicos
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todas");
    const [hayDatosAsignatura, setHayDatosAsignatura] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cursoSeleccionado, setCursoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const asignaturas = [
        "todas",
        "Matemáticas",
        "Lenguaje",
        "Literatura",
        "Historia",
        "Geografía",
        "Naturaleza",
        "Inglés",
        "General"
    ];
    const cursos = [
        "todos",
        "1º Primaria",
        "2º Primaria",
        "3º Primaria",
        "4º Primaria",
        "5º Primaria",
        "6º Primaria"
    ];
    // Nota: Los datos de asignaturas se almacenan cuando los usuarios responden preguntas
    // Formato: "{asignatura}_{nickname}" → puntos obtenidos
    // Ejemplo: "matematicas_PIPO68" → "45"
    // ✅ MODO VACACIONES: Funciones para detectar períodos especiales
    const detectarPeriodoVacaciones = ()=>{
        const ahora = new Date();
        const mes = ahora.getMonth() + 1; // 1-12
        const dia = ahora.getDate();
        const año = ahora.getFullYear();
        // Períodos de vacaciones escolares en España
        const vacaciones = [
            {
                inicio: {
                    mes: 6,
                    dia: 15
                },
                fin: {
                    mes: 9,
                    dia: 15
                },
                tipo: "Vacaciones de Verano",
                emoji: "🏖️",
                multiplicador: 1.5
            },
            {
                inicio: {
                    mes: 12,
                    dia: 20
                },
                fin: {
                    mes: 1,
                    dia: 7
                },
                tipo: "Vacaciones de Navidad",
                emoji: "🎄",
                multiplicador: 1.3
            },
            {
                inicio: {
                    mes: 3,
                    dia: 20
                },
                fin: {
                    mes: 4,
                    dia: 5
                },
                tipo: "Vacaciones de Semana Santa",
                emoji: "🐰",
                multiplicador: 1.2
            },
            {
                inicio: {
                    mes: 10,
                    dia: 31
                },
                fin: {
                    mes: 11,
                    dia: 2
                },
                tipo: "Puente de Halloween",
                emoji: "🎃",
                multiplicador: 1.1
            },
            {
                inicio: {
                    mes: 12,
                    dia: 6
                },
                fin: {
                    mes: 12,
                    dia: 8
                },
                tipo: "Puente de la Constitución",
                emoji: "🇪🇸",
                multiplicador: 1.1
            }
        ];
        for (const vacacion of vacaciones){
            let enPeriodo = false;
            if (vacacion.inicio.mes === vacacion.fin.mes) {
                // Mismo mes
                enPeriodo = mes === vacacion.inicio.mes && dia >= vacacion.inicio.dia && dia <= vacacion.fin.dia;
            } else if (vacacion.inicio.mes === 12 && vacacion.fin.mes === 1) {
                // Navidad (diciembre-enero)
                enPeriodo = mes === 12 && dia >= vacacion.inicio.dia || mes === 1 && dia <= vacacion.fin.dia;
            } else {
                // Diferentes meses
                enPeriodo = mes === vacacion.inicio.mes && dia >= vacacion.inicio.dia || mes === vacacion.fin.mes && dia <= vacacion.fin.dia || mes > vacacion.inicio.mes && mes < vacacion.fin.mes;
            }
            if (enPeriodo) {
                return {
                    esVacacion: true,
                    tipo: vacacion.tipo,
                    evento: {
                        emoji: vacacion.emoji,
                        multiplicador: vacacion.multiplicador,
                        descripcion: `Durante ${vacacion.tipo.toLowerCase()}, ¡los puntos se multiplican por ${vacacion.multiplicador}!`
                    }
                };
            }
        }
        return {
            esVacacion: false,
            tipo: "",
            evento: null
        };
    };
    // ✅ CHALLENGES ESPECIALES: Eventos temáticos por fecha
    const obtenerChallengeActual = ()=>{
        const ahora = new Date();
        const mes = ahora.getMonth() + 1;
        const dia = ahora.getDate();
        const challenges = [
            {
                mes: 2,
                dia: 14,
                nombre: "Challenge del Amor",
                emoji: "💝",
                bonus: "Historias modo 'Corazón' +3 puntos"
            },
            {
                mes: 4,
                dia: 23,
                nombre: "Día del Libro",
                emoji: "📚",
                bonus: "Crear cualquier historia +5 puntos extra"
            },
            {
                mes: 5,
                dia: 15,
                nombre: "Challenge de la Familia",
                emoji: "👨‍👩‍👧‍👦",
                bonus: "Historias modo 'My Live' +2 puntos"
            },
            {
                mes: 10,
                dia: 31,
                nombre: "Halloween Challenge",
                emoji: "🎃",
                bonus: "Historias modo 'Terror' +4 puntos"
            },
            {
                mes: 12,
                dia: 25,
                nombre: "Challenge Navideño",
                emoji: "🎅",
                bonus: "Historias modo 'My Live' +6 puntos"
            }
        ];
        return challenges.find((ch)=>ch.mes === mes && dia >= ch.dia - 3 && dia <= ch.dia + 3);
    };
    // Función para calcular si un usuario estuvo activo en los últimos N días
    const esUsuarioActivo = (usuario, dias = 7)=>{
        // Simulamos actividad basada en datos del usuario
        // Usuarios con datos recientes se consideran activos
        const tieneActividad = usuario.likes > 0 || usuario.historiasCreadas > 0 || usuario.concursosGanados > 0;
        const tieneAmigos = usuario.amigos && usuario.amigos.length > 0;
        const tieneInteracciones = usuario.comentariosRecibidos > 0;
        // Un usuario se considera activo si tiene cualquier tipo de actividad
        return tieneActividad || tieneAmigos || tieneInteracciones;
    };
    // Función para obtener actividad de competiciones (campeonato)
    const obtenerActividadCompeticiones = (centro)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            let puntosCompeticion = 0;
            // Buscar datos de campeonato individual por curso y temporada
            const cursos = [
                '1primaria',
                '2primaria',
                '3primaria',
                '4primaria',
                '5primaria',
                '6primaria'
            ];
            const temporadaActual = new Date().getFullYear();
            // Datos de estudiantes
            cursos.forEach((curso)=>{
                const key = `campeonato_individual_t${temporadaActual}`;
                const datos = localStorage.getItem(key);
                if (datos) {
                    try {
                        const campeonato = JSON.parse(datos);
                        // Sumar puntos de usuarios del centro
                        Object.keys(campeonato).forEach((nick)=>{
                            const userData = localStorage.getItem('users');
                            if (userData) {
                                const usuarios = JSON.parse(userData);
                                const usuario = usuarios.find((u)=>u.nick.toLowerCase().replace(/\s+/g, "") === nick);
                                if (usuario && usuario.centro === centro) {
                                    const datosUsuario = campeonato[nick];
                                    puntosCompeticion += (Number(datosUsuario.ganados) || 0) * 10;
                                    puntosCompeticion += (Number(datosUsuario.acertadas) || Number(datosUsuario.preguntasAcertadas) || 0) * 2;
                                }
                            }
                        });
                    } catch (e) {
                    // Silent fail: no console logs to keep output clean for real data presentation
                    }
                }
            });
            // Agregar datos de docentes
            const docentesKey = `campeonato_docentes_t${temporadaActual}`;
            const datosDocentes = localStorage.getItem(docentesKey);
            if (datosDocentes) {
                try {
                    const campeonatoDocentes = JSON.parse(datosDocentes);
                    Object.keys(campeonatoDocentes).forEach((nick)=>{
                        const userData = localStorage.getItem('users');
                        if (userData) {
                            const usuarios = JSON.parse(userData);
                            const usuario = usuarios.find((u)=>u.nick.toLowerCase().replace(/\s+/g, "") === nick);
                            if (usuario && usuario.centro === centro && usuario.tipo === "docente") {
                                const datosUsuario = campeonatoDocentes[nick];
                                // Los docentes obtienen más puntos por su liderazgo
                                puntosCompeticion += (Number(datosUsuario.ganados) || 0) * 15;
                                puntosCompeticion += (Number(datosUsuario.acertadas) || Number(datosUsuario.preguntasAcertadas) || 0) * 3;
                                puntosCompeticion += (Number(datosUsuario.likes) || 0) * 5; // Bonus por engagement
                            }
                        }
                    });
                } catch (e) {
                // Silent fail
                }
            }
            return puntosCompeticion;
        } catch (error) {
            return 0;
        }
    };
    // ✅ COMPETENCIAS POR ASIGNATURA: Función para obtener estadísticas específicas
    const obtenerEstadisticasAsignatura = (asignatura, usuarios, cursoFiltro)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const estadisticasCentros = {};
        if (asignatura === "todas") {
            return {};
        }
        // Solo buscar datos específicos reales por asignatura, no estimaciones
        usuarios.forEach((usuario)=>{
            if (!usuario.centro) return;
            // ✅ FILTRAR POR CURSO si se especifica
            if (cursoFiltro && cursoFiltro !== "todos" && usuario.curso !== cursoFiltro) {
                return;
            }
            const centro = usuario.centro;
            if (!estadisticasCentros[centro]) {
                estadisticasCentros[centro] = 0;
            }
            // Buscar datos específicos por asignatura en localStorage
            // Mapear de nombre display a nombre de localStorage
            const mapaAsignaturasInverso = {
                'Matemáticas': 'matematicas',
                'Historia': 'historia',
                'Geografía': 'geografia',
                'Literatura': 'literatura',
                'Inglés': 'ingles',
                'Naturaleza': 'naturaleza',
                'Lenguaje': 'lenguaje',
                'General': 'general'
            };
            const asignaturaParaLocalStorage = mapaAsignaturasInverso[asignatura] || asignatura.toLowerCase();
            const claveAsignatura = `${asignaturaParaLocalStorage}_${usuario.nick}`;
            const datosAsignatura = localStorage.getItem(claveAsignatura);
            if (datosAsignatura && parseInt(datosAsignatura, 10) > 0) {
                // Solo usar datos reales específicos de la asignatura
                estadisticasCentros[centro] += parseInt(datosAsignatura, 10);
            }
        });
        return estadisticasCentros;
    };
    // Función auxiliar - todas las asignaturas tienen la misma dificultad
    const obtenerFactorAsignatura = (asignatura)=>{
        // Todas las asignaturas tienen el mismo nivel de dificultad
        return 1.0; // 100% para todas
    }; // Función para calcular estadísticas de un centro
    const calcularStatsDelCentro = (nombreCentro, usuarios)=>{
        // Separar estudiantes y docentes del centro
        const estudiantesDelCentro = usuarios.filter((u)=>u.centro === nombreCentro && u.tipo !== "docente");
        const docentesDelCentro = usuarios.filter((u)=>u.centro === nombreCentro && u.tipo === "docente");
        const estudiantesActivos = estudiantesDelCentro.filter((u)=>esUsuarioActivo(u)).length;
        const docentesActivos = docentesDelCentro.filter((u)=>esUsuarioActivo(u)).length;
        let respuestasCorrectas, concursosGanados, historiasCreadas, interaccionesSociales;
        // ✅ APLICAR FILTRO POR ASIGNATURA SI ESTÁ SELECCIONADO
        if (asignaturaSeleccionada !== "todas") {
            // Obtener estadísticas específicas de la asignatura
            const statsAsignatura = obtenerEstadisticasAsignatura(asignaturaSeleccionada, usuarios, cursoSeleccionado);
            const puntosAsignatura = statsAsignatura[nombreCentro] || 0;
            // Para asignatura específica, usamos los puntos específicos obtenidos
            respuestasCorrectas = puntosAsignatura;
            // Si no hay datos específicos, usar datos generales como fallback
            if (puntosAsignatura === 0) {
                const respuestasGenerales = estudiantesDelCentro.reduce((sum, u)=>sum + (Number(u.respuestasAcertadas) || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (Number(u.respuestasAcertadas) || 0), 0);
                respuestasCorrectas = respuestasGenerales;
            }
            // Para otras métricas, usar los datos reales
            concursosGanados = estudiantesDelCentro.reduce((sum, u)=>sum + (Number(u.concursosGanados) || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (Number(u.concursosGanados) || 0), 0);
            historiasCreadas = estudiantesDelCentro.reduce((sum, u)=>sum + (Array.isArray(u.historias) ? u.historias.length : Number(u.historiasCreadas) || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (Array.isArray(u.historias) ? u.historias.length : Number(u.historiasCreadas) || 0), 0);
            interaccionesSociales = estudiantesDelCentro.reduce((sum, u)=>sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0);
        } else {
            // Estadísticas generales (todas las asignaturas)
            const respuestasCorrectasEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (Number(u.respuestasAcertadas) || 0), 0);
            const concursosGanadosEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (Number(u.concursosGanados) || 0), 0);
            const historiasCreadasEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (Array.isArray(u.historias) ? u.historias.length : Number(u.historiasCreadas) || 0), 0);
            const interaccionesSocialesEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0);
            // Estadísticas de docentes  
            const respuestasCorrectasDocentes = docentesDelCentro.reduce((sum, u)=>sum + (Number(u.respuestasAcertadas) || 0), 0);
            const concursosGanadosDocentes = docentesDelCentro.reduce((sum, u)=>sum + (Number(u.concursosGanados) || 0), 0);
            const historiasCreadasDocentes = docentesDelCentro.reduce((sum, u)=>sum + (Array.isArray(u.historias) ? u.historias.length : Number(u.historiasCreadas) || 0), 0);
            const interaccionesSocialesDocentes = docentesDelCentro.reduce((sum, u)=>sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0);
            // Totales combinados
            respuestasCorrectas = respuestasCorrectasEstudiantes + respuestasCorrectasDocentes;
            concursosGanados = concursosGanadosEstudiantes + concursosGanadosDocentes;
            historiasCreadas = historiasCreadasEstudiantes + historiasCreadasDocentes;
            interaccionesSociales = interaccionesSocialesEstudiantes + interaccionesSocialesDocentes;
        }
        // Obtener actividad de competiciones (datos reales de campeonatos)
        const puntosCompeticiones = obtenerActividadCompeticiones(nombreCentro);
        // ✅ PREMIOS: Obtener puntos extra por premios ganados
        const premioCentro = obtenerPremioDelCentro(nombreCentro);
        const puntosPremios = premioCentro ? Number(premioCentro.puntosExtra) || 0 : 0;
        // Calcular puntuación según el sistema propuesto (incluyendo docentes)
        const puntajeTotal = estudiantesActivos * 10 + docentesActivos * 20 + respuestasCorrectas * 5 + concursosGanados * 50 + historiasCreadas * 15 + interaccionesSociales * 2 + // Interacciones sociales 
        puntosCompeticiones + // Actividad en competiciones
        puntosPremios; // Bonus por premios ganados
        return {
            nombre: nombreCentro,
            estudiantes: estudiantesDelCentro.length + docentesDelCentro.length,
            estudiantesActivos: estudiantesActivos + docentesActivos,
            respuestasCorrectas,
            concursosGanados,
            historiasCreadas,
            interaccionesSociales,
            diasConsecutivos: 0,
            // Asegurar que puntajeTotal sea siempre number (evitar NaN por datos mal formateados)
            puntajeTotal: Number(puntajeTotal) || 0,
            ranking: 0,
            medalla: ""
        };
    };
    // Función para obtener el logo/escudo de un centro
    const obtenerLogoCentro = (nombreCentro)=>{
        // Validación: si nombreCentro es undefined, null o vacío, devolver logo por defecto
        if (!nombreCentro || typeof nombreCentro !== 'string') {
            return "logo-pipo.jpg";
        }
        // Mapeo de nombres de centros a archivos de imagen
        const logosDisponibles = {
            "Aguere": "Aguere.jpg",
            "Angeles Bermejo": "Angeles Bermejo.jpg",
            "Aregume": "Aregume.jpg",
            "Buen Consejo": "Buen Consejo.png",
            "Camino La Villa": "Camino La Villa.jpg",
            "Camino Largo": "Camino Largo.jpg",
            "Casa Azul": "Casa Azul.png",
            "Chamberi": "Chamberi.png",
            "Chayofa": "Chayofa.png",
            "Cisneros Alter": "Cisneros Alter.jpg",
            "Colegio Cervantes": "Colegio Cervantes.jpg",
            "Costa Adeje I": "Costa Adeje I..jpg",
            "Cuesta 25 de Julio": "Cuesta 25 de Julio.jpg",
            "Dominguez Alfonso": "Dominguez Alfonso.jpg",
            "Echeyde Arona": "Echeyde Arona.png",
            "Echeyde La Laguna": "Echeyde La Laguna.png",
            "El Monte": "El Monte.png",
            "Escuela Rural": "Escuela Rural.png",
            "Escuelas Pias": "Escuelas Pias.jpg",
            "Gobierno de Canarias": "Gobierno de Canarias (Educacion).jpg",
            "Hispano La Salud": "Hispano La Salud.png",
            "La Cuesta B.N": "La Cuesta B.N.jpg",
            "La Higuerita": "La Higuerita.jpg",
            "La Rosa": "La Rosa.png",
            "La Salle": "La Salle.png",
            "La Vega": "La Vega.jpg",
            "La Verdellada": "La Verdellada.jpg",
            "Los Alisios": "Los Alisios.jpg",
            "Los Menceyes": "Los Menceyes.jpg",
            "Luis Alvarez Cruz": "Luis Alvarez Cruz.jpg",
            "Luther King": "Luther King.jpg",
            "Mayex": "Mayex.jpg",
            "Montessori": "Montessori.png",
            "Nuryana": "Nuryana.jpg",
            "Punta Larga": "Punta Larga.jpg",
            "Pureza de Maria": "Pureza de Maria.png",
            "Ravelo": "Ravelo.jpg",
            "Rodriguez Alberto": "Rodriguez Alberto.jpg",
            "Rodriguez Campos": "Rodriguez Campos.png",
            "Saint Andrew's": "Saint Andrew,s.jpg",
            "Salesianas": "Salesianas.jpg",
            "San Agustin": "San Agustin.jpg",
            "San Fernando": "San Fernando.jpg",
            "San Isidro": "San Isidro.jpg",
            "San Pablo": "San Pablo.png",
            "Santa Catalina de Siena": "Santa Catalina de Siena.jpg",
            "Santa Cruz de California": "Santa Cruz de California.jpg",
            "Santa Maria del Mar": "Santa Maria del Mar.jpg",
            "Santa Rosa de Lima": "Santa Rosa de Lima.jpg",
            "Tacoronte": "Tacoronte.jpg",
            "Tagoror": "Tagoror.jpg",
            "Teofilo Perez": "Teofilo Perez.png",
            "Tincer": "Tincer.jpg",
            "Virgen de Fatima": "Virgen de Fatima.jpg",
            "Virgen del Mar": "Virgen del Mar.png"
        };
        // Buscar coincidencia exacta
        if (logosDisponibles[nombreCentro]) {
            return logosDisponibles[nombreCentro];
        }
        // Buscar coincidencia parcial (por si el nombre está ligeramente diferente)
        // Validación adicional antes de usar toLowerCase()
        if (typeof nombreCentro !== 'string' || !nombreCentro) {
            return "logo-pipo.jpg";
        }
        const nombreLimpio = nombreCentro.toLowerCase().trim();
        for (const [nombre, archivo] of Object.entries(logosDisponibles)){
            if (nombreLimpio.includes(nombre.toLowerCase()) || nombre.toLowerCase().includes(nombreLimpio)) {
                return archivo;
            }
        }
        // Si no encuentra imagen específica, usar logo por defecto
        return "logo-pipo.jpg"; // Fallback al logo de la aplicación
    };
    // Función auxiliar para verificar si es una imagen o emoji
    const esImagen = (logo)=>{
        return logo.includes('.jpg') || logo.includes('.png') || logo.includes('.jpeg');
    };
    // ✅ SISTEMA DE PREMIOS: Función para obtener premios del mes actual
    const obtenerPremiosDelMes = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();
        const mesActual = fechaActual.getMonth() + 1; // 1-12
        // Clave para premios del mes actual
        const clavePremiosActual = `premios_mensuales_${añoActual}_${mesActual.toString().padStart(2, '0')}`;
        // Calcular mes anterior
        let mesAnterior = mesActual - 1;
        let añoAnterior = añoActual;
        if (mesAnterior === 0) {
            mesAnterior = 12;
            añoAnterior = añoActual - 1;
        }
        const clavePremiosAnterior = `premios_mensuales_${añoAnterior}_${mesAnterior.toString().padStart(2, '0')}`;
        // Si es un nuevo mes y no hay premios para el mes anterior, generarlos
        if (!localStorage.getItem(clavePremiosAnterior)) {
            const premiosGenerados = generarPremiosAutomaticos(mesAnterior, añoAnterior);
            if (premiosGenerados.length > 0) {
                try {
                    localStorage.setItem(clavePremiosActual, JSON.stringify(premiosGenerados));
                } catch (e) {
                // Silent fail
                }
            }
        }
        // Devolver premios del mes actual (que serán los del mes anterior si acabamos de generarlos)
        const premiosGuardados = localStorage.getItem(clavePremiosActual);
        if (premiosGuardados) {
            try {
                const parsed = JSON.parse(premiosGuardados);
                // Normalizar premios (evitar que el campo `premio` sea un objeto)
                const normalized = parsed.map((p)=>{
                    const prem = p?.premio;
                    if (typeof prem === 'object' && prem !== null) {
                        const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$normalizadores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizarValorPremio"])(prem);
                        return {
                            ...p,
                            premio: fallback
                        };
                    }
                    return p;
                });
                const needsMigration = normalized.some((p, idx)=>typeof parsed[idx]?.premio === 'object' && parsed[idx]?.premio !== null);
                if (needsMigration && !localStorage.getItem(`${clavePremiosActual}_migrated_v1`)) {
                    try {
                        localStorage.setItem(clavePremiosActual, JSON.stringify(normalized));
                        localStorage.setItem(`${clavePremiosActual}_migrated_v1`, 'true');
                    } catch (e) {
                    // Silent fail
                    }
                }
                return normalized;
            } catch (error) {
            // Silent fail
            }
        }
        return [];
    };
    // ✅ SISTEMA DE PREMIOS: Función para generar premios automáticamente
    const generarPremiosAutomaticos = (mes, año)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Usar mes y año proporcionados, o el actual si no se especifican
        const fechaActual = new Date();
        const mesUsar = mes || fechaActual.getMonth() + 1;
        const añoUsar = año || fechaActual.getFullYear();
        // Obtener ranking del mes especificado
        const rankingMensual = cargarRankingMensual(añoUsar, mesUsar);
        if (rankingMensual.length === 0) return [];
        const premios = [
            {
                posicion: 1,
                emoji: "🥇",
                titulo: "1er lugar",
                premio: "Trofeo digital especial",
                descripcion: "Trofeo exclusivo del mes + 100 puntos extra",
                centro: rankingMensual[0]?.nombre || "",
                puntosExtra: 100
            },
            {
                posicion: 2,
                emoji: "🥈",
                titulo: "2do lugar",
                premio: "Certificado de honor",
                descripcion: "Certificado digital de excelencia",
                centro: rankingMensual[1]?.nombre || "",
                puntosExtra: 50
            },
            {
                posicion: 3,
                emoji: "🥉",
                titulo: "3er lugar",
                premio: "Mención especial",
                descripcion: "Mención honorífica en el ranking",
                centro: rankingMensual[2]?.nombre || "",
                puntosExtra: 25
            }
        ];
        // Agregar premios para Top 10
        for(let i = 3; i < Math.min(10, rankingMensual.length); i++){
            premios.push({
                posicion: i + 1,
                emoji: "🏆",
                titulo: `Top ${i + 1}`,
                premio: "Badge exclusivo",
                descripcion: `Badge especial "Top ${i + 1}" del mes`,
                centro: rankingMensual[i]?.nombre || "",
                puntosExtra: 10
            });
        }
        // Agregar premios de participación para todos los centros con actividad
        rankingMensual.forEach((centro, index)=>{
            if (index >= 10) {
                premios.push({
                    posicion: index + 1,
                    emoji: "📚",
                    titulo: "Participación",
                    premio: "Reconocimiento",
                    descripcion: "Reconocimiento por participación activa",
                    centro: centro.nombre,
                    puntosExtra: 5
                });
            }
        });
        // Nota: La asignación de trofeos se ha movido a la página de perfil de usuario
        // para que se desbloqueen solo para usuarios individuales de ese centro.
        return premios;
    };
    // ✅ SISTEMA DE PREMIOS: Función para asignar trofeos a usuarios de un centro
    const asignarTrofeoACentro = (nombreCentro, idTrofeo)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const usersStr = localStorage.getItem("users");
            if (!usersStr) return;
            const users = JSON.parse(usersStr);
            let usuariosActualizados = false;
            // Asignar trofeo a todos los usuarios del centro
            users.forEach((user)=>{
                if (user.centro === nombreCentro) {
                    if (!user.trofeos) {
                        user.trofeos = [];
                    }
                    if (!user.trofeos.includes(idTrofeo)) {
                        user.trofeos.push(idTrofeo);
                        usuariosActualizados = true;
                    }
                }
            });
            if (usuariosActualizados) {
                localStorage.setItem("users", JSON.stringify(users));
            }
        } catch (error) {
        // Silent fail
        }
    };
    // ✅ SISTEMA DE PREMIOS: Función para verificar si los trofeos ya fueron asignados este mes
    const trofeosYaAsignadosEsteMes = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const fechaActual = new Date();
        const claveTrofeosAsignados = `trofeos_asignados_${fechaActual.getFullYear()}_${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}`;
        return localStorage.getItem(claveTrofeosAsignados) === 'true';
    };
    // ✅ SISTEMA DE PREMIOS: Función para marcar que los trofeos fueron asignados este mes
    const marcarTrofeosAsignadosEsteMes = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const fechaActual = new Date();
        const claveTrofeosAsignados = `trofeos_asignados_${fechaActual.getFullYear()}_${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}`;
        localStorage.setItem(claveTrofeosAsignados, 'true');
    };
    // ✅ SISTEMA DE PREMIOS: Función para verificar si un centro ganó premio
    const obtenerPremioDelCentro = (nombreCentro)=>{
        const premiosDelMes = obtenerPremiosDelMes();
        return premiosDelMes.find((premio)=>premio.centro === nombreCentro);
    };
    // Normaliza un valor de premio para asegurarnos de devolver siempre una cadena
    // Normalización sustituida por util compartido `normalizarValorPremio` en `src/utils/normalizadores.ts`
    // Función para obtener información del ciclo mensual
    const obtenerInfoCicloMensual = ()=>{
        const hoy = new Date();
        const añoActual = hoy.getFullYear();
        const mesActual = hoy.getMonth(); // 0-11
        const diaActual = hoy.getDate();
        // Calcular días restantes hasta fin de mes
        const ultimoDiaDelMes = new Date(añoActual, mesActual + 1, 0).getDate();
        const diasRestantes = ultimoDiaDelMes - diaActual + 1;
        // Calcular progreso del mes
        const progresoDelMes = Math.round(diaActual / ultimoDiaDelMes * 100);
        // Próximo mes
        const proximoMes = new Date(añoActual, mesActual + 1, 1);
        const nombreProximoMes = proximoMes.toLocaleDateString('es-ES', {
            month: 'long',
            year: 'numeric'
        });
        return {
            diasRestantes,
            progresoDelMes,
            nombreProximoMes
        };
    };
    // Función para generar clave de mes para localStorage
    const generarClaveMes = (año, mes)=>{
        return `centros_ranking_${año}_${mes.toString().padStart(2, '0')}`;
    };
    // Función para obtener meses disponibles en historial
    const obtenerMesesDisponibles = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const meses = [];
        const fechaActual = new Date();
        // Agregar mes actual
        const mesActual = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}`;
        meses.push(mesActual);
        // Buscar meses anteriores en localStorage
        for(let i = 1; i <= 12; i++){
            const fecha = new Date(fechaActual);
            fecha.setMonth(fecha.getMonth() - i);
            const claveMes = generarClaveMes(fecha.getFullYear(), fecha.getMonth() + 1);
            if (localStorage.getItem(claveMes)) {
                const mesString = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}`;
                meses.push(mesString);
            }
        }
        return meses;
    };
    // Función para guardar ranking mensual en historial
    const guardarRankingMensual = (centros)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const fechaActual = new Date();
        const claveMes = generarClaveMes(fechaActual.getFullYear(), fechaActual.getMonth() + 1);
        const datosRanking = {
            fecha: fechaActual.toISOString(),
            año: fechaActual.getFullYear(),
            mes: fechaActual.getMonth() + 1,
            centros: centros,
            ganador: centros[0]?.nombre || "N/A"
        };
        localStorage.setItem(claveMes, JSON.stringify(datosRanking));
    };
    // Función para cargar ranking de un mes específico
    const cargarRankingMensual = (año, mes)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const claveMes = generarClaveMes(año, mes);
        const datos = localStorage.getItem(claveMes);
        if (datos) {
            try {
                const ranking = JSON.parse(datos);
                return ranking.centros || [];
            } catch (error) {
            // Silent fail
            }
        }
        return [];
    };
    // Función para calcular ranking anual acumulativo
    const calcularRankingAnual = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();
        const centrosAcumulados = {};
        // Sumar puntos de todos los meses del año actual
        for(let mes = 1; mes <= 12; mes++){
            const rankingMensual = cargarRankingMensual(añoActual, mes);
            rankingMensual.forEach((centro)=>{
                if (!centrosAcumulados[centro.nombre]) {
                    centrosAcumulados[centro.nombre] = {
                        ...centro,
                        puntajeTotal: 0,
                        ranking: 0
                    };
                }
                centrosAcumulados[centro.nombre].puntajeTotal += Number(centro.puntajeTotal) || 0;
                centrosAcumulados[centro.nombre].respuestasCorrectas += Number(centro.respuestasCorrectas) || 0;
                centrosAcumulados[centro.nombre].concursosGanados += Number(centro.concursosGanados) || 0;
                centrosAcumulados[centro.nombre].historiasCreadas += Number(centro.historiasCreadas) || 0;
                centrosAcumulados[centro.nombre].interaccionesSociales += Number(centro.interaccionesSociales) || 0;
            });
        }
        // Convertir a array y ordenar
        const centrosArray = Object.values(centrosAcumulados).sort((a, b)=>b.puntajeTotal - a.puntajeTotal);
        // Asignar medallas y rankings
        return asignarMedallas(centrosArray);
    };
    // Función para obtener historial de ganadores
    const obtenerHistorialGanadores = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const historial = [];
        const fechaActual = new Date();
        for(let i = 0; i < 12; i++){
            const fecha = new Date(fechaActual);
            fecha.setMonth(fecha.getMonth() - i);
            const rankingMensual = cargarRankingMensual(fecha.getFullYear(), fecha.getMonth() + 1);
            if (rankingMensual.length > 0 && rankingMensual[0]) {
                const ganador = rankingMensual[0];
                historial.push({
                    año: fecha.getFullYear(),
                    mes: fecha.toLocaleDateString('es-ES', {
                        month: 'long'
                    }),
                    centro: ganador.nombre || "Centro Desconocido",
                    puntaje: ganador.puntajeTotal || 0,
                    ranking: 1
                });
            }
        }
        return historial;
    };
    const asignarMedallas = (centrosOrdenados)=>{
        return centrosOrdenados.map((centro, index)=>{
            let medalla = "";
            if (index === 0) medalla = "🥇";
            else if (index === 1) medalla = "🥈";
            else if (index === 2) medalla = "🥉";
            else if (index < 10) medalla = "🏆";
            else medalla = "📚";
            return {
                ...centro,
                ranking: index + 1,
                medalla
            };
        });
    };
    // Cargar datos y calcular estadísticas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CentrosCompetencia.useEffect": ()=>{
            const cargarDatos = {
                "CentrosCompetencia.useEffect.cargarDatos": ()=>{
                    try {
                        // Cargar usuario actual
                        const userData = localStorage.getItem('currentUser') || localStorage.getItem('user');
                        if (userData) {
                            const user = JSON.parse(userData);
                            setUsuario(user);
                            setMiCentro(user.centro || "");
                        }
                        // Cargar datos históricos
                        const mesesDisponibles = obtenerMesesDisponibles();
                        setMesesDisponibles(mesesDisponibles);
                        const historialGanadores = obtenerHistorialGanadores();
                        setHistorialGanadores(historialGanadores);
                        // Cargar todos los usuarios
                        const usuariosData = localStorage.getItem('users');
                        if (!usuariosData) {
                            setLoading(false);
                            return;
                        }
                        const usuarios = JSON.parse(usuariosData);
                        // ✅ VERIFICAR SI HAY DATOS PARA LA ASIGNATURA SELECCIONADA
                        if (asignaturaSeleccionada !== "todas") {
                            // Verificar si hay datos específicos por asignatura
                            const mapaAsignaturasInverso = {
                                'Matemáticas': 'matematicas',
                                'Historia': 'historia',
                                'Geografía': 'geografia',
                                'Literatura': 'literatura',
                                'Inglés': 'ingles',
                                'Naturaleza': 'naturaleza',
                                'Lenguaje': 'lenguaje',
                                'General': 'general'
                            };
                            const asignaturaParaLocalStorage = mapaAsignaturasInverso[asignaturaSeleccionada] || asignaturaSeleccionada.toLowerCase();
                            let hayDatosEspecificos = false;
                            for(let i = 0; i < localStorage.length; i++){
                                const clave = localStorage.key(i);
                                if (clave && clave.startsWith(`${asignaturaParaLocalStorage}_`)) {
                                    const valor = localStorage.getItem(clave);
                                    if (valor && parseInt(valor, 10) > 0) {
                                        hayDatosEspecificos = true;
                                        break;
                                    }
                                }
                            }
                            setHayDatosAsignatura(hayDatosEspecificos);
                        } else {
                            setHayDatosAsignatura(true);
                        }
                        // Obtener lista única de centros
                        const centrosUnicos = [
                            ...new Set(usuarios.filter({
                                "CentrosCompetencia.useEffect.cargarDatos": (u)=>u.centro && u.centro.trim() !== ""
                            }["CentrosCompetencia.useEffect.cargarDatos"]).map({
                                "CentrosCompetencia.useEffect.cargarDatos": (u)=>u.centro
                            }["CentrosCompetencia.useEffect.cargarDatos"]))
                        ];
                        // Calcular estadísticas para cada centro
                        const statsDeLosCentros = centrosUnicos.map({
                            "CentrosCompetencia.useEffect.cargarDatos.statsDeLosCentros": (nombreCentro)=>calcularStatsDelCentro(nombreCentro, usuarios)
                        }["CentrosCompetencia.useEffect.cargarDatos.statsDeLosCentros"]);
                        // Ordenar por puntuación y asignar medallas
                        const centrosOrdenados = statsDeLosCentros.sort({
                            "CentrosCompetencia.useEffect.cargarDatos.centrosOrdenados": (a, b)=>b.puntajeTotal - a.puntajeTotal
                        }["CentrosCompetencia.useEffect.cargarDatos.centrosOrdenados"]);
                        const centrosConMedallas = asignarMedallas(centrosOrdenados);
                        // Manejar diferentes modos de visualización
                        if (modoVisualizacion === 'anual') {
                            const centrosAnuales = calcularRankingAnual();
                            setCentrosAnuales(centrosAnuales);
                        } else if (mesSeleccionado && mesesDisponibles.includes(mesSeleccionado)) {
                            // Cargar ranking de mes específico
                            // Extraer año y mes del formato "Enero 2024"
                            const partes = mesSeleccionado.split(' ');
                            const nombreMes = partes[0];
                            const año = parseInt(partes[1]) || fechaActual.getFullYear();
                            // Convertir nombre de mes a número
                            const mesesNombres = [
                                "Enero",
                                "Febrero",
                                "Marzo",
                                "Abril",
                                "Mayo",
                                "Junio",
                                "Julio",
                                "Agosto",
                                "Septiembre",
                                "Octubre",
                                "Noviembre",
                                "Diciembre"
                            ];
                            const numeroMes = mesesNombres.indexOf(nombreMes) + 1;
                            if (numeroMes > 0) {
                                const rankingMes = cargarRankingMensual(año, numeroMes);
                                if (rankingMes.length > 0) {
                                    setCentros(rankingMes);
                                } else {
                                    setCentros(centrosConMedallas);
                                }
                            } else {
                                setCentros(centrosConMedallas);
                            }
                        } else {
                            // Mes actual
                            setCentros(centrosConMedallas);
                            // Guardar ranking mensual automáticamente
                            guardarRankingMensual(centrosConMedallas);
                        }
                        // Cargar historial de ganadores
                        setHistorialGanadores(obtenerHistorialGanadores());
                        // Cargar premios del mes
                        setPremiosDelMes(obtenerPremiosDelMes());
                        setLoading(false);
                    } catch (error) {
                        // Silent fail
                        setLoading(false);
                    }
                }
            }["CentrosCompetencia.useEffect.cargarDatos"];
            cargarDatos();
        }
    }["CentrosCompetencia.useEffect"], [
        modoVisualizacion,
        mesSeleccionado,
        asignaturaSeleccionada,
        cursoSeleccionado
    ]);
    // ✅ DETECTAR EVENTOS ESPECIALES (vacaciones y challenges) - separado para que se ejecute en el mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CentrosCompetencia.useEffect": ()=>{
            // ✅ DETECTAR MODO VACACIONES AUTOMÁTICAMENTE
            const periodoVacaciones = detectarPeriodoVacaciones();
            setModoVacaciones(periodoVacaciones.esVacacion);
            setTipoVacacion(periodoVacaciones.tipo);
            // Normalizamos la estructura de evento para evitar pasar objetos enteros
            // directamente al renderizado (causa el error: Objects are not valid as a React child).
            let eventoNormalizado = null;
            if (periodoVacaciones.esVacacion && periodoVacaciones.evento) {
                eventoNormalizado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$normalizadores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizarEventoEspecial"])({
                    nombre: periodoVacaciones.tipo,
                    descripcion: periodoVacaciones.evento.descripcion || "",
                    emoji: periodoVacaciones.evento.emoji || "",
                    tipo: "vacacion",
                    multiplicador: periodoVacaciones.evento.multiplicador || 1
                });
            }
            // ✅ DETECTAR CHALLENGE ESPECIAL
            const challengeActual = obtenerChallengeActual();
            if (challengeActual && !periodoVacaciones.esVacacion) {
                // También normalizamos el challenge para que tenga campos consistentes
                eventoNormalizado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$normalizadores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizarEventoEspecial"])({
                    nombre: challengeActual.nombre || "",
                    descripcion: challengeActual.bonus || "",
                    emoji: challengeActual.emoji || "",
                    tipo: "challenge"
                });
            }
            setEventoEspecial(eventoNormalizado);
        }
    }["CentrosCompetencia.useEffect"], []); // Sin dependencias para que se ejecute solo en mount
    // Obtener el centro del usuario actual
    const centroDelUsuario = centros.find((c)=>c.nombre === miCentro);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1010,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600 font-semibold",
                        children: "Cargando competencia entre centros..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1011,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/centros-competencia/page.tsx",
                lineNumber: 1009,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/centros-competencia/page.tsx",
            lineNumber: 1008,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4",
                            children: [
                                "🏫 ",
                                t('leagueTitle')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1022,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-700 max-w-2xl mx-auto",
                            children: t('leagueSubtitle')
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1025,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1021,
                    columnNumber: 17
                }, this),
                modoVacaciones && eventoEspecial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "status",
                    "aria-live": "polite",
                    "aria-label": eventoEspecial.nombre || 'Evento especial',
                    className: "mb-8 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-xl p-6 shadow-lg animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-orange-800 mb-2 flex items-center justify-center gap-2",
                                children: [
                                    eventoEspecial.emoji,
                                    " ¡",
                                    tipoVacacion,
                                    " Activas! ",
                                    eventoEspecial.emoji
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1034,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-orange-700 mb-4",
                                children: eventoEspecial.descripcion
                            }, void 0, false, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1037,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white bg-opacity-60 rounded-lg p-4 inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-orange-900",
                                        children: eventoEspecial.tipo === 'vacacion' && eventoEspecial.multiplicador && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "🚀 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        t('multiplicadorActivo'),
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1043,
                                                    columnNumber: 46
                                                }, this),
                                                " x",
                                                eventoEspecial.multiplicador
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1041,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-orange-900 mt-1",
                                        children: "Todas las actividades dan puntos extra durante este período especial"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1040,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1033,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1032,
                    columnNumber: 21
                }, this),
                !modoVacaciones && eventoEspecial && eventoEspecial.nombre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "status",
                    "aria-live": "polite",
                    "aria-label": eventoEspecial.nombre || 'Evento especial',
                    className: "mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-purple-800 mb-2 flex items-center justify-center gap-2",
                                children: [
                                    eventoEspecial.emoji,
                                    " ",
                                    eventoEspecial.nombre,
                                    " ",
                                    eventoEspecial.emoji
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1058,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-700 font-semibold",
                                children: [
                                    "🎁 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Bonus Especial:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 36
                                    }, this),
                                    " ",
                                    eventoEspecial.descripcion
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1061,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-purple-700 mt-2",
                                children: t('eventoLimitado')
                            }, void 0, false, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1064,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1057,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1056,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-white rounded-lg shadow-lg border border-gray-200 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Ver datos:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModoVisualizacion('actual'),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'actual' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                    children: "📅 Mes Actual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1078,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModoVisualizacion('historico'),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'historico' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                    children: "📊 Histórico"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1087,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModoVisualizacion('anual'),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'anual' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                    children: "🏆 Ranking Anual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1096,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1077,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: t('filtrarAsignatura')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1110,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: asignaturaSeleccionada,
                                            onChange: (e)=>setAsignaturaSeleccionada(e.target.value),
                                            className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "todas",
                                                    children: [
                                                        "📚 ",
                                                        t('todasAsignaturas')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1116,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Matemáticas",
                                                    children: "🔢 Matemáticas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1117,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lenguaje",
                                                    children: "📝 Lenguaje"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Literatura",
                                                    children: "📖 Literatura"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Historia",
                                                    children: "🏛️ Historia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Geografía",
                                                    children: "🗺️ Geografía"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1121,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Naturaleza",
                                                    children: "🌿 Ciencias Naturales"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1122,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Inglés",
                                                    children: "🇬🇧 Inglés"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1123,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "General",
                                                    children: "🎯 General"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1124,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1109,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: t('filtrarCurso')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: cursoSeleccionado,
                                            onChange: (e)=>setCursoSeleccionado(e.target.value),
                                            className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "todos",
                                                    children: [
                                                        "👥 ",
                                                        t('todosCursos')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1136,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "1º Primaria",
                                                    children: "1️⃣ 1º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "2º Primaria",
                                                    children: "2️⃣ 2º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "3º Primaria",
                                                    children: "3️⃣ 3º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1139,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "4º Primaria",
                                                    children: "4️⃣ 4º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1140,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "5º Primaria",
                                                    children: "5️⃣ 5º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "6º Primaria",
                                                    children: "6️⃣ 6º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1142,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1131,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 25
                                }, this),
                                modoVisualizacion === 'historico' && mesesDisponibles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: t('mes')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: mesSeleccionado,
                                            onChange: (e)=>setMesSeleccionado(e.target.value),
                                            className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: t('seleccionarMes')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 37
                                                }, this),
                                                mesesDisponibles.map((mes)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: mes,
                                                        children: mes
                                                    }, mes, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1157,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1073,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-center",
                            children: [
                                modoVisualizacion === 'actual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "📅 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: t('mostrar')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1170,
                                            columnNumber: 36
                                        }, this),
                                        " ",
                                        t('competenciaMesActual'),
                                        " (",
                                        fechaActual.toLocaleDateString('es-ES', {
                                            month: 'long',
                                            year: 'numeric'
                                        }),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1169,
                                    columnNumber: 29
                                }, this),
                                modoVisualizacion === 'historico' && mesSeleccionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "📊 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: t('mostrar')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1175,
                                            columnNumber: 36
                                        }, this),
                                        " ",
                                        t('resultadosHistoricos'),
                                        " ",
                                        mesSeleccionado
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 29
                                }, this),
                                modoVisualizacion === 'anual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "🏆 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: t('mostrar')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1180,
                                            columnNumber: 36
                                        }, this),
                                        " ",
                                        t('rankingAnual'),
                                        " (año ",
                                        fechaActual.getFullYear(),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1179,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1167,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1072,
                    columnNumber: 17
                }, this),
                centroDelUsuario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "region",
                    "aria-labelledby": "mi-centro-title",
                    className: "mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "mi-centro-title",
                                    className: "text-xl font-bold text-yellow-800 mb-2 flex items-center",
                                    "aria-label": t('tuCentro'),
                                    children: [
                                        esImagen(obtenerLogoCentro(centroDelUsuario.nombre)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `/${obtenerLogoCentro(centroDelUsuario.nombre)}`,
                                            alt: `Logo ${centroDelUsuario.nombre}`,
                                            className: "w-12 h-12 object-contain rounded-lg border-2 border-yellow-400 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mr-3",
                                            children: obtenerLogoCentro(centroDelUsuario.nombre)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 41
                                        }, this),
                                        "🏠 ",
                                        t('tuCentro'),
                                        ": ",
                                        centroDelUsuario.nombre
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1191,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: [
                                                        t('ranking'),
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1205,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-lg",
                                                    children: [
                                                        centroDelUsuario.medalla,
                                                        " #",
                                                        centroDelUsuario.ranking
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1204,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: [
                                                        t('puntuacion'),
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-lg font-bold",
                                                    children: centroDelUsuario.puntajeTotal.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1208,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: [
                                                        t('miembros'),
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1213,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    children: [
                                                        centroDelUsuario.estudiantesActivos,
                                                        "/",
                                                        centroDelUsuario.estudiantes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1214,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-yellow-600",
                                                    children: "estudiantes + docentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: [
                                                        t('concursos'),
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    children: centroDelUsuario.concursosGanados
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1219,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1217,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1190,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1189,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1188,
                    columnNumber: 21
                }, this),
                centroDelUsuario && (()=>{
                    const premioCentro = obtenerPremioDelCentro(centroDelUsuario.nombre);
                    return premioCentro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "region",
                        "aria-labelledby": "premio-centro-title",
                        className: "mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 rounded-lg p-6 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mr-4",
                                    children: "🎉"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1233,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: "premio-centro-title",
                                            className: "text-xl font-bold text-purple-800 mb-2",
                                            children: t('felicitacionesPremio')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1235,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-60 rounded-lg p-4 inline-block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl mr-2",
                                                            children: premioCentro.emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1240,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-purple-800",
                                                            children: [
                                                                premioCentro.titulo,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1241,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-purple-700",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$normalizadores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizarValorPremio"])(premioCentro.premio)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1242,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-purple-600 mb-2",
                                                    children: premioCentro.descripcion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1244,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-purple-800",
                                                            children: [
                                                                "🏆 ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: [
                                                                        t('bonusObtenido'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1247,
                                                                    columnNumber: 52
                                                                }, this),
                                                                " +",
                                                                Number(premioCentro.puntosExtra) || 0,
                                                                " puntos extra"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1246,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block",
                                                            children: [
                                                                "🏅 ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: [
                                                                        t('insigniaAutomatica'),
                                                                        ":"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1250,
                                                                    columnNumber: 52
                                                                }, this),
                                                                " ",
                                                                t('premio')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1238,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1234,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1232,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1231,
                        columnNumber: 25
                    }, this) : null;
                })(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-cyan-800 mb-6 flex items-center",
                            role: "region",
                            "aria-labelledby": "graficos-title",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "graficos-title",
                                children: [
                                    "📊 ",
                                    t('gráficosProgreso')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1263,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1262,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-cyan-700 mb-4",
                                    children: "🏆 Top 3 Centros - Barras de Progreso"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1268,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: centros.slice(0, 3).map((centro, index)=>{
                                        const maxPuntos = Number(centros[0]?.puntajeTotal) || 1;
                                        const porcentaje = centro.puntajeTotal / maxPuntos * 100;
                                        const colores = [
                                            "from-yellow-400 to-orange-500",
                                            "from-gray-400 to-gray-600",
                                            "from-orange-400 to-red-500"
                                        ];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg p-4 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl",
                                                                    children: centro.medalla
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1279,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-gray-800",
                                                                    children: centro.nombre
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1280,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold text-cyan-600",
                                                            children: [
                                                                centro.puntajeTotal.toLocaleString(),
                                                                " pts"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1282,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-200 rounded-full h-4 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full bg-gradient-to-r ${colores[index]} transition-all duration-1000 ease-out rounded-full`,
                                                        style: {
                                                            width: `${porcentaje}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-600 mt-1",
                                                    children: [
                                                        porcentaje.toFixed(1),
                                                        "% del máximo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, centro.nombre, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1269,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1267,
                            columnNumber: 21
                        }, this),
                        asignaturaSeleccionada !== "todas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-cyan-700 mb-4",
                                    children: [
                                        "📚 Análisis Específico: ",
                                        asignaturaSeleccionada.charAt(0).toUpperCase() + asignaturaSeleccionada.slice(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1306,
                                    columnNumber: 29
                                }, this),
                                hayDatosAsignatura ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-800",
                                            children: [
                                                "🔍 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Vista filtrada por asignatura:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1313,
                                                    columnNumber: 44
                                                }, this),
                                                " Mostrando solo actividad relacionada con ",
                                                asignaturaSeleccionada
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600 mt-2",
                                            children: "Los puntos de respuestas correctas corresponden únicamente a preguntas de esta materia específica. Las demás métricas (concursos, historias, interacciones) se muestran proporcionalmente."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1315,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-xs text-blue-500 bg-blue-100 rounded p-2",
                                            children: [
                                                "💡 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Tip:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1320,
                                                    columnNumber: 44
                                                }, this),
                                                ' Para ver el rendimiento completo de todos los centros, selecciona "📚 todas las asignaturas"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1319,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1311,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-orange-50 border border-orange-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-orange-800",
                                            children: [
                                                "📊 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Sin datos específicos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 44
                                                }, this),
                                                " Aún no hay actividad registrada para ",
                                                asignaturaSeleccionada
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1325,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-orange-600 mt-2",
                                            children: "Los rankings mostrados son estimaciones basadas en el rendimiento general de cada centro. Los datos reales aparecerán cuando los usuarios respondan preguntas de esta materia."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1328,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-xs text-orange-500 bg-orange-100 rounded p-2",
                                            children: [
                                                "🎯 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Para generar datos reales:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 44
                                                }, this),
                                                " Los usuarios deben participar en competencias o responder preguntas específicas de ",
                                                asignaturaSeleccionada
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1324,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1305,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-green-700",
                                            children: "Total de Centros"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1343,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-green-800",
                                            children: centros.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1344,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600",
                                            children: "Participando en la liga"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1345,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1342,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-blue-700",
                                            children: "Puntuación Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1349,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-blue-800",
                                            children: centros.reduce((total, centro)=>total + (Number(centro.puntajeTotal) || 0), 0).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1350,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600",
                                            children: "Puntos acumulados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1348,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-purple-700",
                                            children: "Promedio de Centro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1357,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-purple-800",
                                            children: Math.round(centros.reduce((total, centro)=>total + (Number(centro.puntajeTotal) || 0), 0) / (centros.length || 1)).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1358,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600",
                                            children: "Puntos por centro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1361,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1356,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1341,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1261,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-indigo-800 mb-4 flex items-center",
                            children: "📅 Información del Ciclo de Competencia"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1368,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 border border-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-indigo-600 font-semibold",
                                            children: "Mes Actual"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1373,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-indigo-800",
                                            children: new Date().toLocaleDateString('es-ES', {
                                                month: 'long',
                                                year: 'numeric'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1374,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-indigo-600 mt-1",
                                            children: [
                                                "Progreso: ",
                                                obtenerInfoCicloMensual().progresoDelMes,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1377,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1372,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 border border-orange-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-orange-600 font-semibold",
                                            children: "Días Restantes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-orange-800",
                                            children: [
                                                obtenerInfoCicloMensual().diasRestantes,
                                                " días"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1384,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-orange-600 mt-1",
                                            children: "Hasta próximo ranking"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1382,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 border border-green-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-green-600 font-semibold",
                                            children: "Próximo Ciclo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1393,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-green-800 text-sm",
                                            children: obtenerInfoCicloMensual().nombreProximoMes
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1394,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-green-600 mt-1",
                                            children: "Nuevo ranking mensual"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1397,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1392,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1371,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-xs text-indigo-600 bg-white rounded p-3 border border-indigo-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "📊 Ciclo de Competencia:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1403,
                                    columnNumber: 25
                                }, this),
                                " Los rankings se actualizan automáticamente cada mes. Los puntos se acumulan desde el día 1 hasta el último día del mes, creando una competencia fresca cada 30 días.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: " ¡Cada mes es una nueva oportunidad para que tu centro llegue al primer puesto!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1405,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1402,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1367,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-800 mb-4",
                            children: "📊 Sistema de Puntuación"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1411,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "¡Novedad!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1414,
                                        columnNumber: 29
                                    }, this),
                                    " 🎉 Ahora los ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "docentes también participan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1414,
                                        columnNumber: 69
                                    }, this),
                                    " en el ranking de su centro. ¡Profesores y estudiantes trabajando juntos por el éxito del centro!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1413,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1412,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-6 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-blue-700",
                                            children: "Estudiantes Activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1420,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-blue-800",
                                            children: "10 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1421,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600",
                                            children: "por estudiante activo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1422,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1419,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-indigo-700",
                                            children: "Docentes Activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1425,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-indigo-800",
                                            children: "20 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1426,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-indigo-600",
                                            children: "por docente activo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1427,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1424,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-green-700",
                                            children: "Respuestas Correctas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-green-800",
                                            children: "5 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1431,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600",
                                            children: "estudiantes + docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1432,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1429,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-yellow-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-yellow-700",
                                            children: "Concursos Ganados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1435,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-yellow-800",
                                            children: "50 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1436,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-yellow-600",
                                            children: "estudiantes + docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1437,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1434,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-purple-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-purple-700",
                                            children: "Historias Creadas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1440,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-purple-800",
                                            children: "15 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600",
                                            children: "estudiantes + docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1442,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1439,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-pink-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-pink-700",
                                            children: "Interacciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-pink-800",
                                            children: "2 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1446,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-pink-600",
                                            children: "likes, amigos, comentarios"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1447,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1444,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1418,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1410,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold",
                                    children: [
                                        "🏆 Ranking de Centros Educativos",
                                        asignaturaSeleccionada !== "todas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-normal opacity-90 ml-2",
                                            children: [
                                                "- ",
                                                asignaturaSeleccionada.charAt(0).toUpperCase() + asignaturaSeleccionada.slice(1),
                                                !hayDatosAsignatura && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: " (Estimado)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1460,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1458,
                                            columnNumber: 33
                                        }, this),
                                        cursoSeleccionado !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-normal opacity-90 ml-2",
                                            children: [
                                                "- ",
                                                cursoSeleccionado
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1464,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1455,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "opacity-90",
                                    children: asignaturaSeleccionada === "todas" && cursoSeleccionado === "todos" ? `Competencia del mes de ${new Date().toLocaleDateString('es-ES', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}` : asignaturaSeleccionada !== "todas" && cursoSeleccionado === "todos" ? hayDatosAsignatura ? `Vista específica de ${asignaturaSeleccionada} - ${new Date().toLocaleDateString('es-ES', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}` : `Estimaciones para ${asignaturaSeleccionada} (sin datos específicos aún) - ${new Date().toLocaleDateString('es-ES', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}` : asignaturaSeleccionada === "todas" && cursoSeleccionado !== "todos" ? `Vista específica de ${cursoSeleccionado} - ${new Date().toLocaleDateString('es-ES', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}` : hayDatosAsignatura ? `Vista específica de ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${new Date().toLocaleDateString('es-ES', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}` : `Estimaciones para ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${new Date().toLocaleDateString('es-ES', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1469,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm opacity-80",
                                    children: "📅 Se actualiza automáticamente cada mes | 🔄 Datos en tiempo real"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1454,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Ranking"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1492,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Centro"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1493,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Puntuación"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1494,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Miembros"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1495,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Activos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1496,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Respuestas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Concursos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1498,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Historias"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1499,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1491,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1490,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: centros.map((centro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `hover:bg-gray-50 ${centro.nombre === miCentro ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl mr-2",
                                                                    children: centro.medalla
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1510,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold text-gray-900",
                                                                    children: [
                                                                        "#",
                                                                        centro.ranking
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1511,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1509,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1508,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                esImagen(obtenerLogoCentro(centro.nombre)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `/${obtenerLogoCentro(centro.nombre)}`,
                                                                    alt: `Logo ${centro.nombre}`,
                                                                    className: "w-10 h-10 object-contain rounded-lg border border-gray-300 mr-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1517,
                                                                    columnNumber: 53
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl mr-3",
                                                                    children: obtenerLogoCentro(centro.nombre)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1523,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: centro.nombre
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                            lineNumber: 1526,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        centro.nombre === miCentro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-yellow-600",
                                                                            children: "👈 Tu centro"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                            lineNumber: 1528,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1525,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1515,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-blue-600",
                                                            children: centro.puntajeTotal.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1534,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1533,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                        children: centro.estudiantes
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1538,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",
                                                            children: centro.estudiantesActivos
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1542,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1541,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                        children: centro.respuestasCorrectas
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1546,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                        children: centro.concursosGanados
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1549,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                        children: centro.historiasCreadas
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, centro.nombre, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1504,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1502,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1489,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1488,
                            columnNumber: 21
                        }, this),
                        centros.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-xl mb-4",
                                    children: "📊"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1563,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: "No hay datos de centros disponibles todavía."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1564,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-2",
                                    children: "Los datos aparecerán cuando haya actividad de estudiantes."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1565,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1562,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1453,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-blue-800 mb-2",
                                    children: "🎯 ¿Cómo Participar?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1573,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-blue-700 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Estudiantes y Docentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1575,
                                                    columnNumber: 35
                                                }, this),
                                                " pueden participar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1575,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Mantente activo en la plataforma"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Responde preguntas correctamente"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1577,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Participa en concursos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1578,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Crea historias interesantes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1579,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Interactúa con compañeros y profesores"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1580,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1574,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1572,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-green-800 mb-2",
                                    children: [
                                        "🏆 ",
                                        t('premiosDelMes')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1585,
                                    columnNumber: 25
                                }, this),
                                premiosDelMes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        premiosDelMes.slice(0, 10).map((premio, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center justify-between p-2 rounded ${premio.centro === miCentro ? 'bg-yellow-100 border border-yellow-300' : 'bg-white'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg mr-2",
                                                                children: premio.emoji
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1592,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-green-800",
                                                                        children: [
                                                                            premio.titulo,
                                                                            ":"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                        lineNumber: 1594,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-700 ml-1",
                                                                        children: premio.premio
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                        lineNumber: 1595,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    premio.centro === miCentro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-yellow-600 font-bold ml-2",
                                                                        children: "🎉 ¡Tu centro!"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                        lineNumber: 1597,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1593,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1591,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-semibold text-green-800",
                                                                children: premio.centro
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1602,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-green-600",
                                                                children: [
                                                                    "+",
                                                                    premio.puntosExtra,
                                                                    " pts"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1603,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-green-500",
                                                                children: "🏅 Insignia asignada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1604,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1601,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1589,
                                                columnNumber: 37
                                            }, this)),
                                        premiosDelMes.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-sm text-green-600 mt-2",
                                            children: [
                                                "Y ",
                                                premiosDelMes.length - 10,
                                                " premios más de participación..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1609,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1587,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-green-700 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🥇 1er lugar: Trofeo digital especial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1616,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🥈 2do lugar: Certificado de honor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🥉 3er lugar: Mención especial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1618,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🏆 Top 10: Badge exclusivo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1619,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "📚 Participación: Reconocimiento"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1620,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1615,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1584,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-green-800 mb-2",
                                    children: "✅ Características Implementadas"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1626,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-green-700 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Competencias por asignatura (selector activo)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1628,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Gráficos de progreso (rankings visuales)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1629,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Modo vacaciones (detección automática)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1630,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Challenges especiales (eventos temáticos)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1631,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Sistema anti-trampa (cursos automáticos)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1632,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Rankings históricos (persistencia completa)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1633,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1627,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1625,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1571,
                    columnNumber: 17
                }, this),
                modoVisualizacion === 'anual' && centrosAnuales.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-amber-800 mb-6 flex items-center",
                            children: [
                                "🏆 Ranking Acumulativo Anual ",
                                fechaActual.getFullYear()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1641,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: centrosAnuales.slice(0, 10).map((centro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-between p-4 rounded-lg border-2 ${index === 0 ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-400' : index === 1 ? 'bg-gradient-to-r from-gray-100 to-slate-100 border-gray-400' : index === 2 ? 'bg-gradient-to-r from-orange-100 to-amber-100 border-orange-400' : 'bg-white border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-2xl font-bold ${index === 0 ? 'text-yellow-600' : index === 1 ? 'text-gray-600' : index === 2 ? 'text-orange-600' : 'text-gray-800'}`,
                                                    children: [
                                                        "#",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1652,
                                                    columnNumber: 41
                                                }, this),
                                                esImagen(obtenerLogoCentro(centro.nombre)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/${obtenerLogoCentro(centro.nombre)}`,
                                                    alt: `Logo ${centro.nombre}`,
                                                    className: "w-12 h-12 object-contain rounded-lg border border-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1660,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: obtenerLogoCentro(centro.nombre)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1666,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-800",
                                                            children: centro.nombre
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1669,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                "Puntuación acumulativa: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold",
                                                                    children: centro.puntajeTotal.toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1671,
                                                                    columnNumber: 73
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1670,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1668,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1651,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-3xl ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1676,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1675,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, centro.nombre, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1646,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1644,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1640,
                    columnNumber: 21
                }, this),
                historialGanadores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-indigo-800 mb-6 flex items-center",
                            children: "📅 Historial de Ganadores Mensuales"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1692,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                            children: historialGanadores.slice(0, 12).map((ganador)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg border border-indigo-200 p-4 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-3",
                                                children: esImagen(obtenerLogoCentro(ganador.centro || "")) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/${obtenerLogoCentro(ganador.centro || "")}`,
                                                    alt: `Logo ${ganador.centro || "Centro"}`,
                                                    className: "w-16 h-16 object-contain rounded-lg border-2 border-yellow-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1701,
                                                    columnNumber: 49
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl",
                                                    children: obtenerLogoCentro(ganador.centro || "")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1707,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1699,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-gray-800 mb-1",
                                                children: ganador.centro || "Centro Desconocido"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1710,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mb-2",
                                                children: [
                                                    ganador.mes,
                                                    " ",
                                                    ganador.año
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1711,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold text-indigo-600",
                                                children: [
                                                    (ganador.puntaje || 0).toLocaleString(),
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1714,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mt-2",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1717,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1698,
                                        columnNumber: 37
                                    }, this)
                                }, `${ganador.mes}-${ganador.año}`, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1697,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1695,
                            columnNumber: 25
                        }, this),
                        historialGanadores.length > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "Y ",
                                    historialGanadores.length - 12,
                                    " ganadores más en el historial..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1724,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1723,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1691,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/centros-competencia/page.tsx",
            lineNumber: 1019,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/centros-competencia/page.tsx",
        lineNumber: 1018,
        columnNumber: 9
    }, this);
}
_s(CentrosCompetencia, "vQJCkrcawJXvOk9T/2c4nYvuC6E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = CentrosCompetencia;
var _c;
__turbopack_context__.k.register(_c, "CentrosCompetencia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11c126b8._.js.map