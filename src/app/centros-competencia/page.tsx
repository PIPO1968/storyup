"use client";
import React, { useEffect, useState } from "react";
import { normalizarValorPremio, normalizarEventoEspecial } from '@/utils/normalizadores';
import { renderNick } from "@/utils/renderNick";
import trofeos from "../../data/trofeos.json";
import trofeosPremium from "../../data/trofeos-premium.json";

interface Usuario {
    nick: string;
    nombre: string;
    email: string;
    centro: string;
    curso: string;
    tipo: string;
    fechaInscripcion: string;
    likes: number;
    amigos: string[];
    respuestasAcertadas: number;
    competicionesSuperadas: number;
    concursosGanados: number;
    comentariosRecibidos: number;
    historiasCreadas: number;
    historias?: any[];
    anosEnStoryUp: number;
    trofeos: any[];
}

interface CentroStats {
    nombre: string;
    estudiantes: number;
    estudiantesActivos: number; // activos en últimos 7 días
    respuestasCorrectas: number;
    concursosGanados: number;
    historiasCreadas: number;
    interaccionesSociales: number; // likes + mensajes + amigos
    diasConsecutivos: number;
    puntajeTotal: number;
    ranking: number;
    medalla: string;
}

export default function CentrosCompetencia() {
    const [loading, setLoading] = useState(true);
    const [centros, setCentros] = useState<CentroStats[]>([]);
    const [centrosAnuales, setCentrosAnuales] = useState<CentroStats[]>([]);
    const [miCentro, setMiCentro] = useState<string>("");
    const [filtroMes, setFiltroMes] = useState<string>("actual");
    const [modoVisualizacion, setModoVisualizacion] = useState<"actual" | "historico" | "anual">("actual");
    const [mesSeleccionado, setMesSeleccionado] = useState<string>("");
    const fechaActual = new Date();

    // Función temporal para traducciones mientras I18nProvider está deshabilitado
    const t = (key: string) => {
        const translations: Record<string, string> = {
            'leagueTitle': 'Liga de Centros',
            'leagueSubtitle': 'Compite con otros centros educativos'
        };
        return translations[key] || key;
    };

    // const { t } = useTranslation();
    const [mesesDisponibles, setMesesDisponibles] = useState<string[]>([]);
    const [historialGanadores, setHistorialGanadores] = useState<any[]>([]);
    const [premiosDelMes, setPremiosDelMes] = useState<any[]>([]);
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [allUsers, setAllUsers] = useState<Usuario[]>([]);

    // ✅ MODO VACACIONES: Estados para funcionalidades especiales
    const [modoVacaciones, setModoVacaciones] = useState<boolean>(false);
    const [tipoVacacion, setTipoVacacion] = useState<string>("");
    const [eventoEspecial, setEventoEspecial] = useState<any>(null);

    // ✅ COMPETENCIAS POR ASIGNATURA: Estados para filtros específicos
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState<string>("todas");
    const [hayDatosAsignatura, setHayDatosAsignatura] = useState<boolean>(true);
    const [cursoSeleccionado, setCursoSeleccionado] = useState<string>("todos");
    const asignaturas = ["todas", "Matemáticas", "Lenguaje", "Literatura", "Historia", "Geografía", "Naturaleza", "Inglés", "General"];
    const cursos = ["todos", "1º Primaria", "2º Primaria", "3º Primaria", "4º Primaria", "5º Primaria", "6º Primaria"];

    // ✅ MODO VACACIONES: Funciones para detectar períodos especiales
    const detectarPeriodoVacaciones = (): { esVacacion: boolean; tipo: string; evento: any } => {
        const ahora = new Date();
        const mes = ahora.getMonth() + 1; // 1-12
        const dia = ahora.getDate();
        const año = ahora.getFullYear();

        // Períodos de vacaciones escolares en España
        const vacaciones = [
            { inicio: { mes: 6, dia: 15 }, fin: { mes: 9, dia: 15 }, tipo: "Vacaciones de Verano", emoji: "🏖️", multiplicador: 1.5 },
            { inicio: { mes: 12, dia: 20 }, fin: { mes: 1, dia: 7 }, tipo: "Vacaciones de Navidad", emoji: "🎄", multiplicador: 1.3 },
            { inicio: { mes: 3, dia: 20 }, fin: { mes: 4, dia: 5 }, tipo: "Vacaciones de Semana Santa", emoji: "🐰", multiplicador: 1.2 },
            { inicio: { mes: 10, dia: 31 }, fin: { mes: 11, dia: 2 }, tipo: "Puente de Halloween", emoji: "🎃", multiplicador: 1.1 },
            { inicio: { mes: 12, dia: 6 }, fin: { mes: 12, dia: 8 }, tipo: "Puente de la Constitución", emoji: "🇪🇸", multiplicador: 1.1 }
        ];

        for (const vacacion of vacaciones) {
            let enPeriodo = false;

            if (vacacion.inicio.mes === vacacion.fin.mes) {
                // Mismo mes
                enPeriodo = mes === vacacion.inicio.mes && dia >= vacacion.inicio.dia && dia <= vacacion.fin.dia;
            } else if (vacacion.inicio.mes === 12 && vacacion.fin.mes === 1) {
                // Navidad (diciembre-enero)
                enPeriodo = (mes === 12 && dia >= vacacion.inicio.dia) || (mes === 1 && dia <= vacacion.fin.dia);
            } else {
                // Meses diferentes
                enPeriodo = (mes === vacacion.inicio.mes && dia >= vacacion.inicio.dia) ||
                    (mes > vacacion.inicio.mes && mes < vacacion.fin.mes) ||
                    (mes === vacacion.fin.mes && dia <= vacacion.fin.dia);
            }

            if (enPeriodo) {
                return {
                    esVacacion: true,
                    tipo: vacacion.tipo,
                    evento: vacacion
                };
            }
        }

        return { esVacacion: false, tipo: "", evento: null };
    };

    // ✅ CHALLENGES ESPECIALES: Función para obtener challenge actual
    const obtenerChallengeActual = (): any => {
        // Lógica simplificada para obtener challenge actual
        return null; // Por ahora retornamos null
    };

    // ✅ RANKINGS: Funciones para guardar y cargar rankings mensuales
    const guardarRankingMensual = (centrosData: CentroStats[]) => {
        // Lógica simplificada
    };

    const cargarRankingMensual = (año: number, mes: number): CentroStats[] => {
        // Lógica simplificada
        return [];
    };

    const obtenerHistorialGanadores = () => {
        // Lógica simplificada
        return [];
    };

    const obtenerPremiosDelMes = () => {
        // Lógica simplificada
        return [];
    };

    // ✅ CARGA DE DATOS PRINCIPAL
    useEffect(() => {
        const cargarDatos = async () => {
            try {
                // Lógica simplificada de carga de datos
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        cargarDatos();
    }, [modoVisualizacion, mesSeleccionado, asignaturaSeleccionada, cursoSeleccionado]);

    // ✅ DETECTAR EVENTOS ESPECIALES
    useEffect(() => {
        const periodoVacaciones = detectarPeriodoVacaciones();
        setModoVacaciones(periodoVacaciones.esVacacion);
        setTipoVacacion(periodoVacaciones.tipo);

        let eventoNormalizado: any = null;
        if (periodoVacaciones.esVacacion && periodoVacaciones.evento) {
            eventoNormalizado = normalizarEventoEspecial({
                nombre: periodoVacaciones.tipo,
                descripcion: periodoVacaciones.evento.descripcion || "",
                emoji: periodoVacaciones.evento.emoji || "",
                tipo: "vacacion",
                multiplicador: periodoVacaciones.evento.multiplicador || 1
            });
        }

        const challengeActual = obtenerChallengeActual();
        if (challengeActual && !periodoVacaciones.esVacacion) {
            eventoNormalizado = normalizarEventoEspecial({
                nombre: challengeActual.nombre || "",
                descripcion: challengeActual.bonus || "",
                emoji: challengeActual.emoji || "",
                tipo: "challenge"
            });
        }

        setEventoEspecial(eventoNormalizado);
    }, []);

    // Obtener el centro del usuario actual
    const centroDelUsuario = centros.find(c => c.nombre === miCentro);

    // Calcular la descripción del título
    const mesActual = new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    let descripcionTitulo = "";
    if (asignaturaSeleccionada === "todas" && cursoSeleccionado === "todos") {
        descripcionTitulo = `Competencia del mes de ${mesActual}`;
    } else if (asignaturaSeleccionada !== "todas" && cursoSeleccionado === "todos") {
        descripcionTitulo = hayDatosAsignatura
            ? `Vista específica de ${asignaturaSeleccionada} - ${mesActual}`
            : `Estimaciones para ${asignaturaSeleccionada} (sin datos específicos aún) - ${mesActual}`;
    } else if (asignaturaSeleccionada === "todas" && cursoSeleccionado !== "todos") {
        descripcionTitulo = `Competencia del mes de ${mesActual} - ${cursoSeleccionado}`;
    } else {
        descripcionTitulo = hayDatosAsignatura
            ? `Vista específica de ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${mesActual}`
            : `Estimaciones para ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${mesActual}`;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-blue-600 font-semibold">Cargando competencia entre centros...</p>
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
                        🏫 {t('leagueTitle')}
                    </h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        {t('leagueSubtitle')}
                    </p>
                </div>

                {/* Contenido simplificado */}
                <div className="text-center">
                    <p>Página en desarrollo...</p>
                </div>
            </div>
        </div>
    );
}