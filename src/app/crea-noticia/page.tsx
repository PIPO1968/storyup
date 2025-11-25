"use client";
import React, { useState, useEffect } from "react";

export default function CreaNoticia() {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            if (userStr) {
                try {
                    const userObj = JSON.parse(userStr);
                    setUser(userObj);
                } catch {
                    setUser(null);
                }
            }
        }
    }, []);

    if (!user) {
        return (
            <div className="min-h-screen bg-blue-50 p-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Crear Noticia</h1>
                <p className="text-center">Debes iniciar sesión para crear una noticia.</p>
            </div>
        );
    }

    if (user.tipo !== "docente") {
        return (
            <div className="min-h-screen bg-blue-50 p-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Crear Noticia</h1>
                <p className="text-center">Solo los docentes pueden crear noticias.</p>
            </div>
        );
    }
    const handleEnviar = async () => {
        setEnviando(true);
        try {
            const response = await fetch('/api/noticias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titulo,
                    contenido,
                    autor: user.nick,
                }),
            });

            if (response.ok) {
                alert("Noticia publicada exitosamente!");
                setTitulo("");
                setContenido("");
                window.location.href = '/noticias';
            } else {
                alert("Error al publicar la noticia.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Error al publicar la noticia.");
        }

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
