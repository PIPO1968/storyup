"use client";
import React, { useState, useEffect } from "react";
import { SesionesUsuarioAPI } from "../../utils/sesiones-usuario";
import { NoticiasAPI } from "../../utils/noticias";

export default function CreaNoticia() {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleEnviar = async () => {
        setEnviando(true);
        let autor = "";

        try {
            // Obtener sesión del usuario actual desde PostgreSQL
            const sessionData = await SesionesUsuarioAPI.getSesionUsuario("current");
            if (sessionData && sessionData.nick) {
                autor = sessionData.nick;
            }
        } catch (error) {
            console.error('Error obteniendo sesión de usuario:', error);
        }

        if (!autor) {
            alert("No se ha detectado usuario. Inicia sesión como docente o alumno.");
            setEnviando(false);
            return;
        }

        // Crear la noticia
        const nuevaNoticia = {
            titulo,
            contenido,
            autor,
        };

        try {
            await NoticiasAPI.crearNoticia(nuevaNoticia);
            alert("Noticia enviada!");
            setTitulo("");
            setContenido("");
        } catch (error) {
            console.error('Error creando noticia:', error);
            alert("Error al enviar la noticia. Inténtalo de nuevo.");
        } finally {
            setEnviando(false);
        }
    };

    if (!mounted) {
        return <div className="min-h-screen bg-blue-50 p-8 text-center text-lg">Cargando...</div>;
    }

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
