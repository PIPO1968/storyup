module.exports = [
"[project]/src/app/centros-competencia/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CentrosCompetencia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CentrosCompetencia() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [centros, setCentros] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [centrosAnuales, setCentrosAnuales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [miCentro, setMiCentro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filtroMes, setFiltroMes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("actual");
    const [modoVisualizacion, setModoVisualizacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("actual");
    const [mesSeleccionado, setMesSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const fechaActual = new Date();
    const [mesesDisponibles, setMesesDisponibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historialGanadores, setHistorialGanadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [premiosDelMes, setPremiosDelMes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usuario, setUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ MODO VACACIONES: Estados para funcionalidades especiales
    const [modoVacaciones, setModoVacaciones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tipoVacacion, setTipoVacacion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [eventoEspecial, setEventoEspecial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ COMPETENCIAS POR ASIGNATURA: Estados para filtros específicos
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("todas");
    const [hayDatosAsignatura, setHayDatosAsignatura] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cursoSeleccionado, setCursoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("todos");
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
        if ("TURBOPACK compile-time truthy", 1) return 0;
        //TURBOPACK unreachable
        ;
    };
    // ✅ COMPETENCIAS POR ASIGNATURA: Función para obtener estadísticas específicas
    const obtenerEstadisticasAsignatura = (asignatura, usuarios, cursoFiltro)=>{
        if ("TURBOPACK compile-time truthy", 1) return {};
        //TURBOPACK unreachable
        ;
        const estadisticasCentros = undefined;
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
                const respuestasGenerales = estudiantesDelCentro.reduce((sum, u)=>sum + (u.respuestasAcertadas || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (u.respuestasAcertadas || 0), 0);
                respuestasCorrectas = respuestasGenerales;
            }
            // Para otras métricas, usar los datos reales
            concursosGanados = estudiantesDelCentro.reduce((sum, u)=>sum + (u.concursosGanados || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (u.concursosGanados || 0), 0);
            historiasCreadas = estudiantesDelCentro.reduce((sum, u)=>sum + (u.historiasCreadas || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (u.historiasCreadas || 0), 0);
            interaccionesSociales = estudiantesDelCentro.reduce((sum, u)=>sum + (u.likes || 0) + (u.amigos?.length || 0) + (u.comentariosRecibidos || 0), 0) + docentesDelCentro.reduce((sum, u)=>sum + (u.likes || 0) + (u.amigos?.length || 0) + (u.comentariosRecibidos || 0), 0);
        } else {
            // Estadísticas generales (todas las asignaturas)
            const respuestasCorrectasEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (u.respuestasAcertadas || 0), 0);
            const concursosGanadosEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (u.concursosGanados || 0), 0);
            const historiasCreadasEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (u.historiasCreadas || 0), 0);
            const interaccionesSocialesEstudiantes = estudiantesDelCentro.reduce((sum, u)=>sum + (u.likes || 0) + (u.amigos?.length || 0) + (u.comentariosRecibidos || 0), 0);
            // Estadísticas de docentes  
            const respuestasCorrectasDocentes = docentesDelCentro.reduce((sum, u)=>sum + (u.respuestasAcertadas || 0), 0);
            const concursosGanadosDocentes = docentesDelCentro.reduce((sum, u)=>sum + (u.concursosGanados || 0), 0);
            const historiasCreadasDocentes = docentesDelCentro.reduce((sum, u)=>sum + (u.historiasCreadas || 0), 0);
            const interaccionesSocialesDocentes = docentesDelCentro.reduce((sum, u)=>sum + (u.likes || 0) + (u.amigos?.length || 0) + (u.comentariosRecibidos || 0), 0);
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
        const puntosPremios = premioCentro ? premioCentro.puntosExtra : 0;
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
            puntajeTotal,
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
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const clavePremios = undefined;
        const premiosGuardados = undefined;
    };
    // ✅ SISTEMA DE PREMIOS: Función para generar premios automáticamente
    const generarPremiosAutomaticos = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        // Obtener ranking del mes actual
        const fechaActual = undefined;
        const rankingMensual = undefined;
        const premios = undefined;
        let i;
        // Guardar premios generados
        const clavePremios = undefined;
    };
    // ✅ SISTEMA DE PREMIOS: Función para asignar trofeos a usuarios de un centro
    const asignarTrofeoACentro = (nombreCentro, idTrofeo)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    // ✅ SISTEMA DE PREMIOS: Función para verificar si los trofeos ya fueron asignados este mes
    const trofeosYaAsignadosEsteMes = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const claveTrofeosAsignados = undefined;
    };
    // ✅ SISTEMA DE PREMIOS: Función para marcar que los trofeos fueron asignados este mes
    const marcarTrofeosAsignadosEsteMes = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const claveTrofeosAsignados = undefined;
    };
    // ✅ SISTEMA DE PREMIOS: Función para verificar si un centro ganó premio
    const obtenerPremioDelCentro = (nombreCentro)=>{
        const premiosDelMes = obtenerPremiosDelMes();
        return premiosDelMes.find((premio)=>premio.centro === nombreCentro);
    };
    // Normaliza un valor de premio para asegurarnos de devolver siempre una cadena
    const normalizarValorPremio = (valor)=>{
        if (valor == null) return "";
        if (typeof valor === 'string') return valor;
        if (typeof valor === 'number') return String(valor);
        if (typeof valor === 'object') {
            return valor.nombre || valor.titulo || valor.descripcion || JSON.stringify(valor);
        }
        return String(valor);
    };
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
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        const meses = undefined;
        const fechaActual = undefined;
        // Agregar mes actual
        const mesActual = undefined;
        let i;
    };
    // Función para guardar ranking mensual en historial
    const guardarRankingMensual = (centros)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const claveMes = undefined;
        const datosRanking = undefined;
    };
    // Función para cargar ranking de un mes específico
    const cargarRankingMensual = (año, mes)=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        const claveMes = undefined;
        const datos = undefined;
    };
    // Función para calcular ranking anual acumulativo
    const calcularRankingAnual = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const añoActual = undefined;
        const centrosAcumulados = undefined;
        let mes;
        // Convertir a array y ordenar
        const centrosArray = undefined;
    };
    // Función para obtener historial de ganadores
    const obtenerHistorialGanadores = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
        const historial = undefined;
        const fechaActual = undefined;
        let i;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cargarDatos = ()=>{
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
                    ...new Set(usuarios.filter((u)=>u.centro && u.centro.trim() !== "").map((u)=>u.centro))
                ];
                // Calcular estadísticas para cada centro
                const statsDeLosCentros = centrosUnicos.map((nombreCentro)=>calcularStatsDelCentro(nombreCentro, usuarios));
                // Ordenar por puntuación y asignar medallas
                const centrosOrdenados = statsDeLosCentros.sort((a, b)=>b.puntajeTotal - a.puntajeTotal);
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
                console.error("Error cargando datos de competencia entre centros:", error);
                setLoading(false);
            }
        };
        cargarDatos();
    }, [
        modoVisualizacion,
        mesSeleccionado,
        asignaturaSeleccionada,
        cursoSeleccionado
    ]);
    // ✅ DETECTAR EVENTOS ESPECIALES (vacaciones y challenges) - separado para que se ejecute en el mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ✅ DETECTAR MODO VACACIONES AUTOMÁTICAMENTE
        const periodoVacaciones = detectarPeriodoVacaciones();
        setModoVacaciones(periodoVacaciones.esVacacion);
        setTipoVacacion(periodoVacaciones.tipo);
        // Normalizamos la estructura de evento para evitar pasar objetos enteros
        // directamente al renderizado (causa el error: Objects are not valid as a React child).
        let eventoNormalizado = null;
        if (periodoVacaciones.esVacacion && periodoVacaciones.evento) {
            eventoNormalizado = {
                nombre: periodoVacaciones.tipo,
                descripcion: periodoVacaciones.evento.descripcion || "",
                emoji: periodoVacaciones.evento.emoji || "",
                tipo: "vacacion",
                multiplicador: periodoVacaciones.evento.multiplicador || 1
            };
        }
        // ✅ DETECTAR CHALLENGE ESPECIAL
        const challengeActual = obtenerChallengeActual();
        if (challengeActual && !periodoVacaciones.esVacacion) {
            // También normalizamos el challenge para que tenga campos consistentes
            const challengeNormalizado = {
                nombre: challengeActual.nombre || "",
                descripcion: challengeActual.bonus || "",
                emoji: challengeActual.emoji || "",
                tipo: "challenge"
            };
            eventoNormalizado = challengeNormalizado;
        }
        setEventoEspecial(eventoNormalizado);
    }, []); // Sin dependencias para que se ejecute solo en mount
    // Obtener el centro del usuario actual
    const centroDelUsuario = centros.find((c)=>c.nombre === miCentro);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1018,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600 font-semibold",
                        children: "Cargando competencia entre centros..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1019,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/centros-competencia/page.tsx",
                lineNumber: 1017,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/centros-competencia/page.tsx",
            lineNumber: 1016,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4",
                            children: "🏫 Liga de Centros Educativos"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1030,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            children: "Competencia amistosa entre centros escolares. ¡Trabajad en equipo para llevar vuestro centro a la cima!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1033,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1029,
                    columnNumber: 17
                }, this),
                modoVacaciones && eventoEspecial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-xl p-6 shadow-lg animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                lineNumber: 1042,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-orange-700 mb-4",
                                children: eventoEspecial.descripcion
                            }, void 0, false, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1045,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white bg-opacity-60 rounded-lg p-4 inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-orange-900",
                                        children: eventoEspecial.tipo === 'vacacion' && eventoEspecial.multiplicador && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "🚀 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Multiplicador Activo:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1051,
                                                    columnNumber: 46
                                                }, this),
                                                " x",
                                                eventoEspecial.multiplicador
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-orange-800 mt-1",
                                        children: "Todas las actividades dan puntos extra durante este período especial"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1054,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1048,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1041,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1040,
                    columnNumber: 21
                }, this),
                !modoVacaciones && eventoEspecial && eventoEspecial.nombre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                lineNumber: 1066,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-700 font-semibold",
                                children: [
                                    "🎁 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Bonus Especial:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 36
                                    }, this),
                                    " ",
                                    eventoEspecial.descripcion
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1069,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-purple-600 mt-2",
                                children: "¡Evento limitado! Aprovecha para ganar puntos extra"
                            }, void 0, false, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1072,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1065,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1064,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-white rounded-lg shadow-lg border border-gray-200 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-4 items-start md:items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Ver datos:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModoVisualizacion('actual'),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'actual' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                    children: "📅 Mes Actual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1086,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModoVisualizacion('historico'),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'historico' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                    children: "📊 Histórico"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setModoVisualizacion('anual'),
                                                    className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'anual' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`,
                                                    children: "🏆 Ranking Anual"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1104,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1085,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1083,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Filtrar por asignatura:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: asignaturaSeleccionada,
                                            onChange: (e)=>setAsignaturaSeleccionada(e.target.value),
                                            className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "todas",
                                                    children: "📚 Todas las asignaturas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1124,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Matemáticas",
                                                    children: "🔢 Matemáticas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1125,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Lenguaje",
                                                    children: "📝 Lenguaje"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Literatura",
                                                    children: "📖 Literatura"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Historia",
                                                    children: "🏛️ Historia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Geografía",
                                                    children: "🗺️ Geografía"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1129,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Naturaleza",
                                                    children: "🌿 Ciencias Naturales"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Inglés",
                                                    children: "🇬🇧 Inglés"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1131,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "General",
                                                    children: "🎯 General"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1132,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Filtrar por curso:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1138,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: cursoSeleccionado,
                                            onChange: (e)=>setCursoSeleccionado(e.target.value),
                                            className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "todos",
                                                    children: "👥 Todos los cursos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1144,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "1º Primaria",
                                                    children: "1️⃣ 1º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "2º Primaria",
                                                    children: "2️⃣ 2º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "3º Primaria",
                                                    children: "3️⃣ 3º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1147,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "4º Primaria",
                                                    children: "4️⃣ 4º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "5º Primaria",
                                                    children: "5️⃣ 5º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1149,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "6º Primaria",
                                                    children: "6️⃣ 6º Primaria"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1150,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1139,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1137,
                                    columnNumber: 25
                                }, this),
                                modoVisualizacion === 'historico' && mesesDisponibles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "Mes:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1157,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: mesSeleccionado,
                                            onChange: (e)=>setMesSeleccionado(e.target.value),
                                            className: "px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Seleccionar mes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1163,
                                                    columnNumber: 37
                                                }, this),
                                                mesesDisponibles.map((mes)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: mes,
                                                        children: mes
                                                    }, mes, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1156,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1081,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-center",
                            children: [
                                modoVisualizacion === 'actual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "📅 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Mostrando:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 36
                                        }, this),
                                        " Competencia del mes actual (",
                                        fechaActual.toLocaleDateString('es-ES', {
                                            month: 'long',
                                            year: 'numeric'
                                        }),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 29
                                }, this),
                                modoVisualizacion === 'historico' && mesSeleccionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "📊 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Mostrando:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1183,
                                            columnNumber: 36
                                        }, this),
                                        " Resultados históricos de ",
                                        mesSeleccionado
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1182,
                                    columnNumber: 29
                                }, this),
                                modoVisualizacion === 'anual' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "🏆 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Mostrando:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 36
                                        }, this),
                                        " Ranking acumulativo anual (año ",
                                        fechaActual.getFullYear(),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1187,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1175,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1080,
                    columnNumber: 17
                }, this),
                centroDelUsuario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-yellow-800 mb-2 flex items-center",
                                    children: [
                                        esImagen(obtenerLogoCentro(centroDelUsuario.nombre)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `/${obtenerLogoCentro(centroDelUsuario.nombre)}`,
                                            alt: `Logo ${centroDelUsuario.nombre}`,
                                            className: "w-12 h-12 object-contain rounded-lg border-2 border-yellow-400 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1201,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl mr-3",
                                            children: obtenerLogoCentro(centroDelUsuario.nombre)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1207,
                                            columnNumber: 41
                                        }, this),
                                        "🏠 Tu Centro: ",
                                        centroDelUsuario.nombre
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1199,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: "Ranking:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1213,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-lg",
                                                    children: [
                                                        centroDelUsuario.medalla,
                                                        " #",
                                                        centroDelUsuario.ranking
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1214,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1212,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: "Puntuación:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1217,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-lg font-bold",
                                                    children: centroDelUsuario.puntajeTotal.toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1218,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1216,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: "Miembros:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1221,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    children: [
                                                        centroDelUsuario.estudiantesActivos,
                                                        "/",
                                                        centroDelUsuario.estudiantes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1222,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-yellow-600",
                                                    children: "estudiantes + docentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1223,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1220,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-700",
                                                    children: "Concursos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1226,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2",
                                                    children: centroDelUsuario.concursosGanados
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1227,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1225,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1211,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1198,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1197,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1196,
                    columnNumber: 21
                }, this),
                centroDelUsuario && (()=>{
                    const premioCentro = obtenerPremioDelCentro(centroDelUsuario.nombre);
                    return premioCentro ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 rounded-lg p-6 shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mr-4",
                                    children: "🎉"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-purple-800 mb-2",
                                            children: "¡Felicitaciones! Tu centro ha ganado un premio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1243,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white bg-opacity-60 rounded-lg p-4 inline-block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl mr-2",
                                                            children: premioCentro.emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1248,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-purple-800",
                                                            children: [
                                                                premioCentro.titulo,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-purple-700",
                                                            children: normalizarValorPremio(premioCentro.premio)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1250,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-purple-600 mb-2",
                                                    children: premioCentro.descripcion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-purple-800",
                                                            children: [
                                                                "🏆 ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Bonus obtenido:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1255,
                                                                    columnNumber: 52
                                                                }, this),
                                                                " +",
                                                                premioCentro.puntosExtra,
                                                                " puntos extra"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1254,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block",
                                                            children: [
                                                                "🏅 ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Insignia automática:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1258,
                                                                    columnNumber: 52
                                                                }, this),
                                                                " Asignada a todos los miembros del centro"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1257,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1246,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1242,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1240,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 1239,
                        columnNumber: 25
                    }, this) : null;
                })(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-cyan-800 mb-6 flex items-center",
                            children: "📊 Gráficos de Progreso y Análisis"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1270,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-cyan-700 mb-4",
                                    children: "🏆 Top 3 Centros - Barras de Progreso"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1276,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: centros.slice(0, 3).map((centro, index)=>{
                                        const maxPuntos = centros[0]?.puntajeTotal || 1;
                                        const porcentaje = centro.puntajeTotal / maxPuntos * 100;
                                        const colores = [
                                            "from-yellow-400 to-orange-500",
                                            "from-gray-400 to-gray-600",
                                            "from-orange-400 to-red-500"
                                        ];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-lg p-4 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl",
                                                                    children: centro.medalla
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1287,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-gray-800",
                                                                    children: centro.nombre
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1288,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1286,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold text-cyan-600",
                                                            children: [
                                                                centro.puntajeTotal.toLocaleString(),
                                                                " pts"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1290,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full bg-gray-200 rounded-full h-4 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full bg-gradient-to-r ${colores[index]} transition-all duration-1000 ease-out rounded-full`,
                                                        style: {
                                                            width: `${porcentaje}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-600 mt-1",
                                                    children: [
                                                        porcentaje.toFixed(1),
                                                        "% del máximo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1302,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, centro.nombre, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1284,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1277,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1275,
                            columnNumber: 21
                        }, this),
                        asignaturaSeleccionada !== "todas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-semibold text-cyan-700 mb-4",
                                    children: [
                                        "📚 Análisis Específico: ",
                                        asignaturaSeleccionada.charAt(0).toUpperCase() + asignaturaSeleccionada.slice(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1314,
                                    columnNumber: 29
                                }, this),
                                hayDatosAsignatura ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-800",
                                            children: [
                                                "🔍 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Vista filtrada por asignatura:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1321,
                                                    columnNumber: 44
                                                }, this),
                                                " Mostrando solo actividad relacionada con ",
                                                asignaturaSeleccionada
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600 mt-2",
                                            children: "Los puntos de respuestas correctas corresponden únicamente a preguntas de esta materia específica. Las demás métricas (concursos, historias, interacciones) se muestran proporcionalmente."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-xs text-blue-500 bg-blue-100 rounded p-2",
                                            children: [
                                                "💡 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Tip:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 44
                                                }, this),
                                                ' Para ver el rendimiento completo de todos los centros, selecciona "📚 todas las asignaturas"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1319,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-orange-50 border border-orange-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-orange-800",
                                            children: [
                                                "📊 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Sin datos específicos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1334,
                                                    columnNumber: 44
                                                }, this),
                                                " Aún no hay actividad registrada para ",
                                                asignaturaSeleccionada
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-orange-600 mt-2",
                                            children: "Los rankings mostrados son estimaciones basadas en el rendimiento general de cada centro. Los datos reales aparecerán cuando los usuarios respondan preguntas de esta materia."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1336,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-xs text-orange-500 bg-orange-100 rounded p-2",
                                            children: [
                                                "🎯 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Para generar datos reales:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1341,
                                                    columnNumber: 44
                                                }, this),
                                                " Los usuarios deben participar en competencias o responder preguntas específicas de ",
                                                asignaturaSeleccionada
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1340,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1313,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-green-700",
                                            children: "Total de Centros"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1351,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-green-800",
                                            children: centros.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1352,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600",
                                            children: "Participando en la liga"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-blue-700",
                                            children: "Puntuación Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1357,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-blue-800",
                                            children: centros.reduce((total, centro)=>total + centro.puntajeTotal, 0).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1358,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600",
                                            children: "Puntos acumulados"
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
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold text-purple-700",
                                            children: "Promedio de Centro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1365,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-purple-800",
                                            children: Math.round(centros.reduce((total, centro)=>total + centro.puntajeTotal, 0) / centros.length || 0).toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1366,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600",
                                            children: "Puntos por centro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1364,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1349,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1269,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-indigo-800 mb-4 flex items-center",
                            children: "📅 Información del Ciclo de Competencia"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1376,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 border border-indigo-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-indigo-600 font-semibold",
                                            children: "Mes Actual"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1381,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-indigo-800",
                                            children: new Date().toLocaleDateString('es-ES', {
                                                month: 'long',
                                                year: 'numeric'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1382,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-indigo-600 mt-1",
                                            children: [
                                                "Progreso: ",
                                                obtenerInfoCicloMensual().progresoDelMes,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1385,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1380,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 border border-orange-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-orange-600 font-semibold",
                                            children: "Días Restantes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1391,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-orange-800",
                                            children: [
                                                obtenerInfoCicloMensual().diasRestantes,
                                                " días"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1392,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-orange-600 mt-1",
                                            children: "Hasta próximo ranking"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1395,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1390,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-4 border border-green-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-green-600 font-semibold",
                                            children: "Próximo Ciclo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1401,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold text-green-800 text-sm",
                                            children: obtenerInfoCicloMensual().nombreProximoMes
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1402,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-green-600 mt-1",
                                            children: "Nuevo ranking mensual"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1405,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1400,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1379,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-xs text-indigo-600 bg-white rounded p-3 border border-indigo-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "📊 Ciclo de Competencia:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1411,
                                    columnNumber: 25
                                }, this),
                                " Los rankings se actualizan automáticamente cada mes. Los puntos se acumulan desde el día 1 hasta el último día del mes, creando una competencia fresca cada 30 días.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: " ¡Cada mes es una nueva oportunidad para que tu centro llegue al primer puesto!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1413,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1410,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1375,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-800 mb-4",
                            children: "📊 Sistema de Puntuación"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1419,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "¡Novedad!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 29
                                    }, this),
                                    " 🎉 Ahora los ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "docentes también participan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 69
                                    }, this),
                                    " en el ranking de su centro. ¡Profesores y estudiantes trabajando juntos por el éxito del centro!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1421,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1420,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-6 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-blue-700",
                                            children: "Estudiantes Activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1428,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-blue-800",
                                            children: "10 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1429,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600",
                                            children: "por estudiante activo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1430,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1427,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-indigo-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-indigo-700",
                                            children: "Docentes Activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1433,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-indigo-800",
                                            children: "20 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1434,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-indigo-600",
                                            children: "por docente activo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1435,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1432,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-green-700",
                                            children: "Respuestas Correctas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1438,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-green-800",
                                            children: "5 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1439,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600",
                                            children: "estudiantes + docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1440,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1437,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-yellow-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-yellow-700",
                                            children: "Concursos Ganados"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1443,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-yellow-800",
                                            children: "50 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1444,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-yellow-600",
                                            children: "estudiantes + docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1445,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1442,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-purple-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-purple-700",
                                            children: "Historias Creadas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1448,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-purple-800",
                                            children: "15 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1449,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600",
                                            children: "estudiantes + docentes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1447,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-pink-50 p-3 rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold text-pink-700",
                                            children: "Interacciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-pink-800",
                                            children: "2 pts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1454,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-pink-600",
                                            children: "likes, amigos, comentarios"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1455,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1452,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1426,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1418,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold",
                                    children: [
                                        "🏆 Ranking de Centros Educativos",
                                        asignaturaSeleccionada !== "todas" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-normal opacity-90 ml-2",
                                            children: [
                                                "- ",
                                                asignaturaSeleccionada.charAt(0).toUpperCase() + asignaturaSeleccionada.slice(1),
                                                !hayDatosAsignatura && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: " (Estimado)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1468,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1466,
                                            columnNumber: 33
                                        }, this),
                                        cursoSeleccionado !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-normal opacity-90 ml-2",
                                            children: [
                                                "- ",
                                                cursoSeleccionado
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1472,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1463,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    lineNumber: 1477,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm opacity-80",
                                    children: "📅 Se actualiza automáticamente cada mes | 🔄 Datos en tiempo real"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1491,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1462,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Ranking"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1500,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Centro"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1501,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Puntuación"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1502,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Miembros"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1503,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Activos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1504,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Respuestas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1505,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Concursos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1506,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Historias"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1507,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1499,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1498,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: centros.map((centro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `hover:bg-gray-50 ${centro.nombre === miCentro ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl mr-2",
                                                                    children: centro.medalla
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1518,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-bold text-gray-900",
                                                                    children: [
                                                                        "#",
                                                                        centro.ranking
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1519,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1517,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1516,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                esImagen(obtenerLogoCentro(centro.nombre)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `/${obtenerLogoCentro(centro.nombre)}`,
                                                                    alt: `Logo ${centro.nombre}`,
                                                                    className: "w-10 h-10 object-contain rounded-lg border border-gray-300 mr-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1525,
                                                                    columnNumber: 53
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl mr-3",
                                                                    children: obtenerLogoCentro(centro.nombre)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1531,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-900",
                                                                            children: centro.nombre
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                            lineNumber: 1534,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        centro.nombre === miCentro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-yellow-600",
                                                                            children: "👈 Tu centro"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                            lineNumber: 1536,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1533,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1523,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1522,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-bold text-blue-600",
                                                            children: centro.puntajeTotal.toLocaleString()
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                        children: centro.estudiantes
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1546,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800",
                                                            children: centro.estudiantesActivos
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1550,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1549,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                        children: centro.respuestasCorrectas
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1554,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                        children: centro.concursosGanados
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1557,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                        children: centro.historiasCreadas
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1560,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, centro.nombre, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1512,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1510,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1497,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1496,
                            columnNumber: 21
                        }, this),
                        centros.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-xl mb-4",
                                    children: "📊"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: "No hay datos de centros disponibles todavía."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1572,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-2",
                                    children: "Los datos aparecerán cuando haya actividad de estudiantes."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1573,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1570,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1461,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-blue-800 mb-2",
                                    children: "🎯 ¿Cómo Participar?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1581,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-blue-700 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Estudiantes y Docentes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1583,
                                                    columnNumber: 35
                                                }, this),
                                                " pueden participar"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1583,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Mantente activo en la plataforma"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1584,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Responde preguntas correctamente"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1585,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Participa en concursos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1586,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Crea historias interesantes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1587,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Interactúa con compañeros y profesores"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1588,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1582,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1580,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-green-800 mb-2",
                                    children: "🏆 Premios del Mes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1593,
                                    columnNumber: 25
                                }, this),
                                premiosDelMes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        premiosDelMes.slice(0, 10).map((premio, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center justify-between p-2 rounded ${premio.centro === miCentro ? 'bg-yellow-100 border border-yellow-300' : 'bg-white'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg mr-2",
                                                                children: premio.emoji
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1600,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-green-800",
                                                                        children: [
                                                                            premio.titulo,
                                                                            ":"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                        lineNumber: 1602,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-green-700 ml-1",
                                                                        children: premio.premio
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                        lineNumber: 1603,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    premio.centro === miCentro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-yellow-600 font-bold ml-2",
                                                                        children: "🎉 ¡Tu centro!"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                        lineNumber: 1605,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1601,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1599,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-semibold text-green-800",
                                                                children: premio.centro
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1610,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-green-600",
                                                                children: [
                                                                    "+",
                                                                    premio.puntosExtra,
                                                                    " pts"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1611,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-green-500",
                                                                children: "🏅 Insignia asignada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                lineNumber: 1612,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                        lineNumber: 1609,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1597,
                                                columnNumber: 37
                                            }, this)),
                                        premiosDelMes.length > 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-sm text-green-600 mt-2",
                                            children: [
                                                "Y ",
                                                premiosDelMes.length - 10,
                                                " premios más de participación..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1617,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1595,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-green-700 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🥇 1er lugar: Trofeo digital especial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1624,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🥈 2do lugar: Certificado de honor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1625,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🥉 3er lugar: Mención especial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1626,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "🏆 Top 10: Badge exclusivo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1627,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "📚 Participación: Reconocimiento"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1628,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1623,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1592,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 border border-green-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-green-800 mb-2",
                                    children: "✅ Características Implementadas"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1634,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-green-700 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Competencias por asignatura (selector activo)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1636,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Gráficos de progreso (rankings visuales)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1637,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Modo vacaciones (detección automática)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1638,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Challenges especiales (eventos temáticos)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1639,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Sistema anti-trampa (cursos automáticos)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1640,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "✅ Rankings históricos (persistencia completa)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1641,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1635,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1633,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1579,
                    columnNumber: 17
                }, this),
                modoVisualizacion === 'anual' && centrosAnuales.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-amber-800 mb-6 flex items-center",
                            children: [
                                "🏆 Ranking Acumulativo Anual ",
                                fechaActual.getFullYear()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1649,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4",
                            children: centrosAnuales.slice(0, 10).map((centro, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center justify-between p-4 rounded-lg border-2 ${index === 0 ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-400' : index === 1 ? 'bg-gradient-to-r from-gray-100 to-slate-100 border-gray-400' : index === 2 ? 'bg-gradient-to-r from-orange-100 to-amber-100 border-orange-400' : 'bg-white border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-2xl font-bold ${index === 0 ? 'text-yellow-600' : index === 1 ? 'text-gray-600' : index === 2 ? 'text-orange-600' : 'text-gray-800'}`,
                                                    children: [
                                                        "#",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1660,
                                                    columnNumber: 41
                                                }, this),
                                                esImagen(obtenerLogoCentro(centro.nombre)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/${obtenerLogoCentro(centro.nombre)}`,
                                                    alt: `Logo ${centro.nombre}`,
                                                    className: "w-12 h-12 object-contain rounded-lg border border-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1668,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: obtenerLogoCentro(centro.nombre)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1674,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-800",
                                                            children: centro.nombre
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1677,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                "Puntuación acumulativa: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold",
                                                                    children: centro.puntajeTotal.toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 73
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1676,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1659,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-3xl ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1684,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                                            lineNumber: 1683,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, centro.nombre, true, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1654,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1652,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1648,
                    columnNumber: 21
                }, this),
                historialGanadores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-indigo-800 mb-6 flex items-center",
                            children: "📅 Historial de Ganadores Mensuales"
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1700,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                            children: historialGanadores.slice(0, 12).map((ganador)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg border border-indigo-200 p-4 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-3",
                                                children: esImagen(obtenerLogoCentro(ganador.centro || "")) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/${obtenerLogoCentro(ganador.centro || "")}`,
                                                    alt: `Logo ${ganador.centro || "Centro"}`,
                                                    className: "w-16 h-16 object-contain rounded-lg border-2 border-yellow-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1709,
                                                    columnNumber: 49
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-4xl",
                                                    children: obtenerLogoCentro(ganador.centro || "")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                    lineNumber: 1715,
                                                    columnNumber: 49
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1707,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-gray-800 mb-1",
                                                children: ganador.centro || "Centro Desconocido"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1718,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mb-2",
                                                children: [
                                                    ganador.mes,
                                                    " ",
                                                    ganador.año
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1719,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold text-indigo-600",
                                                children: [
                                                    (ganador.puntaje || 0).toLocaleString(),
                                                    " pts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1722,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mt-2",
                                                children: "🏆"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                                lineNumber: 1725,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                                        lineNumber: 1706,
                                        columnNumber: 37
                                    }, this)
                                }, `${ganador.mes}-${ganador.año}`, false, {
                                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                                    lineNumber: 1705,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1703,
                            columnNumber: 25
                        }, this),
                        historialGanadores.length > 12 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "Y ",
                                    historialGanadores.length - 12,
                                    " ganadores más en el historial..."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/centros-competencia/page.tsx",
                                lineNumber: 1732,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 1731,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 1699,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/centros-competencia/page.tsx",
            lineNumber: 1027,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/centros-competencia/page.tsx",
        lineNumber: 1026,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_centros-competencia_page_tsx_acf574c1._.js.map