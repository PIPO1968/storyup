(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/crea-historia/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreaHistoria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CreaHistoria() {
    _s();
    const [titulo, setTitulo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [contenido, setContenido] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [texto, setTexto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imagen, setImagen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [anonimo, setAnonimo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [esConcurso, setEsConcurso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [numConcurso, setNumConcurso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showProhibitedPopup, setShowProhibitedPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [palabrasDetectadas, setPalabrasDetectadas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Funciones para formato
    const aplicarFormato = (formato)=>{
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const texto = contenido;
        let nuevoTexto = texto;
        if (formato === "bold") {
            nuevoTexto = texto.slice(0, start) + "<b>" + texto.slice(start, end) + "</b>" + texto.slice(end);
        } else if (formato === "underline") {
            nuevoTexto = texto.slice(0, start) + "<u>" + texto.slice(start, end) + "</u>" + texto.slice(end);
        }
        setContenido(nuevoTexto);
    };
    // Subida de imagen
    const handleImagen = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ()=>{
                setImagen(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // Guardar historia (solo ejemplo, falta mostrar y persistir)
    const handleEnviar = ()=>{
        // Obtener usuario actual
        let usuario = "";
        let userObj = null;
        if ("TURBOPACK compile-time truthy", 1) {
            // Buscar primero en usuarioActual
            const actual = localStorage.getItem("usuarioActual");
            if (actual) {
                try {
                    const obj = JSON.parse(actual);
                    usuario = obj.nick || "";
                } catch  {
                    usuario = "";
                }
            }
            // Si no hay nick, buscar en 'user'
            if (!usuario) {
                const userStr = localStorage.getItem("user");
                if (userStr) {
                    userObj = JSON.parse(userStr);
                    usuario = userObj.nick || "";
                }
            }
        }
        if (!anonimo && !usuario) {
            alert("No se puede enviar la historia: no se ha detectado usuario. Inicia sesión como docente o alumno.");
            return;
        }
        // Comprobar palabras prohibidas
        let contieneProhibida = false;
        let palabrasDetectadas = [];
        if ("TURBOPACK compile-time truthy", 1) {
            const stored = localStorage.getItem("prohibitedWords");
            if (stored) {
                const palabras = JSON.parse(stored);
                const contenidoLower = contenido.toLowerCase();
                palabrasDetectadas = palabras.filter((p)=>contenidoLower.includes(p) || contenidoLower.includes(p + "a") || contenidoLower.includes(p + "o"));
                contieneProhibida = palabrasDetectadas.length > 0;
                if (contieneProhibida && usuario) {
                    setShowProhibitedPopup(true);
                    setTimeout(()=>setShowProhibitedPopup(false), 30000);
                    // Penalizar solo una vez
                    const usersStr = localStorage.getItem("users");
                    if (usersStr) {
                        let usersArr = JSON.parse(usersStr);
                        usersArr = usersArr.map((u)=>u.nick === usuario ? {
                                ...u,
                                likes: (u.likes || 0) - 10
                            } : u);
                        localStorage.setItem("users", JSON.stringify(usersArr));
                    }
                }
            }
        }
        // Crear historia
        const nuevaHistoria = {
            id: Date.now(),
            titulo,
            contenido,
            autor: anonimo ? "Anónimo" : usuario,
            fecha: new Date().toLocaleString(),
            imagen,
            likes: 0,
            comentarios: [],
            concurso: esConcurso ? numConcurso : ""
        };
        // Guardar en localStorage
        let historias = [];
        if ("TURBOPACK compile-time truthy", 1) {
            const guardadas = localStorage.getItem("historias");
            historias = guardadas ? JSON.parse(guardadas) : [];
            historias.unshift(nuevaHistoria); // Añadir al principio
            localStorage.setItem("historias", JSON.stringify(historias));
            // Añadir la historia al array user.historias y actualizar en localStorage
            if (userObj && usuario) {
                const userHistorias = Array.isArray(userObj.historias) ? userObj.historias : [];
                userObj.historias = [
                    nuevaHistoria.id,
                    ...userHistorias
                ];
                localStorage.setItem("user", JSON.stringify(userObj));
                // Actualizar también en el array de usuarios
                const usersStr = localStorage.getItem("users");
                if (usersStr) {
                    let usersArr = JSON.parse(usersStr);
                    usersArr = usersArr.map((u)=>u.nick === usuario ? {
                            ...u,
                            historias: [
                                nuevaHistoria.id,
                                ...Array.isArray(u.historias) ? u.historias : []
                            ]
                        } : u);
                    localStorage.setItem("users", JSON.stringify(usersArr));
                }
            }
        }
        alert("Historia enviada!");
        setTitulo("");
        setContenido("");
        setImagen(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-green-100 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-center",
                children: "Crea tu Historia"
            }, void 0, false, {
                fileName: "[project]/src/app/crea-historia/page.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-start gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6 w-64 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-semibold mb-2",
                                        children: "Modo de historia:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full border rounded px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Real"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Ficticia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-semibold mb-2",
                                        children: "Tipo de historia:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "w-full border rounded px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Aventura"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Corazón"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Terror"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Ficción"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Educativa"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "My Live"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Concurso"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "inline-flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            className: "form-checkbox mr-2",
                                            checked: anonimo,
                                            onChange: (e)=>setAnonimo(e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/crea-historia/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this),
                                        "Escribir en modo Anónimo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/crea-historia/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "inline-flex items-center mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "form-checkbox mr-2",
                                                checked: esConcurso,
                                                onChange: (e)=>setEsConcurso(e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this),
                                            "Escribir en modo Concurso"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this),
                                    esConcurso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Número de concurso",
                                        className: "w-full border rounded px-2 py-1 mt-2",
                                        value: numConcurso,
                                        onChange: (e)=>setNumConcurso(e.target.value.replace(/[^0-9]/g, ""))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/crea-historia/page.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6 flex-1 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Título de la historia",
                                        className: "w-full border rounded px-3 py-2 font-semibold text-lg mb-2",
                                        value: titulo,
                                        onChange: (e)=>setTitulo(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 25
                                    }, this),
                                    esConcurso && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Nº concurso",
                                        className: "border rounded px-2 py-1 w-24 text-center",
                                        value: numConcurso,
                                        onChange: (e)=>setNumConcurso(e.target.value.replace(/[^0-9]/g, ""))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "bg-gray-200 px-2 py-1 rounded font-bold",
                                        title: "Negrita",
                                        onClick: ()=>aplicarFormato("bold"),
                                        children: "B"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "bg-gray-200 px-2 py-1 rounded font-bold",
                                        title: "Subrayado",
                                        onClick: ()=>aplicarFormato("underline"),
                                        children: "S"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "bg-gray-200 px-2 py-1 rounded cursor-pointer font-bold",
                                        title: "Subir imagen",
                                        children: [
                                            "📷",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: "image/*",
                                                className: "hidden",
                                                onChange: handleImagen
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 209,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ref: textareaRef,
                                        placeholder: "Escribe tu historia aquí...",
                                        className: "w-full border rounded px-3 py-2 min-h-[120px] mb-2",
                                        value: contenido,
                                        onChange: (e)=>setContenido(e.target.value),
                                        style: imagen ? {
                                            resize: 'vertical',
                                            backgroundImage: `url(${imagen})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'contain',
                                            opacity: 0.95
                                        } : {
                                            resize: 'vertical'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/crea-historia/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/crea-historia/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded self-end",
                                onClick: handleEnviar,
                                children: "Enviar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/crea-historia/page.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/crea-historia/page.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/crea-historia/page.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            showProhibitedPopup && palabrasDetectadas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-4 rounded shadow-lg z-50 text-lg font-bold",
                children: [
                    "Palabra prohibida -10 likes de penalización",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/crea-historia/page.tsx",
                        lineNumber: 244,
                        columnNumber: 64
                    }, this),
                    "Detectadas: ",
                    palabrasDetectadas.join(", ")
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/crea-historia/page.tsx",
                lineNumber: 243,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/crea-historia/page.tsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
_s(CreaHistoria, "xMhvXaDuzgBUC2i9Ur+ZifcTk4s=");
_c = CreaHistoria;
var _c;
__turbopack_context__.k.register(_c, "CreaHistoria");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_crea-historia_page_tsx_14e1bb25._.js.map