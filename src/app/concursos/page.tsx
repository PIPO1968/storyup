"use client";
import React, { useEffect, useState } from "react";
import { renderNick } from "@/utils/renderNick";
import { useTranslation } from "@/utils/i18n";

export default function Concursos() {
    const [concursos, setConcursos] = useState<any[]>([]);

    const { t } = useTranslation();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const concursosStr = localStorage.getItem("concursos");
            setConcursos(concursosStr ? JSON.parse(concursosStr) : []);
        }
    }, []);

    const hoy = new Date();
    const activos = concursos.filter(c => new Date(c.fin) >= hoy).slice(0, 10);
    const finalizados = concursos.filter(c => new Date(c.fin) < hoy).slice(0, 10);

    const mostrarActivos = activos.length > 0
        ? activos
        : Array.from({ length: 10 }, (_, idx) => ({
            titulo: t('aunNoHayConcursoActivo'),
            autor: '',
            inicio: '',
            fin: '',
        }));
    const mostrarFinalizados = finalizados.length > 0
        ? finalizados
        : Array.from({ length: 10 }, (_, idx) => ({
            titulo: t('aunNoHayConcursoFinalizado'),
            autor: '',
            inicio: '',
            fin: '',
        }));

    return (
        <div className="min-h-screen bg-green-100 p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">{t('concursosTitle')}</h1>
            <div className="flex w-full max-w-5xl mx-auto gap-8">
                {/* Bloque Concursos Activos */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-center mb-4">{t('concursosActivos')}</h2>
                    <ul className="divide-y">
                        {mostrarActivos.map((concurso, idx) => (
                            <li key={idx} className="py-2">
                                <span className="font-bold">{idx + 1}º </span>
                                <a href={`/concurso/${concurso.numero}`} className="text-blue-700 font-semibold underline" target="_blank" rel="noopener noreferrer">{concurso.titulo}</a>
                                {concurso.autor && (
                                    <span className="ml-2 text-gray-700">{renderNick(concurso.autor)}</span>
                                )}
                                {concurso.inicio && (
                                    <span className="ml-2 text-gray-500 text-sm">Inicio: {concurso.inicio}</span>
                                )}
                                {concurso.fin && (
                                    <span className="ml-2 text-gray-500 text-sm">Final: {concurso.fin}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Bloque Concursos Finalizados */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-center mb-4">Concursos Finalizados</h2>
                    <ul className="divide-y">
                        {mostrarFinalizados.map((concurso, idx) => (
                            <li key={idx} className="py-2">
                                <span className="font-bold">{idx + 1}º </span>
                                <a href={`/concurso/${concurso.numero}`} className="text-blue-700 font-semibold underline" target="_blank" rel="noopener noreferrer">{concurso.titulo}</a>
                                {concurso.autor && (
                                    <span className="ml-2 text-gray-700">{renderNick(concurso.autor)}</span>
                                )}
                                {concurso.inicio && (
                                    <span className="ml-2 text-gray-500 text-sm">Inicio: {concurso.inicio}</span>
                                )}
                                {concurso.fin && (
                                    <span className="ml-2 text-gray-500 text-sm">Final: {concurso.fin}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Bloque Últimos Ganadores de Concursos */}
            <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-center mb-4">{t('ultimosGanadores')}</h2>
                <ul className="divide-y">
                    {(() => {
                        if (typeof window !== "undefined") {
                            const concursosStr = localStorage.getItem("concursos");
                            const concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
                            // Filtrar los que tengan ganador y mostrar los 25 más recientes
                            const ganadores = concursosArr.filter((c: any) => c.ganador && c.ganador !== "").slice(0, 25);
                            if (ganadores.length === 0) {
                                return <li className="py-2 text-gray-500">{t('aunNoHayGanadores')}</li>;
                            }
                            return ganadores.map((c: any, idx: number) => (
                                <li key={idx} className="py-2">
                                    <span className="font-bold">{idx + 1}º </span>
                                    <span className="text-blue-700 font-semibold">{c.titulo}</span>
                                    {c.autor && (
                                        <span className="ml-2 text-gray-700">{renderNick(c.autor)}</span>
                                    )}
                                    {c.ganador && (
                                        <span className="ml-2">
                                            {renderNick(c.ganador, "text-green-700 underline")}
                                        </span>
                                    )}
                                    {c.fechaFinal && (
                                        <span className="ml-2 text-gray-500 text-sm">Finalizado: {c.fechaFinal}</span>
                                    )}
                                </li>
                            ));
                        } else {
                            return <li className="py-2 text-gray-500">{t('aunNoHayGanadores')}</li>;
                        }
                    })()}
                </ul>
            </div>
        </div>
    );
}
