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
            setLoading(false);
        };

        loadData();
    }, [mounted]);

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
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Página en desarrollo...
                    </p>
                </div>
            </div>
        </div>
    );
}