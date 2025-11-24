(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/torneos-premium/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TorneosPremiumPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [usuarioActual, setUsuarioActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPremium, setIsPremium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [torneos, setTorneos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [torneoActivo, setTorneoActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cursoUsuario, setCursoUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TorneosPremiumPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userData = localStorage.getItem('currentUser') || localStorage.getItem('user');
                if (userData) {
                    const user = JSON.parse(userData);
                    setUsuarioActual(user);
                    // Determinar curso del usuario
                    let cursoDetectado = 1; // Por defecto 1º Primaria
                    // Si es docente, usar 6º curso por defecto
                    const esDocente = user.esProfesor || user.tipo === "docente" || user.tipo === "Docente";
                    if (esDocente) {
                        cursoDetectado = 6;
                    } else if (user.curso) {
                        // Para estudiantes, usar su curso real
                        if (typeof user.curso === "string") {
                            const match = user.curso.match(/(\d)/);
                            if (match) {
                                const numero = parseInt(match[1]);
                                cursoDetectado = numero;
                            }
                        } else if (typeof user.curso === "number") {
                            cursoDetectado = user.curso;
                        }
                    }
                    // Asegurar que el curso esté entre 1 y 6
                    if (cursoDetectado < 1) cursoDetectado = 1;
                    if (cursoDetectado > 6) cursoDetectado = 6;
                    setCursoUsuario(cursoDetectado);
                    // Verificar si es premium
                    const premiumInfo = localStorage.getItem(`premium_${user.nick}`);
                    if (premiumInfo) {
                        const premium = JSON.parse(premiumInfo);
                        if (new Date(premium.expiracion) > new Date()) {
                            setIsPremium(true);
                            cargarTorneos();
                        } else {
                            alert('Tu suscripción Premium ha expirado. Renueva para acceder a los Torneos Premium.');
                            router.push('/premium-nuevo');
                        }
                    } else {
                        alert('Los Torneos Premium son exclusivos para usuarios Premium.');
                        router.push('/premium-nuevo');
                    }
                } else {
                    router.push('/');
                }
                setLoading(false);
            }
        }
    }["TorneosPremiumPage.useEffect"], []);
    const esTorneoDisponibleParaUsuario = (torneoId)=>{
        // Extraer el número de curso del ID del torneo (torneo-mensual-1primaria -> 1)
        const match = torneoId.match(/torneo-mensual-(\d)primaria/);
        if (match) {
            const cursoTorneo = parseInt(match[1]);
            return cursoTorneo === cursoUsuario;
        }
        return false;
    };
    const cargarTorneos = ()=>{
        // FORZAR recreación de torneos nuevos - limpiar datos antiguos
        localStorage.removeItem('torneos_premium');
        localStorage.removeItem('torneos_premium_last_reset');
        // Crear torneos mensuales por defecto
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const torneosDefault = [
            {
                id: 'torneo-mensual-1primaria',
                nombre: 'Torneo Mensual 1º Primaria',
                descripcion: 'Compite en el torneo mensual de 1º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-2primaria',
                nombre: 'Torneo Mensual 2º Primaria',
                descripcion: 'Compite en el torneo mensual de 2º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-3primaria',
                nombre: 'Torneo Mensual 3º Primaria',
                descripcion: 'Compite en el torneo mensual de 3º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-4primaria',
                nombre: 'Torneo Mensual 4º Primaria',
                descripcion: 'Compite en el torneo mensual de 4º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-5primaria',
                nombre: 'Torneo Mensual 5º Primaria',
                descripcion: 'Compite en el torneo mensual de 5º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-6primaria',
                nombre: 'Torneo Mensual 6º Primaria',
                descripcion: 'Compite en el torneo mensual de 6º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            }
        ];
        setTorneos(torneosDefault);
        localStorage.setItem('torneos_premium', JSON.stringify(torneosDefault));
        localStorage.setItem('torneos_premium_last_reset', new Date().toISOString());
    };
    const registrarseTorneo = (torneoId)=>{
        if (!usuarioActual) return;
        const torneosActualizados = torneos.map((torneo)=>{
            if (torneo.id === torneoId) {
                if (torneo.participantes.includes(usuarioActual.nick)) {
                    alert('Ya estás registrado en este torneo.');
                    return torneo;
                }
                if (torneo.participantes.length >= torneo.maxParticipantes) {
                    alert('Este torneo ya está completo.');
                    return torneo;
                }
                return {
                    ...torneo,
                    participantes: [
                        ...torneo.participantes,
                        usuarioActual.nick
                    ]
                };
            }
            return torneo;
        });
        setTorneos(torneosActualizados);
        localStorage.setItem('torneos_premium', JSON.stringify(torneosActualizados));
        alert('¡Te has registrado exitosamente en el torneo!');
    };
    const iniciarTorneo = (torneo)=>{
        // Guardar información del torneo activo en localStorage
        localStorage.setItem('torneo_activo_premium', JSON.stringify({
            torneoId: torneo.id,
            curso: torneo.id.split('-')[2],
            startTime: new Date().toISOString()
        }));
        // Redirigir al modo torneo en Aprende con Pipo
        router.push('/aprende-con-pipo?modo=torneo');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-xl",
                children: "Cargando Torneos Premium..."
            }, void 0, false, {
                fileName: "[project]/src/app/torneos-premium/page.tsx",
                lineNumber: 223,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/torneos-premium/page.tsx",
            lineNumber: 222,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isPremium) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-2",
                            children: "🎯 Torneos Premium"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 237,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-100 text-lg",
                            children: "Compite en torneos exclusivos y gana premios especiales"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 238,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 236,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                torneoActivo ? /* Pantalla de torneo activo */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: torneoActivo.nombre
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 244,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "🎯"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 245,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "Torneo en progreso..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 246,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin text-4xl",
                            children: "⏳"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 247,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-4",
                            children: "Calculando resultados..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 248,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 243,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /* Lista de torneos */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: torneos.map((torneo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-purple-500 to-blue-500 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: torneo.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: torneo.descripcion
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Categoría:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-purple-600",
                                                            children: torneo.categoria
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Participantes:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: [
                                                                torneo.participantes.length,
                                                                "/",
                                                                torneo.maxParticipantes
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: "Estado:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-semibold ${torneo.estado === 'registro' ? 'text-green-600' : torneo.estado === 'finalizado' ? 'text-gray-600' : 'text-blue-600'}`,
                                                            children: torneo.estado === 'registro' ? 'Abierto' : torneo.estado === 'finalizado' ? 'Finalizado' : 'Disponible'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-yellow-50 p-3 rounded mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-yellow-800",
                                                    children: "🏆 Premio:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-yellow-700",
                                                    children: torneo.premio
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        torneo.estado === 'finalizado' && torneo.ganador && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 p-3 rounded mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-green-800",
                                                    children: "🥇 Ganador:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-green-700",
                                                    children: torneo.ganador
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                torneo.resultados && torneo.resultados.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-green-600",
                                                            children: "Top 3:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        torneo.resultados.slice(0, 3).map((resultado, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs",
                                                                children: [
                                                                    idx + 1,
                                                                    ". ",
                                                                    resultado.nick,
                                                                    " - ",
                                                                    resultado.aciertos,
                                                                    "/25 (",
                                                                    resultado.puntuacion,
                                                                    "pts)"
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                torneo.estado === 'registro' && !torneo.participantes.includes(usuarioActual.nick) && esTorneoDisponibleParaUsuario(torneo.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>registrarseTorneo(torneo.id),
                                                    disabled: torneo.participantes.length >= torneo.maxParticipantes,
                                                    className: "flex-1 bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors",
                                                    children: "Registrarse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                torneo.estado === 'registro' && !torneo.participantes.includes(usuarioActual.nick) && !esTorneoDisponibleParaUsuario(torneo.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-center bg-gray-100 text-gray-600 px-4 py-2 rounded font-semibold",
                                                    children: [
                                                        "Solo para ",
                                                        torneo.nombre.split(' ')[2],
                                                        " ",
                                                        torneo.nombre.split(' ')[3]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                torneo.participantes.includes(usuarioActual.nick) && torneo.estado === 'registro' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-center bg-green-100 text-green-800 px-4 py-2 rounded font-semibold",
                                                    children: "✓ Registrado"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                torneo.participantes.includes(usuarioActual.nick) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>iniciarTorneo(torneo),
                                                    className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors",
                                                    children: "Comenzar Torneo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, torneo.id, true, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 254,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 252,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white mb-4",
                            children: "📊 Tus Estadísticas en Torneos"
                        }, void 0, false, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 344,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 rounded p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"victorias": 0}').victorias
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Victorias"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 rounded p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"participaciones": 0}').participaciones
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Participaciones"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 rounded p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: [
                                                (()=>{
                                                    const stats = JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"victorias": 0, "participaciones": 0}');
                                                    return stats.participaciones > 0 ? Math.round(stats.victorias / stats.participaciones * 100) : 0;
                                                })(),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 359,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Tasa de Victoria"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 358,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/20 rounded p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"puntuacionTotal": 0}').puntuacionTotal
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-purple-100",
                                            children: "Puntuación Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                                            lineNumber: 371,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/torneos-premium/page.tsx",
                            lineNumber: 345,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 343,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push('/premium-nuevo'),
                        className: "bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors",
                        children: "← Volver a Premium"
                    }, void 0, false, {
                        fileName: "[project]/src/app/torneos-premium/page.tsx",
                        lineNumber: 378,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/torneos-premium/page.tsx",
                    lineNumber: 377,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/torneos-premium/page.tsx",
            lineNumber: 234,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/torneos-premium/page.tsx",
        lineNumber: 233,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TorneosPremiumPage, "RF98odApoKJ4BZ4IsbAeBgPFyho=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TorneosPremiumPage;
const __TURBOPACK__default__export__ = TorneosPremiumPage;
var _c;
__turbopack_context__.k.register(_c, "TorneosPremiumPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_809a34ed._.js.map