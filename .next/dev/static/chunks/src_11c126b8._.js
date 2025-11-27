(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/normalizadores.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Utilidades para normalizar datos que provienen de la API
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
        const obj = valor;
        return obj.nombre || obj.titulo || obj.descripcion || JSON.stringify(valor);
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
        const obj = evento;
        return {
            nombre: obj.nombre || obj.tipo || '',
            descripcion: obj.descripcion || obj.bonus || '',
            emoji: obj.emoji || '',
            tipo: obj.tipo || '',
            multiplicador: obj.multiplicador || null
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$normalizadores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/normalizadores.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    // Función temporal para traducciones mientras I18nProvider está deshabilitado
    const t = (key)=>{
        const translations = {
            'leagueTitle': 'Liga de Centros',
            'leagueSubtitle': 'Compite con otros centros educativos'
        };
        return translations[key] || key;
    };
    // const { t } = useTranslation();
    const [mesesDisponibles, setMesesDisponibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historialGanadores, setHistorialGanadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [premiosDelMes, setPremiosDelMes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [usuario, setUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [allUsers, setAllUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
                // Meses diferentes
                enPeriodo = mes === vacacion.inicio.mes && dia >= vacacion.inicio.dia || mes > vacacion.inicio.mes && mes < vacacion.fin.mes || mes === vacacion.fin.mes && dia <= vacacion.fin.dia;
            }
            if (enPeriodo) {
                return {
                    esVacacion: true,
                    tipo: vacacion.tipo,
                    evento: vacacion
                };
            }
        }
        return {
            esVacacion: false,
            tipo: "",
            evento: null
        };
    };
    // ✅ CHALLENGES ESPECIALES: Función para obtener challenge actual
    const obtenerChallengeActual = ()=>{
        // Lógica simplificada para obtener challenge actual
        return null; // Por ahora retornamos null
    };
    // ✅ RANKINGS: Funciones para guardar y cargar rankings mensuales
    const guardarRankingMensual = (centrosData)=>{
    // Lógica simplificada
    };
    const cargarRankingMensual = (año, mes)=>{
        // Lógica simplificada
        return [];
    };
    const obtenerHistorialGanadores = ()=>{
        // Lógica simplificada
        return [];
    };
    const obtenerPremiosDelMes = ()=>{
        // Lógica simplificada
        return [];
    };
    // ✅ CARGA DE DATOS PRINCIPAL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CentrosCompetencia.useEffect": ()=>{
            const cargarDatos = {
                "CentrosCompetencia.useEffect.cargarDatos": async ()=>{
                    try {
                        // Lógica simplificada de carga de datos
                        setLoading(false);
                    } catch (error) {
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
    // ✅ DETECTAR EVENTOS ESPECIALES
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CentrosCompetencia.useEffect": ()=>{
            const periodoVacaciones = detectarPeriodoVacaciones();
            setModoVacaciones(periodoVacaciones.esVacacion);
            setTipoVacacion(periodoVacaciones.tipo);
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
            const challengeActual = obtenerChallengeActual();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setEventoEspecial(eventoNormalizado);
        }
    }["CentrosCompetencia.useEffect"], []);
    // Obtener el centro del usuario actual
    const centroDelUsuario = centros.find((c)=>c.nombre === miCentro);
    // Calcular la descripción del título
    const mesActual = new Date().toLocaleDateString('es-ES', {
        month: 'long',
        year: 'numeric'
    });
    let descripcionTitulo = "";
    if (asignaturaSeleccionada === "todas" && cursoSeleccionado === "todos") {
        descripcionTitulo = `Competencia del mes de ${mesActual}`;
    } else if (asignaturaSeleccionada !== "todas" && cursoSeleccionado === "todos") {
        descripcionTitulo = hayDatosAsignatura ? `Vista específica de ${asignaturaSeleccionada} - ${mesActual}` : `Estimaciones para ${asignaturaSeleccionada} (sin datos específicos aún) - ${mesActual}`;
    } else if (asignaturaSeleccionada === "todas" && cursoSeleccionado !== "todos") {
        descripcionTitulo = `Competencia del mes de ${mesActual} - ${cursoSeleccionado}`;
    } else {
        descripcionTitulo = hayDatosAsignatura ? `Vista específica de ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${mesActual}` : `Estimaciones para ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${mesActual}`;
    }
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
                        lineNumber: 218,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-blue-600 font-semibold",
                        children: "Cargando competencia entre centros..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 219,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/centros-competencia/page.tsx",
                lineNumber: 217,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/centros-competencia/page.tsx",
            lineNumber: 216,
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
                            lineNumber: 230,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-700 max-w-2xl mx-auto",
                            children: t('leagueSubtitle')
                        }, void 0, false, {
                            fileName: "[project]/src/app/centros-competencia/page.tsx",
                            lineNumber: 233,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 229,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Página en desarrollo..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/centros-competencia/page.tsx",
                        lineNumber: 240,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/centros-competencia/page.tsx",
                    lineNumber: 239,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/centros-competencia/page.tsx",
            lineNumber: 227,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/centros-competencia/page.tsx",
        lineNumber: 226,
        columnNumber: 9
    }, this);
}
_s(CentrosCompetencia, "ir6WUypXKDlecDiA4lYXSmStw0A=");
_c = CentrosCompetencia;
var _c;
__turbopack_context__.k.register(_c, "CentrosCompetencia");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_11c126b8._.js.map