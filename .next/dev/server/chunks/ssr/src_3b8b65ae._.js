module.exports = [
"[project]/src/components/RegisterLoginForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const cursos = [
    '1º primaria',
    '2º primaria',
    '3º primaria',
    '4º primaria',
    '5º primaria',
    '6º primaria'
];
const RegisterLoginForm = ()=>{
    const [isRegister, setIsRegister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto bg-white shadow rounded p-6 mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsRegister(true),
                        className: isRegister ? 'font-bold' : '',
                        children: "Registro"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsRegister(false),
                        className: !isRegister ? 'font-bold' : '',
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isRegister ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const userData = {
                        nombre: formData.get('nombre'),
                        nick: formData.get('nick'),
                        centro: formData.get('centro'),
                        curso: formData.get('curso'),
                        tipo: formData.get('tipo'),
                        email: formData.get('email'),
                        password: formData.get('password'),
                        linkPerfil: `/perfil/${formData.get('nick')}`,
                        fechaInscripcion: new Date().toISOString(),
                        textoFechaInscripcion: `En StoryUp desde: ${new Date().toLocaleDateString('es-ES')}`,
                        likes: 0,
                        amigos: [],
                        historias: [],
                        comentarios: []
                    };
                    let usersArr = [];
                    const usersStr = localStorage.getItem("users");
                    if (usersStr) {
                        try {
                            usersArr = JSON.parse(usersStr);
                        } catch  {}
                    }
                    if (!usersArr.some((u)=>u.email === userData.email)) {
                        usersArr.push(userData);
                        localStorage.setItem("users", JSON.stringify(usersArr));
                        localStorage.setItem("user", JSON.stringify(userData));
                        window.location.href = '/perfil';
                    } else {
                        alert("Este email ya está registrado. Por favor, inicia sesión.");
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "nombre",
                        placeholder: "Nombre real",
                        className: "w-full mb-2 p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "nick",
                        placeholder: "Nick",
                        className: "w-full mb-2 p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2",
                                children: "CEIP:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "centro",
                                placeholder: "Nombre del centro escolar",
                                className: "flex-1 p-2 border rounded",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "curso",
                        className: "w-full mb-2 p-2 border rounded",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Selecciona curso"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            cursos.map((curso)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: curso,
                                    children: curso
                                }, curso, false, {
                                    fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 68,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-1",
                                children: "Tipo de usuario:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                lineNumber: 75,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                name: "tipo",
                                className: "w-full p-2 border rounded",
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Selecciona tipo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "usuario",
                                        children: "Usuario"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "docente",
                                        children: "Docente"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Email",
                        className: "w-full mb-2 p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        name: "password",
                        placeholder: "Contraseña",
                        className: "w-full mb-4 p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-blue-600 text-white py-2 rounded",
                        children: "Registrarse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                lineNumber: 27,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const email = formData.get('email');
                    const password = formData.get('password');
                    let usersArr = [];
                    const usersStr = localStorage.getItem("users");
                    if (usersStr) {
                        try {
                            usersArr = JSON.parse(usersStr);
                        } catch  {}
                    }
                    const user = usersArr.find((u)=>u.email === email);
                    if (user) {
                        if (!user.password) {
                            alert("Este usuario no tiene contraseña guardada. Por favor, regístrate de nuevo.");
                            return;
                        }
                        if (user.password === password) {
                            localStorage.setItem("user", JSON.stringify(user));
                            window.location.href = '/perfil';
                        } else {
                            alert("Contraseña incorrecta");
                        }
                    } else {
                        alert("Email no encontrado. Por favor, regístrate.");
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Email",
                        className: "w-full mb-2 p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        name: "password",
                        placeholder: "Contraseña",
                        className: "w-full mb-4 p-2 border rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-green-600 text-white py-2 rounded",
                        children: "Iniciar sesión"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RegisterLoginForm.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RegisterLoginForm.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RegisterLoginForm.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RegisterLoginForm;
}),
"[project]/src/components/FeatureBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const FeatureBlock = ({ title, description })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded shadow p-6 w-96 h-40 flex flex-col items-center justify-center text-center border-2 border-blue-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 text-4xl",
                children: [
                    title === 'Perfil' && '👤',
                    title === 'Historias' && '📖',
                    title === 'Crea tu Historia' && '✍️',
                    title === 'Noticias' && '📰',
                    title === 'Concursos' && '🎉',
                    title === 'Competiciones' && '🏆',
                    title === 'Estadísticas' && '📊',
                    title === 'Aprende con Pipo' && '🧠'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeatureBlock.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold mb-2 text-blue-900 text-lg",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/FeatureBlock.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-700",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/FeatureBlock.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeatureBlock.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = FeatureBlock;
}),
"[project]/src/questions/campeonato-1primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuánto es 10-4?","respuesta":"6","categoria":"campeonato"},{"pregunta":"¿Cuánto es 5x2?","respuesta":"10","categoria":"campeonato"},{"pregunta":"¿Cuánto es 9-7?","respuesta":"2","categoria":"campeonato"},{"pregunta":"¿Cuánto es 6+1?","respuesta":"7","categoria":"campeonato"},{"pregunta":"¿Sinónimo de 'feliz'?","respuesta":"contento","categoria":"campeonato"},{"pregunta":"¿Antónimo de 'alto'?","respuesta":"bajo","categoria":"campeonato"},{"pregunta":"¿Quién es el protagonista de 'Caperucita Roja'?","respuesta":"Caperucita","categoria":"campeonato"},{"pregunta":"¿Qué signo se usa para preguntar?","respuesta":"?","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'rojo' en inglés?","respuesta":"Red","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'escuela' en inglés?","respuesta":"School","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'comer' en inglés?","respuesta":"Eat","categoria":"campeonato"},{"pregunta":"¿Cómo se dice 'madre' en inglés?","respuesta":"Mother","categoria":"campeonato"},{"pregunta":"¿Qué planta da manzanas?","respuesta":"Manzano","categoria":"campeonato"},{"pregunta":"¿Qué astro da luz durante el día?","respuesta":"Sol","categoria":"campeonato"},{"pregunta":"¿Qué animal vive en el agua?","respuesta":"Pez","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta está bajo tierra?","respuesta":"Raíz","categoria":"campeonato"},{"pregunta":"¿Quién fue faraón de Egipto?","respuesta":"Tutankamón","categoria":"campeonato"},{"pregunta":"¿Quién fue reina de Egipto?","respuesta":"Cleopatra","categoria":"campeonato"},{"pregunta":"¿Quién fue libertador de América?","respuesta":"Bolívar","categoria":"campeonato"},{"pregunta":"¿Quién fue emperador francés?","respuesta":"Napoleón","categoria":"campeonato"},{"pregunta":"¿En qué continente está Brasil?","respuesta":"América","categoria":"campeonato"},{"pregunta":"¿Qué río pasa por Sevilla?","respuesta":"Guadalquivir","categoria":"campeonato"},{"pregunta":"¿En qué país está París?","respuesta":"Francia","categoria":"campeonato"},{"pregunta":"¿Qué océano baña las costas de Galicia?","respuesta":"Atlántico","categoria":"campeonato"},{"pregunta":"¿Quién pierde un zapato en el baile?","respuesta":"Cenicienta","categoria":"campeonato"},{"pregunta":"¿Quién es el amigo de Pinocho?","respuesta":"Grillo","categoria":"campeonato"},{"pregunta":"¿Quién es el villano de Peter Pan?","respuesta":"Garfio","categoria":"campeonato"},{"pregunta":"¿Quién duerme cien años?","respuesta":"Aurora","categoria":"campeonato"},{"pregunta":"¿Qué sigue: enero, febrero, ...?","respuesta":"marzo","categoria":"campeonato"},{"pregunta":"¿Qué sigue: 2, 4, 6, ...?","respuesta":"8","categoria":"campeonato"},{"pregunta":"¿Qué sigue: A, B, ...?","respuesta":"C","categoria":"campeonato"},{"pregunta":"¿Qué sigue: primavera, verano, ...?","respuesta":"otoño","categoria":"campeonato"},{"pregunta":"¿Qué deporte se juega en Wimbledon?","respuesta":"Tenis","categoria":"campeonato"},{"pregunta":"¿Qué animal es símbolo de Australia?","respuesta":"Canguro","categoria":"campeonato"},{"pregunta":"¿Qué fruta es típica de Canarias?","respuesta":"Plátano","categoria":"campeonato"},{"pregunta":"¿Qué idioma se habla en Brasil?","respuesta":"Portugués","categoria":"campeonato"},{"pregunta":"¿Cuántos días tiene una semana?","respuesta":"7","categoria":"campeonato"},{"pregunta":"¿Cuántos meses tiene un año?","respuesta":"12","categoria":"campeonato"},{"pregunta":"¿Qué día es el primero de la semana?","respuesta":"lunes","categoria":"campeonato"},{"pregunta":"¿Qué mes viene después de mayo?","respuesta":"junio","categoria":"campeonato"},{"pregunta":"¿Qué día viene antes de viernes?","respuesta":"jueves","categoria":"campeonato"},{"pregunta":"¿De qué color es una manzana?","respuesta":"rojo","categoria":"campeonato"},{"pregunta":"¿Qué forma tiene una pelota?","respuesta":"redonda","categoria":"campeonato"},{"pregunta":"¿Qué forma tiene una caja?","respuesta":"cuadrada","categoria":"campeonato"},{"pregunta":"¿De qué color es el sol?","respuesta":"amarillo","categoria":"campeonato"},{"pregunta":"¿Quién es el hijo de tus padres?","respuesta":"hermano","categoria":"campeonato"},{"pregunta":"¿Quién es la hija de tus abuelos?","respuesta":"madre","categoria":"campeonato"},{"pregunta":"¿Quién es el padre de tu madre?","respuesta":"abuelo","categoria":"campeonato"},{"pregunta":"¿Quién es la hermana de tu madre?","respuesta":"tía","categoria":"campeonato"},{"pregunta":"¿Qué animal hace 'guau'?","respuesta":"perro","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene trompa?","respuesta":"elefante","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene rayas?","respuesta":"cebra","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene alas y canta?","respuesta":"pájaro","categoria":"campeonato"},{"pregunta":"¿Qué usas para leer?","respuesta":"libro","categoria":"campeonato"},{"pregunta":"¿Qué usas para cortar papel?","respuesta":"tijeras","categoria":"campeonato"},{"pregunta":"¿Qué usas para borrar?","respuesta":"goma","categoria":"campeonato"},{"pregunta":"¿Qué usas para pintar?","respuesta":"pincel","categoria":"campeonato"},{"pregunta":"¿Qué fruta es roja y pequeña?","respuesta":"fresa","categoria":"campeonato"},{"pregunta":"¿Qué fruta es verde y redonda?","respuesta":"manzana","categoria":"campeonato"},{"pregunta":"¿Qué alimento se hace con leche?","respuesta":"queso","categoria":"campeonato"},{"pregunta":"¿Qué estación sigue al verano?","respuesta":"otoño","categoria":"campeonato"},{"pregunta":"¿Qué estación hace más frío?","respuesta":"invierno","categoria":"campeonato"},{"pregunta":"¿Qué estación hace más calor?","respuesta":"verano","categoria":"campeonato"},{"pregunta":"¿Qué estación caen las hojas?","respuesta":"otoño","categoria":"campeonato"}]);}),
"[project]/src/questions/campeonato-2primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"pregunta":"¿Cuál es el resultado de 12 x 4?","respuesta":"48","categoria":"campeonato"},{"pregunta":"What is the capital of France?","respuesta":"Paris","categoria":"campeonato"},{"pregunta":"¿Quién es el autor de 'Platero y yo'?","respuesta":"Juan Ramón","categoria":"campeonato"},{"pregunta":"¿Cuántos lados tiene un hexágono?","respuesta":"6","categoria":"campeonato"},{"pregunta":"How do you say 'estrella' in English?","respuesta":"star","categoria":"campeonato"},{"pregunta":"¿En qué continente está Egipto?","respuesta":"África","categoria":"campeonato"},{"pregunta":"¿Qué invento permitió la comunicación a distancia por voz?","respuesta":"Teléfono","categoria":"campeonato"},{"pregunta":"¿Cuál es el adjetivo en la frase 'El coche rápido ganó'?","respuesta":"rápido","categoria":"campeonato"},{"pregunta":"What is the past of 'see'?","respuesta":"saw","categoria":"campeonato"},{"pregunta":"¿Quién pintó 'Las Meninas'?","respuesta":"Velázquez","categoria":"campeonato"},{"pregunta":"¿Cuánto es 45 dividido entre 5?","respuesta":"9","categoria":"campeonato"},{"pregunta":"How do you say 'montaña' in English?","respuesta":"mountain","categoria":"campeonato"},{"pregunta":"¿Qué animal es mamífero y pone huevos?","respuesta":"Ornitorrinco","categoria":"campeonato"},{"pregunta":"¿Cuál es el río más largo de Europa?","respuesta":"Volga","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer hombre en pisar la Luna?","respuesta":"Armstrong","categoria":"campeonato"},{"pregunta":"What is the plural of 'mouse'?","respuesta":"mice","categoria":"campeonato"},{"pregunta":"¿Cuántos minutos tiene una hora?","respuesta":"60","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Viena?","respuesta":"Austria","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta produce semillas?","respuesta":"Flor","categoria":"campeonato"},{"pregunta":"How do you say 'hermana' in English?","respuesta":"sister","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'Caperucita Roja'?","respuesta":"Perrault","categoria":"campeonato"},{"pregunta":"¿Cuánto es 100 menos 27?","respuesta":"73","categoria":"campeonato"},{"pregunta":"¿Cuál es el océano más grande del mundo?","respuesta":"Pacífico","categoria":"campeonato"},{"pregunta":"What is the opposite of 'short'?","respuesta":"tall","categoria":"campeonato"},{"pregunta":"¿En qué año llegó Colón a América?","respuesta":"1492","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene rayas y vive en África?","respuesta":"Cebra","categoria":"campeonato"},{"pregunta":"How do you say 'ventana' in English?","respuesta":"window","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer presidente de Estados Unidos?","respuesta":"Washington","categoria":"campeonato"},{"pregunta":"¿Cuántos días tiene el mes de febrero en un año normal?","respuesta":"28","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 8 x 7?","respuesta":"56","categoria":"campeonato"},{"pregunta":"What is the capital of Italy?","respuesta":"Rome","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'El Principito'?","respuesta":"Saint-Exupéry","categoria":"campeonato"},{"pregunta":"¿Cuántos planetas hay en el sistema solar?","respuesta":"8","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Praga?","respuesta":"Chequia","categoria":"campeonato"},{"pregunta":"How do you say 'flor' in English?","respuesta":"flower","categoria":"campeonato"},{"pregunta":"¿Qué animal es el más grande del mundo?","respuesta":"Ballena","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 36 dividido entre 6?","respuesta":"6","categoria":"campeonato"},{"pregunta":"¿Quién fue el faraón niño de Egipto?","respuesta":"Tutankamón","categoria":"campeonato"},{"pregunta":"What is the past of 'write'?","respuesta":"wrote","categoria":"campeonato"},{"pregunta":"¿Cuántos continentes hay en la Tierra?","respuesta":"6","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Lima?","respuesta":"Perú","categoria":"campeonato"},{"pregunta":"¿Qué parte del cuerpo usamos para pensar?","respuesta":"Cerebro","categoria":"campeonato"},{"pregunta":"How do you say 'zapato' in English?","respuesta":"shoe","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'Don Quijote'?","respuesta":"Cervantes","categoria":"campeonato"},{"pregunta":"¿Cuánto es 15 + 27?","respuesta":"42","categoria":"campeonato"},{"pregunta":"¿Cuál es el animal más rápido del mundo?","respuesta":"Guepardo","categoria":"campeonato"},{"pregunta":"What is the plural of 'foot'?","respuesta":"feet","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Oslo?","respuesta":"Noruega","categoria":"campeonato"},{"pregunta":"¿Qué invento permitió volar?","respuesta":"Avión","categoria":"campeonato"},{"pregunta":"¿Cuál es el adjetivo en la frase 'La casa blanca es bonita'?","respuesta":"blanca","categoria":"campeonato"},{"pregunta":"How do you say 'madre' in English?","respuesta":"mother","categoria":"campeonato"},{"pregunta":"¿Quién pintó 'La Gioconda'?","respuesta":"Leonardo","categoria":"campeonato"},{"pregunta":"¿Cuánto es 9 x 9?","respuesta":"81","categoria":"campeonato"},{"pregunta":"¿Cuál es el mar que baña las costas de España?","respuesta":"Mediterráneo","categoria":"campeonato"},{"pregunta":"What is the opposite of 'cold'?","respuesta":"hot","categoria":"campeonato"},{"pregunta":"¿En qué año nació Miguel de Cervantes?","respuesta":"1547","categoria":"campeonato"},{"pregunta":"¿Qué animal tiene trompa y vive en África?","respuesta":"Elefante","categoria":"campeonato"},{"pregunta":"How do you say 'amigo' in English?","respuesta":"friend","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer emperador romano?","respuesta":"Augusto","categoria":"campeonato"},{"pregunta":"¿Cuántos segundos tiene un minuto?","respuesta":"60","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 50 menos 23?","respuesta":"27","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Berlín?","respuesta":"Alemania","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta absorbe agua?","respuesta":"Raíz","categoria":"campeonato"},{"pregunta":"How do you say 'perro' in English?","respuesta":"dog","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'La Cenicienta'?","respuesta":"Perrault","categoria":"campeonato"},{"pregunta":"¿Cuánto es 6 x 8?","respuesta":"48","categoria":"campeonato"},{"pregunta":"¿Cuál es el océano que baña Australia?","respuesta":"Pacífico","categoria":"campeonato"},{"pregunta":"What is the capital of Spain?","respuesta":"Madrid","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Lisboa?","respuesta":"Portugal","categoria":"campeonato"},{"pregunta":"¿Qué animal es conocido por su melena?","respuesta":"León","categoria":"campeonato"},{"pregunta":"How do you say 'mesa' in English?","respuesta":"table","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer hombre en viajar al espacio?","respuesta":"Gagarin","categoria":"campeonato"},{"pregunta":"¿Cuántos días tiene un año bisiesto?","respuesta":"366","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 14 + 29?","respuesta":"43","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de París?","respuesta":"Francia","categoria":"campeonato"},{"pregunta":"¿Qué parte del cuerpo usamos para correr?","respuesta":"Piernas","categoria":"campeonato"},{"pregunta":"How do you say 'niña' in English?","respuesta":"girl","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'El Lazarillo de Tormes'?","respuesta":"Anónimo","categoria":"campeonato"},{"pregunta":"¿Cuánto es 8 x 5?","respuesta":"40","categoria":"campeonato"},{"pregunta":"¿Cuál es el mar que baña las costas de Italia?","respuesta":"Mediterráneo","categoria":"campeonato"},{"pregunta":"What is the past of 'make'?","respuesta":"made","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Moscú?","respuesta":"Rusia","categoria":"campeonato"},{"pregunta":"¿Qué animal es conocido por su caparazón?","respuesta":"Tortuga","categoria":"campeonato"},{"pregunta":"How do you say 'coche' in English?","respuesta":"car","categoria":"campeonato"},{"pregunta":"¿Quién fue el primer rey de España?","respuesta":"Carlos I","categoria":"campeonato"},{"pregunta":"¿Cuántos meses tiene un año?","respuesta":"12","categoria":"campeonato"},{"pregunta":"¿Cuál es el resultado de 21 dividido entre 3?","respuesta":"7","categoria":"campeonato"},{"pregunta":"¿En qué país está la ciudad de Nueva York?","respuesta":"Estados Unidos","categoria":"campeonato"},{"pregunta":"¿Qué parte de la planta capta la luz?","respuesta":"Hoja","categoria":"campeonato"},{"pregunta":"How do you say 'agua' in English?","respuesta":"water","categoria":"campeonato"},{"pregunta":"¿Quién escribió 'El Barco de Vapor'?","respuesta":"Sierra i Fabra","categoria":"campeonato"},{"pregunta":"¿Cuánto es 11 x 3?","respuesta":"33","categoria":"campeonato"},{"pregunta":"¿Cuál es el océano que baña América del Sur?","respuesta":"Atlántico","categoria":"campeonato"},{"pregunta":"¿Qué color resulta de mezclar rojo y blanco?","respuesta":"Rosa","categoria":"campeonato"}]);}),
"[project]/src/questions/campeonato-3primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuántos continentes hay en el mundo?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el río más largo del mundo?\",\"respuesta\":\"Amazonas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un año?\",\"respuesta\":\"Trescientos sesenta y cinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el océano más grande del mundo?\",\"respuesta\":\"Pacífico\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un hexágono?\",\"respuesta\":\"Seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el planeta más cercano al Sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos huesos tiene el cuerpo humano?\",\"respuesta\":\"Doscientos seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal terrestre más grande?\",\"respuesta\":\"Elefante\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es la capital de España?\",\"respuesta\":\"Madrid\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos colores tiene la bandera de Francia?\",\"respuesta\":\"Tres\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal más rápido del mundo?\",\"respuesta\":\"Guepardo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos planetas hay en el sistema solar?\",\"respuesta\":\"Ocho\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el metal más utilizado en la construcción?\",\"respuesta\":\"Acero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso por el cual las plantas producen su alimento?\",\"respuesta\":\"Fotosíntesis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más grande del mundo?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene febrero en un año bisiesto?\",\"respuesta\":\"Veintinueve\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el inventor del teléfono?\",\"respuesta\":\"Bell\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el idioma más hablado en el mundo?\",\"respuesta\":\"Chino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un octágono?\",\"respuesta\":\"Ocho\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el continente más pequeño?\",\"respuesta\":\"Oceanía\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene una joroba?\",\"respuesta\":\"Camello\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es la capital de Francia?\",\"respuesta\":\"París\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos dientes tiene un adulto promedio?\",\"respuesta\":\"Treinta y dos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta conocido como el planeta rojo?\",\"respuesta\":\"Marte\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el océano más pequeño del mundo?\",\"respuesta\":\"Ártico\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos anillos tiene el logo de los Juegos Olímpicos?\",\"respuesta\":\"Cinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que pone huevos y tiene plumas?\",\"respuesta\":\"Gallina\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país con más habitantes del mundo?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un pentágono?\",\"respuesta\":\"Cinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso por el cual el agua se convierte en vapor?\",\"respuesta\":\"Evaporación\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal más grande del mundo?\",\"respuesta\":\"Ballena azul\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos colores tiene el arcoíris?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el continente donde está Egipto?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el deporte más popular del mundo?\",\"respuesta\":\"Fútbol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene una semana?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene rayas negras y blancas?\",\"respuesta\":\"Cebra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más pequeño del mundo?\",\"respuesta\":\"Vaticano\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un cuadrado?\",\"respuesta\":\"Cuatro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta donde vivimos?\",\"respuesta\":\"Tierra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el río más caudaloso del mundo?\",\"respuesta\":\"Amazonas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos minutos tiene una hora?\",\"respuesta\":\"Sesenta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vive en el agua y tiene aletas?\",\"respuesta\":\"Pez\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el metal más ligero?\",\"respuesta\":\"Litio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un año bisiesto?\",\"respuesta\":\"Trescientos sesenta y seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene una trompa larga?\",\"respuesta\":\"Elefante\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el planeta más grande del sistema solar?\",\"respuesta\":\"Júpiter\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos segundos tiene un minuto?\",\"respuesta\":\"Sesenta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vuela y pone huevos?\",\"respuesta\":\"Pájaro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más largo del mundo?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un triángulo?\",\"respuesta\":\"Tres\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el objeto que usamos para medir el tiempo?\",\"respuesta\":\"Reloj\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el continente más poblado?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un mes?\",\"respuesta\":\"Treinta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vive en el mar y tiene tentáculos?\",\"respuesta\":\"Pulpo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país con más islas en el mundo?\",\"respuesta\":\"Suecia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un decágono?\",\"respuesta\":\"Diez\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta más cercano al Sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal que tiene colmillos y vive en la selva?\",\"respuesta\":\"Tigre\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene abril?\",\"respuesta\":\"Treinta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un cuello largo?\",\"respuesta\":\"Jirafa\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más montañoso del mundo?\",\"respuesta\":\"Nepal\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos colores tiene la bandera de Italia?\",\"respuesta\":\"Tres\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el planeta que tiene anillos?\",\"respuesta\":\"Saturno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el animal que vive en el hielo y nada?\",\"respuesta\":\"Pingüino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene junio?\",\"respuesta\":\"Treinta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene una melena y ruge?\",\"respuesta\":\"León\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más lluvioso del mundo?\",\"respuesta\":\"India\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un heptágono?\",\"respuesta\":\"Siete\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que produce miel?\",\"respuesta\":\"Abeja\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más frío del mundo?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un siglo?\",\"respuesta\":\"Treinta y seis mil quinientos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene manchas y corre rápido?\",\"respuesta\":\"Guepardo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más caluroso del mundo?\",\"respuesta\":\"Kuwait\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un eneágono?\",\"respuesta\":\"Nueve\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que vive en el agua y tiene caparazón?\",\"respuesta\":\"Tortuga\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más rico del mundo?\",\"respuesta\":\"Luxemburgo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un milenio?\",\"respuesta\":\"Trescientos sesenta y cinco mil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene alas y produce seda?\",\"respuesta\":\"Gusano de seda\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más seco del mundo?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un dodecágono?\",\"respuesta\":\"Doce\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en la playa?\",\"respuesta\":\"Cangrejo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más alto del mundo?\",\"respuesta\":\"Bután\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un lustro?\",\"respuesta\":\"Mil ochocientos veinticinco\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un pico y nada?\",\"respuesta\":\"Pato\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más antiguo del mundo?\",\"respuesta\":\"Irán\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un icoságono?\",\"respuesta\":\"Veinte\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en el agua dulce?\",\"respuesta\":\"Tortuga\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más joven del mundo?\",\"respuesta\":\"Sudán del Sur\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un bimestre?\",\"respuesta\":\"Sesenta\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en el agua salada?\",\"respuesta\":\"Cangrejo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el país más pequeño de América?\",\"respuesta\":\"San Cristóbal y Nieves\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos días tiene un trimestre?\",\"respuesta\":\"Noventa\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el animal que tiene un caparazón y vive en el agua?\",\"respuesta\":\"Tortuga\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una fábula?\",\"respuesta\":\"cuento\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el personaje principal de 'El Quijote'?\",\"respuesta\":\"Quijote\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una metáfora?\",\"respuesta\":\"comparación\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién es el autor de 'Platero y yo'?\",\"respuesta\":\"Juan Ramón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una rima?\",\"respuesta\":\"sonido\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el lugar donde ocurre una historia?\",\"respuesta\":\"escenario\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es un poema?\",\"respuesta\":\"verso\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El Principito'?\",\"respuesta\":\"Saint-Exupéry\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es un personaje secundario?\",\"respuesta\":\"apoyo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Caperucita Roja'?\",\"respuesta\":\"Perrault\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una moraleja?\",\"respuesta\":\"enseñanza\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'La Cenicienta'?\",\"respuesta\":\"Perrault\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una novela?\",\"respuesta\":\"relato\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El Barco de Vapor'?\",\"respuesta\":\"Sierra i Fabra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es un cuento?\",\"respuesta\":\"historia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El Lazarillo de Tormes'?\",\"respuesta\":\"Anónimo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Don Juan Tenorio'?\",\"respuesta\":\"Zorrilla\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Mafalda'?\",\"respuesta\":\"Quino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El Hobbit'?\",\"respuesta\":\"Tolkien\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué es una obra de teatro?\",\"respuesta\":\"drama\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El diario de Ana Frank'?\",\"respuesta\":\"Ana\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Harry Potter'?\",\"respuesta\":\"Rowling\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Matilda'?\",\"respuesta\":\"Dahl\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El pequeño Nicolás'?\",\"respuesta\":\"Goscinny\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Charlie y la fábrica de chocolate'?\",\"respuesta\":\"Dahl\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El libro de la selva'?\",\"respuesta\":\"Kipling\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Pinocho'?\",\"respuesta\":\"Collodi\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Alicia en el país de las maravillas'?\",\"respuesta\":\"Carroll\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'Peter Pan'?\",\"respuesta\":\"Barrie\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El patito feo'?\",\"respuesta\":\"Andersen\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el autor de 'El gato con botas'?\",\"respuesta\":\"Perrault\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'Robinson Crusoe'?\",\"respuesta\":\"Defoe\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'La isla del tesoro'?\",\"respuesta\":\"Stevenson\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El flautista de Hamelín'?\",\"respuesta\":\"Anónimo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Quién escribió 'El mago de Oz'?\",\"respuesta\":\"Baum\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/questions/campeonato-4primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Qué planeta del sistema solar tiene el día más largo?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal puede vivir tanto en el agua como en la tierra?\",\"respuesta\":\"Anfibio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué instrumento mide la intensidad de los terremotos?\",\"respuesta\":\"Sismógrafo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el principal componente del aire?\",\"respuesta\":\"Nitrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene el mayor número de países?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano es el más grande?\",\"respuesta\":\"Piel\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día de la semana se considera el primero en muchos calendarios?\",\"respuesta\":\"Domingo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene la sangre cuando está dentro del cuerpo?\",\"respuesta\":\"Rojo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por construir diques?\",\"respuesta\":\"Castor\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más cercano a la Tierra?\",\"respuesta\":\"Luna\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal es líquido a temperatura ambiente?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de volcanes activos?\",\"respuesta\":\"Indonesia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados y ángulos iguales?\",\"respuesta\":\"Círculo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce glóbulos rojos?\",\"respuesta\":\"Médula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene el mayor desierto del mundo?\",\"respuesta\":\"Antártida\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Internacional de la Tierra?\",\"respuesta\":\"22\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante un eclipse total de sol?\",\"respuesta\":\"Negro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de regenerar extremidades?\",\"respuesta\":\"Estrella\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más brillante en el cielo nocturno?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza principalmente en la fabricación de cables eléctricos?\",\"respuesta\":\"Cobre\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor extensión de selva tropical?\",\"respuesta\":\"Brasil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene un solo lado?\",\"respuesta\":\"Círculo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano controla el equilibrio?\",\"respuesta\":\"Cerebelo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de glaciares?\",\"respuesta\":\"Antártida\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial del Agua?\",\"respuesta\":\"22\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el agua en grandes cantidades?\",\"respuesta\":\"Azul\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de volar hacia atrás?\",\"respuesta\":\"Colibrí\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más grande del sistema solar?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de baterías recargables?\",\"respuesta\":\"Litio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de islas?\",\"respuesta\":\"Suecia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene más de cuatro lados?\",\"respuesta\":\"Pentágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano regula la temperatura?\",\"respuesta\":\"Piel\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de especies animales?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial del Medio Ambiente?\",\"respuesta\":\"5\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el oro puro?\",\"respuesta\":\"Amarillo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de camuflaje?\",\"respuesta\":\"Camaleón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más cercano al sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de joyas?\",\"respuesta\":\"Oro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de petróleo?\",\"respuesta\":\"Venezuela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus ángulos rectos?\",\"respuesta\":\"Rectángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano filtra las toxinas?\",\"respuesta\":\"Hígado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de montañas?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de la Salud?\",\"respuesta\":\"7\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cobre oxidado?\",\"respuesta\":\"Verde\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de construir telarañas?\",\"respuesta\":\"Araña\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el día?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de utensilios de cocina?\",\"respuesta\":\"Acero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de lagos?\",\"respuesta\":\"Canadá\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados iguales?\",\"respuesta\":\"Cuadrado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce lágrimas?\",\"respuesta\":\"Ojo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de ríos?\",\"respuesta\":\"América\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de los Océanos?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante el amanecer?\",\"respuesta\":\"Naranja\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de nadar largas distancias?\",\"respuesta\":\"Ballena\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante la noche?\",\"respuesta\":\"Luna\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de monedas?\",\"respuesta\":\"Níquel\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de agua dulce?\",\"respuesta\":\"Brasil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados diferentes?\",\"respuesta\":\"Triángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce saliva?\",\"respuesta\":\"Glándula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de desiertos?\",\"respuesta\":\"África\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de la Alimentación?\",\"respuesta\":\"16\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el hierro oxidado?\",\"respuesta\":\"Rojo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de volar largas distancias?\",\"respuesta\":\"Águila\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el atardecer?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de aviones?\",\"respuesta\":\"Aluminio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de gas natural?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus ángulos iguales?\",\"respuesta\":\"Hexágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce hormonas?\",\"respuesta\":\"Tiroides\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de volcanes?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial del Clima?\",\"respuesta\":\"23\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante una tormenta?\",\"respuesta\":\"Gris\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de correr largas distancias?\",\"respuesta\":\"Caballo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el crepúsculo?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de herramientas?\",\"respuesta\":\"Acero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de carbón?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados paralelos?\",\"respuesta\":\"Paralelogramo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce glóbulos blancos?\",\"respuesta\":\"Médula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué continente tiene la mayor cantidad de especies vegetales?\",\"respuesta\":\"América\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué día se celebra el Día Mundial de la Educación?\",\"respuesta\":\"24\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué color tiene el cielo durante el mediodía?\",\"respuesta\":\"Azul\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal es conocido por su capacidad de saltar largas distancias?\",\"respuesta\":\"Canguro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué astro es el más visible durante el solsticio de verano?\",\"respuesta\":\"Sol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué metal se utiliza en la fabricación de cables de alta tensión?\",\"respuesta\":\"Aluminio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de reservas de litio?\",\"respuesta\":\"Bolivia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados curvos?\",\"respuesta\":\"Círculo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce enzimas digestivas?\",\"respuesta\":\"Páncreas\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/questions/campeonato-5primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuál es el río más largo del mundo?\",\"respuesta\":\"Nilo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico descubrió la gravedad?\",\"respuesta\":\"Newton\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is 15 multiplied by 3?\",\"respuesta\":\"45\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué civilización antigua construyó Machu Picchu?\",\"respuesta\":\"Incas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el continente más grande?\",\"respuesta\":\"Asia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿En qué año terminó la Segunda Guerra Mundial?\",\"respuesta\":\"1945\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the capital of Australia?\",\"respuesta\":\"Canberra\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es esencial para la respiración humana?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué batalla marcó el inicio de la Revolución Francesa?\",\"respuesta\":\"Bastilla\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the synonym of 'beautiful'?\",\"respuesta\":\"Pretty\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué tratado puso fin a la Guerra de Independencia de Estados Unidos?\",\"respuesta\":\"París\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta es el más cercano al sol?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un hexágono?\",\"respuesta\":\"Seis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué instrumento musical tiene teclas blancas y negras?\",\"respuesta\":\"Piano\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the cube root of 27?\",\"respuesta\":\"3\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué archipiélago español es conocido por sus playas?\",\"respuesta\":\"Canarias\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué archipiélago español es famoso por su fiesta?\",\"respuesta\":\"Baleares\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué civilización antigua inventó el papel?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué líder sudafricano fue presidente tras el apartheid?\",\"respuesta\":\"Mandela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the past tense of 'read'?\",\"respuesta\":\"Read\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué rey español fue conocido como 'el Católico'?\",\"respuesta\":\"Fernando\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué río atraviesa la ciudad de Roma?\",\"respuesta\":\"Tíber\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué navegante portugués llegó a Brasil?\",\"respuesta\":\"Cabral\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the plural of 'foot'?\",\"respuesta\":\"Feet\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué cordillera atraviesa Sudamérica?\",\"respuesta\":\"Andes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Bolívar en su independencia?\",\"respuesta\":\"Colombia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla balear es conocida por su tranquilidad?\",\"respuesta\":\"Menorca\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the opposite of 'dark'?\",\"respuesta\":\"Light\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué tratado puso fin a la Primera Guerra Mundial?\",\"respuesta\":\"Versalles\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria tiene el Teide?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué río atraviesa Egipto?\",\"respuesta\":\"Nilo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Gandhi en su independencia?\",\"respuesta\":\"India\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the synonym of 'quick'?\",\"respuesta\":\"Fast\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida como 'la isla bonita'?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Mandela en su presidencia?\",\"respuesta\":\"Sudáfrica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué civilización construyó Chichén Itzá?\",\"respuesta\":\"Mayas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the present continuous of 'run'?\",\"respuesta\":\"Running\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Hidalgo en su independencia?\",\"respuesta\":\"México\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de idiomas oficiales?\",\"respuesta\":\"India\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué escritor escribió 'Don Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the antonym of 'strong'?\",\"respuesta\":\"Weak\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de premios Nobel?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por sus vinos?\",\"respuesta\":\"Lanzarote\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Franco en su dictadura?\",\"respuesta\":\"España\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria tiene dunas famosas?\",\"respuesta\":\"Fuerteventura\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Bolívar en su independencia?\",\"respuesta\":\"Venezuela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla balear es conocida por su catedral?\",\"respuesta\":\"Mallorca\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por San Martín en su independencia?\",\"respuesta\":\"Argentina\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su tranquilidad?\",\"respuesta\":\"La Gomera\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Castro en su revolución?\",\"respuesta\":\"Cuba\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Lenin en su revolución?\",\"respuesta\":\"Rusia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Mao en su revolución?\",\"respuesta\":\"China\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Pinochet en su dictadura?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Chávez en su presidencia?\",\"respuesta\":\"Venezuela\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Correa en su presidencia?\",\"respuesta\":\"Ecuador\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Allende en su presidencia?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Perón en su presidencia?\",\"respuesta\":\"Argentina\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Vargas en su presidencia?\",\"respuesta\":\"Brasil\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Cárdenas en su presidencia?\",\"respuesta\":\"México\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Roosevelt en su presidencia?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Kennedy en su presidencia?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Obama en su presidencia?\",\"respuesta\":\"Estados Unidos\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Merkel en su cancillería?\",\"respuesta\":\"Alemania\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"Tenerife\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Thatcher en su primer ministerio?\",\"respuesta\":\"Reino Unido\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"La Palma\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Trudeau en su primer ministerio?\",\"respuesta\":\"Canadá\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es conocida por su biodiversidad?\",\"respuesta\":\"El Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Macron en su presidencia?\",\"respuesta\":\"Francia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué isla canaria es famosa por su biodiversidad?\",\"respuesta\":\"Gran Canaria\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país fue liderado por Sánchez en su presidencia?\",\"respuesta\":\"España\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 25 x 4?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el número primo más pequeño?\",\"respuesta\":\"2\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 81 divided by 9?\",\"respuesta\":\"9\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un octágono?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué unidad se utiliza para medir la masa?\",\"respuesta\":\"Kilogramo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 12 al cuadrado?\",\"respuesta\":\"144\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the square root of 64?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos segundos tiene un minuto?\",\"respuesta\":\"60\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué figura geométrica tiene todos sus lados iguales?\",\"respuesta\":\"Cuadrado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 7 x 8?\",\"respuesta\":\"56\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is 100 minus 37?\",\"respuesta\":\"63\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos grados tiene un triángulo equilátero?\",\"respuesta\":\"180\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número romano representa el 50?\",\"respuesta\":\"L\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 15 + 27?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 45 divided by 5?\",\"respuesta\":\"9\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número sigue después del 99?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un pentágono?\",\"respuesta\":\"5\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el doble de 25?\",\"respuesta\":\"50\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the sum of 12 and 23?\",\"respuesta\":\"35\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 9 x 9?\",\"respuesta\":\"81\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es la mitad de 50?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos minutos tiene una hora?\",\"respuesta\":\"60\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the product of 6 and 7?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 100 dividido entre 4?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el triple de 15?\",\"respuesta\":\"45\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 8 times 12?\",\"respuesta\":\"96\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 11 al cuadrado?\",\"respuesta\":\"121\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número romano representa el 100?\",\"respuesta\":\"C\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 14 + 28?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the square root of 49?\",\"respuesta\":\"7\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuántos lados tiene un triángulo?\",\"respuesta\":\"3\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el sucesor de 199?\",\"respuesta\":\"200\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 18 dividido entre 3?\",\"respuesta\":\"6\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the sum of 45 and 55?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 20 x 5?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el cuadrado de 10?\",\"respuesta\":\"100\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 72 divided by 8?\",\"respuesta\":\"9\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 13 x 7?\",\"respuesta\":\"91\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el doble de 12?\",\"respuesta\":\"24\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the product of 9 and 11?\",\"respuesta\":\"99\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 8 x 8?\",\"respuesta\":\"64\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es la mitad de 64?\",\"respuesta\":\"32\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the sum of 33 and 44?\",\"respuesta\":\"77\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 7 x 6?\",\"respuesta\":\"42\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número es el triple de 10?\",\"respuesta\":\"30\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the result of 15 times 4?\",\"respuesta\":\"60\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 12 x 12?\",\"respuesta\":\"144\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué número romano representa el 500?\",\"respuesta\":\"D\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 16 + 24?\",\"respuesta\":\"40\",\"categoria\":\"campeonato\"},{\"pregunta\":\"What is the square root of 36?\",\"respuesta\":\"6\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 125 dividido entre 5?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 256 dividido entre 8?\",\"respuesta\":\"32\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/questions/campeonato-6primaria.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"pregunta\":\"¿Cuál es el valor de π (pi) con dos decimales?\",\"respuesta\":\"3.14\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso por el cual las plantas producen su alimento?\",\"respuesta\":\"Fotosíntesis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La Ilíada'?\",\"respuesta\":\"Homero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 2³?\",\"respuesta\":\"8\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de husos horarios?\",\"respuesta\":\"Francia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene todos sus lados diferentes?\",\"respuesta\":\"Escaleno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano filtra la sangre?\",\"respuesta\":\"Riñón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico propuso la teoría de la relatividad?\",\"respuesta\":\"Einstein\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de división celular en organismos eucariotas?\",\"respuesta\":\"Mitosis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma tiene más hablantes nativos en el mundo?\",\"respuesta\":\"Chino\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el metal más abundante en la corteza terrestre?\",\"respuesta\":\"Aluminio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Conde de Montecristo'?\",\"respuesta\":\"Dumas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el día más largo?\",\"respuesta\":\"Venus\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene dos lados iguales?\",\"respuesta\":\"Isósceles\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es necesario para la respiración celular?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La República'?\",\"respuesta\":\"Platón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 5²?\",\"respuesta\":\"25\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de volcanes activos?\",\"respuesta\":\"Indonesia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de ocho lados?\",\"respuesta\":\"Octágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce insulina?\",\"respuesta\":\"Páncreas\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico descubrió la penicilina?\",\"respuesta\":\"Fleming\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de formación de montañas?\",\"respuesta\":\"Orogénesis\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Brasil?\",\"respuesta\":\"Portugués\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Au'?\",\"respuesta\":\"Oro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Principito'?\",\"respuesta\":\"Saint-Exupéry\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el año más largo?\",\"respuesta\":\"Neptuno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene todos sus ángulos agudos?\",\"respuesta\":\"Acutángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más abundante en la atmósfera terrestre?\",\"respuesta\":\"Nitrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Capital'?\",\"respuesta\":\"Marx\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 10³?\",\"respuesta\":\"1000\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de Patrimonios de la Humanidad?\",\"respuesta\":\"Italia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de diez lados?\",\"respuesta\":\"Decágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano bombea sangre?\",\"respuesta\":\"Corazón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló las leyes del movimiento?\",\"respuesta\":\"Newton\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por agua?\",\"respuesta\":\"Hidráulica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Egipto?\",\"respuesta\":\"Árabe\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Fe'?\",\"respuesta\":\"Hierro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La Divina Comedia'?\",\"respuesta\":\"Dante\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el mayor número de lunas?\",\"respuesta\":\"Saturno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene un ángulo recto?\",\"respuesta\":\"Rectángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más ligero?\",\"respuesta\":\"Hidrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Quijote'?\",\"respuesta\":\"Cervantes\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 3³?\",\"respuesta\":\"27\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de islas?\",\"respuesta\":\"Suecia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de doce lados?\",\"respuesta\":\"Dodecágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano almacena bilis?\",\"respuesta\":\"Vesícula\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la tabla periódica?\",\"respuesta\":\"Mendeleev\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por viento?\",\"respuesta\":\"Eólica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Japón?\",\"respuesta\":\"Japonés\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Hg'?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'Crimen y castigo'?\",\"respuesta\":\"Dostoyevski\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el menor tamaño?\",\"respuesta\":\"Mercurio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene un ángulo obtuso?\",\"respuesta\":\"Obtusángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es necesario para la combustión?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió '1984'?\",\"respuesta\":\"Orwell\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 4³?\",\"respuesta\":\"64\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de lagos?\",\"respuesta\":\"Canadá\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de veinte lados?\",\"respuesta\":\"Icoságono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano produce bilis?\",\"respuesta\":\"Hígado\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la teoría de la evolución?\",\"respuesta\":\"Darwin\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por hielo?\",\"respuesta\":\"Glacial\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Rusia?\",\"respuesta\":\"Ruso\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'Na'?\",\"respuesta\":\"Sodio\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La casa de Bernarda Alba'?\",\"respuesta\":\"Lorca\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el mayor tamaño?\",\"respuesta\":\"Júpiter\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene todos sus lados iguales?\",\"respuesta\":\"Equilátero\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más pesado?\",\"respuesta\":\"Radón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'La metamorfosis'?\",\"respuesta\":\"Kafka\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 6³?\",\"respuesta\":\"216\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de desiertos?\",\"respuesta\":\"Australia\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de quince lados?\",\"respuesta\":\"Pentadecágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano regula el metabolismo?\",\"respuesta\":\"Tiroides\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la ley de la gravitación universal?\",\"respuesta\":\"Newton\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por gravedad?\",\"respuesta\":\"Gravitacional\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en México?\",\"respuesta\":\"Español\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'C'?\",\"respuesta\":\"Carbono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El retrato de Dorian Gray'?\",\"respuesta\":\"Wilde\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planeta del sistema solar tiene el mayor campo magnético?\",\"respuesta\":\"Júpiter\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el triángulo que tiene un ángulo de 90 grados?\",\"respuesta\":\"Rectángulo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué gas es el más abundante en el universo?\",\"respuesta\":\"Hidrógeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué autor escribió 'El Lazarillo de Tormes'?\",\"respuesta\":\"Anónimo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 7³?\",\"respuesta\":\"343\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué país tiene la mayor cantidad de glaciares?\",\"respuesta\":\"Chile\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el polígono de cien lados?\",\"respuesta\":\"Hectágono\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué órgano del cuerpo humano controla el sistema nervioso?\",\"respuesta\":\"Cerebro\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué científico desarrolló la teoría del Big Bang?\",\"respuesta\":\"Lemaître\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se llama el proceso de erosión por agua subterránea?\",\"respuesta\":\"Kárstica\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Alemania?\",\"respuesta\":\"Alemán\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con símbolo 'O'?\",\"respuesta\":\"Oxígeno\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué tipo de roca se forma a partir de lava enfriada?\",\"respuesta\":\"Ígnea\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 256 ÷ 16?\",\"respuesta\":\"16\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se traduce 'montaña' al inglés?\",\"respuesta\":\"Mountain\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal tiene la mordida más fuerte del reino animal?\",\"respuesta\":\"Cocodrilo\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuánto es 15 x 15?\",\"respuesta\":\"225\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se traduce 'río' al inglés?\",\"respuesta\":\"River\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué planta es conocida por producir oxígeno durante el día?\",\"respuesta\":\"Árbol\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 144 ÷ 12?\",\"respuesta\":\"12\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cómo se traduce 'bosque' al inglés?\",\"respuesta\":\"Forest\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué animal puede cambiar de color para camuflarse?\",\"respuesta\":\"Camaleón\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el resultado de 12²?\",\"respuesta\":\"144\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Cuál es el elemento químico con mayor electronegatividad?\",\"respuesta\":\"Flúor\",\"categoria\":\"campeonato\"},{\"pregunta\":\"¿Qué idioma es oficial en Suiza además del alemán y el francés?\",\"respuesta\":\"Italiano\",\"categoria\":\"campeonato\"}]"));}),
"[project]/src/components/ChampionshipQuiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const ChampionshipQuiz = ({ userGrade, userSchool })=>{
    const [preguntaActual, setPreguntaActual] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const [respuestaCorrecta, setRespuestaCorrecta] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const [respuestaUsuario, setRespuestaUsuario] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const [feedback, setFeedback] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    const [preguntasUsadas, setPreguntasUsadas] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [timeLeft, setTimeLeft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(300); // 5 minutos
    const [bloqueado, setBloqueado] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!preguntaActual || bloqueado) return;
        if (timeLeft === 0) {
            setBloqueado(true);
            setFeedback("⏰ Tiempo agotado. No puedes responder esta pregunta. -3 likes");
            // Aquí podrías actualizar los likes en localStorage si lo deseas
            return;
        }
        const timer = setTimeout(()=>setTimeLeft(timeLeft - 1), 1000);
        return ()=>clearTimeout(timer);
    }, [
        timeLeft,
        preguntaActual,
        bloqueado
    ]);
    // Cargar preguntas de campeonato según el curso
    let preguntas = [];
    try {
        preguntas = __turbopack_context__.f({
            "../questions/campeonato-1primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-1primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-1primaria.json (json)")
            },
            "../questions/campeonato-2primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-2primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-2primaria.json (json)")
            },
            "../questions/campeonato-3primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-3primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-3primaria.json (json)")
            },
            "../questions/campeonato-4primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-4primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-4primaria.json (json)")
            },
            "../questions/campeonato-5primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-5primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-5primaria.json (json)")
            },
            "../questions/campeonato-6primaria.json": {
                id: ()=>"[project]/src/questions/campeonato-6primaria.json (json)",
                module: ()=>__turbopack_context__.r("[project]/src/questions/campeonato-6primaria.json (json)")
            }
        })(`../questions/campeonato-${userGrade}primaria.json`);
    } catch  {
        preguntas = [];
    }
    function generarPregunta() {
        if (preguntasUsadas.length >= 25) {
            setPreguntaActual("");
            setRespuestaCorrecta("");
            setFeedback("¡Has completado las 25 preguntas del campeonato!");
            setBloqueado(true);
            // Calcular estadísticas de la sesión
            const userStr = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            let nick = "";
            let centro = "";
            let curso = "";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // (Ya declaradas arriba)
            // Recuperar respuestas y likes
            const respuestasStr = localStorage.getItem(`respuestas_campeonato_${nick}`);
            let respuestasArr = respuestasStr ? JSON.parse(respuestasStr) : [];
            // Contar acertadas y falladas de la sesión
            const acertadasSesion = respuestasArr.filter((r)=>r.correcta).length;
            const falladasSesion = respuestasArr.filter((r)=>!r.correcta).length;
            const likesSesion = respuestasArr.reduce((sum, r)=>sum + (r.likes || 0), 0);
            // Temporada actual: formato tYYYY (declarar antes de cualquier uso)
            const now = new Date();
            let temporada = now.getFullYear();
            if (now.getMonth() + 1 >= 10) temporada += 1;
            const temporadaKey = `t${temporada}`;
            // Solo se considera ganada si acierta más de 12
            const ganadoSesion = acertadasSesion > 12 ? 1 : 0;
            const perdidoSesion = acertadasSesion <= 12 ? 1 : 0;
            // Sumar acumulado de la temporada
            const keyIndividual = `campeonato_individual_${temporadaKey}`;
            let tablaIndividual = {};
            try {
                tablaIndividual = JSON.parse(localStorage.getItem(keyIndividual) || '{}');
            } catch  {
                tablaIndividual = {};
            }
            let acertadas = acertadasSesion;
            let falladas = falladasSesion;
            let likes = likesSesion;
            let ganado = ganadoSesion;
            let perdido = perdidoSesion;
            if (tablaIndividual[nick]) {
                acertadas += tablaIndividual[nick].acertadas || 0;
                falladas += tablaIndividual[nick].falladas || 0;
                likes += tablaIndividual[nick].likes || 0;
                ganado += tablaIndividual[nick].ganado || 0;
                perdido += tablaIndividual[nick].perdido || 0;
            }
            // (Ya declaradas arriba)
            // Guardar datos según tipo de usuario
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Guardar datos CENTROS
            const keyCentros = `campeonato_centros_${temporadaKey}`;
            let tablaCentros = {};
            try {
                tablaCentros = JSON.parse(localStorage.getItem(keyCentros) || '{}');
            } catch  {
                tablaCentros = {};
            }
            if (centro) {
                if (!tablaCentros[centro]) tablaCentros[centro] = {
                    ganados: 0,
                    perdidos: 0,
                    preguntasAcertadas: 0,
                    preguntasFalladas: 0,
                    likes: 0
                };
                tablaCentros[centro].ganados += ganado;
                tablaCentros[centro].perdidos += perdido;
                tablaCentros[centro].preguntasAcertadas += acertadas;
                tablaCentros[centro].preguntasFalladas += falladas;
                tablaCentros[centro].likes += likes;
            }
            localStorage.setItem(keyCentros, JSON.stringify(tablaCentros));
            // Guardar datos DOCENTES
            const keyDocentes = `campeonato_docentes_${temporadaKey}`;
            let tablaDocentes = {};
            try {
                tablaDocentes = JSON.parse(localStorage.getItem(keyDocentes) || '{}');
            } catch  {
                tablaDocentes = {};
            }
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            localStorage.setItem(keyDocentes, JSON.stringify(tablaDocentes));
            // Guardar también en el perfil del usuario
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return;
        }
        setTimeLeft(300);
        setBloqueado(false);
        const restantes = preguntas.filter((p)=>!preguntasUsadas.includes(p.pregunta));
        if (restantes.length === 0) {
            setPreguntaActual("");
            setRespuestaCorrecta("");
            setFeedback("¡No hay más preguntas disponibles en el banco!");
            setBloqueado(true);
            return;
        }
        const random = Math.floor(Math.random() * restantes.length);
        setPreguntaActual(restantes[random].pregunta);
        setRespuestaCorrecta(restantes[random].respuesta);
        setRespuestaUsuario("");
        setFeedback("");
        setPreguntasUsadas([
            ...preguntasUsadas,
            restantes[random].pregunta
        ]);
    }
    function comprobarRespuesta() {
        // Normalizar para comparar respuestas
        function normalizar(str) {
            return str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/\s+/g, "").trim();
        }
        if (bloqueado) return;
        const esCorrecta = normalizar(respuestaUsuario) === normalizar(respuestaCorrecta);
        setBloqueado(true);
        let likesDelta = 0;
        if (esCorrecta) {
            setFeedback("¡Correcto! 🎉");
            likesDelta = timeLeft > 120 ? 2 : 1;
        } else {
            setFeedback(`Incorrecto. La respuesta era: ${respuestaCorrecta}`);
            likesDelta = timeLeft > 120 ? -1 : -2;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 bg-yellow-100 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-bold mb-2",
                children: "Modo Campeonato"
            }, void 0, false, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 252,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Curso seleccionado: ",
                    userGrade,
                    "º Primaria"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Centro escolar: ",
                    userSchool || "No especificado"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 254,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-blue-500 text-white px-4 py-2 rounded mt-2",
                onClick: generarPregunta,
                children: "Generar pregunta de campeonato"
            }, void 0, false, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 255,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            preguntaActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold mb-2",
                        children: preguntaActual
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 260,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold text-lg mb-2",
                        children: [
                            "⏰ Tiempo: ",
                            Math.floor(timeLeft / 60),
                            ":",
                            (timeLeft % 60).toString().padStart(2, '0'),
                            " min"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 261,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "border rounded px-2 py-1 w-full mb-2",
                        value: respuestaUsuario,
                        onChange: (e)=>setRespuestaUsuario(e.target.value),
                        placeholder: "Escribe tu respuesta aquí",
                        disabled: bloqueado
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 262,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-green-500 text-white px-4 py-2 rounded",
                        onClick: comprobarRespuesta,
                        disabled: bloqueado,
                        children: "Enviar respuesta"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 270,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 font-bold",
                        children: feedback
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                        lineNumber: 273,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 259,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            feedback && !preguntaActual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 font-bold text-red-600",
                children: feedback
            }, void 0, false, {
                fileName: "[project]/src/components/ChampionshipQuiz.tsx",
                lineNumber: 276,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChampionshipQuiz.tsx",
        lineNumber: 251,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChampionshipQuiz;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegisterLoginForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RegisterLoginForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeatureBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChampionshipQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChampionshipQuiz.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/i18n.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    // Distribuir los logos en una cuadrícula por la zona verde, evitando el área central
    const totalLogos = 56;
    const gridRows = 7;
    const gridCols = 8;
    // Margen para no tapar el contenido central
    const marginX = 8; // %
    const marginY = 8; // %
    // Distribuir los logos únicamente en los bordes verde alrededor
    let logoPositions = [];
    const logos = [
        "Aguere.jpg",
        "Angeles Bermejo.jpg",
        "Aregume.jpg",
        "Buen Consejo.png",
        "Camino La Villa.jpg",
        "Camino Largo.jpg",
        "Casa Azul.png",
        "Chamberi.png",
        "Chayofa.png",
        "Cisneros Alter.jpg",
        "Colegio Cervantes.jpg",
        "Costa Adeje I..jpg",
        "Cuesta 25 de Julio.jpg",
        "Dominguez Alfonso.jpg",
        "Echeyde Arona.png",
        "Echeyde La Laguna.png",
        "El Monte.png",
        "Escuela Rural.png",
        "Escuelas Pias.jpg",
        "Gobierno de Canarias (Educacion).jpg",
        "Hispano La Salud.png",
        "La Cuesta B.N.jpg",
        "La Higuerita.jpg",
        "La Rosa.png",
        "La Salle.png",
        "La Vega.jpg",
        "La Verdellada.jpg",
        "logo-pipo.jpg",
        "Los Alisios.jpg",
        "Los Menceyes.jpg",
        "Luis Alvarez Cruz.jpg",
        "Luther King.jpg",
        "Mayex.jpg",
        "Montessori.png",
        "Nuryana.jpg",
        "Punta Larga.jpg",
        "Pureza de Maria.png",
        "Ravelo.jpg",
        "Rodriguez Alberto.jpg",
        "Rodriguez Campos.png",
        "Saint Andrew,s.jpg",
        "Salesianas.jpg",
        "San Agustin.jpg",
        "San Fernando.jpg",
        "San Isidro.jpg",
        "San Pablo.png",
        "Santa Catalina de Siena.jpg",
        "Santa Cruz de California.jpg",
        "Santa Maria del Mar.jpg",
        "Santa Rosa de Lima.jpg",
        "Tacoronte.jpg",
        "Tagoror.jpg",
        "Teofilo Perez.png",
        "Tincer.jpg",
        "Virgen de Fatima.jpg",
        "Virgen del Mar.png"
    ];
    const logosPorBorde = Math.ceil(logos.length / 4);
    // Superior: solo los extremos, no el centro para no tapar el título
    for(let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++){
        const left = 5 + i * 90 / (logosPorBorde - 1);
        if (left < 30 || left > 70) {
            logoPositions.push({
                left: `${left}%`,
                top: '2%'
            });
        }
    }
    // Inferior: debajo de los bloques de Crea tu Historia y Aprende con Pipo, bajando más para no tocar el botón
    for(let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++){
        const left = 20 + i * 60 / (logosPorBorde - 1);
        logoPositions.push({
            left: `${left}%`,
            top: '93%'
        });
    }
    // Izquierda
    for(let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++){
        logoPositions.push({
            left: '2%',
            top: `${10 + i * 80 / (logosPorBorde - 1)}%`
        });
    }
    // Derecha
    for(let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++){
        logoPositions.push({
            left: '96%',
            top: `${10 + i * 80 / (logosPorBorde - 1)}%`
        });
    }
    const features = [
        {
            title: t('perfil'),
            description: t('perfilDesc')
        },
        {
            title: t('historias'),
            description: t('historiasDesc')
        },
        {
            title: t('creaTuHistoria'),
            description: t('creaTuHistoriaDesc')
        },
        {
            title: t('noticias'),
            description: t('noticiasDesc')
        },
        {
            title: t('concursosHome'),
            description: t('concursosHomeDesc')
        },
        {
            title: t('competiciones'),
            description: t('competicionesDesc')
        },
        {
            title: t('estadisticas'),
            description: t('estadisticasDesc')
        },
        {
            title: t('aprendeConPipo'),
            description: t('aprendeConPipoDesc')
        }
    ];
    const handleQuizResults = (results)=>{
        console.log("Resultados del cuestionario:", results);
    // Aquí puedes actualizar el estado global o enviar los resultados a un servidor
    };
    const userGrade = 6; // Este valor debe ser dinámico según el registro del usuario
    const userSchool = "Centro Escolar Ejemplo"; // Este valor también debe ser dinámico
    // Detectar si estamos en modo registro/login
    const [showSidebar, setShowSidebar] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Si el usuario está conectado, mostrar el sidebar
        const user = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        setShowSidebar(!!user);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-[calc(100vh+120px)] bg-green-100 font-sans flex flex-col items-center justify-center relative pb-32",
        children: [
            [
                "Aguere.jpg",
                "Angeles Bermejo.jpg",
                "Aregume.jpg",
                "Buen Consejo.png",
                "Camino La Villa.jpg",
                "Camino Largo.jpg",
                "Casa Azul.png",
                "Chamberi.png",
                "Chayofa.png",
                "Cisneros Alter.jpg",
                "Colegio Cervantes.jpg",
                "Costa Adeje I..jpg",
                "Cuesta 25 de Julio.jpg",
                "Dominguez Alfonso.jpg",
                "Echeyde Arona.png",
                "Echeyde La Laguna.png",
                "El Monte.png",
                "Escuela Rural.png",
                "Escuelas Pias.jpg",
                "Gobierno de Canarias (Educacion).jpg",
                "Hispano La Salud.png",
                "La Cuesta B.N.jpg",
                "La Higuerita.jpg",
                "La Rosa.png",
                "La Salle.png",
                "La Vega.jpg",
                "La Verdellada.jpg",
                "logo-pipo.jpg",
                "Los Alisios.jpg",
                "Los Menceyes.jpg",
                "Luis Alvarez Cruz.jpg",
                "Luther King.jpg",
                "Mayex.jpg",
                "Montessori.png",
                "Nuryana.jpg",
                "Punta Larga.jpg",
                "Pureza de Maria.png",
                "Ravelo.jpg",
                "Rodriguez Alberto.jpg",
                "Rodriguez Campos.png",
                "Saint Andrew,s.jpg",
                "Salesianas.jpg",
                "San Agustin.jpg",
                "San Fernando.jpg",
                "San Isidro.jpg",
                "San Pablo.png",
                "Santa Catalina de Siena.jpg",
                "Santa Cruz de California.jpg",
                "Santa Maria del Mar.jpg",
                "Santa Rosa de Lima.jpg",
                "Tacoronte.jpg",
                "Tagoror.jpg",
                "Teofilo Perez.png",
                "Tincer.jpg",
                "Virgen de Fatima.jpg",
                "Virgen del Mar.png"
            ].map((img, idx)=>{
                if (idx < logoPositions.length) {
                    const pos = logoPositions[idx];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `/${img}`,
                        alt: img.replace(/\.[a-zA-Z]+$/, ""),
                        className: "absolute object-contain rounded-full shadow",
                        style: {
                            width: 40,
                            height: 40,
                            left: pos.left,
                            top: pos.top,
                            opacity: 0.85,
                            zIndex: 0
                        }
                    }, img, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this);
                }
                return null;
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full flex flex-col items-center justify-center max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col items-center mt-8 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-extrabold drop-shadow-lg tracking-wide mb-2",
                                style: {
                                    letterSpacing: '0.08em'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-700",
                                        children: "Story"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-600",
                                        children: "Up"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 57
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-700 font-semibold mb-4",
                                children: t('tuRedSocialEscolar')
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full justify-center gap-4 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-96",
                                id: "imagen-izquierda",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/trofeo3.jpg",
                                    alt: "Trofeo 3",
                                    className: "w-32 h-32 object-contain rounded-xl shadow-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: features[1].title,
                                description: features[1].description
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-96",
                                id: "imagen-derecha",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/trofeo7.jpg",
                                    alt: "Trofeo 7",
                                    className: "w-32 h-32 object-contain rounded-xl shadow-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full justify-center gap-4 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: features[3].title,
                                description: features[3].description
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: features[4].title,
                                description: features[4].description
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: features[5].title,
                                description: features[5].description
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full justify-center gap-4 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: features[0].title,
                                        description: features[0].description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: features[2].title,
                                        description: features[2].description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegisterLoginForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: features[6].title,
                                        description: features[6].description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeatureBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: features[7].title,
                                        description: features[7].description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    showSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Aprende con Pipo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChampionshipQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                userGrade: userGrade,
                                userSchool: userSchool
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_3b8b65ae._.js.map