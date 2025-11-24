module.exports = [
"[project]/src/components/UserLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserLink",
    ()=>UserLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const UserLink = ({ nick, className })=>{
    const [isPremium, setIsPremium] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Verificar si el usuario es Premium
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        nick
    ]);
    const normalized = (nick || "").trim().toLowerCase();
    if (!nick || normalized === "anonimo" || normalized === "anónimo") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className || "text-gray-500",
            children: nick || "(sin nick)"
        }, void 0, false, {
            fileName: "[project]/src/components/UserLink.tsx",
            lineNumber: 30,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: `/perfil/${encodeURIComponent(nick)}`,
        className: className || "text-blue-600 underline hover:text-blue-800",
        title: `Ver perfil de ${nick}${isPremium ? ' (Usuario Premium)' : ''}`,
        children: [
            nick,
            isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 inline-flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/utils/renderNick.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderNick",
    ()=>renderNick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserLink.tsx [app-ssr] (ecmascript)");
;
;
function renderNick(nick, className) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserLink"], {
        nick: nick,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/utils/renderNick.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/data/trofeos-premium.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":101,"titulo":"Historiador Premium","descripcion":"Tus primeras 35 historias.","imagen":"/premium1.jpg","criterio":"historiasCreadas >= 5","exclusivoPremium":true,"beneficio":"Badge especial de historiador"},{"id":102,"titulo":"Sabio Premium","descripcion":"100 preguntas acertadas en Aprende con Pipo siendo Premium","imagen":"/premium2.jpg","criterio":"preguntasAcertadas >= 100","exclusivoPremium":true,"beneficio":"Título de Sabio en perfil"},{"id":103,"titulo":"Amigo Premium","descripcion":"Conseguir 10 amigos siendo usuario Premium","imagen":"/premium3.jpg","criterio":"amigosPremium >= 10","exclusivoPremium":true,"beneficio":"Badge de amistad especial"},{"id":104,"titulo":"Espíritu Navideño Premium","descripcion":"Crear historias durante eventos especiales siendo Premium","imagen":"/premium4.jpg","criterio":"historiasEventos >= 3","exclusivoPremium":true,"beneficio":"Badge de celebración especial"},{"id":105,"titulo":"Verano Dorado Premium","descripcion":"Mantener racha de actividad durante vacaciones siendo Premium","imagen":"/premium5.jpg","criterio":"rachaVerano >= 15","exclusivoPremium":true,"beneficio":"Efecto de verano en perfil"},{"id":106,"titulo":"Veterano Dorado","descripcion":"6 meses consecutivos como usuario Premium","imagen":"/premium6.jpg","criterio":"mesesPremium >= 6","exclusivoPremium":true,"beneficio":"Crown dorada permanente"},{"id":107,"titulo":"Diseñador del Futuro","descripcion":"Crear el futuro logo de StoryUp con herramientas como Paint","imagen":"/premium7.png","criterio":"logoStoryUpCreado == true","exclusivoPremium":true,"beneficio":"Reconocimiento como diseñador oficial","otorgadoPorAdmin":true},{"id":108,"titulo":"Escritor Premium","descripcion":"Crear 15+ historias siendo usuario Premium","imagen":"/premium8.png","criterio":"historiasCreadas >= 15","exclusivoPremium":true,"beneficio":"Badge de escritor prolífico"},{"id":109,"titulo":"Competidor Premium","descripcion":"Aparecer en Top 5 de cualquier ranking siendo Premium","imagen":"/premium9.jpg","criterio":"enTop5Rankings == true","exclusivoPremium":true,"beneficio":"Destacado en rankings"},{"id":110,"titulo":"Cerebro de Oro","descripcion":"1000+ preguntas acertadas siendo usuario Premium","imagen":"/premium10.jpg","criterio":"preguntasAcertadas >= 1000","exclusivoPremium":true,"beneficio":"Título de genio académico"},{"id":111,"titulo":"Perfeccionista Premium","descripcion":"Conseguir precisión de 80%+ en Aprende con Pipo siendo Premium","imagen":"/premium11.jpg","criterio":"precision >= 80","exclusivoPremium":true,"beneficio":"Badge de perfección académica"},{"id":112,"titulo":"Red Social Premium","descripcion":"Conseguir 50+ amigos siendo usuario Premium","imagen":"/premium12.jpg","criterio":"amigosPremium >= 50","exclusivoPremium":true,"beneficio":"Título de influencer social Premium"}]);}),
"[project]/src/data/trofeosPremiumImport.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Archivo para importar y transformar trofeos premium desde el JSON
__turbopack_context__.s([
    "TROFEOS_PREMIUM",
    ()=>TROFEOS_PREMIUM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeos$2d$premium$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/trofeos-premium.json (json)");
;
const TROFEOS_PREMIUM = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeos$2d$premium$2e$json__$28$json$29$__["default"].map((t)=>({
        src: t.imagen,
        texto: `${t.titulo}\n${t.descripcion}`,
        tipo: 'manual'
    }));
}),
"[project]/src/app/perfil/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/renderNick.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/trofeosPremiumImport.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const PerfilUsuario = ()=>{
    // Función para bloquear manualmente el trofeo 10 al usuario seleccionado
    // Función para bloquear manualmente cualquier trofeo al usuario seleccionado
    const handleLockTrofeo = (trofeoIdx)=>{
        if (!selectedUser) return;
        const updatedUsers = usuarios.map((u)=>u.nick === selectedUser ? {
                ...u,
                trofeosDesbloqueados: Array.isArray(u.trofeosDesbloqueados) ? u.trofeosDesbloqueados.filter((idx)=>idx !== trofeoIdx) : [],
                trofeosBloqueados: Array.isArray(u.trofeosBloqueados) ? [
                    ...new Set([
                        ...u.trofeosBloqueados || [],
                        trofeoIdx
                    ])
                ] : [
                    trofeoIdx
                ]
            } : u);
        setUsuarios(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        const userTrofeos = updatedUsers.find((u)=>u.nick === selectedUser)?.trofeosDesbloqueados || [];
        const userBloqueados = updatedUsers.find((u)=>u.nick === selectedUser)?.trofeosBloqueados || [];
        localStorage.setItem(`trofeos_${selectedUser}`, JSON.stringify(userTrofeos));
        localStorage.setItem(`bloqueados_${selectedUser}`, JSON.stringify(userBloqueados));
        // Si el usuario administrado es el actual, actualiza también el estado y localStorage
        if (user && user.nick === selectedUser) {
            setUser({
                ...user,
                trofeosDesbloqueados: userTrofeos,
                trofeosBloqueados: userBloqueados
            });
            localStorage.setItem("user", JSON.stringify({
                ...user,
                trofeosDesbloqueados: userTrofeos,
                trofeosBloqueados: userBloqueados
            }));
        }
        // Disparar evento para refrescar la UI
        window.dispatchEvent(new Event('storage'));
        alert(`Trofeo #${trofeoIdx + 1} bloqueado manualmente para ${selectedUser}`);
    };
    // Función para asignar trofeos al usuario si su centro ganó premios este mes
    const asignarTrofeosUsuario = (usuario)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const fechaActual = undefined;
        const clavePremios = undefined;
        const premiosGuardados = undefined;
    };
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bullyingActivo, setBullyingActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usuarioBullying, setUsuarioBullying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [palabraProhibida, setPalabraProhibida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concursoTitulo, setConcursoTitulo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concursoTexto, setConcursoTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaInicio, setFechaInicio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaFin, setFechaFin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [usuarioGanador, setUsuarioGanador] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [concursoId, setConcursoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [nombreArchivo, setNombreArchivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [usuarios, setUsuarios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedUser, setSelectedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mensajeRecibido, setMensajeRecibido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noticiaTitulo, setNoticiaTitulo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [noticiaTexto, setNoticiaTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [noticiaImagen, setNoticiaImagen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Estado para el trofeo seleccionado por el admin
    const [trofeoSeleccionado, setTrofeoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Estados para gestionar concursos finalizados
    const [concursoSeleccionado, setConcursoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ganadorSeleccionado, setGanadorSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    // Inicialización y sincronización de usuario y rankings SOLO una vez
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Cargar mensajes del chat y aviso solo cuando cambia el usuario
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user && user.nick) {
            const mensajesGuardados = localStorage.getItem(`chat_${user.nick}`);
            if (mensajesGuardados) {
                setChatMessages(JSON.parse(mensajesGuardados));
            }
            const aviso = localStorage.getItem(`chat_aviso_${user.nick}`);
            setMensajeRecibido(aviso === "1");
        }
    }, [
        user
    ]);
    // Escuchar cambios en el perfil
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleProfileUpdate = ()=>{
            const usersStr = localStorage.getItem("users");
            if (usersStr) {
                setUsuarios(JSON.parse(usersStr));
            }
            const userStr = localStorage.getItem("user");
            if (userStr) {
                setUser(JSON.parse(userStr));
            }
        };
        window.addEventListener('profileUpdate', handleProfileUpdate);
        window.addEventListener('storage', handleProfileUpdate);
        return ()=>{
            window.removeEventListener('profileUpdate', handleProfileUpdate);
            window.removeEventListener('storage', handleProfileUpdate);
        };
    }, []);
    const handlePalabraProhibidaSubmit = (e)=>{
        e.preventDefault();
        alert(`Palabra prohibida seleccionada: ${palabraProhibida}`);
        setPalabraProhibida("");
    };
    const handleApagarBullying = ()=>{
        setBullyingActivo(false);
        setUsuarioBullying("");
    };
    const handleConcursoSubmit = (e)=>{
        e.preventDefault();
        // Guardar el concurso en localStorage, incluyendo el ganador si existe
        const concursosStr = localStorage.getItem("concursos");
        let concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
        concursosArr.unshift({
            numero: concursoId,
            titulo: concursoTitulo,
            texto: concursoTexto,
            inicio: fechaInicio,
            fin: fechaFin,
            autor: user ? user.nick : "",
            ganador: usuarioGanador,
            fechaFinal: fechaFin
        });
        localStorage.setItem("concursos", JSON.stringify(concursosArr));
        localStorage.setItem("lastConcursoId", concursoId.toString());
        setConcursoId(concursoId + 1);
        setConcursoTitulo("");
        setConcursoTexto("");
        setFechaInicio("");
        setFechaFin("");
        setUsuarioGanador("");
        // Refrescar concursos en otras páginas
        window.dispatchEvent(new Event('storage'));
        alert("Concurso creado y ganador registrado");
    };
    const handleSeleccionarGanador = ()=>{
        if (usuarioGanador) {
            // Guardar el ganador en el concurso más reciente
            const concursosStr = localStorage.getItem("concursos");
            let concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
            if (concursosArr.length > 0) {
                concursosArr[0].ganador = usuarioGanador;
                localStorage.setItem("concursos", JSON.stringify(concursosArr));
            }
            // Sumar concursosGanados al usuario seleccionado
            const updatedUsers = usuarios.map((u)=>u.nick === usuarioGanador ? {
                    ...u,
                    concursosGanados: (u.concursosGanados || 0) + 1
                } : u);
            setUsuarios(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            // Si el usuario actual es el ganador, actualizar también el estado user
            if (user && user.nick === usuarioGanador) {
                setUser({
                    ...user,
                    concursosGanados: (user.concursosGanados || 0) + 1
                });
                localStorage.setItem("user", JSON.stringify({
                    ...user,
                    concursosGanados: (user.concursosGanados || 0) + 1
                }));
            }
            // Refrescar perfil y concursos
            window.dispatchEvent(new Event('profileUpdate'));
            window.dispatchEvent(new Event('storage'));
            alert(`Ganador seleccionado: ${usuarioGanador}`);
        } else {
            alert("Selecciona un usuario ganador");
        }
    };
    const handleAsignarGanador = ()=>{
        if (!concursoSeleccionado || !ganadorSeleccionado) {
            alert("Selecciona un concurso y un ganador");
            return;
        }
        const concursosStr = localStorage.getItem("concursos");
        let concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
        const concursoIndex = concursosArr.findIndex((c)=>String(c.numero) === String(concursoSeleccionado));
        if (concursoIndex !== -1) {
            concursosArr[concursoIndex].ganador = ganadorSeleccionado;
            localStorage.setItem("concursos", JSON.stringify(concursosArr));
            // Sumar concursosGanados al usuario seleccionado
            const updatedUsers = usuarios.map((u)=>u.nick === ganadorSeleccionado ? {
                    ...u,
                    concursosGanados: (u.concursosGanados || 0) + 1
                } : u);
            setUsuarios(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            // Si el usuario actual es el ganador, actualizar también el estado user
            if (user && user.nick === ganadorSeleccionado) {
                setUser({
                    ...user,
                    concursosGanados: (user.concursosGanados || 0) + 1
                });
                localStorage.setItem("user", JSON.stringify({
                    ...user,
                    concursosGanados: (user.concursosGanados || 0) + 1
                }));
            }
            // Sumar 10 likes al ganador
            updateLikes(ganadorSeleccionado, 10);
            // Limpiar selecciones
            setConcursoSeleccionado('');
            setGanadorSeleccionado('');
            // Refrescar perfil y concursos
            window.dispatchEvent(new Event('profileUpdate'));
            window.dispatchEvent(new Event('storage'));
            alert(`Ganador asignado a concurso ${concursoSeleccionado}: ${ganadorSeleccionado}`);
            setConcursoSeleccionado("");
            setGanadorSeleccionado("");
            // Forzar re-render para actualizar la lista de concursos
            setRefreshKey((prev)=>prev + 1);
        } else {
            alert("Concurso no encontrado");
        }
    };
    const handleNoticiaSubmit = (e)=>{
        e.preventDefault();
        setNoticiaTitulo("");
        setNoticiaTexto("");
        setNoticiaImagen("");
        alert("Noticia publicada (simulado)");
    };
    // Función para añadir trofeo al usuario seleccionado
    const handleAddTrofeo = ()=>{
        if (!selectedUser) return;
        const updatedUsers = usuarios.map((u)=>u.nick === selectedUser ? {
                ...u,
                trofeos: (u.trofeos || 0) + 1
            } : u);
        setUsuarios(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert(`Trofeo añadido a ${selectedUser}`);
    };
    // Función general para sumar o restar likes a cualquier usuario
    const updateLikes = (nick, cantidad)=>{
        if (!nick) return;
        const updatedUsers = usuarios.map((u)=>u.nick === nick ? {
                ...u,
                likes: (u.likes || 0) + cantidad
            } : u);
        setUsuarios(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        // Si el usuario actual es el modificado, actualiza también el estado user
        if (user && user.nick === nick) {
            setUser({
                ...user,
                likes: (user.likes || 0) + cantidad
            });
            localStorage.setItem("user", JSON.stringify({
                ...user,
                likes: (user.likes || 0) + cantidad
            }));
        }
        // Eliminar cualquier uso de likes_${nick} en localStorage
        localStorage.removeItem(`likes_${nick}`);
        // Emitir evento 'storage' manualmente para refrescar otras páginas
        window.dispatchEvent(new Event('storage'));
    };
    // Función para desbloquear trofeo específico
    const handleUnlockTrofeo = (trofeoIdx)=>{
        if (!selectedUser) return;
        const updatedUsers = usuarios.map((u)=>u.nick === selectedUser ? {
                ...u,
                trofeosDesbloqueados: Array.isArray(u.trofeosDesbloqueados) ? [
                    ...new Set([
                        ...u.trofeosDesbloqueados || [],
                        trofeoIdx
                    ])
                ] : [
                    trofeoIdx
                ],
                trofeosBloqueados: Array.isArray(u.trofeosBloqueados) ? u.trofeosBloqueados.filter((idx)=>idx !== trofeoIdx) : []
            } : u);
        setUsuarios(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        // Guardar los trofeos desbloqueados en localStorage para estadísticas
        const userTrofeos = updatedUsers.find((u)=>u.nick === selectedUser)?.trofeosDesbloqueados || [];
        const userBloqueados = updatedUsers.find((u)=>u.nick === selectedUser)?.trofeosBloqueados || [];
        localStorage.setItem(`trofeos_${selectedUser}`, JSON.stringify(userTrofeos));
        localStorage.setItem(`bloqueados_${selectedUser}`, JSON.stringify(userBloqueados));
        // Si el usuario administrado es el actual, actualiza también el estado y localStorage
        if (user && user.nick === selectedUser) {
            setUser({
                ...user,
                trofeosDesbloqueados: userTrofeos,
                trofeosBloqueados: userBloqueados
            });
            localStorage.setItem("user", JSON.stringify({
                ...user,
                trofeosDesbloqueados: userTrofeos,
                trofeosBloqueados: userBloqueados
            }));
        }
        // Disparar evento para refrescar la UI
        window.dispatchEvent(new Event('storage'));
        alert(`Trofeo #${trofeoIdx + 1} desbloqueado para ${selectedUser}`);
    };
    // Lista de trofeos normales (24)
    const TROFEOS = [
        {
            src: "/trofeo1.jpg",
            texto: "Trofeo 1",
            tipo: "auto"
        },
        {
            src: "/trofeo2.jpg",
            texto: "Trofeo 2",
            tipo: "auto"
        },
        {
            src: "/trofeo3.jpg",
            texto: "Trofeo 3",
            tipo: "auto"
        },
        {
            src: "/trofeo4.jpg",
            texto: "Trofeo 4",
            tipo: "auto"
        },
        {
            src: "/trofeo5.jpg",
            texto: "Trofeo 5",
            tipo: "auto"
        },
        {
            src: "/trofeo6.jpg",
            texto: "Trofeo 6",
            tipo: "auto"
        },
        {
            src: "/trofeo7.jpg",
            texto: "Trofeo 7",
            tipo: "auto"
        },
        {
            src: "/trofeo8.jpg",
            texto: "Trofeo 8",
            tipo: "auto"
        },
        {
            src: "/trofeo9.jpg",
            texto: "Trofeo 9",
            tipo: "auto"
        },
        {
            src: "/trofeo10.jpg",
            texto: "Trofeo 10",
            tipo: "auto"
        },
        {
            src: "/trofeo11.jpg",
            texto: "Trofeo 11",
            tipo: "auto"
        },
        {
            src: "/trofeo12.jpg",
            texto: "Trofeo 12",
            tipo: "auto"
        },
        {
            src: "/trofeo13.png",
            texto: "Trofeo 13",
            tipo: "auto"
        },
        {
            src: "/trofeo14.jpg",
            texto: "Trofeo 14",
            tipo: "auto"
        },
        {
            src: "/trofeo15.jpg",
            texto: "Trofeo 15",
            tipo: "auto"
        },
        {
            src: "/trofeo16.jpg",
            texto: "Trofeo 16",
            tipo: "auto"
        },
        {
            src: "/trofeo17.jpg",
            texto: "Trofeo 17",
            tipo: "auto"
        },
        {
            src: "/trofeo18.jpg",
            texto: "Trofeo 18",
            tipo: "auto"
        },
        {
            src: "/trofeo19.jpg",
            texto: "Trofeo 19",
            tipo: "auto"
        },
        {
            src: "/trofeo20.jpg",
            texto: "Trofeo 20",
            tipo: "auto"
        },
        {
            src: "/trofeo21.jpg",
            texto: "Trofeo 21",
            tipo: "auto"
        },
        {
            src: "/trofeo22.jpg",
            texto: "Trofeo 22",
            tipo: "auto"
        },
        {
            src: "/trofeo23.jpg",
            texto: "Trofeo 23",
            tipo: "auto"
        },
        {
            src: "/trofeo24.jpg",
            texto: "Trofeo 24",
            tipo: "auto"
        },
        {
            src: "/trofeo1.jpg",
            texto: "🏆 Campeón Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo2.jpg",
            texto: "🥈 Subcampeón Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo3.jpg",
            texto: "🥉 Tercer Lugar Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo4.jpg",
            texto: "🏅 Top 10 Mensual",
            tipo: "asignado"
        },
        {
            src: "/trofeo5.jpg",
            texto: "📚 Participante Activo",
            tipo: "asignado"
        }
    ];
    // Lista de trofeos premium (12)
    // TROFEOS_PREMIUM ahora se importa desde trofeosPremiumImport.ts
    // Trofeos automáticos con condición
    const TROFEOS_AUTO = [
        {
            src: "/trofeo1.jpg",
            texto: "Trofeo 1",
            tipo: "auto",
            condicion: (user)=>(user.likes || 0) >= 10
        },
        {
            src: "/trofeo2.jpg",
            texto: "Trofeo 2",
            tipo: "auto",
            condicion: (user)=>(user.amigos?.length || 0) >= 1
        },
        {
            src: "/trofeo3.jpg",
            texto: "Trofeo 3",
            tipo: "auto",
            condicion: (user)=>(user.comentariosRealizados || 0) >= 1
        },
        {
            src: "/trofeo4.jpg",
            texto: "Trofeo 4",
            tipo: "auto",
            condicion: (user)=>(user.historias?.length || 0) >= 1
        },
        {
            src: "/trofeo5.jpg",
            texto: "Trofeo 5",
            tipo: "auto",
            condicion: (user)=>(user.preguntasAcertadas || 0) >= 20
        },
        {
            src: "/trofeo6.jpg",
            texto: "Trofeo 6",
            tipo: "auto",
            condicion: (user)=>(user.competicionesSuperadas || 0) >= 1
        },
        {
            src: "/trofeo7.jpg",
            texto: "Trofeo 7",
            tipo: "auto",
            condicion: (user)=>!!user.estaEnRanking
        },
        {
            src: "/trofeo8.jpg",
            texto: "Trofeo 8",
            tipo: "auto",
            condicion: (user)=>(user.concursosGanados || 0) >= 1
        },
        {
            src: "/trofeo9.jpg",
            texto: "Trofeo 9",
            tipo: "auto",
            condicion: (user)=>(user.likes || 0) >= 100
        },
        {
            src: "/trofeo10.jpg",
            texto: "Trofeo 10",
            tipo: "auto",
            condicion: (user)=>(user.amigos?.length || 0) >= 10
        },
        {
            src: "/trofeo11.jpg",
            texto: "Trofeo 11",
            tipo: "auto",
            condicion: (user)=>(user.historias?.length || 0) >= 3
        },
        {
            src: "/trofeo12.jpg",
            texto: "Trofeo 12",
            tipo: "auto",
            condicion: (user)=>(user.comentariosRecibidos || 0) >= 3
        },
        {
            src: "/trofeo13.png",
            texto: "Trofeo 13",
            tipo: "auto",
            condicion: (user)=>!!user.estaEnRankingCompeticiones
        },
        {
            src: "/trofeo14.jpg",
            texto: "Trofeo 14",
            tipo: "auto",
            condicion: (user)=>(user.likes || 0) >= 500
        },
        {
            src: "/trofeo15.jpg",
            texto: "Trofeo 15",
            tipo: "auto",
            condicion: (user)=>(user.amigos?.length || 0) >= 30
        },
        {
            src: "/trofeo16.jpg",
            texto: "Trofeo 16",
            tipo: "auto",
            condicion: (user)=>(user.comentariosRecibidos || 0) >= 10
        },
        {
            src: "/trofeo17.jpg",
            texto: "Trofeo 17",
            tipo: "auto",
            condicion: (user)=>(user.historias?.length || 0) >= 15
        },
        {
            src: "/trofeo18.jpg",
            texto: "Trofeo 18",
            tipo: "auto",
            condicion: (user)=>(user.concursosGanados || 0) >= 3
        },
        {
            src: "/trofeo19.jpg",
            texto: "Trofeo 19",
            tipo: "auto",
            condicion: (user)=>(user.preguntasAcertadas || 0) >= 1000
        },
        {
            src: "/trofeo20.jpg",
            texto: "Trofeo 20",
            tipo: "auto",
            condicion: (user)=>{
                if (!user.fechaInscripcion) return false;
                const fecha = new Date(user.fechaInscripcion);
                const ahora = new Date();
                const diff = ahora.getTime() - fecha.getTime();
                return diff >= 365 * 24 * 60 * 60 * 1000; // 1 año en ms
            }
        },
        {
            src: "/trofeo21.jpg",
            texto: "Trofeo 21",
            tipo: "auto",
            condicion: (user)=>(user.historias?.length || 0) >= 30
        },
        {
            src: "/trofeo22.jpg",
            texto: "Trofeo 22",
            tipo: "auto",
            condicion: (user)=>(user.likes || 0) >= 1000
        },
        {
            src: "/trofeo23.jpg",
            texto: "Trofeo 23",
            tipo: "auto",
            condicion: (user)=>(user.amigos?.length || 0) >= 50
        }
    ];
    // Unificar todos los trofeos para el selector
    const TROFEOS_ALL = [
        ...TROFEOS,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TROFEOS_PREMIUM"]
    ];
    // Función para obtener trofeos desbloqueados automáticamente
    const getAutoTrofeos = (user)=>{
        // Trofeo Premium 7: Diseñador del Futuro
        // ...existing code...
        // Asegurar que el campo amigos es siempre un array actualizado
        const userSync = {
            ...user,
            amigos: Array.isArray(user.amigos) ? user.amigos : []
        };
        let autoTrofeos = TROFEOS_AUTO.map((t, idx)=>typeof t.condicion === 'function' && t.condicion(userSync) ? idx : null).filter((idx)=>idx !== null);
        // Desbloqueo automático de trofeos premium
        const esPremium = userSync.premium === true || userSync.isPremium === true || userSync.tipo === "premium";
        const historiasCreadas = Array.isArray(userSync.historias) ? userSync.historias.length : userSync.historiasCreadas || 0;
        const preguntasAcertadas = userSync.preguntasAcertadas || 0;
        // Trofeo Premium 1: Historiador Premium
        if (esPremium && historiasCreadas >= 35) {
            autoTrofeos.push(TROFEOS.length); // Índice del trofeo premium 1
        }
        // Trofeo Premium 2: Sabio Premium
        if (esPremium && preguntasAcertadas >= 1200) {
            autoTrofeos.push(TROFEOS.length + 1); // Índice del trofeo premium 2
        }
        // Trofeo Premium 3: Amigo Premium
        const amigosCount = Array.isArray(userSync.amigos) ? userSync.amigos.length : 0;
        if (esPremium && amigosCount >= 60) {
            autoTrofeos.push(TROFEOS.length + 2); // Índice del trofeo premium 3
        }
        // Trofeo Premium 4: Espíritu Navideño Premium
        let tieneHistoriaNavidad = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaNavidad = userSync.historias.some((historia)=>{
                if (!historia || !historia.titulo || !historia.fecha || !historia.modo) return false;
                const tituloLower = historia.titulo.toLowerCase();
                const esNavidad = tituloLower.includes("navidad") || tituloLower.includes("navideño") || tituloLower.includes("navideña");
                const fecha = new Date(historia.fecha);
                const year = fecha.getFullYear();
                // Rango: 20 diciembre a 6 enero (del año siguiente)
                const inicio = new Date(year, 11, 20); // 20 diciembre
                const fin = new Date(year + 1, 0, 6, 23, 59, 59); // 6 enero
                return historia.modo === "My Live" && esNavidad && fecha >= inicio && fecha <= fin;
            });
        }
        if (esPremium && tieneHistoriaNavidad) {
            autoTrofeos.push(TROFEOS.length + 3); // Índice del trofeo premium 4
        }
        // Trofeo Premium 5: Verano Dorado Premium
        let tieneHistoriaVerano = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaVerano = userSync.historias.some((historia)=>{
                if (!historia || !historia.fecha || !historia.modo) return false;
                const fecha = new Date(historia.fecha);
                // Rango: 15 junio a 15 septiembre
                const year = fecha.getFullYear();
                const inicio = new Date(year, 5, 15); // 15 junio
                const fin = new Date(year, 8, 15, 23, 59, 59); // 15 septiembre
                return historia.modo === "My Live" && fecha >= inicio && fecha <= fin;
            });
        }
        if (esPremium && tieneHistoriaVerano) {
            autoTrofeos.push(TROFEOS.length + 4); // Índice del trofeo premium 5
        }
        // Trofeo Premium 6: Veterano Dorado
        let mesesPremium = 0;
        if (userSync.premiumInicio && userSync.premiumExpiracion) {
            const inicio = new Date(userSync.premiumInicio);
            const fin = new Date(userSync.premiumExpiracion);
            // Calcular meses completos entre inicio y fin
            mesesPremium = (fin.getFullYear() - inicio.getFullYear()) * 12 + (fin.getMonth() - inicio.getMonth());
            // Si el día de expiración es menor que el de inicio, restar un mes
            if (fin.getDate() < inicio.getDate()) {
                mesesPremium--;
            }
        }
        if (esPremium && mesesPremium >= 6) {
            autoTrofeos.push(TROFEOS.length + 5); // Índice del trofeo premium 6
        }
        // Trofeo Premium 7: Diseñador del Futuro
        let tieneLogoStoryUp = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneLogoStoryUp = userSync.historias.some((historia)=>{
                if (!historia || !historia.titulo || !historia.imagen) return false;
                const tituloLower = historia.titulo.toLowerCase();
                return tituloLower.includes("logo storyup") && !!historia.imagen;
            });
        }
        if (esPremium && tieneLogoStoryUp) {
            autoTrofeos.push(TROFEOS.length + 6); // Índice del trofeo premium 7
        }
        // Trofeo Premium 8: Escritor Premium
        if (esPremium && historiasCreadas >= 15) {
            autoTrofeos.push(TROFEOS.length + 7); // Índice del trofeo premium 8
        }
        // Trofeo Premium 9: Competidor Premium
        // Consigue al menos 30 trofeos (normales + premium)
        const totalTrofeosDesbloqueados = Array.isArray(userSync.trofeosDesbloqueados) ? userSync.trofeosDesbloqueados.length : 0;
        // Incluye los automáticos calculados en esta función
        const totalAutoTrofeos = autoTrofeos.length;
        const totalTrofeos = totalTrofeosDesbloqueados + totalAutoTrofeos;
        if (esPremium && totalTrofeos >= 30) {
            autoTrofeos.push(TROFEOS.length + 8); // Índice del trofeo premium 9
        }
        // Trofeo Premium 10: Cerebro de Oro
        // 2500+ preguntas acertadas en Aprende con Pipo
        if (esPremium && preguntasAcertadas >= 2500) {
            autoTrofeos.push(TROFEOS.length + 9); // Índice del trofeo premium 10
        }
        // Trofeo Premium 11: Analista Premium
        // Consigue nivel 3 en todas las materias en "Analisis por materias" de Estadísticas premium Avanzadas
        // Suponemos que user.nivelesMaterias es un objeto tipo { matematicas: 3, lenguaje: 3, ... }
        const materiasRequeridas = [
            "matematicas",
            "lenguaje",
            "ciencias",
            "ingles",
            "historia",
            "geografia",
            "literatura"
        ];
        const nivelesMaterias = userSync.nivelesMaterias || {};
        const todasNivel3 = materiasRequeridas.every((m)=>nivelesMaterias[m] >= 3);
        if (esPremium && todasNivel3) {
            autoTrofeos.push(TROFEOS.length + 10); // Índice del trofeo premium 11
        }
        // Trofeo Premium 12: Red Social Premium
        // Conseguir 100+ amigos
        if (esPremium && amigosCount >= 100) {
            autoTrofeos.push(TROFEOS.length + 11); // Índice del trofeo premium 12
        }
        return autoTrofeos;
    };
    // Función para saber si un trofeo está desbloqueado
    const isTrofeoUnlocked = (user, idx)=>{
        const auto = getAutoTrofeos(user);
        const manual = Array.isArray(user.trofeosDesbloqueados) ? user.trofeosDesbloqueados : [];
        const bloqueados = Array.isArray(user.trofeosBloqueados) ? user.trofeosBloqueados : [];
        const asignados = Array.isArray(user.trofeos) ? user.trofeos : [];
        return (auto.includes(idx) || manual.includes(idx) || asignados.includes(idx)) && !bloqueados.includes(idx);
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-green-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white shadow rounded p-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Perfil"
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 645,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No se ha iniciado sesión."
                    }, void 0, false, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 646,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/perfil/page.tsx",
                lineNumber: 644,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/perfil/page.tsx",
            lineNumber: 643,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    const displayedUser = selectedUser ? usuarios.find((u)=>u.nick === selectedUser) || user : user;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-green-100 flex flex-col pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center mt-2 mb-4",
                    children: [
                        mensajeRecibido && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-yellow-400 text-white px-2 py-1 rounded font-bold mr-4 animate-bounce",
                            onClick: ()=>{
                                setMensajeRecibido(false);
                                localStorage.removeItem(`chat_aviso_${user.nick}`);
                            },
                            children: "Mensaje recibido"
                        }, void 0, false, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 657,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-center",
                            children: [
                                "Perfil de ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderNick"])(displayedUser.nick)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 665,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 655,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-md w-full bg-white shadow rounded p-6 ml-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-center w-full",
                                        children: t('informacionPersonal')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 670,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t('nombre'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 673,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        displayedUser.nombre
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Nick:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 674,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$renderNick$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderNick"])(displayedUser.nick)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t('email'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 675,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        displayedUser.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 675,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t('centroEducativo'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        displayedUser.centro
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 676,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t('curso'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 677,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        displayedUser.curso
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 677,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t('tipoUsuario'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 678,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        user.tipo
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 678,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                t('fechaInscripcion'),
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        user.fechaInscripcion ? new Date(user.fechaInscripcion).toLocaleDateString('es-ES') : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 679,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col mt-2 gap-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row gap-x-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "👍"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Likes:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-300 text-green-900 font-bold text-sm",
                                                                children: displayedUser.likes || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center ml-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "👥"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 690,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    t('totalAmigos'),
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-900 font-bold text-sm",
                                                                children: displayedUser.amigos ? displayedUser.amigos.length : 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 683,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row gap-x-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "📖"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    t('totalHistorias'),
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-sm",
                                                                children: displayedUser.historias ? displayedUser.historias.length : 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "💬"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    t('totalComentarios'),
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-900 font-bold text-sm",
                                                                children: displayedUser.comentariosRecibidos || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 695,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row gap-x-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "🏆"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    t('trofeosDesbloqueados'),
                                                                    ":"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            (()=>{
                                                                // Trofeos automáticos
                                                                const auto = getAutoTrofeos(displayedUser);
                                                                // Manuales
                                                                const manual = Array.isArray(displayedUser.trofeosDesbloqueados) ? displayedUser.trofeosDesbloqueados : [];
                                                                // Asignados (por competiciones, etc.)
                                                                const asignados = Array.isArray(displayedUser.trofeos) ? displayedUser.trofeos : [];
                                                                // Premium
                                                                const premiumCount = manual.filter((idx)=>idx >= TROFEOS.length && idx < TROFEOS.length + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TROFEOS_PREMIUM"].length).length;
                                                                // Unir todos y contar únicos
                                                                const total = new Set([
                                                                    ...auto,
                                                                    ...manual,
                                                                    ...asignados
                                                                ]).size + premiumCount;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-200 text-pink-900 font-bold text-sm",
                                                                    children: total
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 723,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Respuestas acertadas:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 font-bold text-sm",
                                                                children: user.preguntasAcertadas || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 730,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 707,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row gap-x-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "🥇"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Competiciones:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-200 text-teal-900 font-bold text-sm",
                                                                children: displayedUser.competicionesSuperadas || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mr-2 text-lg",
                                                                children: "🎉"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 740,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Concursos:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-900 font-bold text-sm",
                                                                children: displayedUser.concursosGanados || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 733,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 682,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 680,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 669,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col flex-1 ml-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-md w-full bg-white shadow rounded p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-4 text-center",
                                                    children: t('trofeosDesbloqueados')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-6 gap-2",
                                                    children: TROFEOS.map((trofeo, idx)=>{
                                                        const tieneTrofeo = isTrofeoUnlocked(user, idx);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `relative bg-white rounded-lg shadow flex items-center justify-center w-14 h-14 border border-gray-200 ${tieneTrofeo ? '' : 'opacity-40'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: trofeo.src,
                                                                    alt: trofeo.texto,
                                                                    className: "w-10 h-10 object-contain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 758,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                tieneTrofeo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute top-1 right-1 bg-yellow-200 text-xs font-bold rounded px-1 py-0.5",
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "56",
                                                                            height: "56",
                                                                            viewBox: "0 0 56 56",
                                                                            className: "absolute text-red-500",
                                                                            style: {
                                                                                zIndex: 2,
                                                                                left: 0,
                                                                                top: 0
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "0",
                                                                                    y1: "0",
                                                                                    x2: "56",
                                                                                    y2: "56",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "6"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 764,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "56",
                                                                                    y1: "0",
                                                                                    x2: "0",
                                                                                    y2: "56",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "6"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 765,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 763,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "48",
                                                                            height: "48",
                                                                            viewBox: "0 0 20 20",
                                                                            fill: "none",
                                                                            className: "text-yellow-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "2",
                                                                                    y: "7",
                                                                                    width: "16",
                                                                                    height: "10",
                                                                                    rx: "3",
                                                                                    fill: "currentColor"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 768,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "5",
                                                                                    y: "2",
                                                                                    width: "10",
                                                                                    height: "7",
                                                                                    rx: "5",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    fill: "none"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 769,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    cx: "10",
                                                                                    cy: "13",
                                                                                    r: "2",
                                                                                    fill: "#fff"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 770,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 767,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 753,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-md w-full bg-white shadow rounded p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-4 text-center",
                                                    children: "Trofeos Premium"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-4 w-full",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TROFEOS_PREMIUM"].map((trofeo, idx)=>{
                                                        const tieneTrofeo = isTrofeoUnlocked(user, TROFEOS.length + idx);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `relative bg-white rounded-lg shadow flex items-center justify-center w-20 h-20 border-2 border-yellow-400 ${tieneTrofeo ? '' : 'opacity-40'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: trofeo.src,
                                                                    alt: `Premium ${idx + 1}`,
                                                                    className: "w-16 h-16 object-contain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                tieneTrofeo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute top-1 right-1 bg-yellow-300 text-sm font-bold rounded px-2 py-0.5",
                                                                    children: idx + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "72",
                                                                            height: "72",
                                                                            viewBox: "0 0 72 72",
                                                                            className: "absolute text-red-500",
                                                                            style: {
                                                                                zIndex: 2,
                                                                                left: 0,
                                                                                top: 0
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "0",
                                                                                    y1: "0",
                                                                                    x2: "72",
                                                                                    y2: "72",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "8"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 793,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "72",
                                                                                    y1: "0",
                                                                                    x2: "0",
                                                                                    y2: "72",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "8"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 794,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 792,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "64",
                                                                            height: "64",
                                                                            viewBox: "0 0 20 20",
                                                                            fill: "none",
                                                                            className: "text-yellow-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "2",
                                                                                    y: "7",
                                                                                    width: "16",
                                                                                    height: "10",
                                                                                    rx: "3",
                                                                                    fill: "currentColor"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 797,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                    x: "5",
                                                                                    y: "2",
                                                                                    width: "10",
                                                                                    height: "7",
                                                                                    rx: "5",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "2",
                                                                                    fill: "none"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 798,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    cx: "10",
                                                                                    cy: "13",
                                                                                    r: "2",
                                                                                    fill: "#fff"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 799,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 796,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 780,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 749,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row justify-start mt-16",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white shadow-lg rounded-lg p-6 flex flex-row items-start gap-6",
                                        style: {
                                            width: 'calc(2 * 28rem + 1rem)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-64 flex flex-col items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "destinatario",
                                                        className: "font-medium mb-2 text-sm",
                                                        children: "Enviar a usuario:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "destinatario",
                                                        className: "px-2 py-2 rounded border border-blue-300 bg-white w-full text-sm",
                                                        value: selectedUser,
                                                        onChange: (e)=>setSelectedUser(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: t('seleccionarUsuario')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 821,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            usuarios.filter((u, i, arr)=>arr.findIndex((x)=>x.nick === u.nick) === i).sort((a, b)=>a.nick.localeCompare(b.nick)).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: u.nick,
                                                                    children: u.nick
                                                                }, u.nick, false, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 826,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 813,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-center flex-1",
                                                            children: "Chat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 832,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 831,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-64 bg-gray-50 rounded-lg border border-gray-200 p-4 overflow-y-auto flex flex-col",
                                                        children: [
                                                            chatMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 flex items-center justify-center text-gray-400",
                                                                children: "El chat estará disponible aquí."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)) : chatMessages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mb-2 text-sm flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: [
                                                                                        msg.from === user.nick ? "Tú" : msg.from,
                                                                                        " → ",
                                                                                        msg.to === user.nick ? "Tú" : msg.to,
                                                                                        ":"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                                    lineNumber: 841,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " ",
                                                                                msg.text
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 840,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        msg.fecha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-xs text-gray-500",
                                                                            children: msg.fecha
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                                            lineNumber: 844,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full mt-4 flex",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        className: "flex-1 border rounded-l px-3 py-2 focus:outline-none",
                                                                        placeholder: "Escribe un mensaje...",
                                                                        value: chatInput,
                                                                        onChange: (e)=>setChatInput(e.target.value),
                                                                        disabled: !selectedUser
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 850,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "bg-green-500 text-white px-4 py-2 rounded-r font-semibold",
                                                                        disabled: !selectedUser || !chatInput.trim(),
                                                                        onClick: ()=>{
                                                                            if (selectedUser && chatInput.trim() && user && user.nick) {
                                                                                // Mensaje para emisor
                                                                                const mensaje = {
                                                                                    from: user.nick,
                                                                                    to: selectedUser,
                                                                                    text: chatInput,
                                                                                    fecha: new Date().toLocaleString('es-ES')
                                                                                };
                                                                                const mensajesEmisorStr = localStorage.getItem(`chat_${user.nick}`);
                                                                                let mensajesEmisor = mensajesEmisorStr ? JSON.parse(mensajesEmisorStr) : [];
                                                                                mensajesEmisor = [
                                                                                    ...mensajesEmisor,
                                                                                    mensaje
                                                                                ].slice(-5);
                                                                                localStorage.setItem(`chat_${user.nick}`, JSON.stringify(mensajesEmisor));
                                                                                setChatMessages(mensajesEmisor);
                                                                                // Mensaje para receptor
                                                                                const mensajesReceptorStr = localStorage.getItem(`chat_${selectedUser}`);
                                                                                let mensajesReceptor = mensajesReceptorStr ? JSON.parse(mensajesReceptorStr) : [];
                                                                                mensajesReceptor = [
                                                                                    ...mensajesReceptor,
                                                                                    mensaje
                                                                                ].slice(-5);
                                                                                localStorage.setItem(`chat_${selectedUser}`, JSON.stringify(mensajesReceptor));
                                                                                // Activar aviso para receptor
                                                                                localStorage.setItem(`chat_aviso_${selectedUser}`, "1");
                                                                                // Forzar actualización en la app del receptor
                                                                                window.dispatchEvent(new Event('storage'));
                                                                                setChatInput("");
                                                                            }
                                                                        },
                                                                        children: t('enviar')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 45
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 849,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 830,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 811,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 810,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 748,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 667,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                user.tipo === "docente" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mx-auto mt-20 flex flex-row gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center mb-2",
                                    children: "Crear noticia"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 896,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "w-full flex flex-col gap-4",
                                    onSubmit: handleNoticiaSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "border rounded px-3 py-2 w-full",
                                            placeholder: "Título de la noticia",
                                            value: noticiaTitulo,
                                            onChange: (e)=>setNoticiaTitulo(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 898,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "border rounded px-3 py-2 w-full min-h-[80px]",
                                                    placeholder: "Escribe la noticia aquí...",
                                                    value: noticiaTexto,
                                                    onChange: (e)=>setNoticiaTexto(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 906,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                noticiaImagen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: noticiaImagen,
                                                    alt: "Previsualización",
                                                    className: "absolute left-0 top-0 w-full h-full object-contain rounded shadow pointer-events-none",
                                                    style: {
                                                        zIndex: 1,
                                                        opacity: 0.7
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 913,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 905,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "noticia-imagen",
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: (e)=>{
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            setNombreArchivo(file.name);
                                                            const reader = new FileReader();
                                                            reader.onload = (ev)=>{
                                                                setNoticiaImagen(ev.target?.result);
                                                            };
                                                            reader.readAsDataURL(file);
                                                        } else {
                                                            setNombreArchivo("");
                                                            setNoticiaImagen("");
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold border",
                                                    onClick: ()=>document.getElementById('noticia-imagen')?.click(),
                                                    children: "Seleccionar imagen"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "bg-blue-500 text-white px-4 py-2 rounded font-semibold",
                                                    children: "Publicar noticia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 897,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 895,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center mb-2",
                                    children: "Crear concurso"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 947,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "w-full flex flex-col gap-4",
                                    onSubmit: handleConcursoSubmit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "border rounded px-3 py-2 flex-1",
                                                    placeholder: t('titulo'),
                                                    value: concursoTitulo,
                                                    onChange: (e)=>setConcursoTitulo(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-500",
                                                    children: [
                                                        "ID: ",
                                                        concursoId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "border rounded px-3 py-2 w-full min-h-[80px]",
                                            placeholder: t('descripcion'),
                                            value: concursoTexto,
                                            onChange: (e)=>setConcursoTexto(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 959,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm mb-1",
                                                            children: t('fechaInicio')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            className: "border rounded px-3 py-2",
                                                            value: fechaInicio,
                                                            onChange: (e)=>setFechaInicio(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm mb-1",
                                                            children: t('fechaFin')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            className: "border rounded px-3 py-2",
                                                            value: fechaFin,
                                                            onChange: (e)=>setFechaFin(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 972,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "bg-blue-500 text-white px-4 py-2 rounded font-semibold",
                                                    children: t('enviar')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 974,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 965,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 948,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full mt-6 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-semibold text-center mb-3 text-gray-700",
                                            children: t('gestionarConcursosFinalizados')
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 980,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "border rounded px-3 py-2 text-sm",
                                                    value: concursoSeleccionado,
                                                    onChange: (e)=>setConcursoSeleccionado(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: t('seleccionarConcurso')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 988,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        (()=>{
                                                            const concursosStr = localStorage.getItem("concursos");
                                                            const concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
                                                            const hoy = new Date();
                                                            return concursosArr.filter((c)=>c.autor === user.nick && new Date(c.fechaFinal) < hoy && !c.ganador).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c.numero,
                                                                    children: [
                                                                        c.titulo,
                                                                        " (ID: ",
                                                                        c.numero,
                                                                        ") - ",
                                                                        c.ganador ? `Ganador: ${c.ganador}` : 'Sin ganador'
                                                                    ]
                                                                }, c.numero, true, {
                                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                                    lineNumber: 996,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)));
                                                        })()
                                                    ]
                                                }, `concurso-select-${refreshKey}`, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "border rounded px-3 py-2 text-sm",
                                                    value: ganadorSeleccionado,
                                                    onChange: (e)=>setGanadorSeleccionado(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: t('seleccionarGanador')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1007,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        usuarios.sort((a, b)=>a.nick.localeCompare(b.nick)).map((u, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: u.nick,
                                                                children: u.nick
                                                            }, idx, false, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1009,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-green-500 text-white px-4 py-2 rounded font-semibold text-sm",
                                                    onClick: handleAsignarGanador,
                                                    disabled: !concursoSeleccionado || !ganadorSeleccionado,
                                                    children: t('asignarGanador')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 981,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 979,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 946,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 894,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                user.tipo && user.tipo.toLowerCase() === "docente" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4 text-center",
                                children: t('panelAdministracion')
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1028,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "w-full flex flex-col items-center gap-4",
                                onSubmit: handlePalabraProhibidaSubmit,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full max-w-xs items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "border rounded px-3 py-2 min-w-[280px] max-w-full",
                                            placeholder: t('palabraProhibida'),
                                            value: palabraProhibida,
                                            onChange: (e)=>setPalabraProhibida(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "bg-red-500 text-white px-4 py-2 rounded font-semibold whitespace-nowrap",
                                            children: "Seleccionar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1029,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-lg font-semibold mt-6 text-center",
                                children: t('sistemaAntibullying')
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1041,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-700 max-w-2xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-start gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold mb-2",
                                                    children: t('avisoAntibullying')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                    className: "list-decimal ml-6 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: t('historiasTerror')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: t('perdidaLikes')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: t('mensajesUsuario')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: t('palabrasProhibidasChat')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: t('actividadConsecutiva')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1051,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center min-w-[180px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `relative w-32 h-32 rounded-full font-bold text-white text-lg mb-2 transition-all flex items-center justify-center ${bullyingActivo ? 'bg-red-600 opacity-100 shadow-lg animate-blink' : 'bg-green-600 opacity-40'}`,
                                                    disabled: !bullyingActivo,
                                                    onClick: handleApagarBullying,
                                                    children: [
                                                        bullyingActivo ? 'Aviso Antibullying' : t('sinPeligro'),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "100%",
                                                                height: "100%",
                                                                viewBox: "0 0 100 100",
                                                                className: "opacity-70",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "10",
                                                                        y1: "10",
                                                                        x2: "90",
                                                                        y2: "90",
                                                                        stroke: "white",
                                                                        strokeWidth: "10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 1064,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "90",
                                                                        y1: "10",
                                                                        x2: "10",
                                                                        y2: "90",
                                                                        stroke: "white",
                                                                        strokeWidth: "10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                                        lineNumber: 1065,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                                lineNumber: 1063,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/perfil/page.tsx",
                                                            lineNumber: 1062,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1055,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                usuarioBullying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-red-700 font-semibold text-base",
                                                    children: usuarioBullying
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1054,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/page.tsx",
                                lineNumber: 1042,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/page.tsx",
                        lineNumber: 1027,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 1026,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                user.nick === "PIPO68" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-2xl mx-auto mt-16 bg-blue-50 border-l-4 border-blue-400 p-2 rounded-md text-blue-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-bold text-center mb-2",
                            children: "Solo para PIPO68(Admin)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 1081,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "admin-user-select",
                                    className: "font-semibold",
                                    children: "Selecciona usuario:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1083,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "admin-user-select",
                                    className: "border rounded px-3 py-2 w-full max-w-xs",
                                    value: selectedUser,
                                    onChange: (e)=>setSelectedUser(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Selecciona un usuario"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1090,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        usuarios.filter((u, i, arr)=>arr.findIndex((x)=>x.nick === u.nick) === i).sort((a, b)=>a.nick.localeCompare(b.nick)).map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: u.nick,
                                                children: u.nick
                                            }, u.nick, false, {
                                                fileName: "[project]/src/app/perfil/page.tsx",
                                                lineNumber: 1095,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1084,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-pink-500 text-white px-4 py-2 rounded font-semibold",
                                        disabled: !selectedUser,
                                        onClick: ()=>selectedUser && updateLikes(selectedUser, 1),
                                        children: "Añadir like"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/perfil/page.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1098,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 mt-2 w-full max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-semibold",
                                            children: "Desbloquear trofeo:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1107,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "border-2 border-blue-500 bg-white rounded px-3 py-2",
                                            value: trofeoSeleccionado,
                                            onChange: (e)=>setTrofeoSeleccionado(e.target.value),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Selecciona trofeo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/perfil/page.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                TROFEOS.map((trofeo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "normal-" + (idx + 1),
                                                        children: `Trofeo #${idx + 1} - ${trofeo.texto}`
                                                    }, "normal-" + (idx + 1), false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1115,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trofeosPremiumImport$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TROFEOS_PREMIUM"].map((trofeo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "premium-" + (idx + 1),
                                                        children: `Premium #${idx + 1} - ${trofeo.texto}`
                                                    }, "premium-" + (idx + 1), false, {
                                                        fileName: "[project]/src/app/perfil/page.tsx",
                                                        lineNumber: 1118,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1108,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-yellow-500 text-white px-4 py-2 rounded font-semibold mt-1",
                                            disabled: !selectedUser || trofeoSeleccionado === "",
                                            onClick: ()=>{
                                                if (trofeoSeleccionado.startsWith("normal-")) {
                                                    handleUnlockTrofeo(Number(trofeoSeleccionado.replace("normal-", "")) - 1);
                                                } else if (trofeoSeleccionado.startsWith("premium-")) {
                                                    handleUnlockTrofeo(24 + Number(trofeoSeleccionado.replace("premium-", "")) - 1);
                                                }
                                            },
                                            children: "Desbloquear trofeo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1121,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-red-500 text-white px-4 py-2 rounded font-semibold mt-1",
                                            disabled: !selectedUser || trofeoSeleccionado === "",
                                            onClick: ()=>{
                                                if (trofeoSeleccionado.startsWith("normal-")) {
                                                    handleLockTrofeo(Number(trofeoSeleccionado.replace("normal-", "")) - 1);
                                                } else if (trofeoSeleccionado.startsWith("premium-")) {
                                                    handleLockTrofeo(24 + Number(trofeoSeleccionado.replace("premium-", "")) - 1);
                                                }
                                            },
                                            children: "Bloquear trofeo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/perfil/page.tsx",
                                            lineNumber: 1134,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/perfil/page.tsx",
                                    lineNumber: 1106,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/perfil/page.tsx",
                            lineNumber: 1082,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/perfil/page.tsx",
                    lineNumber: 1080,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/perfil/page.tsx",
            lineNumber: 654,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = PerfilUsuario;
}),
];

//# sourceMappingURL=src_71056048._.js.map