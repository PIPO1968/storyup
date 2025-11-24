"use client";
import { useEffect, useState } from "react";
import { renderNick } from "@/utils/renderNick";
import { useTranslation } from "@/utils/i18n";

type Historia = {
    id: number;
    titulo: string;
    autor: string;
    fecha: string;
    imagen?: string;
    likes?: number;
    comentarios?: any[];
};

export default function Historias() {
    const [historias, setHistorias] = useState<Historia[]>([]);
    const [topLikes, setTopLikes] = useState<Historia[]>([]);
    const [topComentarios, setTopComentarios] = useState<Historia[]>([]);
    const { t } = useTranslation();
    useEffect(() => {
        if (typeof window !== "undefined") {
            const guardadas = localStorage.getItem("historias");
            const arr = guardadas ? JSON.parse(guardadas) : [];
            setHistorias(arr.slice(0, 25));
            setTopLikes([...arr].sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 25));
            setTopComentarios([...arr].sort((a, b) => (b.comentarios?.length || 0) - (a.comentarios?.length || 0)).slice(0, 25));
        }
    }, []);

    return (
        <div className="min-h-screen bg-green-100 p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">{t('historiasTitle')}</h1>
            {/* Bloque superior: últimas 25 historias */}
            <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-8">
                <h2 className="text-lg font-bold mb-2 text-center">{t('ultimas25Historias')}</h2>
                <ul className="divide-y">
                    {historias.length > 0 ? (
                        historias.map((historia, idx) => (
                            <li key={historia.id} className="flex items-center justify-between py-2">
                                <span className="font-bold w-8 text-center">{idx + 1}º</span>
                                <a href={`/historias/${historia.id}`} className="text-blue-600 hover:underline flex-1 ml-2">{historia.titulo}</a>
                                <span className="ml-4 text-gray-700">{renderNick(historia.autor)}</span>
                                <span className="ml-4 text-gray-500 text-sm">{historia.fecha}</span>
                                <span className="ml-4 text-pink-600 font-bold">❤️ {historia.likes || 0}</span>
                            </li>
                        ))
                    ) : (
                        Array.from({ length: 25 }, (_, idx) => (
                            <li key={idx} className="flex items-center justify-between py-2">
                                <span className="font-bold w-8 text-center">{idx + 1}º</span>
                                <span className="text-gray-400 flex-1 ml-2">{t('aunNoHayHistoria')}</span>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            {/* Bloques inferiores: más likes y más comentarios */}
            <div className="flex flex-row gap-8 max-w-7xl mx-auto">
                {/* Bloque: historias con más likes */}
                <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
                    <h2 className="text-lg font-bold mb-2 text-center">{t('topHistoriasLikes')}</h2>
                    <ul className="divide-y">
                        {topLikes.length > 0 ? (
                            topLikes.map((historia, idx) => (
                                <li key={historia.id} className="flex items-center justify-between py-2">
                                    <span className="font-bold w-8 text-center">{idx + 1}º</span>
                                    <a href={`/historias/${historia.id}`} className="text-blue-600 hover:underline flex-1 ml-2">{historia.titulo}</a>
                                    <span className="ml-4 text-gray-700">{renderNick(historia.autor)}</span>
                                    <span className="ml-4 text-gray-500 text-sm">{historia.fecha}</span>
                                    <span className="ml-4 text-pink-600 font-bold">❤️ {historia.likes || 0}</span>
                                </li>
                            ))
                        ) : (
                            Array.from({ length: 25 }, (_, idx) => (
                                <li key={idx} className="flex items-center justify-between py-2">
                                    <span className="font-bold w-8 text-center">{idx + 1}º</span>
                                    <span className="text-gray-400 flex-1 ml-2">{t('aunNoHayHistoria')}</span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
                {/* Bloque: historias con más comentarios */}
                <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
                    <h2 className="text-lg font-bold mb-2 text-center">{t('topHistoriasComentarios')}</h2>
                    <ul className="divide-y">
                        {topComentarios.length > 0 ? (
                            topComentarios.map((historia, idx) => (
                                <li key={historia.id} className="flex items-center justify-between py-2">
                                    <span className="font-bold w-8 text-center">{idx + 1}º</span>
                                    <a href={`/historias/${historia.id}`} className="text-blue-600 hover:underline flex-1 ml-2">{historia.titulo}</a>
                                    <span className="ml-4 text-gray-700">{renderNick(historia.autor)}</span>
                                    <span className="ml-4 text-gray-500 text-sm">{historia.fecha}</span>
                                    <span className="ml-4 text-green-600 font-bold">💬 {historia.comentarios?.length || 0}</span>
                                </li>
                            ))
                        ) : (
                            Array.from({ length: 25 }, (_, idx) => (
                                <li key={idx} className="flex items-center justify-between py-2">
                                    <span className="font-bold w-8 text-center">{idx + 1}º</span>
                                    <span className="text-gray-400 flex-1 ml-2">{t('aunNoHayHistoria')}</span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
