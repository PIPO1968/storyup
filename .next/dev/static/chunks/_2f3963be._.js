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
            // Verificar si el usuario es Premium
            if (("TURBOPACK compile-time value", "object") !== "undefined" && nick) {
                const premiumInfo = localStorage.getItem(`premium_${nick}`);
                if (premiumInfo) {
                    try {
                        const premium = JSON.parse(premiumInfo);
                        if (new Date(premium.expiracion) > new Date()) {
                            setIsPremium(true);
                        }
                    } catch  {
                        setIsPremium(false);
                    }
                }
            }
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
            lineNumber: 30,
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
                    lineNumber: 42,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/UserLink.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserLink.tsx",
        lineNumber: 34,
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
"[project]/src/data/trofeos-premium.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":101,"titulo":"Historiador Premium","descripcion":"Tus primeras 35 historias.","imagen":"/premium1.jpg","criterio":"historiasCreadas >= 5","exclusivoPremium":true,"beneficio":"Badge especial de historiador"},{"id":102,"titulo":"Sabio Premium","descripcion":"100 preguntas acertadas en Aprende con Pipo siendo Premium","imagen":"/premium2.jpg","criterio":"preguntasAcertadas >= 100","exclusivoPremium":true,"beneficio":"Título de Sabio en perfil"},{"id":103,"titulo":"Amigo Premium","descripcion":"Conseguir 10 amigos siendo usuario Premium","imagen":"/premium3.jpg","criterio":"amigosPremium >= 10","exclusivoPremium":true,"beneficio":"Badge de amistad especial"},{"id":104,"titulo":"Espíritu Navideño Premium","descripcion":"Crear historias durante eventos especiales siendo Premium","imagen":"/premium4.jpg","criterio":"historiasEventos >= 3","exclusivoPremium":true,"beneficio":"Badge de celebración especial"},{"id":105,"titulo":"Verano Dorado Premium","descripcion":"Mantener racha de actividad durante vacaciones siendo Premium","imagen":"/premium5.jpg","criterio":"rachaVerano >= 15","exclusivoPremium":true,"beneficio":"Efecto de verano en perfil"},{"id":106,"titulo":"Veterano Dorado","descripcion":"6 meses consecutivos como usuario Premium","imagen":"/premium6.jpg","criterio":"mesesPremium >= 6","exclusivoPremium":true,"beneficio":"Crown dorada permanente"},{"id":107,"titulo":"Diseñador del Futuro","descripcion":"Crear el futuro logo de StoryUp con herramientas como Paint","imagen":"/premium7.png","criterio":"logoStoryUpCreado == true","exclusivoPremium":true,"beneficio":"Reconocimiento como diseñador oficial","otorgadoPorAdmin":true},{"id":108,"titulo":"Escritor Premium","descripcion":"Crear 15+ historias siendo usuario Premium","imagen":"/premium8.png","criterio":"historiasCreadas >= 15","exclusivoPremium":true,"beneficio":"Badge de escritor prolífico"},{"id":109,"titulo":"Competidor Premium","descripcion":"Aparecer en Top 5 de cualquier ranking siendo Premium","imagen":"/premium9.jpg","criterio":"enTop5Rankings == true","exclusivoPremium":true,"beneficio":"Destacado en rankings"},{"id":110,"titulo":"Cerebro de Oro","descripcion":"1000+ preguntas acertadas siendo usuario Premium","imagen":"/premium10.jpg","criterio":"preguntasAcertadas >= 1000","exclusivoPremium":true,"beneficio":"Título de genio académico"},{"id":111,"titulo":"Perfeccionista Premium","descripcion":"Conseguir precisión de 80%+ en Aprende con Pipo siendo Premium","imagen":"/premium11.jpg","criterio":"precision >= 80","exclusivoPremium":true,"beneficio":"Badge de perfección académica"},{"id":112,"titulo":"Red Social Premium","descripcion":"Conseguir 50+ amigos siendo usuario Premium","imagen":"/premium12.jpg","criterio":"amigosPremium >= 50","exclusivoPremium":true,"beneficio":"Título de influencer social Premium"}]);}),
"[project]/src/data/trofeosPremiumImport.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Archivo para importar y transformar trofeos premium desde el JSON
__turbopack_context__.s([
    "TROFEOS_PREMIUM",
    ()=>TROFEOS_PREMIUM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeos$2d$premium$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/trofeos-premium.json (json)");
;
const TROFEOS_PREMIUM = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeos$2d$premium$2e$json__$28$json$29$__["default"].map(_c = (t)=>({
        src: t.imagen,
        texto: `${t.titulo}\n${t.descripcion}`,
        tipo: 'manual'
    }));
_c1 = TROFEOS_PREMIUM;
var _c, _c1;
__turbopack_context__.k.register(_c, "TROFEOS_PREMIUM$trofeosPremium.map");
__turbopack_context__.k.register(_c1, "TROFEOS_PREMIUM");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/perfil/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/perfil/page.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_2f3963be._.js.map