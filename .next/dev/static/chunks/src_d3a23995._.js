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
"[project]/src/app/concursos/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Concursos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/renderNick.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Concursos() {
    _s();
    const [concursos, setConcursos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Concursos.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const concursosStr = localStorage.getItem("concursos");
                setConcursos(concursosStr ? JSON.parse(concursosStr) : []);
            }
        }
    }["Concursos.useEffect"], []);
    const hoy = new Date();
    const activos = concursos.filter((c)=>new Date(c.fin) >= hoy).slice(0, 10);
    const finalizados = concursos.filter((c)=>new Date(c.fin) < hoy).slice(0, 10);
    const mostrarActivos = activos.length > 0 ? activos : Array.from({
        length: 10
    }, (_, idx)=>({
            titulo: t('aunNoHayConcursoActivo'),
            autor: '',
            inicio: '',
            fin: ''
        }));
    const mostrarFinalizados = finalizados.length > 0 ? finalizados : Array.from({
        length: 10
    }, (_, idx)=>({
            titulo: t('aunNoHayConcursoFinalizado'),
            autor: '',
            inicio: '',
            fin: ''
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-center",
                children: t('concursosTitle')
            }, void 0, false, {
                fileName: "[project]/src/app/concursos/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-w-5xl mx-auto gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-center mb-4",
                                children: t('concursosActivos')
                            }, void 0, false, {
                                fileName: "[project]/src/app/concursos/page.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y",
                                children: mostrarActivos.map((concurso, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    idx + 1,
                                                    "º "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `/concurso/${concurso.numero}`,
                                                className: "text-blue-700 font-semibold underline",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: concurso.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this),
                                            concurso.autor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-700",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(concurso.autor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 37
                                            }, this),
                                            concurso.inicio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-500 text-sm",
                                                children: [
                                                    "Inicio: ",
                                                    concurso.inicio
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 37
                                            }, this),
                                            concurso.fin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-500 text-sm",
                                                children: [
                                                    "Final: ",
                                                    concurso.fin
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/concursos/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/concursos/page.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/concursos/page.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-center mb-4",
                                children: "Concursos Finalizados"
                            }, void 0, false, {
                                fileName: "[project]/src/app/concursos/page.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y",
                                children: mostrarFinalizados.map((concurso, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    idx + 1,
                                                    "º "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `/concurso/${concurso.numero}`,
                                                className: "text-blue-700 font-semibold underline",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: concurso.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 33
                                            }, this),
                                            concurso.autor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-700",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(concurso.autor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 37
                                            }, this),
                                            concurso.inicio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-500 text-sm",
                                                children: [
                                                    "Inicio: ",
                                                    concurso.inicio
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 37
                                            }, this),
                                            concurso.fin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-500 text-sm",
                                                children: [
                                                    "Final: ",
                                                    concurso.fin
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/concursos/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/concursos/page.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/concursos/page.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/concursos/page.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-center mb-4",
                        children: t('ultimosGanadores')
                    }, void 0, false, {
                        fileName: "[project]/src/app/concursos/page.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "divide-y",
                        children: (()=>{
                            if ("TURBOPACK compile-time truthy", 1) {
                                const concursosStr = localStorage.getItem("concursos");
                                const concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
                                // Filtrar los que tengan ganador y mostrar los 25 más recientes
                                const ganadores = concursosArr.filter((c)=>c.ganador && c.ganador !== "").slice(0, 25);
                                if (ganadores.length === 0) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "py-2 text-gray-500",
                                        children: t('aunNoHayGanadores')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/concursos/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 40
                                    }, this);
                                }
                                return ganadores.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    idx + 1,
                                                    "º "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-700 font-semibold",
                                                children: c.titulo
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 37
                                            }, this),
                                            c.autor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-700",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(c.autor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 41
                                            }, this),
                                            c.ganador && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNick"])(c.ganador, "text-green-700 underline")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 41
                                            }, this),
                                            c.fechaFinal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-gray-500 text-sm",
                                                children: [
                                                    "Finalizado: ",
                                                    c.fechaFinal
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/concursos/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/concursos/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this));
                            } else //TURBOPACK unreachable
                            ;
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/app/concursos/page.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/concursos/page.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/concursos/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(Concursos, "F0gRDbaa3/MT0tmnCrL27yESA5I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Concursos;
var _c;
__turbopack_context__.k.register(_c, "Concursos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d3a23995._.js.map