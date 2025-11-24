"use client";
import React from "react";
import { renderNick } from "@/utils/renderNick";

export default function Noticias() {
    type Noticia = {
        titulo: string;
        autor: string;
        fecha: string;
        contenido: string;
    };

    const [noticias, setNoticias] = React.useState<Noticia[]>([]);
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const guardadas = localStorage.getItem("noticias");
            if (guardadas) {
                try {
                    const arr = JSON.parse(guardadas);
                    console.log("Noticias cargadas desde localStorage:", arr);
                    // Mostrar las 25 más recientes arriba
                    setNoticias(arr.slice(0, 25));
                } catch (error) {
                    console.error("Error al cargar noticias desde localStorage:", error);
                }
            } else {
                console.log("No se encontraron noticias en localStorage.");
            }
        }
    }, []);
    const mostrarNoticias = noticias.length > 0
        ? noticias.map((noticia, idx) => {
            console.log(`Procesando noticia ${idx + 1}:`, noticia);
            return (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg text-blue-700">{noticia.titulo || 'Título no disponible'}</span>
                        {noticia.autor && (
                            <span className="ml-4">{renderNick(noticia.autor)}</span>
                        )}
                        {noticia.fecha && (
                            <span className="ml-4 text-gray-500 text-sm">{noticia.fecha}</span>
                        )}
                    </div>
                    <p className="text-gray-800">{noticia.contenido || 'Contenido no disponible'}</p>
                </div>
            );
        })
        : null; // No renderizar nada si no hay noticias

    return (
        <div className="min-h-screen bg-green-100 p-8">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-center">Últimas Noticias</h1>
            </header>
            <main>
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                        {mostrarNoticias}
                    </div>
                </section>
            </main>
        </div>
    );
}
