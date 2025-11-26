"use client";

import React, { useState } from "react";
import { renderNick } from "@/utils/renderNick";
import { CampeonatosAPI } from "@/utils/campeonatos";
import { UsersAPI } from "@/utils/users";
import { ConfiguracionAPI } from "@/utils/configuracion";

export default function Competiciones() {
    type Centro = {
        escudo: string; // URL o emoji
        nombre: string;
        ganados: number;
        perdidos: number;
        preguntasAcertadas: number;
        preguntasFalladas: number;
        likes: number;
    };
    type Alumno = {
        escudo: string; // emoji/avatar
        nombre: string;
        ganados: number;
        perdidos: number;
        preguntasAcertadas: number;
        preguntasFalladas: number;
        likes: number;
    };

    // Estado para datos y carga
    const [loading, setLoading] = React.useState(true);
    const [temporadasDisponibles, setTemporadasDisponibles] = React.useState<string[]>([]);
    const [temporadaSeleccionada, setTemporadaSeleccionada] = useState<string>("");
    const [mostrarCentros, setMostrarCentros] = React.useState<any[]>([]);
    const [mostrarAlumnos, setMostrarAlumnos] = React.useState<any[]>([]);
    const [mostrarDocentes, setMostrarDocentes] = React.useState<any[]>([]);
    const [usuario, setUsuario] = React.useState<any>(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        if (typeof window === "undefined" || !mounted) return;

        const loadData = async () => {
            try {
                // Obtener usuario actual
                const userData = sessionStorage.getItem('user');
                if (userData) {
                    setUsuario(JSON.parse(userData));
                }

                // Obtener temporadas disponibles
                const temporadas = ['t1', 't2', 't3', 't4', 't5', 't6'];
                setTemporadasDisponibles(temporadas);
                setTemporadaSeleccionada('t1'); // Default

                // Cargar datos de competiciones
                await loadCompetitionData('t1');
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [mounted]);

    const loadCompetitionData = async (temporada: string) => {
        try {
            // Cargar datos de campeonatos
            const response = await fetch(`/api/campeonatos?temporada=${temporada}`);
            const data = await response.json();

            // Agrupar por tipo
            const centros: any[] = [];
            const alumnos: any[] = [];
            const docentes: any[] = [];

            data.forEach((item: any) => {
                const entry = {
                    nick: item.nick,
                    ganados: item.ganados || 0,
                    perdidos: item.perdidos || 0,
                    preguntasAcertadas: item.preguntas_acertadas || 0,
                    preguntasFalladas: item.preguntas_falladas || 0,
                    likes: item.likes || 0
                };

                if (item.tipo === 'centros') {
                    centros.push(entry);
                } else if (item.tipo === 'alumnos') {
                    alumnos.push(entry);
                } else if (item.tipo === 'docentes') {
                    docentes.push(entry);
                }
            });

            setMostrarCentros(centros);
            setMostrarAlumnos(alumnos);
            setMostrarDocentes(docentes);
        } catch (error) {
            console.error('Error loading competition data:', error);
        }
    };

    const handleTemporadaChange = (temporada: string) => {
        setTemporadaSeleccionada(temporada);
        loadCompetitionData(temporada);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-blue-600 font-semibold">Cargando competiciones...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4">
                        🏆 Competiciones
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
                        Compite con otros centros, alumnos y docentes en diferentes categorías.
                    </p>

                    {/* Selector de temporada */}
                    <div className="flex justify-center gap-2 mb-6">
                        {temporadasDisponibles.map(temporada => (
                            <button
                                key={temporada}
                                onClick={() => handleTemporadaChange(temporada)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${temporadaSeleccionada === temporada
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'
                                    }`}
                            >
                                Temporada {temporada.replace('t', '')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Rankings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Centros */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
                            🏫 Ranking Centros
                        </h2>
                        <div className="space-y-4">
                            {mostrarCentros.slice(0, 10).map((centro, index) => (
                                <div key={centro.nick} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">
                                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `🏅`}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-gray-800">{centro.nick}</p>
                                            <p className="text-sm text-gray-600">
                                                {centro.ganados}G - {centro.perdidos}P
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-green-600">{centro.preguntasAcertadas} ✓</p>
                                        <p className="text-sm text-red-500">{centro.preguntasFalladas} ✗</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Alumnos */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
                            👨‍🎓 Ranking Alumnos
                        </h2>
                        <div className="space-y-4">
                            {mostrarAlumnos.slice(0, 10).map((alumno, index) => (
                                <div key={alumno.nick} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">
                                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `🏅`}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-gray-800">{alumno.nick}</p>
                                            <p className="text-sm text-gray-600">
                                                {alumno.ganados}G - {alumno.perdidos}P
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-green-600">{alumno.preguntasAcertadas} ✓</p>
                                        <p className="text-sm text-red-500">{alumno.preguntasFalladas} ✗</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Docentes */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
                            👨‍🏫 Ranking Docentes
                        </h2>
                        <div className="space-y-4">
                            {mostrarDocentes.slice(0, 10).map((docente, index) => (
                                <div key={docente.nick} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">
                                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `🏅`}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-gray-800">{docente.nick}</p>
                                            <p className="text-sm text-gray-600">
                                                {docente.ganados}G - {docente.perdidos}P
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-green-600">{docente.preguntasAcertadas} ✓</p>
                                        <p className="text-sm text-red-500">{docente.preguntasFalladas} ✗</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}