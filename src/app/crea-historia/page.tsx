"use client";
import React, { useRef, useState } from "react";
export default function CreaHistoria() {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [texto, setTexto] = useState("");
    const [imagen, setImagen] = useState<string | null>(null);
    const [anonimo, setAnonimo] = useState(false);
    const [esConcurso, setEsConcurso] = useState(false);
    const [numConcurso, setNumConcurso] = useState("");
    const [showProhibitedPopup, setShowProhibitedPopup] = useState(false);
    const [palabrasDetectadas, setPalabrasDetectadas] = useState<string[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Funciones para formato
    const aplicarFormato = (formato: "bold" | "underline") => {
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
    const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagen(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Guardar historia (solo ejemplo, falta mostrar y persistir)
    const handleEnviar = () => {
        // Obtener usuario actual
        let usuario = "";
        let userObj = null;
        if (typeof window !== "undefined") {
            // Buscar primero en usuarioActual
            const actual = localStorage.getItem("usuarioActual");
            if (actual) {
                try {
                    const obj = JSON.parse(actual);
                    usuario = obj.nick || "";
                } catch {
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
        let palabrasDetectadas: string[] = [];
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("prohibitedWords");
            if (stored) {
                const palabras = JSON.parse(stored);
                const contenidoLower = contenido.toLowerCase();
                palabrasDetectadas = palabras.filter((p: string) =>
                    contenidoLower.includes(p) || contenidoLower.includes(p + "a") || contenidoLower.includes(p + "o")
                );
                contieneProhibida = palabrasDetectadas.length > 0;
                if (contieneProhibida && usuario) {
                    setShowProhibitedPopup(true);
                    setTimeout(() => setShowProhibitedPopup(false), 30000);
                    // Penalizar solo una vez
                    const usersStr = localStorage.getItem("users");
                    if (usersStr) {
                        let usersArr = JSON.parse(usersStr);
                        usersArr = usersArr.map((u: any) =>
                            u.nick === usuario ? { ...u, likes: (u.likes || 0) - 10 } : u
                        );
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
        if (typeof window !== "undefined") {
            const guardadas = localStorage.getItem("historias");
            historias = guardadas ? JSON.parse(guardadas) : [];
            historias.unshift(nuevaHistoria); // Añadir al principio
            localStorage.setItem("historias", JSON.stringify(historias));
            // Añadir la historia al array user.historias y actualizar en localStorage
            if (userObj && usuario) {
                const userHistorias = Array.isArray(userObj.historias) ? userObj.historias : [];
                userObj.historias = [nuevaHistoria.id, ...userHistorias];
                localStorage.setItem("user", JSON.stringify(userObj));
                // Actualizar también en el array de usuarios
                const usersStr = localStorage.getItem("users");
                if (usersStr) {
                    let usersArr: any[] = JSON.parse(usersStr);
                    usersArr = usersArr.map((u: any) =>
                        u.nick === usuario ? { ...u, historias: [nuevaHistoria.id, ...(Array.isArray(u.historias) ? u.historias : [])] } : u
                    );
                    localStorage.setItem("users", JSON.stringify(usersArr));
                }
            }
        }
        alert("Historia enviada!");
        setTitulo("");
        setContenido("");
        setImagen(null);
    };

    return (
        <div className="min-h-screen bg-green-100 p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Crea tu Historia</h1>
            <div className="flex w-full justify-center items-start gap-8">
                {/* Sidebar lateral */}
                <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col gap-6">
                    <div>
                        <label className="block font-semibold mb-2">Modo de historia:</label>
                        <select className="w-full border rounded px-2 py-1">
                            <option>Real</option>
                            <option>Ficticia</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Tipo de historia:</label>
                        <select className="w-full border rounded px-2 py-1">
                            <option>Aventura</option>
                            <option>Corazón</option>
                            <option>Terror</option>
                            <option>Ficción</option>
                            <option>Educativa</option>
                            <option>My Live</option>
                            <option>Concurso</option>
                        </select>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox mr-2" checked={anonimo} onChange={e => setAnonimo(e.target.checked)} />
                            Escribir en modo Anónimo
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center mt-2">
                            <input type="checkbox" className="form-checkbox mr-2" checked={esConcurso} onChange={e => setEsConcurso(e.target.checked)} />
                            Escribir en modo Concurso
                        </label>
                        {esConcurso && (
                            <input
                                type="text"
                                placeholder="Número de concurso"
                                className="w-full border rounded px-2 py-1 mt-2"
                                value={numConcurso}
                                onChange={e => setNumConcurso(e.target.value.replace(/[^0-9]/g, ""))}
                            />
                        )}
                    </div>
                </div>
                {/* Bloque principal de historia */}
                <div className="bg-white rounded-lg shadow-md p-6 flex-1 flex flex-col gap-6">
                    {/* Espacio para el título de la historia con campo de concurso a la derecha */}
                    <div className="flex gap-2 items-center">
                        <input
                            type="text"
                            placeholder="Título de la historia"
                            className="w-full border rounded px-3 py-2 font-semibold text-lg mb-2"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                        />
                        {esConcurso && (
                            <input
                                type="text"
                                placeholder="Nº concurso"
                                className="border rounded px-2 py-1 w-24 text-center"
                                value={numConcurso}
                                onChange={e => setNumConcurso(e.target.value.replace(/[^0-9]/g, ""))}
                            />
                        )}
                    </div>
                    {/* Botones de formato */}
                    <div className="flex gap-2 mb-2">
                        <button type="button" className="bg-gray-200 px-2 py-1 rounded font-bold" title="Negrita" onClick={() => aplicarFormato("bold")}>B</button>
                        <button type="button" className="bg-gray-200 px-2 py-1 rounded font-bold" title="Subrayado" onClick={() => aplicarFormato("underline")}>S</button>
                        <label className="bg-gray-200 px-2 py-1 rounded cursor-pointer font-bold" title="Subir imagen">
                            📷
                            <input type="file" accept="image/*" className="hidden" onChange={handleImagen} />
                        </label>
                    </div>
                    {/* Bloque de escritura y previsualización */}
                    <div className="flex flex-col gap-2">
                        <div className="w-full mb-2">
                            <textarea
                                ref={textareaRef}
                                placeholder="Escribe tu historia aquí..."
                                className="w-full border rounded px-3 py-2 min-h-[120px] mb-2"
                                value={contenido}
                                onChange={e => setContenido(e.target.value)}
                                style={imagen ? {
                                    resize: 'vertical',
                                    backgroundImage: `url(${imagen})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    opacity: 0.95
                                } : { resize: 'vertical' }}
                            />
                        </div>
                    </div>
                    {/* Eliminado: previsualización duplicada y textarea extra */}
                    {/* Botón de enviar */}
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded self-end" onClick={handleEnviar}>Enviar</button>
                </div>
            </div>
            {showProhibitedPopup && palabrasDetectadas.length > 0 && (
                <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-4 rounded shadow-lg z-50 text-lg font-bold">
                    Palabra prohibida -10 likes de penalización<br />
                    Detectadas: {palabrasDetectadas.join(", ")}
                </div>
            )}
        </div>
    );
}
