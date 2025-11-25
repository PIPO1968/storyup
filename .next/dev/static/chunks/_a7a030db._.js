(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/UserLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserLink",
    ()=>UserLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const UserLink = ({ nick, className })=>{
    _s();
    const [isPremium, setIsPremium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserLink.useEffect": ()=>{
            const checkPremium = {
                "UserLink.useEffect.checkPremium": ()=>{
                    // Verificar si el usuario es Premium
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && nick) {
                        const premiumInfo = localStorage.getItem(`premium_${nick}`);
                        if (premiumInfo) {
                            try {
                                const premium = JSON.parse(premiumInfo);
                                const isActive = new Date(premium.expiracion) > new Date();
                                setIsPremium(isActive);
                            } catch (error) {
                                setIsPremium(false);
                            }
                        } else {
                            setIsPremium(false);
                        }
                    }
                }
            }["UserLink.useEffect.checkPremium"];
            // Verificar inicialmente
            checkPremium();
            // Escuchar cambios en localStorage
            const handleStorageChange = {
                "UserLink.useEffect.handleStorageChange": (e)=>{
                    if (e.key?.startsWith('premium_') || e.key === null) {
                        checkPremium();
                    }
                }
            }["UserLink.useEffect.handleStorageChange"];
            // Escuchar eventos personalizados de premium
            const handlePremiumUpdate = {
                "UserLink.useEffect.handlePremiumUpdate": (e)=>{
                    if (e.detail.nick === nick) {
                        checkPremium();
                    }
                }
            }["UserLink.useEffect.handlePremiumUpdate"];
            window.addEventListener('storage', handleStorageChange);
            window.addEventListener('premiumUpdate', handlePremiumUpdate);
            return ({
                "UserLink.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                    window.removeEventListener('premiumUpdate', handlePremiumUpdate);
                }
            })["UserLink.useEffect"];
        }
    }["UserLink.useEffect"], [
        nick
    ]);
    const normalized = (nick || "").trim().toLowerCase();
    if (!nick || normalized === "anonimo" || normalized === "anónimo") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className || "text-gray-500",
            children: nick || "(sin nick)"
        }, void 0, false, {
            fileName: "[project]/src/components/UserLink.tsx",
            lineNumber: 58,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `/perfil/${encodeURIComponent(nick)}`,
        className: className || "text-blue-600 underline hover:text-blue-800",
        title: `Ver perfil de ${nick}${isPremium ? ' (Usuario Premium)' : ''}`,
        children: [
            nick,
            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 inline-flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-sky-100 to-blue-100 text-amber-900 text-xs px-2 py-1 rounded-full font-bold shadow-md border border-sky-300",
                    title: "Usuario Premium",
                    children: "👑"
                }, void 0, false, {
                    fileName: "[project]/src/components/UserLink.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/UserLink.tsx",
                lineNumber: 69,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserLink.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserLink, "xNbIwEn/POoRQin4gZAUcB/MOIQ=");
_c = UserLink;
var _c;
__turbopack_context__.k.register(_c, "UserLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/renderNick.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderNick",
    ()=>renderNick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserLink.tsx [app-client] (ecmascript)");
;
;
function renderNick(nick, className) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserLink"], {
        nick: nick,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/utils/renderNick.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BotonesAmistad.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const BotonesAmistad = ({ perfilNick })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [esAmigo, setEsAmigo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendiente, setPendiente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BotonesAmistad.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userStr = localStorage.getItem("user");
                if (!userStr) return;
                const userObj = JSON.parse(userStr);
                setUser(userObj);
                if (!perfilNick || perfilNick === userObj.nick) return;
                // Amistad
                const amigosStr = localStorage.getItem(`amigos_${userObj.nick}`);
                let amigos = [];
                if (amigosStr) {
                    try {
                        amigos = JSON.parse(amigosStr);
                    } catch  {}
                }
                setEsAmigo(amigos.some({
                    "BotonesAmistad.useEffect": (a)=>a.nick === perfilNick
                }["BotonesAmistad.useEffect"]));
                // Solicitud pendiente
                const solicitudesEnviadas = localStorage.getItem(`solicitudes_${perfilNick}`);
                let pendienteTmp = false;
                if (solicitudesEnviadas) {
                    try {
                        const arr = JSON.parse(solicitudesEnviadas);
                        pendienteTmp = arr.some({
                            "BotonesAmistad.useEffect": (s)=>s.origen === userObj.nick && s.estado === "pendiente"
                        }["BotonesAmistad.useEffect"]);
                    } catch  {}
                }
                setPendiente(pendienteTmp);
            }
        }
    }["BotonesAmistad.useEffect"], [
        perfilNick
    ]);
    const handleSolicitar = ()=>{
        if (!user) return;
        if (!perfilNick || perfilNick === user.nick) return;
        const nuevaSolicitud = {
            origen: user.nick,
            destino: perfilNick,
            estado: "pendiente"
        };
        const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilNick}`);
        const solicitudesActualizadas = solicitudesGuardadas ? JSON.parse(solicitudesGuardadas) : [];
        solicitudesActualizadas.push(nuevaSolicitud);
        localStorage.setItem(`solicitudes_${perfilNick}`, JSON.stringify(solicitudesActualizadas));
        setPendiente(true);
        alert(`Solicitud de amistad enviada a ${perfilNick}`);
    };
    const handleFinalizar = ()=>{
        if (!user) return;
        // Eliminar amistad de ambos lados
        const amigosStr = localStorage.getItem(`amigos_${user.nick}`);
        let amigos = amigosStr ? JSON.parse(amigosStr) : [];
        amigos = amigos.filter((a)=>a.nick !== perfilNick);
        localStorage.setItem(`amigos_${user.nick}`, JSON.stringify(amigos));
        const amigosDelOtroStr = localStorage.getItem(`amigos_${perfilNick}`);
        let amigosDelOtro = amigosDelOtroStr ? JSON.parse(amigosDelOtroStr) : [];
        amigosDelOtro = amigosDelOtro.filter((a)=>a.nick !== user.nick);
        localStorage.setItem(`amigos_${perfilNick}`, JSON.stringify(amigosDelOtro));
        // Actualizar el objeto user y el array de usuarios en localStorage
        const userObj = {
            ...user,
            amigos
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
            let usersArr = JSON.parse(usersStr);
            usersArr = usersArr.map((u)=>u.nick === user.nick ? {
                    ...u,
                    amigos
                } : u);
            localStorage.setItem("users", JSON.stringify(usersArr));
        }
        setEsAmigo(false);
        alert(`Has eliminado la amistad con ${perfilNick}`);
    };
    if (!user || perfilNick === user.nick) return null;
    if (esAmigo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-pulse",
            onClick: handleFinalizar,
            children: "Finalizar amistad"
        }, void 0, false, {
            fileName: "[project]/src/components/BotonesAmistad.tsx",
            lineNumber: 84,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (pendiente) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-yellow-300 text-yellow-900 font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-pulse flex items-center gap-2",
            children: [
                "Amistad pendiente",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-green-700 underline text-xs ml-2",
                    onClick: (e)=>{
                        e.preventDefault();
                        // Aceptar amistad
                        // Añadir a amigos de ambos lados
                        const amigosUser = JSON.parse(localStorage.getItem(`amigos_${user.nick}`) || "[]");
                        amigosUser.push({
                            nick: perfilNick
                        });
                        localStorage.setItem(`amigos_${user.nick}`, JSON.stringify(amigosUser));
                        const amigosPerfil = JSON.parse(localStorage.getItem(`amigos_${perfilNick}`) || "[]");
                        amigosPerfil.push({
                            nick: user.nick
                        });
                        localStorage.setItem(`amigos_${perfilNick}`, JSON.stringify(amigosPerfil));
                        // Actualizar el objeto user y el array de usuarios en localStorage
                        const userObj = {
                            ...user,
                            amigos: amigosUser
                        };
                        localStorage.setItem("user", JSON.stringify(userObj));
                        const usersStr = localStorage.getItem("users");
                        if (usersStr) {
                            let usersArr = JSON.parse(usersStr);
                            usersArr = usersArr.map((u)=>u.nick === user.nick ? {
                                    ...u,
                                    amigos: amigosUser
                                } : u);
                            localStorage.setItem("users", JSON.stringify(usersArr));
                        }
                        // Eliminar solicitud pendiente
                        const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilNick}`);
                        let solicitudes = solicitudesGuardadas ? JSON.parse(solicitudesGuardadas) : [];
                        solicitudes = solicitudes.filter((s)=>!(s.origen === user.nick && s.estado === "pendiente"));
                        localStorage.setItem(`solicitudes_${perfilNick}`, JSON.stringify(solicitudes));
                        setPendiente(false);
                        setEsAmigo(true);
                        alert("¡Amistad aceptada!");
                    },
                    children: "Aceptar"
                }, void 0, false, {
                    fileName: "[project]/src/components/BotonesAmistad.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-red-700 underline text-xs ml-2",
                    onClick: (e)=>{
                        e.preventDefault();
                        // Rechazar amistad
                        const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilNick}`);
                        let solicitudes = solicitudesGuardadas ? JSON.parse(solicitudesGuardadas) : [];
                        solicitudes = solicitudes.filter((s)=>!(s.origen === user.nick && s.estado === "pendiente"));
                        localStorage.setItem(`solicitudes_${perfilNick}`, JSON.stringify(solicitudes));
                        setPendiente(false);
                        alert("Solicitud de amistad rechazada");
                    },
                    children: "Rechazar"
                }, void 0, false, {
                    fileName: "[project]/src/components/BotonesAmistad.tsx",
                    lineNumber: 128,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BotonesAmistad.tsx",
            lineNumber: 92,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-bounce",
        onClick: handleSolicitar,
        children: "Solicitar Amistad"
    }, void 0, false, {
        fileName: "[project]/src/components/BotonesAmistad.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BotonesAmistad, "XhfE0OR4xxutFfLdkrme8Si8xfE=");
_c = BotonesAmistad;
const __TURBOPACK__default__export__ = BotonesAmistad;
var _c;
__turbopack_context__.k.register(_c, "BotonesAmistad");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/perfil/[nick]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PerfilPorNick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/renderNick.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BotonesAmistad$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BotonesAmistad.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PerfilPorNick() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const nick = params?.nick;
    const [perfil, setPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // El perfil mostrado
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // El usuario logueado
    const [esAmigo, setEsAmigo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [solicitudPendiente, setSolicitudPendiente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isPerfilPremium = perfil ? (()=>{
        const premiumData = localStorage.getItem(`premium_${perfil.nick}`);
        if (premiumData) {
            try {
                const data = JSON.parse(premiumData);
                return data.activo === true;
            } catch  {
                return false;
            }
        }
        return false;
    })() : false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerfilPorNick.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userStr = localStorage.getItem("user");
                const usersStr = localStorage.getItem("users");
                if (!userStr || !usersStr) return;
                const userObj = JSON.parse(userStr);
                setUser(userObj);
                const usersArr = JSON.parse(usersStr);
                const perfilObj = usersArr.find({
                    "PerfilPorNick.useEffect.perfilObj": (u)=>u.nick === nick
                }["PerfilPorNick.useEffect.perfilObj"]);
                if (!perfilObj) {
                    setPerfil(null);
                    return;
                }
                setPerfil(perfilObj);
                // Amistad
                const amigosStr = localStorage.getItem(`amigos_${userObj.nick}`);
                let amigos = [];
                if (amigosStr) {
                    try {
                        amigos = JSON.parse(amigosStr);
                    } catch  {}
                }
                setEsAmigo(amigos.some({
                    "PerfilPorNick.useEffect": (a)=>a.nick === perfilObj.nick
                }["PerfilPorNick.useEffect"]));
                // Verificar si hay solicitud pendiente
                const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilObj.nick}`);
                let solicitudes = [];
                if (solicitudesGuardadas) {
                    try {
                        solicitudes = JSON.parse(solicitudesGuardadas);
                    } catch  {}
                }
                setSolicitudPendiente(solicitudes.some({
                    "PerfilPorNick.useEffect": (s)=>s.origen === userObj.nick && s.estado === "pendiente"
                }["PerfilPorNick.useEffect"]));
            // Likes y comentarios (puedes mantener tu lógica aquí)
            }
        }
    }["PerfilPorNick.useEffect"], [
        nick
    ]);
    if (!perfil) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-red-100 p-8 flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4 text-center text-red-700",
                    children: "Usuario no encontrado"
                }, void 0, false, {
                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center",
                    children: "El perfil solicitado no existe o es anónimo."
                }, void 0, false, {
                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-center",
                children: "Información Personal"
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            isPerfilPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-2 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg shadow-yellow-500/50 animate-pulse flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-bounce",
                            children: "👑"
                        }, void 0, false, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "PREMIUM ACTIVO"
                        }, void 0, false, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "animate-bounce",
                            children: "✨"
                        }, void 0, false, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                    lineNumber: 78,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col items-center relative transition-all duration-500 ${isPerfilPremium ? 'border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 animate-pulse overflow-hidden' : ''}`,
                children: [
                    isPerfilPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 right-6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-80"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BotonesAmistad$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        perfilNick: perfil.nick
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `text-xl font-bold text-center w-full transition-all duration-300 ${isPerfilPremium ? 'text-yellow-600' : ''}`,
                            children: [
                                "Información Personal",
                                isPerfilPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 animate-spin",
                                    children: "👑"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center mb-4 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative ${isPerfilPremium ? '' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: perfil.avatar || "/avatars/default.png",
                                    alt: "Avatar",
                                    className: `w-20 h-20 rounded-full mb-2 transition-all duration-300 ${isPerfilPremium ? 'ring-4 ring-yellow-400 ring-opacity-70 shadow-lg shadow-yellow-400/50 hover:scale-110' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                isPerfilPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs animate-bounce",
                                    children: "✨"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `text-xl font-bold text-center w-full transition-all duration-300 ${isPerfilPremium ? 'text-yellow-600' : ''}`,
                            children: [
                                "Información Personal",
                                isPerfilPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 animate-spin",
                                    children: "👑"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 126,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Nick:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 134,
                                columnNumber: 20
                            }, this),
                            " ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(perfil.nick)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Email:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 135,
                                columnNumber: 20
                            }, this),
                            " ",
                            perfil.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Centro Educativo:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 20
                            }, this),
                            " ",
                            perfil.centro
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Curso:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 137,
                                columnNumber: 20
                            }, this),
                            " ",
                            perfil.curso
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Tipo de Usuario:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 138,
                                columnNumber: 20
                            }, this),
                            " ",
                            perfil.tipo
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Fecha de Inscripción:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                lineNumber: 139,
                                columnNumber: 20
                            }, this),
                            " ",
                            perfil.fechaInscripcion ? new Date(perfil.fechaInscripcion).toLocaleDateString('es-ES') : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col mt-2 gap-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-x-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "👍"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Likes:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-300 text-green-900 font-bold text-sm",
                                                    children: perfil.likes || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center ml-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "👥"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Total de Amigos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-900 font-bold text-sm",
                                                    children: perfil.amigos ? perfil.amigos.length : 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-x-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "📖"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Total de Historias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-sm",
                                                    children: perfil.historias ? perfil.historias.length : 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "💬"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Total de Comentarios:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-900 font-bold text-sm",
                                                    children: perfil.comentariosRecibidos || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-x-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "🏆"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Trofeos Desbloqueados:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 33
                                                }, this),
                                                (()=>{
                                                    const trofeos = Array.isArray(perfil.trofeos) ? perfil.trofeos : [];
                                                    const total = trofeos.length;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-200 text-pink-900 font-bold text-sm",
                                                        children: total
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 41
                                                    }, this);
                                                })()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "✅"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Respuestas acertadas:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 font-bold text-sm",
                                                    children: perfil.preguntasAcertadas || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-x-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "🥇"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Competiciones:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-200 text-teal-900 font-bold text-sm",
                                                    children: perfil.competicionesSuperadas || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2 text-lg",
                                                    children: "🎉"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Concursos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-900 font-bold text-sm",
                                                    children: perfil.concursosGanados || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/perfil/[nick]/page.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/perfil/[nick]/page.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
}
_s(PerfilPorNick, "mQ5T8kH4CCJqMZlmBq1v5yhW0Tw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = PerfilPorNick;
var _c;
__turbopack_context__.k.register(_c, "PerfilPorNick");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_a7a030db._.js.map