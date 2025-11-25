"use client";
import React, { useState } from "react";

export default function CreaNoticia() {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [enviando, setEnviando] = useState(false);

    const handleEnviar = () => {
        setEnviando(true);
        let autor = "";
        if (typeof window !== "undefined") {
            // Buscar nick en usuarioActual y si no, en user
            const actual = localStorage.getItem("usuarioActual");
            if (actual) {
                try {
                    const obj = JSON.parse(actual);
                    autor = obj.nick || "";
                } catch {
                    autor = "";
                }
            }
            if (!autor) {
                const userStr = localStorage.getItem("user");
                if (userStr) {
                    try {
                        const userObj = JSON.parse(userStr);
                        autor = userObj.nick || "";
                    } catch {
                        autor = "";
                    }
                }
            }
        }
        if (!autor) {
            alert("No se ha detectado usuario. Inicia sesión como docente o alumno.");
            setEnviando(false);
            return;
        }
        const nuevaNoticia = {
            titulo,
            contenido,
            autor,
            fecha: new Date().toLocaleString(),
        };
        let noticias = [];
        if (typeof window !== "undefined") {
            const guardadas = localStorage.getItem("noticias");
            noticias = guardadas ? JSON.parse(guardadas) : [];
            noticias.unshift(nuevaNoticia);
            localStorage.setItem("noticias", JSON.stringify(noticias));
        }
        alert("Noticia enviada!");
        setTitulo("");
        setContenido("");
        setEnviando(false);
    };

    return (
        <div className="min-h-screen bg-blue-50 p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Crear Noticia</h1>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Título de la noticia"
                    className="w-full border rounded px-3 py-2 font-semibold text-lg mb-2"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
                <textarea
                    placeholder="Escribe la noticia aquí..."
                    className="w-full border rounded px-3 py-2 min-h-[120px] mb-2"
                    value={contenido}
                    onChange={e => setContenido(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded self-end"
                    onClick={handleEnviar}
                    disabled={enviando}
                >Enviar</button>
            </div>
        </div>
    );
}
