(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/perfil/avatar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const AvatarSelector = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAvatar, setSelectedAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AvatarSelector.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const userStr = localStorage.getItem("user");
                if (userStr) {
                    setUser(JSON.parse(userStr));
                }
            }
        }
    }["AvatarSelector.useEffect"], []);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Cargando..."
    }, void 0, false, {
        fileName: "[project]/src/app/perfil/avatar/page.tsx",
        lineNumber: 19,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0));
    const isPremium = user ? (()=>{
        const premiumData = localStorage.getItem(`premium_${user.nick}`);
        if (premiumData) {
            try {
                const data = JSON.parse(premiumData);
                return data.activo === true;
            } catch  {
                return false;
            }
        }
        return false;
    })() : false; // Asumir que hay un campo premium
    const simpleAvatars = [
        '/avatars/simple1.png',
        ...Array.from({
            length: 29
        }, (_, i)=>`/avatars/simple${i + 2}.jpg`)
    ];
    const premiumAvatars = Array.from({
        length: 50
    }, (_, i)=>`/avatars/apremium${i + 1}.jpg`);
    // Mostrar todos los avatares siempre, pero marcar cuáles son premium
    const allAvatars = [
        ...simpleAvatars,
        ...premiumAvatars
    ];
    const premiumAvatarIndices = simpleAvatars.length; // Índice donde empiezan los premium
    const handleSelectAvatar = (avatar)=>{
        setSelectedAvatar(avatar);
    };
    const handleSave = ()=>{
        if (!selectedAvatar) return;
        // Verificar si el avatar seleccionado es premium y el usuario no es premium
        const isSelectedPremium = premiumAvatars.includes(selectedAvatar);
        if (isSelectedPremium && !isPremium) {
            alert('Este avatar es exclusivo para usuarios Premium. ¡Hazte Premium para usarlo!');
            return;
        }
        // Actualizar user
        const updatedUser = {
            ...user,
            avatar: selectedAvatar
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        // Actualizar en users array
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
            const users = JSON.parse(usersStr);
            const index = users.findIndex((u)=>u.nick === user.nick);
            if (index !== -1) {
                users[index] = updatedUser;
                localStorage.setItem("users", JSON.stringify(users));
            }
        }
        alert("Avatar actualizado");
        router.push("/perfil");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 flex flex-col items-center pt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Seleccionar Avatar"
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-yellow-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "👑"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Avatares Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/avatar/page.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-yellow-700 mt-1",
                        children: [
                            "Los avatares con corona dorada son exclusivos para usuarios Premium.",
                            !isPremium && " ¡Hazte Premium para desbloquearlos!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/perfil/avatar/page.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-5 gap-4 mb-8",
                children: allAvatars.map((avatar, idx)=>{
                    const isPremiumAvatar = idx >= premiumAvatarIndices;
                    const canSelect = !isPremiumAvatar || isPremium;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: avatar,
                                alt: `Avatar ${idx + 1}${isPremiumAvatar ? ' (Premium)' : ''}`,
                                className: `w-16 h-16 rounded-full border-2 transition-all duration-200 ${!canSelect ? 'cursor-not-allowed opacity-60 grayscale' : selectedAvatar === avatar ? 'border-blue-500 cursor-pointer' : 'border-gray-300 cursor-pointer hover:border-blue-400'} ${isPremiumAvatar ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}`,
                                onClick: ()=>canSelect && handleSelectAvatar(avatar),
                                title: isPremiumAvatar && !isPremium ? 'Avatar Premium - Hazte Premium para usarlo' : `Avatar ${idx + 1}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            isPremiumAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg",
                                children: "👑"
                            }, void 0, false, {
                                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                                lineNumber: 111,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/src/app/perfil/avatar/page.tsx",
                        lineNumber: 97,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-green-500 text-white px-6 py-3 rounded font-semibold",
                onClick: handleSave,
                disabled: !selectedAvatar,
                children: "Guardar Avatar"
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-gray-500 text-white px-6 py-3 rounded font-semibold mt-4",
                onClick: ()=>router.push("/perfil"),
                children: "Volver"
            }, void 0, false, {
                fileName: "[project]/src/app/perfil/avatar/page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/perfil/avatar/page.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AvatarSelector, "XMkOfamNCnMxWCbFD2KvuERcxZ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AvatarSelector;
const __TURBOPACK__default__export__ = AvatarSelector;
var _c;
__turbopack_context__.k.register(_c, "AvatarSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_4e58f2df._.js.map