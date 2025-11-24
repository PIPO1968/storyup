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
"[project]/src/app/historias/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistoriaDetalle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/renderNick.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HistoriaDetalle() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params?.id;
    const [historia, setHistoria] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comentario, setComentario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [comentarios, setComentarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HistoriaDetalle.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && id) {
                const historias = localStorage.getItem("historias");
                const arr = historias ? JSON.parse(historias) : [];
                const encontrada = arr.find({
                    "HistoriaDetalle.useEffect.encontrada": (h)=>h.id == id
                }["HistoriaDetalle.useEffect.encontrada"]);
                if (encontrada) {
                    setHistoria(encontrada);
                    setLikes(encontrada.likes || 0);
                    setComentarios(encontrada.comentarios || []);
                    // Comprobar si el usuario ya ha dado like
                    const user = localStorage.getItem("user");
                    let usuario = "";
                    if (user) {
                        try {
                            const obj = JSON.parse(user);
                            usuario = obj.nick || obj.nombre || obj.usuario || user;
                        } catch  {
                            console.error("Error al parsear el usuario desde localStorage:", user);
                            usuario = "";
                        }
                    }
                    const likedBy = encontrada.likedBy || [];
                    console.log("Usuario actual:", usuario);
                    console.log("Usuarios que dieron like:", likedBy);
                    setLiked(likedBy.includes(usuario));
                } else {
                    console.warn("No se encontró la historia con el ID especificado en localStorage.");
                }
            }
        }
    }["HistoriaDetalle.useEffect"], [
        id
    ]);
    const updateAuthorProfile = (author, field)=>{
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
            const users = JSON.parse(usersStr);
            const userIndex = users.findIndex((u)=>u.nick === author);
            if (userIndex !== -1) {
                const currentValue = users[userIndex][field] || 0;
                if (typeof currentValue === "number") {
                    users[userIndex][field] = currentValue + 1;
                    localStorage.setItem("users", JSON.stringify(users));
                    // Emitir evento global para actualizar el perfil si está abierto
                    window.dispatchEvent(new CustomEvent("profileUpdate", {
                        detail: {
                            nick: author,
                            field,
                            value: users[userIndex][field]
                        }
                    }));
                }
            }
        }
    };
    const handleLike = ()=>{
        if (("TURBOPACK compile-time value", "object") !== "undefined" && historia) {
            const user = localStorage.getItem("user");
            let usuario = "";
            if (user) {
                try {
                    const obj = JSON.parse(user);
                    usuario = obj.nick || obj.nombre || obj.usuario || user;
                } catch  {
                    console.error("Error al parsear el usuario desde localStorage:", user);
                    usuario = "";
                }
            }
            const historias = localStorage.getItem("historias");
            const arr = historias ? JSON.parse(historias) : [];
            const idx = arr.findIndex((h)=>h.id == historia.id);
            if (idx !== -1) {
                let likedBy = arr[idx].likedBy || [];
                const yaDioLike = likedBy.includes(usuario);
                let likeDelta = 0;
                if (!yaDioLike) {
                    // Dar like
                    likedBy.push(usuario);
                    arr[idx].likedBy = likedBy;
                    arr[idx].likes = (arr[idx].likes || 0) + 1;
                    setLikes(arr[idx].likes);
                    setLiked(true);
                    likeDelta = 1;
                } else {
                    // Quitar like
                    likedBy = likedBy.filter((u)=>u !== usuario);
                    arr[idx].likedBy = likedBy;
                    arr[idx].likes = Math.max((arr[idx].likes || 1) - 1, 0);
                    setLikes(arr[idx].likes);
                    setLiked(false);
                    likeDelta = -1;
                }
                // Actualizar localStorage
                localStorage.setItem("historias", JSON.stringify(arr));
                // Actualizar likes del autor en localStorage y en el array de usuarios
                const autor = arr[idx].autor;
                const usersStr = localStorage.getItem("users");
                if (usersStr && autor) {
                    let usersArr = JSON.parse(usersStr);
                    const userIdx = usersArr.findIndex((u)=>u.nick === autor);
                    if (userIdx !== -1) {
                        const nuevoLikes = (usersArr[userIdx].likes || 0) + likeDelta;
                        usersArr[userIdx].likes = nuevoLikes;
                        localStorage.setItem("users", JSON.stringify(usersArr));
                        // Actualizar también el objeto user si el autor está logueado
                        const userStr = localStorage.getItem("user");
                        if (userStr) {
                            let userObj = JSON.parse(userStr);
                            if (userObj.nick === autor) {
                                userObj.likes = nuevoLikes;
                                localStorage.setItem("user", JSON.stringify(userObj));
                                // Emitir evento para refrescar el perfil
                                window.dispatchEvent(new CustomEvent("profileUpdate", {
                                    detail: {
                                        nick: autor,
                                        field: "likes",
                                        value: nuevoLikes
                                    }
                                }));
                            }
                        }
                    }
                }
            } else {
                console.warn("No se encontró la historia con el ID especificado para actualizar en localStorage.");
            }
        }
    };
    const handleComentar = ()=>{
        if (!comentario.trim()) return;
        const usuarioActual = localStorage.getItem("usuarioActual");
        let usuario = "";
        if (usuarioActual) {
            try {
                const obj = JSON.parse(usuarioActual);
                usuario = obj.nick || obj.nombre || obj.usuario || usuarioActual;
            } catch  {
                usuario = usuarioActual;
            }
        }
        const historias = localStorage.getItem("historias");
        const arr = historias ? JSON.parse(historias) : [];
        const idx = arr.findIndex((h)=>h.id == historia.id);
        if (idx !== -1) {
            const comentarios = arr[idx].comentarios || [];
            const yaComento = comentarios.some((c)=>c.usuario === usuario);
            if (!yaComento) {
                const nuevoComentario = {
                    usuario,
                    texto: comentario,
                    fecha: new Date().toLocaleString()
                };
                comentarios.push(nuevoComentario);
                arr[idx].comentarios = comentarios;
                setComentarios(comentarios);
                setComentario("");
                // Actualizar perfil del autor
                updateAuthorProfile(historia.autor, "comentariosRecibidos");
                // Guardar cambios en localStorage
                localStorage.setItem("historias", JSON.stringify(arr));
                // Actualizar el estado de la historia
                setHistoria(arr[idx]);
                console.log("Estado de comentarios después de agregar uno nuevo:", comentarios);
            } else {
                console.log("El usuario ya comentó en esta historia.");
            }
        }
    };
    if (!historia) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-green-100 p-8",
            children: "Cargando historia..."
        }, void 0, false, {
            fileName: "[project]/src/app/historias/[id]/page.tsx",
            lineNumber: 215,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-2",
                    children: historia.titulo
                }, void 0, false, {
                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                    lineNumber: 221,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 text-gray-700",
                    children: [
                        "Por: ",
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(historia.autor),
                        " | ",
                        historia.fecha
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                    lineNumber: 222,
                    columnNumber: 17
                }, this),
                historia.imagen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: historia.imagen,
                    alt: "Imagen",
                    className: "mb-4 max-h-64 rounded"
                }, void 0, false, {
                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                    lineNumber: 224,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded p-4 mb-4 bg-gray-50",
                    dangerouslySetInnerHTML: {
                        __html: historia.contenido
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                    lineNumber: 226,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `font-bold py-2 px-4 rounded ${liked ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600 text-white"}`,
                        onClick: handleLike,
                        children: liked ? `💔 (${likes})` : `❤️ Like (${likes === 0 ? "0" : likes})`
                    }, void 0, false, {
                        fileName: "[project]/src/app/historias/[id]/page.tsx",
                        lineNumber: 228,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                    lineNumber: 227,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold mb-2",
                            children: "Comentarios"
                        }, void 0, false, {
                            fileName: "[project]/src/app/historias/[id]/page.tsx",
                            lineNumber: 236,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mb-2",
                            children: comentarios.slice(-5).map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b py-1 text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: c.texto
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/historias/[id]/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 text-xs text-gray-500",
                                            children: c.fecha
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/historias/[id]/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/historias/[id]/page.tsx",
                            lineNumber: 237,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: comentario,
                                    onChange: (e)=>setComentario(e.target.value),
                                    placeholder: "Escribe un comentario...",
                                    className: "border rounded px-2 py-1 flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-green-500 hover:bg-green-600 text-white font-bold px-4 rounded",
                                    onClick: handleComentar,
                                    children: "Comentar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/historias/[id]/page.tsx",
                            lineNumber: 245,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/historias/[id]/page.tsx",
                    lineNumber: 235,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/historias/[id]/page.tsx",
            lineNumber: 220,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/historias/[id]/page.tsx",
        lineNumber: 219,
        columnNumber: 9
    }, this);
}
_s(HistoriaDetalle, "b/oQx0uC6DrEWkrR7otFgty+v2g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = HistoriaDetalle;
var _c;
__turbopack_context__.k.register(_c, "HistoriaDetalle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8c5f22a1._.js.map