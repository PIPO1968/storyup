module.exports = [
"[project]/src/app/admin-premium/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPremium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AdminPremium() {
    const [mensaje, setMensaje] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [solicitudesPendientes, setSolicitudesPendientes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mostrarSolicitudes, setMostrarSolicitudes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usuarioLogueado, setUsuarioLogueado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [accesoDenegado, setAccesoDenegado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nick, setNick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Lista de administradores autorizados - Solo PIPO68
    const ADMINS_AUTORIZADOS = [
        'PIPO68'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Verificar si hay usuario logueado
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Si no tiene acceso, mostrar página de error
    if (accesoDenegado) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🚫"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-red-600 mb-4",
                        children: "Acceso Denegado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Acceso restringido a esta página de administración."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.href = '/',
                        className: "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all",
                        children: "Volver al Inicio"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-gray-100 rounded-lg text-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Acceso autorizado para usuarios registrados:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 90
                                }, this),
                                "• Administrador: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "PIPO68"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 69
                                }, this),
                                '• Docentes: Usuarios con tipo "docente"',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 68
                                }, this),
                                "URL: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "bg-gray-200 px-1 rounded",
                                    children: "tudominio.com/admin-premium"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin-premium/page.tsx",
                            lineNumber: 86,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-premium/page.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin-premium/page.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, this);
    }
    // Cargar solicitudes pendientes
    const cargarSolicitudes = ()=>{
        try {
            const solicitudes = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
            setSolicitudesPendientes(solicitudes.filter((s)=>s.estado === 'pendiente'));
            setMostrarSolicitudes(true);
        } catch (error) {
            console.error('Error al cargar solicitudes:', error);
            setMensaje("❌ Error al cargar solicitudes de pago");
        }
    };
    // Aprobar solicitud de pago (activar Premium)
    const aprobarSolicitud = (solicitud)=>{
        try {
            // Activar Premium para el usuario
            const fechaExpiracion = new Date();
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: solicitud.tipo,
                precio: solicitud.precio,
                metodoPago: solicitud.metodoPago,
                activadoPorAdmin: true,
                solicitudId: solicitud.id,
                emailPago: solicitud.email
            };
            localStorage.setItem(`premium_${solicitud.nick}`, JSON.stringify(premiumData));
            // Marcar solicitud como aprobada
            const todasSolicitudes = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
            const solicitudIndex = todasSolicitudes.findIndex((s)=>s.id === solicitud.id);
            if (solicitudIndex !== -1) {
                todasSolicitudes[solicitudIndex].estado = 'aprobado';
                todasSolicitudes[solicitudIndex].fechaAprobacion = new Date().toISOString();
                localStorage.setItem('solicitudes_premium', JSON.stringify(todasSolicitudes));
            }
            setMensaje(`🎉 Premium activado para ${solicitud.nick} tras verificar pago de €${solicitud.precio}`);
            cargarSolicitudes(); // Recargar lista
            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', {
                detail: {
                    nick: solicitud.nick,
                    action: 'add'
                }
            }));
        } catch (error) {
            console.error('Error al aprobar solicitud:', error);
            setMensaje("❌ Error al aprobar la solicitud");
        }
    };
    // Rechazar solicitud
    const rechazarSolicitud = (solicitud, motivo = 'Pago no verificado')=>{
        try {
            const todasSolicitudes = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
            const solicitudIndex = todasSolicitudes.findIndex((s)=>s.id === solicitud.id);
            if (solicitudIndex !== -1) {
                todasSolicitudes[solicitudIndex].estado = 'rechazado';
                todasSolicitudes[solicitudIndex].fechaRechazo = new Date().toISOString();
                todasSolicitudes[solicitudIndex].motivo = motivo;
                localStorage.setItem('solicitudes_premium', JSON.stringify(todasSolicitudes));
            }
            setMensaje(`❌ Solicitud rechazada para ${solicitud.nick}: ${motivo}`);
            cargarSolicitudes(); // Recargar lista
        } catch (error) {
            console.error('Error al rechazar solicitud:', error);
            setMensaje("❌ Error al rechazar la solicitud");
        }
    };
    // Hacer Premium
    const hacerPremium = ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const fechaExpiracion = new Date();
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: "anual",
                precio: 12,
                activadoPorAdmin: true,
                beneficios: {
                    perfil: "Avatar personalizado, marco dorado, efectos visuales",
                    competencia: "Liga Premium exclusiva, eventos temáticos",
                    aprendizaje: "Minijuegos Premium, pistas ilimitadas, historias Premium"
                }
            };
            localStorage.setItem(`premium_${usuarioSeleccionado}`, JSON.stringify(premiumData));
            setMensaje(`🎉 ¡Premium activado para ${usuarioSeleccionado} hasta ${fechaExpiracion.toLocaleDateString()}!`);
            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', {
                detail: {
                    nick: usuarioSeleccionado,
                    action: 'add'
                }
            }));
        } catch (error) {
            console.error('Error al activar premium:', error);
            setMensaje("❌ Error al activar Premium");
        }
    };
    // Anular Premium
    const anularPremium = ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            localStorage.removeItem(`premium_${nick}`);
            setMensaje(`🗑️ Premium anulado para ${nick}`);
            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', {
                detail: {
                    nick,
                    action: 'remove'
                }
            }));
        } catch (error) {
            console.error('Error al anular premium:', error);
            setMensaje("❌ Error al anular Premium");
        }
    };
    const activarPremium = ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            // Verificar si ya tiene premium activo
            const premiumExistente = localStorage.getItem(`premium_${nick}`);
            let fechaExpiracion = new Date();
            let tiempoRestante = 0;
            if (premiumExistente) {
                const premiumData = JSON.parse(premiumExistente);
                const fechaExpiracionExistente = new Date(premiumData.expiracion);
                const ahora = new Date();
                if (fechaExpiracionExistente > ahora) {
                    // Calcular días restantes de premium existente
                    tiempoRestante = Math.ceil((fechaExpiracionExistente.getTime() - ahora.getTime()) / (1000 * 60 * 60 * 24));
                }
            }
            // Establecer nueva fecha de expiración: 1 año + tiempo restante
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
            fechaExpiracion.setDate(fechaExpiracion.getDate() + tiempoRestante);
            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: "anual",
                precio: 12,
                activadoPorAdmin: true,
                tiempoRestanteExtendido: tiempoRestante > 0,
                beneficios: {
                    perfil: "Avatar personalizado, marco dorado, efectos visuales",
                    competencia: "Liga Premium exclusiva, eventos temáticos",
                    aprendizaje: "Minijuegos Premium, pistas ilimitadas, historias Premium"
                }
            };
            localStorage.setItem(`premium_${nick}`, JSON.stringify(premiumData));
            const mensajeExtendido = tiempoRestante > 0 ? `\n\n⏰ Se ha añadido 1 año al tiempo restante de tu premium anterior (${tiempoRestante} días).` : '';
            setMensaje(`🎉 ¡Premium activado exitosamente para ${nick}!\n\nVálido hasta: ${fechaExpiracion.toLocaleDateString()}\nBeneficios: Liga Premium Exclusiva, Estadísticas Avanzadas, Avatares Especiales y más.${mensajeExtendido}`);
            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', {
                detail: {
                    nick,
                    action: 'add'
                }
            }));
        } catch (error) {
            console.error('Error al activar Premium:', error);
            setMensaje("❌ Error al activar Premium. Inténtalo de nuevo.");
        }
    };
    const verificarPremium = ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            const premiumInfo = localStorage.getItem(`premium_${nick}`);
            if (premiumInfo) {
                const premium = JSON.parse(premiumInfo);
                if (new Date(premium.expiracion) > new Date()) {
                    setMensaje(`✅ ${nick} tiene Premium ACTIVO hasta: ${new Date(premium.expiracion).toLocaleDateString()}`);
                } else {
                    setMensaje(`❌ ${nick} tenía Premium pero ha EXPIRADO el: ${new Date(premium.expiracion).toLocaleDateString()}`);
                }
            } else {
                setMensaje(`❌ ${nick} NO tiene Premium activado`);
            }
        } catch (error) {
            setMensaje("❌ Error al verificar Premium");
        }
    };
    const desactivarPremium = ()=>{
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }
        try {
            localStorage.removeItem(`premium_${nick}`);
            setMensaje(`🗑️ Premium desactivado para ${nick}`);
        } catch (error) {
            setMensaje("❌ Error al desactivar Premium");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-center mb-8 text-gray-800",
                        children: "🔧 Admin Premium"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 334,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-bold text-gray-700 mb-2",
                                children: "Nick del usuario:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 339,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nick,
                                onChange: (e)=>setNick(e.target.value),
                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                placeholder: "Ej: PIPO68"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 342,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 338,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: activarPremium,
                                className: "bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "✅ Activar Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 352,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: anularPremium,
                                className: "bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "🗑️ Anular Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 359,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: verificarPremium,
                                className: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "🔍 Verificar Estado"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 366,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cargarSolicitudes,
                                className: "bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                                children: "📋 Ver Solicitudes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 373,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 351,
                        columnNumber: 21
                    }, this),
                    mensaje && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-lg ${mensaje.includes('✅') || mensaje.includes('🎉') ? 'bg-green-100 border border-green-300 text-green-800' : mensaje.includes('❌') ? 'bg-red-100 border border-red-300 text-red-800' : 'bg-blue-100 border border-blue-300 text-blue-800'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "whitespace-pre-wrap font-semibold",
                            children: mensaje
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-premium/page.tsx",
                            lineNumber: 388,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 382,
                        columnNumber: 25
                    }, this),
                    mostrarSolicitudes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-gray-800 mb-4 flex items-center gap-2",
                                children: [
                                    "📋 Solicitudes de Pago Pendientes",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full",
                                        children: solicitudesPendientes.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 395,
                                columnNumber: 29
                            }, this),
                            solicitudesPendientes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-center py-8",
                                children: "✅ No hay solicitudes pendientes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 403,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: solicitudesPendientes.map((solicitud)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-gray-200 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-lg text-gray-800",
                                                                children: solicitud.nick
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: solicitud.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: [
                                                                    "📅 ",
                                                                    new Date(solicitud.fechaSolicitud).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-right",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full",
                                                            children: [
                                                                solicitud.metodoPago.toUpperCase(),
                                                                " €",
                                                                solicitud.precio
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>aprobarSolicitud(solicitud),
                                                        className: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all",
                                                        children: "✅ Aprobar y Activar Premium"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>rechazarSolicitud(solicitud),
                                                        className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all",
                                                        children: "❌ Rechazar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, solicitud.id, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 407,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 394,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-yellow-800 mb-2",
                                children: "📋 Instrucciones:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 447,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-sm text-yellow-700 space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Activar Premium:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 449,
                                                columnNumber: 33
                                            }, this),
                                            " Activa Premium por 1 año para cualquier usuario"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 449,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Anular Premium:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 33
                                            }, this),
                                            " Remueve el estado Premium de un usuario"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Verificar Estado:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 451,
                                                columnNumber: 33
                                            }, this),
                                            " Comprueba si un usuario ya tiene Premium activo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Ver Solicitudes:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 33
                                            }, this),
                                            " Muestra pagos pendientes de verificación"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 452,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Aprobar/Rechazar:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 33
                                            }, this),
                                            " Gestiona las solicitudes tras verificar Bizum"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin-premium/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 448,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-orange-100 border border-orange-300 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-orange-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "🔒 Proceso de seguridad:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 33
                                        }, this),
                                        " Ahora los usuarios NO pueden hacerse Premium automáticamente. Deben solicitar y esperar verificación manual del pago."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 456,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-blue-100 border border-blue-300 rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-blue-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "🌐 Acceso en servidor:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 72
                                        }, this),
                                        "• URL: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "bg-blue-200 px-1 rounded",
                                            children: "tudominio.com/admin-premium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 40
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 117
                                        }, this),
                                        "• Protegido por nick de administrador",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 70
                                        }, this),
                                        "• Solo usuario autorizado: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "PIPO68"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin-premium/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin-premium/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin-premium/page.tsx",
                                lineNumber: 463,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 446,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.href = '/estadisticas',
                            className: "bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all",
                            children: "📊 Ver Estadísticas"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin-premium/page.tsx",
                            lineNumber: 474,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin-premium/page.tsx",
                        lineNumber: 473,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin-premium/page.tsx",
                lineNumber: 333,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin-premium/page.tsx",
            lineNumber: 332,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin-premium/page.tsx",
        lineNumber: 331,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_admin-premium_page_tsx_d245b0ed._.js.map