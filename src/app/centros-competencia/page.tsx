"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from '@/utils/i18n';
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
    const { t } = useTranslation();
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

    // Nota: Los datos de asignaturas se almacenan cuando los usuarios responden preguntas
    // Formato: "{asignatura}_{nickname}" → puntos obtenidos
    // Ejemplo: "matematicas_PIPO68" → "45"

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
                // Diferentes meses
                enPeriodo = (mes === vacacion.inicio.mes && dia >= vacacion.inicio.dia) ||
                    (mes === vacacion.fin.mes && dia <= vacacion.fin.dia) ||
                    (mes > vacacion.inicio.mes && mes < vacacion.fin.mes);
            }

            if (enPeriodo) {
                return {
                    esVacacion: true,
                    tipo: vacacion.tipo,
                    evento: {
                        emoji: vacacion.emoji,
                        multiplicador: vacacion.multiplicador,
                        descripcion: `Durante ${vacacion.tipo.toLowerCase()}, ¡los puntos se multiplican por ${vacacion.multiplicador}!`
                    }
                };
            }
        }

        return { esVacacion: false, tipo: "", evento: null };
    };

    // ✅ CHALLENGES ESPECIALES: Eventos temáticos por fecha
    const obtenerChallengeActual = (): any => {
        const ahora = new Date();
        const mes = ahora.getMonth() + 1;
        const dia = ahora.getDate();

        const challenges = [
            { mes: 2, dia: 14, nombre: "Challenge del Amor", emoji: "💝", bonus: "Historias modo 'Corazón' +3 puntos" },
            { mes: 4, dia: 23, nombre: "Día del Libro", emoji: "📚", bonus: "Crear cualquier historia +5 puntos extra" },
            { mes: 5, dia: 15, nombre: "Challenge de la Familia", emoji: "👨‍👩‍👧‍👦", bonus: "Historias modo 'My Live' +2 puntos" },
            { mes: 10, dia: 31, nombre: "Halloween Challenge", emoji: "🎃", bonus: "Historias modo 'Terror' +4 puntos" },
            { mes: 12, dia: 25, nombre: "Challenge Navideño", emoji: "🎅", bonus: "Historias modo 'My Live' +6 puntos" }
        ];

        return challenges.find(ch => ch.mes === mes && dia >= ch.dia - 3 && dia <= ch.dia + 3);
    };

    // Función para calcular si un usuario estuvo activo en los últimos N días
    const esUsuarioActivo = (usuario: Usuario, dias: number = 7): boolean => {
        // Simulamos actividad basada en datos del usuario
        // Usuarios con datos recientes se consideran activos
        const tieneActividad = usuario.likes > 0 || usuario.historiasCreadas > 0 || usuario.concursosGanados > 0;
        const tieneAmigos = usuario.amigos && usuario.amigos.length > 0;
        const tieneInteracciones = usuario.comentariosRecibidos > 0;

        // Un usuario se considera activo si tiene cualquier tipo de actividad
        return tieneActividad || tieneAmigos || tieneInteracciones;
    };

    // Función para obtener actividad de competiciones (campeonato)
    const obtenerActividadCompeticiones = (centro: string): number => {
        if (typeof window === "undefined") return 0;

        try {
            let puntosCompeticion = 0;

            // Buscar datos de campeonato individual por curso y temporada
            const cursos = ['1primaria', '2primaria', '3primaria', '4primaria', '5primaria', '6primaria'];
            const temporadaActual = new Date().getFullYear();

            // Datos de estudiantes
            cursos.forEach(curso => {
                const key = `campeonato_individual_t${temporadaActual}`;
                const datos = localStorage.getItem(key);
                if (datos) {
                    try {
                        const campeonato = JSON.parse(datos);
                        // Sumar puntos de usuarios del centro
                        Object.keys(campeonato).forEach(nick => {
                            const userData = localStorage.getItem('users');
                            if (userData) {
                                const usuarios = JSON.parse(userData);
                                const usuario = usuarios.find((u: Usuario) => u.nick.toLowerCase().replace(/\s+/g, "") === nick);
                                if (usuario && usuario.centro === centro) {
                                    const datosUsuario = campeonato[nick];
                                    puntosCompeticion += (Number(datosUsuario.ganados) || 0) * 10;
                                    puntosCompeticion += (Number(datosUsuario.acertadas) || Number(datosUsuario.preguntasAcertadas) || 0) * 2;
                                }
                            }
                        });
                    } catch (e) {
                        // Silent fail: no console logs to keep output clean for real data presentation
                    }
                }
            });

            // Agregar datos de docentes
            const docentesKey = `campeonato_docentes_t${temporadaActual}`;
            const datosDocentes = localStorage.getItem(docentesKey);
            if (datosDocentes) {
                try {
                    const campeonatoDocentes = JSON.parse(datosDocentes);
                    Object.keys(campeonatoDocentes).forEach(nick => {
                        const userData = localStorage.getItem('users');
                        if (userData) {
                            const usuarios = JSON.parse(userData);
                            const usuario = usuarios.find((u: Usuario) => u.nick.toLowerCase().replace(/\s+/g, "") === nick);
                            if (usuario && usuario.centro === centro && usuario.tipo === "docente") {
                                const datosUsuario = campeonatoDocentes[nick];
                                // Los docentes obtienen más puntos por su liderazgo
                                puntosCompeticion += (Number(datosUsuario.ganados) || 0) * 15;
                                puntosCompeticion += (Number(datosUsuario.acertadas) || Number(datosUsuario.preguntasAcertadas) || 0) * 3;
                                puntosCompeticion += (Number(datosUsuario.likes) || 0) * 5; // Bonus por engagement
                            }
                        }
                    });
                } catch (e) {
                    // Silent fail
                }
            }

            return puntosCompeticion;
        } catch (error) {
            return 0;
        }
    };

    // ✅ COMPETENCIAS POR ASIGNATURA: Función para obtener estadísticas específicas
    const obtenerEstadisticasAsignatura = (asignatura: string, usuarios: Usuario[], cursoFiltro?: string): { [centro: string]: number } => {
        if (typeof window === "undefined") return {};

        const estadisticasCentros: { [centro: string]: number } = {};

        if (asignatura === "todas") {
            return {};
        }

        // Solo buscar datos específicos reales por asignatura, no estimaciones
        usuarios.forEach(usuario => {
            if (!usuario.centro) return;

            // ✅ FILTRAR POR CURSO si se especifica
            if (cursoFiltro && cursoFiltro !== "todos" && usuario.curso !== cursoFiltro) {
                return;
            }

            const centro = usuario.centro;
            if (!estadisticasCentros[centro]) {
                estadisticasCentros[centro] = 0;
            }

            // Buscar datos específicos por asignatura en localStorage
            // Mapear de nombre display a nombre de localStorage
            const mapaAsignaturasInverso: { [key: string]: string } = {
                'Matemáticas': 'matematicas',
                'Historia': 'historia',
                'Geografía': 'geografia',
                'Literatura': 'literatura',
                'Inglés': 'ingles',
                'Naturaleza': 'naturaleza',
                'Lenguaje': 'lenguaje',
                'General': 'general'
            };

            const asignaturaParaLocalStorage = mapaAsignaturasInverso[asignatura] || asignatura.toLowerCase();
            const claveAsignatura = `${asignaturaParaLocalStorage}_${usuario.nick}`;
            const datosAsignatura = localStorage.getItem(claveAsignatura);

            if (datosAsignatura && parseInt(datosAsignatura, 10) > 0) {
                // Solo usar datos reales específicos de la asignatura
                estadisticasCentros[centro] += parseInt(datosAsignatura, 10);
            }
        });

        return estadisticasCentros;
    };

    // Función auxiliar - todas las asignaturas tienen la misma dificultad
    const obtenerFactorAsignatura = (asignatura: string): number => {
        // Todas las asignaturas tienen el mismo nivel de dificultad
        return 1.0; // 100% para todas
    };    // Función para calcular estadísticas de un centro
    const calcularStatsDelCentro = (nombreCentro: string, usuarios: Usuario[]): CentroStats => {
        // Separar estudiantes y docentes del centro
        const estudiantesDelCentro = usuarios.filter(u =>
            u.centro === nombreCentro && u.tipo !== "docente"
        );

        const docentesDelCentro = usuarios.filter(u =>
            u.centro === nombreCentro && u.tipo === "docente"
        );

        const estudiantesActivos = estudiantesDelCentro.filter(u => esUsuarioActivo(u)).length;
        const docentesActivos = docentesDelCentro.filter(u => esUsuarioActivo(u)).length;

        let respuestasCorrectas, concursosGanados, historiasCreadas, interaccionesSociales;

        // ✅ APLICAR FILTRO POR ASIGNATURA SI ESTÁ SELECCIONADO
        if (asignaturaSeleccionada !== "todas") {
            // Obtener estadísticas específicas de la asignatura
            const statsAsignatura = obtenerEstadisticasAsignatura(asignaturaSeleccionada, usuarios, cursoSeleccionado);
            const puntosAsignatura = statsAsignatura[nombreCentro] || 0;

            // Para asignatura específica, usamos los puntos específicos obtenidos
            respuestasCorrectas = puntosAsignatura;

            // Si no hay datos específicos, usar datos generales como fallback
            if (puntosAsignatura === 0) {
                const respuestasGenerales = estudiantesDelCentro.reduce((sum, u) => sum + (Number(u.respuestasAcertadas) || 0), 0) +
                    docentesDelCentro.reduce((sum, u) => sum + (Number(u.respuestasAcertadas) || 0), 0);
                respuestasCorrectas = respuestasGenerales;
            }

            // Para otras métricas, usar los datos reales
            concursosGanados = estudiantesDelCentro.reduce((sum, u) => sum + (Number(u.concursosGanados) || 0), 0) +
                docentesDelCentro.reduce((sum, u) => sum + (Number(u.concursosGanados) || 0), 0);
            historiasCreadas = estudiantesDelCentro.reduce((sum, u) => sum + (Array.isArray(u.historias) ? u.historias.length : (Number(u.historiasCreadas) || 0)), 0) +
                docentesDelCentro.reduce((sum, u) => sum + (Array.isArray(u.historias) ? u.historias.length : (Number(u.historiasCreadas) || 0)), 0);
            interaccionesSociales = estudiantesDelCentro.reduce((sum, u) =>
                sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0) +
                docentesDelCentro.reduce((sum, u) =>
                    sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0);
        } else {
            // Estadísticas generales (todas las asignaturas)
            const respuestasCorrectasEstudiantes = estudiantesDelCentro.reduce((sum, u) => sum + (Number(u.respuestasAcertadas) || 0), 0);
            const concursosGanadosEstudiantes = estudiantesDelCentro.reduce((sum, u) => sum + (Number(u.concursosGanados) || 0), 0);
            const historiasCreadasEstudiantes = estudiantesDelCentro.reduce((sum, u) => sum + (Array.isArray(u.historias) ? u.historias.length : (Number(u.historiasCreadas) || 0)), 0);
            const interaccionesSocialesEstudiantes = estudiantesDelCentro.reduce((sum, u) =>
                sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0);

            // Estadísticas de docentes  
            const respuestasCorrectasDocentes = docentesDelCentro.reduce((sum, u) => sum + (Number(u.respuestasAcertadas) || 0), 0);
            const concursosGanadosDocentes = docentesDelCentro.reduce((sum, u) => sum + (Number(u.concursosGanados) || 0), 0);
            const historiasCreadasDocentes = docentesDelCentro.reduce((sum, u) => sum + (Array.isArray(u.historias) ? u.historias.length : (Number(u.historiasCreadas) || 0)), 0);
            const interaccionesSocialesDocentes = docentesDelCentro.reduce((sum, u) =>
                sum + (Number(u.likes) || 0) + (u.amigos?.length || 0) + (Number(u.comentariosRecibidos) || 0), 0);

            // Totales combinados
            respuestasCorrectas = respuestasCorrectasEstudiantes + respuestasCorrectasDocentes;
            concursosGanados = concursosGanadosEstudiantes + concursosGanadosDocentes;
            historiasCreadas = historiasCreadasEstudiantes + historiasCreadasDocentes;
            interaccionesSociales = interaccionesSocialesEstudiantes + interaccionesSocialesDocentes;
        }

        // Obtener actividad de competiciones (datos reales de campeonatos)
        const puntosCompeticiones = obtenerActividadCompeticiones(nombreCentro);

        // ✅ PREMIOS: Obtener puntos extra por premios ganados
        const premioCentro = obtenerPremioDelCentro(nombreCentro);
        const puntosPremios = premioCentro ? (Number(premioCentro.puntosExtra) || 0) : 0;

        // Calcular puntuación según el sistema propuesto (incluyendo docentes)
        const puntajeTotal =
            (estudiantesActivos * 10) +           // Estudiantes activos
            (docentesActivos * 20) +              // Docentes activos (más valor por liderazgo)
            (respuestasCorrectas * 5) +           // Respuestas correctas (filtradas por asignatura si aplica)
            (concursosGanados * 50) +             // Concursos ganados 
            (historiasCreadas * 15) +             // Historias creadas 
            (interaccionesSociales * 2) +         // Interacciones sociales 
            puntosCompeticiones +                 // Actividad en competiciones
            puntosPremios;                        // Bonus por premios ganados

        return {
            nombre: nombreCentro,
            estudiantes: estudiantesDelCentro.length + docentesDelCentro.length, // Total de miembros
            estudiantesActivos: estudiantesActivos + docentesActivos, // Total de activos
            respuestasCorrectas,
            concursosGanados,
            historiasCreadas,
            interaccionesSociales,
            diasConsecutivos: 0, // Placeholder por ahora
            // Asegurar que puntajeTotal sea siempre number (evitar NaN por datos mal formateados)
            puntajeTotal: Number(puntajeTotal) || 0,
            ranking: 0, // Se calculará después
            medalla: ""
        };
    };

    // Función para obtener el logo/escudo de un centro
    const obtenerLogoCentro = (nombreCentro: string): string => {
        // Validación: si nombreCentro es undefined, null o vacío, devolver logo por defecto
        if (!nombreCentro || typeof nombreCentro !== 'string') {
            return "logo-pipo.jpg";
        }

        // Mapeo de nombres de centros a archivos de imagen
        const logosDisponibles: { [key: string]: string } = {
            "Aguere": "Aguere.jpg",
            "Angeles Bermejo": "Angeles Bermejo.jpg",
            "Aregume": "Aregume.jpg",
            "Buen Consejo": "Buen Consejo.png",
            "Camino La Villa": "Camino La Villa.jpg",
            "Camino Largo": "Camino Largo.jpg",
            "Casa Azul": "Casa Azul.png",
            "Chamberi": "Chamberi.png",
            "Chayofa": "Chayofa.png",
            "Cisneros Alter": "Cisneros Alter.jpg",
            "Colegio Cervantes": "Colegio Cervantes.jpg",
            "Costa Adeje I": "Costa Adeje I..jpg",
            "Cuesta 25 de Julio": "Cuesta 25 de Julio.jpg",
            "Dominguez Alfonso": "Dominguez Alfonso.jpg",
            "Echeyde Arona": "Echeyde Arona.png",
            "Echeyde La Laguna": "Echeyde La Laguna.png",
            "El Monte": "El Monte.png",
            "Escuela Rural": "Escuela Rural.png",
            "Escuelas Pias": "Escuelas Pias.jpg",
            "Gobierno de Canarias": "Gobierno de Canarias (Educacion).jpg",
            "Hispano La Salud": "Hispano La Salud.png",
            "La Cuesta B.N": "La Cuesta B.N.jpg",
            "La Higuerita": "La Higuerita.jpg",
            "La Rosa": "La Rosa.png",
            "La Salle": "La Salle.png",
            "La Vega": "La Vega.jpg",
            "La Verdellada": "La Verdellada.jpg",
            "Los Alisios": "Los Alisios.jpg",
            "Los Menceyes": "Los Menceyes.jpg",
            "Luis Alvarez Cruz": "Luis Alvarez Cruz.jpg",
            "Luther King": "Luther King.jpg",
            "Mayex": "Mayex.jpg",
            "Montessori": "Montessori.png",
            "Nuryana": "Nuryana.jpg",
            "Punta Larga": "Punta Larga.jpg",
            "Pureza de Maria": "Pureza de Maria.png",
            "Ravelo": "Ravelo.jpg",
            "Rodriguez Alberto": "Rodriguez Alberto.jpg",
            "Rodriguez Campos": "Rodriguez Campos.png",
            "Saint Andrew's": "Saint Andrew,s.jpg",
            "Salesianas": "Salesianas.jpg",
            "San Agustin": "San Agustin.jpg",
            "San Fernando": "San Fernando.jpg",
            "San Isidro": "San Isidro.jpg",
            "San Pablo": "San Pablo.png",
            "Santa Catalina de Siena": "Santa Catalina de Siena.jpg",
            "Santa Cruz de California": "Santa Cruz de California.jpg",
            "Santa Maria del Mar": "Santa Maria del Mar.jpg",
            "Santa Rosa de Lima": "Santa Rosa de Lima.jpg",
            "Tacoronte": "Tacoronte.jpg",
            "Tagoror": "Tagoror.jpg",
            "Teofilo Perez": "Teofilo Perez.png",
            "Tincer": "Tincer.jpg",
            "Virgen de Fatima": "Virgen de Fatima.jpg",
            "Virgen del Mar": "Virgen del Mar.png"
        };

        // Buscar coincidencia exacta
        if (logosDisponibles[nombreCentro]) {
            return logosDisponibles[nombreCentro];
        }

        // Buscar coincidencia parcial (por si el nombre está ligeramente diferente)
        // Validación adicional antes de usar toLowerCase()
        if (typeof nombreCentro !== 'string' || !nombreCentro) {
            return "logo-pipo.jpg";
        }

        const nombreLimpio = nombreCentro.toLowerCase().trim();
        for (const [nombre, archivo] of Object.entries(logosDisponibles)) {
            if (nombreLimpio.includes(nombre.toLowerCase()) || nombre.toLowerCase().includes(nombreLimpio)) {
                return archivo;
            }
        }

        // Si no encuentra imagen específica, usar logo por defecto
        return "logo-pipo.jpg"; // Fallback al logo de la aplicación
    };

    // Función auxiliar para verificar si es una imagen o emoji
    const esImagen = (logo: string): boolean => {
        return logo.includes('.jpg') || logo.includes('.png') || logo.includes('.jpeg');
    };

    // ✅ SISTEMA DE PREMIOS: Función para obtener premios del mes actual
    const obtenerPremiosDelMes = (): any[] => {
        if (typeof window === "undefined") return [];

        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();
        const mesActual = fechaActual.getMonth() + 1; // 1-12

        // Clave para premios del mes actual
        const clavePremiosActual = `premios_mensuales_${añoActual}_${mesActual.toString().padStart(2, '0')}`;

        // Calcular mes anterior
        let mesAnterior = mesActual - 1;
        let añoAnterior = añoActual;
        if (mesAnterior === 0) {
            mesAnterior = 12;
            añoAnterior = añoActual - 1;
        }
        const clavePremiosAnterior = `premios_mensuales_${añoAnterior}_${mesAnterior.toString().padStart(2, '0')}`;

        // Si es un nuevo mes y no hay premios para el mes anterior, generarlos
        if (!localStorage.getItem(clavePremiosAnterior)) {
            const premiosGenerados = generarPremiosAutomaticos(mesAnterior, añoAnterior);
            if (premiosGenerados.length > 0) {
                try {
                    localStorage.setItem(clavePremiosActual, JSON.stringify(premiosGenerados));
                } catch (e) {
                    // Silent fail
                }
            }
        }

        // Devolver premios del mes actual (que serán los del mes anterior si acabamos de generarlos)
        const premiosGuardados = localStorage.getItem(clavePremiosActual);
        if (premiosGuardados) {
            try {
                const parsed = JSON.parse(premiosGuardados);

                // Normalizar premios (evitar que el campo `premio` sea un objeto)
                const normalized = parsed.map((p: any) => {
                    const prem = p?.premio;
                    if (typeof prem === 'object' && prem !== null) {
                        const fallback = normalizarValorPremio(prem);
                        return { ...p, premio: fallback };
                    }
                    return p;
                });

                const needsMigration = normalized.some((p: any, idx: number) => typeof parsed[idx]?.premio === 'object' && parsed[idx]?.premio !== null);
                if (needsMigration && !localStorage.getItem(`${clavePremiosActual}_migrated_v1`)) {
                    try {
                        localStorage.setItem(clavePremiosActual, JSON.stringify(normalized));
                        localStorage.setItem(`${clavePremiosActual}_migrated_v1`, 'true');
                    } catch (e) {
                        // Silent fail
                    }
                }

                return normalized;
            } catch (error) {
                // Silent fail
            }
        }

        return [];
    };

    // ✅ SISTEMA DE PREMIOS: Función para generar premios automáticamente
    const generarPremiosAutomaticos = (mes?: number, año?: number): any[] => {
        if (typeof window === "undefined") return [];

        // Usar mes y año proporcionados, o el actual si no se especifican
        const fechaActual = new Date();
        const mesUsar = mes || (fechaActual.getMonth() + 1);
        const añoUsar = año || fechaActual.getFullYear();

        // Obtener ranking del mes especificado
        const rankingMensual = cargarRankingMensual(añoUsar, mesUsar);

        if (rankingMensual.length === 0) return [];

        const premios = [
            {
                posicion: 1,
                emoji: "🥇",
                titulo: "1er lugar",
                premio: "Trofeo digital especial",
                descripcion: "Trofeo exclusivo del mes + 100 puntos extra",
                centro: rankingMensual[0]?.nombre || "",
                puntosExtra: 100
            },
            {
                posicion: 2,
                emoji: "🥈",
                titulo: "2do lugar",
                premio: "Certificado de honor",
                descripcion: "Certificado digital de excelencia",
                centro: rankingMensual[1]?.nombre || "",
                puntosExtra: 50
            },
            {
                posicion: 3,
                emoji: "🥉",
                titulo: "3er lugar",
                premio: "Mención especial",
                descripcion: "Mención honorífica en el ranking",
                centro: rankingMensual[2]?.nombre || "",
                puntosExtra: 25
            }
        ];

        // Agregar premios para Top 10
        for (let i = 3; i < Math.min(10, rankingMensual.length); i++) {
            premios.push({
                posicion: i + 1,
                emoji: "🏆",
                titulo: `Top ${i + 1}`,
                premio: "Badge exclusivo",
                descripcion: `Badge especial "Top ${i + 1}" del mes`,
                centro: rankingMensual[i]?.nombre || "",
                puntosExtra: 10
            });
        }

        // Agregar premios de participación para todos los centros con actividad
        rankingMensual.forEach((centro, index) => {
            if (index >= 10) { // Después del Top 10
                premios.push({
                    posicion: index + 1,
                    emoji: "📚",
                    titulo: "Participación",
                    premio: "Reconocimiento",
                    descripcion: "Reconocimiento por participación activa",
                    centro: centro.nombre,
                    puntosExtra: 5
                });
            }
        });

        // Nota: La asignación de trofeos se ha movido a la página de perfil de usuario
        // para que se desbloqueen solo para usuarios individuales de ese centro.

        return premios;
    };

    // ✅ SISTEMA DE PREMIOS: Función para asignar trofeos a usuarios de un centro
    const asignarTrofeoACentro = (nombreCentro: string, idTrofeo: number): void => {
        if (typeof window === "undefined") return;

        try {
            const usersStr = localStorage.getItem("users");
            if (!usersStr) return;

            const users = JSON.parse(usersStr);
            let usuariosActualizados = false;

            // Asignar trofeo a todos los usuarios del centro
            users.forEach((user: any) => {
                if (user.centro === nombreCentro) {
                    if (!user.trofeos) {
                        user.trofeos = [];
                    }
                    if (!user.trofeos.includes(idTrofeo)) {
                        user.trofeos.push(idTrofeo);
                        usuariosActualizados = true;
                    }
                }
            });

            if (usuariosActualizados) {
                localStorage.setItem("users", JSON.stringify(users));
            }
        } catch (error) {
            // Silent fail
        }
    };

    // ✅ SISTEMA DE PREMIOS: Función para verificar si los trofeos ya fueron asignados este mes
    const trofeosYaAsignadosEsteMes = (): boolean => {
        if (typeof window === "undefined") return false;

        const fechaActual = new Date();
        const claveTrofeosAsignados = `trofeos_asignados_${fechaActual.getFullYear()}_${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}`;

        return localStorage.getItem(claveTrofeosAsignados) === 'true';
    };

    // ✅ SISTEMA DE PREMIOS: Función para marcar que los trofeos fueron asignados este mes
    const marcarTrofeosAsignadosEsteMes = (): void => {
        if (typeof window === "undefined") return;

        const fechaActual = new Date();
        const claveTrofeosAsignados = `trofeos_asignados_${fechaActual.getFullYear()}_${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}`;

        localStorage.setItem(claveTrofeosAsignados, 'true');
    };

    // ✅ SISTEMA DE PREMIOS: Función para verificar si un centro ganó premio
    const obtenerPremioDelCentro = (nombreCentro: string): any => {
        const premiosDelMes = obtenerPremiosDelMes();
        return premiosDelMes.find(premio => premio.centro === nombreCentro);
    };

    // Normaliza un valor de premio para asegurarnos de devolver siempre una cadena
    // Normalización sustituida por util compartido `normalizarValorPremio` en `src/utils/normalizadores.ts`

    // Función para obtener información del ciclo mensual
    const obtenerInfoCicloMensual = () => {
        const hoy = new Date();
        const añoActual = hoy.getFullYear();
        const mesActual = hoy.getMonth(); // 0-11
        const diaActual = hoy.getDate();

        // Calcular días restantes hasta fin de mes
        const ultimoDiaDelMes = new Date(añoActual, mesActual + 1, 0).getDate();
        const diasRestantes = ultimoDiaDelMes - diaActual + 1;

        // Calcular progreso del mes
        const progresoDelMes = Math.round((diaActual / ultimoDiaDelMes) * 100);

        // Próximo mes
        const proximoMes = new Date(añoActual, mesActual + 1, 1);
        const nombreProximoMes = proximoMes.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

        return {
            diasRestantes,
            progresoDelMes,
            nombreProximoMes
        };
    };

    // Función para generar clave de mes para localStorage
    const generarClaveMes = (año: number, mes: number): string => {
        return `centros_ranking_${año}_${mes.toString().padStart(2, '0')}`;
    };

    // Función para obtener meses disponibles en historial
    const obtenerMesesDisponibles = (): string[] => {
        if (typeof window === "undefined") return [];

        const meses = [];
        const fechaActual = new Date();

        // Agregar mes actual
        const mesActual = `${fechaActual.getFullYear()}-${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}`;
        meses.push(mesActual);

        // Buscar meses anteriores en localStorage
        for (let i = 1; i <= 12; i++) {
            const fecha = new Date(fechaActual);
            fecha.setMonth(fecha.getMonth() - i);
            const claveMes = generarClaveMes(fecha.getFullYear(), fecha.getMonth() + 1);

            if (localStorage.getItem(claveMes)) {
                const mesString = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}`;
                meses.push(mesString);
            }
        }

        return meses;
    };

    // Función para guardar ranking mensual en historial
    const guardarRankingMensual = (centros: CentroStats[]) => {
        if (typeof window === "undefined") return;

        const fechaActual = new Date();
        const claveMes = generarClaveMes(fechaActual.getFullYear(), fechaActual.getMonth() + 1);

        const datosRanking = {
            fecha: fechaActual.toISOString(),
            año: fechaActual.getFullYear(),
            mes: fechaActual.getMonth() + 1,
            centros: centros,
            ganador: centros[0]?.nombre || "N/A"
        };

        localStorage.setItem(claveMes, JSON.stringify(datosRanking));
    };

    // Función para cargar ranking de un mes específico
    const cargarRankingMensual = (año: number, mes: number): CentroStats[] => {
        if (typeof window === "undefined") return [];

        const claveMes = generarClaveMes(año, mes);
        const datos = localStorage.getItem(claveMes);

        if (datos) {
            try {
                const ranking = JSON.parse(datos);
                return ranking.centros || [];
            } catch (error) {
                // Silent fail
            }
        }

        return [];
    };

    // Función para calcular ranking anual acumulativo
    const calcularRankingAnual = (): CentroStats[] => {
        if (typeof window === "undefined") return [];

        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();
        const centrosAcumulados: { [nombre: string]: CentroStats } = {};

        // Sumar puntos de todos los meses del año actual
        for (let mes = 1; mes <= 12; mes++) {
            const rankingMensual = cargarRankingMensual(añoActual, mes);

            rankingMensual.forEach(centro => {
                if (!centrosAcumulados[centro.nombre]) {
                    centrosAcumulados[centro.nombre] = {
                        ...centro,
                        puntajeTotal: 0,
                        ranking: 0
                    };
                }

                centrosAcumulados[centro.nombre].puntajeTotal += Number(centro.puntajeTotal) || 0;
                centrosAcumulados[centro.nombre].respuestasCorrectas += Number(centro.respuestasCorrectas) || 0;
                centrosAcumulados[centro.nombre].concursosGanados += Number(centro.concursosGanados) || 0;
                centrosAcumulados[centro.nombre].historiasCreadas += Number(centro.historiasCreadas) || 0;
                centrosAcumulados[centro.nombre].interaccionesSociales += Number(centro.interaccionesSociales) || 0;
            });
        }

        // Convertir a array y ordenar
        const centrosArray = Object.values(centrosAcumulados)
            .sort((a, b) => b.puntajeTotal - a.puntajeTotal);

        // Asignar medallas y rankings
        return asignarMedallas(centrosArray);
    };

    // Función para obtener historial de ganadores
    const obtenerHistorialGanadores = (): any[] => {
        if (typeof window === "undefined") return [];

        const historial = [];
        const fechaActual = new Date();

        for (let i = 0; i < 12; i++) {
            const fecha = new Date(fechaActual);
            fecha.setMonth(fecha.getMonth() - i);

            const rankingMensual = cargarRankingMensual(fecha.getFullYear(), fecha.getMonth() + 1);

            if (rankingMensual.length > 0 && rankingMensual[0]) {
                const ganador = rankingMensual[0];
                historial.push({
                    año: fecha.getFullYear(),
                    mes: fecha.toLocaleDateString('es-ES', { month: 'long' }),
                    centro: ganador.nombre || "Centro Desconocido",
                    puntaje: ganador.puntajeTotal || 0,
                    ranking: 1
                });
            }
        }

        return historial;
    };
    const asignarMedallas = (centrosOrdenados: CentroStats[]): CentroStats[] => {
        return centrosOrdenados.map((centro, index) => {
            let medalla = "";
            if (index === 0) medalla = "🥇";
            else if (index === 1) medalla = "🥈";
            else if (index === 2) medalla = "🥉";
            else if (index < 10) medalla = "🏆";
            else medalla = "📚";

            return {
                ...centro,
                ranking: index + 1,
                medalla
            };
        });
    };

    // Cargar datos y calcular estadísticas
    useEffect(() => {
        const cargarDatos = () => {
            try {
                // Cargar usuario actual
                const userData = localStorage.getItem('currentUser') || localStorage.getItem('user');
                if (userData) {
                    const user = JSON.parse(userData);
                    setUsuario(user);
                    setMiCentro(user.centro || "");
                }

                // Cargar datos históricos
                const mesesDisponibles = obtenerMesesDisponibles();
                setMesesDisponibles(mesesDisponibles);

                const historialGanadores = obtenerHistorialGanadores();
                setHistorialGanadores(historialGanadores);

                // Cargar todos los usuarios
                const usuariosData = localStorage.getItem('users');
                if (!usuariosData) {
                    setLoading(false);
                    return;
                }

                const usuarios: Usuario[] = JSON.parse(usuariosData);
                setAllUsers(usuarios);

                // ✅ VERIFICAR SI HAY DATOS PARA LA ASIGNATURA SELECCIONADA
                if (asignaturaSeleccionada !== "todas") {
                    // Verificar si hay datos específicos por asignatura
                    const mapaAsignaturasInverso: { [key: string]: string } = {
                        'Matemáticas': 'matematicas',
                        'Historia': 'historia',
                        'Geografía': 'geografia',
                        'Literatura': 'literatura',
                        'Inglés': 'ingles',
                        'Naturaleza': 'naturaleza',
                        'Lenguaje': 'lenguaje',
                        'General': 'general'
                    };
                    const asignaturaParaLocalStorage = mapaAsignaturasInverso[asignaturaSeleccionada] || asignaturaSeleccionada.toLowerCase();

                    let hayDatosEspecificos = false;
                    for (let i = 0; i < localStorage.length; i++) {
                        const clave = localStorage.key(i);
                        if (clave && clave.startsWith(`${asignaturaParaLocalStorage}_`)) {
                            const valor = localStorage.getItem(clave);
                            if (valor && parseInt(valor, 10) > 0) {
                                hayDatosEspecificos = true;
                                break;
                            }
                        }
                    }
                    setHayDatosAsignatura(hayDatosEspecificos);
                } else {
                    setHayDatosAsignatura(true);
                }

                // Obtener lista única de centros
                const centrosUnicos = [...new Set(usuarios
                    .filter(u => u.centro && u.centro.trim() !== "")
                    .map(u => u.centro))];

                // Calcular estadísticas para cada centro
                const statsDeLosCentros = centrosUnicos.map(nombreCentro =>
                    calcularStatsDelCentro(nombreCentro, usuarios)
                );

                // Ordenar por puntuación y asignar medallas
                const centrosOrdenados = statsDeLosCentros
                    .sort((a, b) => b.puntajeTotal - a.puntajeTotal);

                const centrosConMedallas = asignarMedallas(centrosOrdenados);

                // Manejar diferentes modos de visualización
                if (modoVisualizacion === 'anual') {
                    const centrosAnuales = calcularRankingAnual();
                    setCentrosAnuales(centrosAnuales);
                } else if (mesSeleccionado && mesesDisponibles.includes(mesSeleccionado)) {
                    // Cargar ranking de mes específico
                    // Extraer año y mes del formato "Enero 2024"
                    const partes = mesSeleccionado.split(' ');
                    const nombreMes = partes[0];
                    const año = parseInt(partes[1]) || fechaActual.getFullYear();

                    // Convertir nombre de mes a número
                    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                    const numeroMes = mesesNombres.indexOf(nombreMes) + 1;

                    if (numeroMes > 0) {
                        const rankingMes = cargarRankingMensual(año, numeroMes);
                        if (rankingMes.length > 0) {
                            setCentros(rankingMes);
                        } else {
                            setCentros(centrosConMedallas);
                        }
                    } else {
                        setCentros(centrosConMedallas);
                    }
                } else {
                    // Mes actual
                    setCentros(centrosConMedallas);
                    // Guardar ranking mensual automáticamente
                    guardarRankingMensual(centrosConMedallas);
                }

                // Cargar historial de ganadores
                setHistorialGanadores(obtenerHistorialGanadores());

                // Cargar premios del mes
                setPremiosDelMes(obtenerPremiosDelMes());

                setLoading(false);

            } catch (error) {
                // Silent fail
                setLoading(false);
            }
        };

        cargarDatos();
    }, [modoVisualizacion, mesSeleccionado, asignaturaSeleccionada, cursoSeleccionado]);

    // ✅ DETECTAR EVENTOS ESPECIALES (vacaciones y challenges) - separado para que se ejecute en el mount
    useEffect(() => {
        // ✅ DETECTAR MODO VACACIONES AUTOMÁTICAMENTE
        const periodoVacaciones = detectarPeriodoVacaciones();
        setModoVacaciones(periodoVacaciones.esVacacion);
        setTipoVacacion(periodoVacaciones.tipo);

        // Normalizamos la estructura de evento para evitar pasar objetos enteros
        // directamente al renderizado (causa el error: Objects are not valid as a React child).
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

        // ✅ DETECTAR CHALLENGE ESPECIAL
        const challengeActual = obtenerChallengeActual();
        if (challengeActual && !periodoVacaciones.esVacacion) {
            // También normalizamos el challenge para que tenga campos consistentes
            eventoNormalizado = normalizarEventoEspecial({
                nombre: challengeActual.nombre || "",
                descripcion: challengeActual.bonus || "",
                emoji: challengeActual.emoji || "",
                tipo: "challenge"
            });
        }

        setEventoEspecial(eventoNormalizado);
    }, []); // Sin dependencias para que se ejecute solo en mount

    // Obtener el centro del usuario actual
    const centroDelUsuario = centros.find(c => c.nombre === miCentro);

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

                {/* ✅ MODO VACACIONES: Banner especial */}
                {modoVacaciones && eventoEspecial && (
                    <div role="status" aria-live="polite" aria-label={eventoEspecial.nombre || 'Evento especial'} className="mb-8 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-xl p-6 shadow-lg animate-pulse">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-orange-800 mb-2 flex items-center justify-center gap-2">
                                {eventoEspecial.emoji} ¡{tipoVacacion} Activas! {eventoEspecial.emoji}
                            </h2>
                            <p className="text-lg text-orange-700 mb-4">
                                {eventoEspecial.descripcion}
                            </p>
                            <div className="bg-white bg-opacity-60 rounded-lg p-4 inline-block">
                                <p className="text-sm font-semibold text-orange-900">
                                    {eventoEspecial.tipo === 'vacacion' && eventoEspecial.multiplicador && (
                                        <>🚀 <strong>{t('multiplicadorActivo')}:</strong> x{eventoEspecial.multiplicador}</>
                                    )}
                                </p>
                                <p className="text-xs text-orange-900 mt-1">
                                    Todas las actividades dan puntos extra durante este período especial
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* ✅ CHALLENGE ESPECIAL: Banner de evento temático */}
                {!modoVacaciones && eventoEspecial && eventoEspecial.nombre && (
                    <div role="status" aria-live="polite" aria-label={eventoEspecial.nombre || 'Evento especial'} className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-xl p-6 shadow-lg">
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center justify-center gap-2">
                                {eventoEspecial.emoji} {eventoEspecial.nombre} {eventoEspecial.emoji}
                            </h2>
                            <p className="text-purple-700 font-semibold">
                                🎁 <strong>Bonus Especial:</strong> {eventoEspecial.descripcion}
                            </p>
                            <p className="text-xs text-purple-700 mt-2">
                                {t('eventoLimitado')}
                            </p>
                        </div>
                    </div>
                )}

                {/* Controles de Navegación Temporal */}
                <div className="mb-8 bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        {/* Selector de Modo */}
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-semibold text-gray-700">Ver datos:</label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setModoVisualizacion('actual')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'actual'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    📅 Mes Actual
                                </button>
                                <button
                                    onClick={() => setModoVisualizacion('historico')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'historico'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    📊 Histórico
                                </button>
                                <button
                                    onClick={() => setModoVisualizacion('anual')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${modoVisualizacion === 'anual'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    🏆 Ranking Anual
                                </button>
                            </div>
                        </div>

                        {/* ✅ COMPETENCIAS POR ASIGNATURA: Selector de materia */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm font-semibold text-gray-700">{t('filtrarAsignatura')}</label>
                            <select
                                value={asignaturaSeleccionada}
                                onChange={(e) => setAsignaturaSeleccionada(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="todas">📚 {t('todasAsignaturas')}</option>
                                <option value="Matemáticas">🔢 Matemáticas</option>
                                <option value="Lenguaje">📝 Lenguaje</option>
                                <option value="Literatura">📖 Literatura</option>
                                <option value="Historia">🏛️ Historia</option>
                                <option value="Geografía">🗺️ Geografía</option>
                                <option value="Naturaleza">🌿 Ciencias Naturales</option>
                                <option value="Inglés">🇬🇧 Inglés</option>
                                <option value="General">🎯 General</option>
                            </select>
                        </div>

                        {/* ✅ FILTRO POR CURSO: Selector de curso */}
                        <div className="flex items-center gap-3">
                            <label className="text-sm font-semibold text-gray-700">{t('filtrarCurso')}</label>
                            <select
                                value={cursoSeleccionado}
                                onChange={(e) => setCursoSeleccionado(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                            >
                                <option value="todos">👥 {t('todosCursos')}</option>
                                <option value="1º Primaria">1️⃣ 1º Primaria</option>
                                <option value="2º Primaria">2️⃣ 2º Primaria</option>
                                <option value="3º Primaria">3️⃣ 3º Primaria</option>
                                <option value="4º Primaria">4️⃣ 4º Primaria</option>
                                <option value="5º Primaria">5️⃣ 5º Primaria</option>
                                <option value="6º Primaria">6️⃣ 6º Primaria</option>
                            </select>
                        </div>

                        {/* Selector de Mes (solo en modo histórico) */}
                        {modoVisualizacion === 'historico' && mesesDisponibles.length > 0 && (
                            <div className="flex items-center gap-3">
                                <label className="text-sm font-semibold text-gray-700">{t('mes')}</label>
                                <select
                                    value={mesSeleccionado}
                                    onChange={(e) => setMesSeleccionado(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">{t('seleccionarMes')}</option>
                                    {mesesDisponibles.map((mes) => (
                                        <option key={mes} value={mes}>
                                            {mes}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Indicador del período actual */}
                    <div className="mt-4 text-center">
                        {modoVisualizacion === 'actual' && (
                            <p className="text-sm text-gray-600">
                                📅 <strong>{t('mostrar')}</strong> {t('competenciaMesActual')} ({fechaActual.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })})
                            </p>
                        )}
                        {modoVisualizacion === 'historico' && mesSeleccionado && (
                            <p className="text-sm text-gray-600">
                                📊 <strong>{t('mostrar')}</strong> {t('resultadosHistoricos')} {mesSeleccionado}
                            </p>
                        )}
                        {modoVisualizacion === 'anual' && (
                            <p className="text-sm text-gray-600">
                                🏆 <strong>{t('mostrar')}</strong> {t('rankingAnual')} (año {fechaActual.getFullYear()})
                            </p>
                        )}
                    </div>
                </div>

                {/* Mi Centro - Destacado */}
                {centroDelUsuario && (
                    <div role="region" aria-labelledby="mi-centro-title" className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 id="mi-centro-title" className="text-xl font-bold text-yellow-800 mb-2 flex items-center" aria-label={t('tuCentro')}>
                                    {esImagen(obtenerLogoCentro(centroDelUsuario.nombre)) ? (
                                        <img
                                            src={`/${obtenerLogoCentro(centroDelUsuario.nombre)}`}
                                            alt={`Logo ${centroDelUsuario.nombre}`}
                                            className="w-12 h-12 object-contain rounded-lg border-2 border-yellow-400 mr-3"
                                        />
                                    ) : (
                                        <span className="text-2xl mr-3">{obtenerLogoCentro(centroDelUsuario.nombre)}</span>
                                    )}
                                    🏠 {t('tuCentro')}: {centroDelUsuario.nombre}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div>
                                        <span className="font-semibold text-yellow-700">{t('ranking')}:</span>
                                        <span className="ml-2 text-lg">{centroDelUsuario.medalla} #{centroDelUsuario.ranking}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-yellow-700">{t('puntuacion')}:</span>
                                        <span className="ml-2 text-lg font-bold">{centroDelUsuario.puntajeTotal.toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-yellow-700">{t('miembros')}:</span>
                                        <span className="ml-2">{centroDelUsuario.estudiantesActivos}/{centroDelUsuario.estudiantes}</span>
                                        <div className="text-xs text-yellow-600">estudiantes + docentes</div>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-yellow-700">{t('concursos')}:</span>
                                        <span className="ml-2">{centroDelUsuario.concursosGanados}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ✅ PREMIOS DEL CENTRO: Sección especial para premios ganados */}
                {centroDelUsuario && (() => {
                    const premioCentro = obtenerPremioDelCentro(centroDelUsuario.nombre);
                    return premioCentro ? (
                        <div role="region" aria-labelledby="premio-centro-title" className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 rounded-lg p-6 shadow-lg">
                            <div className="flex items-center">
                                <div className="text-4xl mr-4">🎉</div>
                                <div>
                                    <h3 id="premio-centro-title" className="text-xl font-bold text-purple-800 mb-2">
                                        {t('felicitacionesPremio')}
                                    </h3>
                                    <div className="bg-white bg-opacity-60 rounded-lg p-4 inline-block">
                                        <div className="flex items-center mb-2">
                                            <span className="text-2xl mr-2">{premioCentro.emoji}</span>
                                            <span className="font-bold text-purple-800">{premioCentro.titulo}:</span>
                                            <span className="ml-2 text-purple-700">{normalizarValorPremio(premioCentro.premio)}</span>
                                        </div>
                                        <p className="text-sm text-purple-600 mb-2">{premioCentro.descripcion}</p>
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-purple-800">
                                                🏆 <strong>{t('bonusObtenido')}:</strong> +{Number(premioCentro.puntosExtra) || 0} puntos extra
                                            </p>
                                            <p className="text-sm text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block">
                                                🏅 <strong>{t('insigniaAutomatica')}:</strong> {t('premio')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null;
                })()}

                {/* ✅ USUARIOS DEL CENTRO: Detalle de respuestas acertadas por usuario */}
                {centroDelUsuario && allUsers.length > 0 && (() => {
                    // Obtener usuarios del centro (case insensitive y trim)
                    const usuariosCentro = allUsers.filter((u: Usuario) =>
                        u.centro && u.centro.trim().toLowerCase() === centroDelUsuario.nombre.trim().toLowerCase()
                    );

                    if (usuariosCentro.length === 0) return null;

                    return (
                        <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                👥 Usuarios de {centroDelUsuario.nombre} ({usuariosCentro.length} usuarios)
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-lg shadow-sm">
                                    <thead className="bg-green-100">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Usuario</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Respuestas Acertadas</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Historias</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Concursos</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase tracking-wider">Likes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {usuariosCentro.map((usuario: Usuario, index: number) => (
                                            <tr key={usuario.nick} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {renderNick(usuario.nick)}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {Number(usuario.respuestasAcertadas) || 0}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {Array.isArray(usuario.historias) ? usuario.historias.length : (Number(usuario.historiasCreadas) || 0)}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {Number(usuario.concursosGanados) || 0}
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                                    {Number(usuario.likes) || 0}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })()}                {/* ✅ GRÁFICOS DE PROGRESO: Visualización avanzada de estadísticas */}
                <div className="mb-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-cyan-800 mb-6 flex items-center" role="region" aria-labelledby="graficos-title">
                        <span id="graficos-title">📊 {t('gráficosProgreso')}</span>
                    </h3>

                    {/* Top 3 Centros con Barras de Progreso */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-cyan-700 mb-4">🏆 Top 3 Centros - Barras de Progreso</h4>
                        <div className="space-y-4">
                            {centros.slice(0, 3).map((centro, index) => {
                                const maxPuntos = Number(centros[0]?.puntajeTotal) || 1;
                                const porcentaje = (centro.puntajeTotal / maxPuntos) * 100;
                                const colores = ["from-yellow-400 to-orange-500", "from-gray-400 to-gray-600", "from-orange-400 to-red-500"];

                                return (
                                    <div key={centro.nombre} className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{centro.medalla}</span>
                                                <span className="font-bold text-gray-800">{centro.nombre}</span>
                                            </div>
                                            <span className="text-lg font-bold text-cyan-600">
                                                {centro.puntajeTotal.toLocaleString()} pts
                                            </span>
                                        </div>

                                        {/* Barra de progreso animada */}
                                        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                            <div
                                                className={`h-full bg-gradient-to-r ${colores[index]} transition-all duration-1000 ease-out rounded-full`}
                                                style={{ width: `${porcentaje}%` }}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            {porcentaje.toFixed(1)}% del máximo
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Estadísticas por Asignatura */}
                    {asignaturaSeleccionada !== "todas" && (
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-cyan-700 mb-4">
                                📚 Análisis Específico: {asignaturaSeleccionada.charAt(0).toUpperCase() + asignaturaSeleccionada.slice(1)}
                            </h4>

                            {hayDatosAsignatura ? (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <p className="text-sm text-blue-800">
                                        🔍 <strong>Vista filtrada por asignatura:</strong> Mostrando solo actividad relacionada con {asignaturaSeleccionada}
                                    </p>
                                    <p className="text-xs text-blue-600 mt-2">
                                        Los puntos de respuestas correctas corresponden únicamente a preguntas de esta materia específica.
                                        Las demás métricas (concursos, historias, interacciones) se muestran proporcionalmente.
                                    </p>
                                    <div className="mt-3 text-xs text-blue-500 bg-blue-100 rounded p-2">
                                        💡 <strong>Tip:</strong> Para ver el rendimiento completo de todos los centros, selecciona "📚 todas las asignaturas"
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                    <p className="text-sm text-orange-800">
                                        📊 <strong>Sin datos específicos:</strong> Aún no hay actividad registrada para {asignaturaSeleccionada}
                                    </p>
                                    <p className="text-xs text-orange-600 mt-2">
                                        Los rankings mostrados son estimaciones basadas en el rendimiento general de cada centro.
                                        Los datos reales aparecerán cuando los usuarios respondan preguntas de esta materia.
                                    </p>
                                    <div className="mt-3 text-xs text-orange-500 bg-orange-100 rounded p-2">
                                        🎯 <strong>Para generar datos reales:</strong> Los usuarios deben participar en competencias o responder preguntas específicas de {asignaturaSeleccionada}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Métricas de Participación */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                            <div className="text-sm font-semibold text-green-700">Total de Centros</div>
                            <div className="text-2xl font-bold text-green-800">{centros.length}</div>
                            <div className="text-xs text-green-600">Participando en la liga</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                            <div className="text-sm font-semibold text-blue-700">Puntuación Total</div>
                            <div className="text-2xl font-bold text-blue-800">
                                {centros.reduce((total, centro) => total + (Number(centro.puntajeTotal) || 0), 0).toLocaleString()}
                            </div>
                            <div className="text-xs text-blue-600">Puntos acumulados</div>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                            <div className="text-sm font-semibold text-purple-700">Promedio de Centro</div>
                            <div className="text-2xl font-bold text-purple-800">
                                {Math.round(centros.reduce((total, centro) => total + (Number(centro.puntajeTotal) || 0), 0) / (centros.length || 1)).toLocaleString()}
                            </div>
                            <div className="text-xs text-purple-600">Puntos por centro</div>
                        </div>
                    </div>
                </div>

                {/* Información del Ciclo Mensual */}
                <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                        📅 Información del Ciclo de Competencia
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-indigo-200">
                            <div className="text-sm text-indigo-600 font-semibold">Mes Actual</div>
                            <div className="text-xl font-bold text-indigo-800">
                                {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                            </div>
                            <div className="text-sm text-indigo-600 mt-1">
                                Progreso: {obtenerInfoCicloMensual().progresoDelMes}%
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                            <div className="text-sm text-orange-600 font-semibold">Días Restantes</div>
                            <div className="text-xl font-bold text-orange-800">
                                {obtenerInfoCicloMensual().diasRestantes} días
                            </div>
                            <div className="text-sm text-orange-600 mt-1">
                                Hasta próximo ranking
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-green-200">
                            <div className="text-sm text-green-600 font-semibold">Próximo Ciclo</div>
                            <div className="text-xl font-bold text-green-800 text-sm">
                                {obtenerInfoCicloMensual().nombreProximoMes}
                            </div>
                            <div className="text-sm text-green-600 mt-1">
                                Nuevo ranking mensual
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-indigo-600 bg-white rounded p-3 border border-indigo-200">
                        <strong>📊 Ciclo de Competencia:</strong> Los rankings se actualizan automáticamente cada mes.
                        Los puntos se acumulan desde el día 1 hasta el último día del mes, creando una competencia fresca cada 30 días.
                        <strong> ¡Cada mes es una nueva oportunidad para que tu centro llegue al primer puesto!</strong>
                    </div>
                </div>

                {/* Sistema de Puntuación */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Sistema de Puntuación</h3>
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-gray-700">
                            <strong>¡Novedad!</strong> 🎉 Ahora los <strong>docentes también participan</strong> en el ranking de su centro.
                            ¡Profesores y estudiantes trabajando juntos por el éxito del centro!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                            <div className="font-semibold text-blue-700">Estudiantes Activos</div>
                            <div className="text-2xl font-bold text-blue-800">10 pts</div>
                            <div className="text-xs text-blue-600">por estudiante activo</div>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded">
                            <div className="font-semibold text-indigo-700">Docentes Activos</div>
                            <div className="text-2xl font-bold text-indigo-800">20 pts</div>
                            <div className="text-xs text-indigo-600">por docente activo</div>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <div className="font-semibold text-green-700">Respuestas Correctas</div>
                            <div className="text-2xl font-bold text-green-800">5 pts</div>
                            <div className="text-xs text-green-600">estudiantes + docentes</div>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded">
                            <div className="font-semibold text-yellow-700">Concursos Ganados</div>
                            <div className="text-2xl font-bold text-yellow-800">50 pts</div>
                            <div className="text-xs text-yellow-600">estudiantes + docentes</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                            <div className="font-semibold text-purple-700">Historias Creadas</div>
                            <div className="text-2xl font-bold text-purple-800">15 pts</div>
                            <div className="text-xs text-purple-600">estudiantes + docentes</div>
                        </div>
                        <div className="bg-pink-50 p-3 rounded">
                            <div className="font-semibold text-pink-700">Interacciones</div>
                            <div className="text-2xl font-bold text-pink-800">2 pts</div>
                            <div className="text-xs text-pink-600">likes, amigos, comentarios</div>
                        </div>
                    </div>
                </div>

                {/* Ranking de Centros */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
                        <h3 className="text-2xl font-bold">
                            🏆 Ranking de Centros Educativos
                            {asignaturaSeleccionada !== "todas" && (
                                <span className="text-lg font-normal opacity-90 ml-2">
                                    - {asignaturaSeleccionada.charAt(0).toUpperCase() + asignaturaSeleccionada.slice(1)}
                                    {!hayDatosAsignatura && <span className="text-sm"> (Estimado)</span>}
                                </span>
                            )}
                            {cursoSeleccionado !== "todos" && (
                                <span className="text-lg font-normal opacity-90 ml-2">
                                    - {cursoSeleccionado}
                                </span>
                            )}
                        </h3>
                        <p className="opacity-90">
                            {asignaturaSeleccionada === "todas" && cursoSeleccionado === "todos"
                                ? `Competencia del mes de ${new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
                                : asignaturaSeleccionada !== "todas" && cursoSeleccionado === "todos"
                                    ? hayDatosAsignatura
                                        ? `Vista específica de ${asignaturaSeleccionada} - ${new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
                                        : `Estimaciones para ${asignaturaSeleccionada} (sin datos específicos aún) - ${new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
                                    : asignaturaSeleccionada === "todas" && cursoSeleccionado !== "todos"
                                        ? `Vista específica de ${cursoSeleccionado} - ${new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
                                        : hayDatosAsignatura
                                            ? `Vista específica de ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
                                            : `Estimaciones para ${asignaturaSeleccionada} (${cursoSeleccionado}) - ${new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
                            }
                        </p>
                        <div className="mt-2 text-sm opacity-80">
                            📅 Se actualiza automáticamente cada mes | 🔄 Datos en tiempo real
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ranking</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Centro</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntuación</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Miembros</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activos</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Respuestas</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concursos</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Historias</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {centros.map((centro, index) => (
                                    <tr
                                        key={centro.nombre}
                                        className={`hover:bg-gray-50 ${centro.nombre === miCentro ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''}`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <span className="text-2xl mr-2">{centro.medalla}</span>
                                                <span className="text-lg font-bold text-gray-900">#{centro.ranking}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                {esImagen(obtenerLogoCentro(centro.nombre)) ? (
                                                    <img
                                                        src={`/${obtenerLogoCentro(centro.nombre)}`}
                                                        alt={`Logo ${centro.nombre}`}
                                                        className="w-10 h-10 object-contain rounded-lg border border-gray-300 mr-3"
                                                    />
                                                ) : (
                                                    <span className="text-2xl mr-3">{obtenerLogoCentro(centro.nombre)}</span>
                                                )}
                                                <div>
                                                    <div className="font-medium text-gray-900">{centro.nombre}</div>
                                                    {centro.nombre === miCentro && (
                                                        <div className="text-sm text-yellow-600">👈 Tu centro</div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-2xl font-bold text-blue-600">
                                                {centro.puntajeTotal.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {centro.estudiantes}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                                {centro.estudiantesActivos}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {centro.respuestasCorrectas}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {centro.concursosGanados}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {centro.historiasCreadas}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {centros.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-xl mb-4">📊</div>
                            <p className="text-gray-500">No hay datos de centros disponibles todavía.</p>
                            <p className="text-sm text-gray-400 mt-2">Los datos aparecerán cuando haya actividad de estudiantes.</p>
                        </div>
                    )}
                </div>

                {/* Información adicional */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-800 mb-2">🎯 ¿Cómo Participar?</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• <strong>Estudiantes y Docentes</strong> pueden participar</li>
                            <li>• Mantente activo en la plataforma</li>
                            <li>• Responde preguntas correctamente</li>
                            <li>• Participa en concursos</li>
                            <li>• Crea historias interesantes</li>
                            <li>• Interactúa con compañeros y profesores</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2">🏆 {t('premiosDelMes')}</h4>
                        {premiosDelMes.length > 0 ? (
                            <div className="space-y-2">
                                {premiosDelMes.slice(0, 10).map((premio, index) => (
                                    <div key={index} className={`flex items-center justify-between p-2 rounded ${premio.centro === miCentro ? 'bg-yellow-100 border border-yellow-300' : 'bg-white'
                                        }`}>
                                        <div className="flex items-center">
                                            <span className="text-lg mr-2">{premio.emoji}</span>
                                            <div>
                                                <span className="font-medium text-green-800">{premio.titulo}:</span>
                                                <span className="text-green-700 ml-1">{premio.premio}</span>
                                                {premio.centro === miCentro && (
                                                    <span className="text-yellow-600 font-bold ml-2">🎉 ¡Tu centro!</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-semibold text-green-800">{premio.centro}</div>
                                            <div className="text-xs text-green-600">+{premio.puntosExtra} pts</div>
                                            <div className="text-xs text-green-500">🏅 Insignia asignada</div>
                                        </div>
                                    </div>
                                ))}
                                {premiosDelMes.length > 10 && (
                                    <div className="text-center text-sm text-green-600 mt-2">
                                        Y {premiosDelMes.length - 10} premios más de participación...
                                    </div>
                                )}
                            </div>
                        ) : (
                            <ul className="text-sm text-green-700 space-y-1">
                                <li>🥇 1er lugar: Trofeo digital especial</li>
                                <li>🥈 2do lugar: Certificado de honor</li>
                                <li>🥉 3er lugar: Mención especial</li>
                                <li>🏆 Top 10: Badge exclusivo</li>
                                <li>📚 Participación: Reconocimiento</li>
                            </ul>
                        )}
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-bold text-green-800 mb-2">✅ Características Implementadas</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                            <li>✅ Competencias por asignatura (selector activo)</li>
                            <li>✅ Gráficos de progreso (rankings visuales)</li>
                            <li>✅ Modo vacaciones (detección automática)</li>
                            <li>✅ Challenges especiales (eventos temáticos)</li>
                            <li>✅ Sistema anti-trampa (cursos automáticos)</li>
                            <li>✅ Rankings históricos (persistencia completa)</li>
                        </ul>
                    </div>
                </div>

                {/* Ranking Anual - Solo visible en modo anual */}
                {modoVisualizacion === 'anual' && centrosAnuales.length > 0 && (
                    <div className="mt-8 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                            🏆 Ranking Acumulativo Anual {fechaActual.getFullYear()}
                        </h3>
                        <div className="grid gap-4">
                            {centrosAnuales.slice(0, 10).map((centro, index) => (
                                <div key={centro.nombre} className={`flex items-center justify-between p-4 rounded-lg border-2 ${index === 0 ? 'bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-400' :
                                    index === 1 ? 'bg-gradient-to-r from-gray-100 to-slate-100 border-gray-400' :
                                        index === 2 ? 'bg-gradient-to-r from-orange-100 to-amber-100 border-orange-400' :
                                            'bg-white border-gray-200'
                                    }`}>
                                    <div className="flex items-center space-x-4">
                                        <span className={`text-2xl font-bold ${index === 0 ? 'text-yellow-600' :
                                            index === 1 ? 'text-gray-600' :
                                                index === 2 ? 'text-orange-600' :
                                                    'text-gray-800'
                                            }`}>
                                            #{index + 1}
                                        </span>
                                        {esImagen(obtenerLogoCentro(centro.nombre)) ? (
                                            <img
                                                src={`/${obtenerLogoCentro(centro.nombre)}`}
                                                alt={`Logo ${centro.nombre}`}
                                                className="w-12 h-12 object-contain rounded-lg border border-gray-300"
                                            />
                                        ) : (
                                            <span className="text-3xl">{obtenerLogoCentro(centro.nombre)}</span>
                                        )}
                                        <div>
                                            <h4 className="font-bold text-gray-800">{centro.nombre}</h4>
                                            <p className="text-sm text-gray-600">
                                                Puntuación acumulativa: <span className="font-semibold">{centro.puntajeTotal.toLocaleString()}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`text-3xl ${index === 0 ? '🥇' :
                                            index === 1 ? '🥈' :
                                                index === 2 ? '🥉' :
                                                    '🏅'
                                            }`}>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Historial de Ganadores Mensuales */}
                {historialGanadores.length > 0 && (
                    <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 shadow-lg">
                        <h3 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                            📅 Historial de Ganadores Mensuales
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {historialGanadores.slice(0, 12).map((ganador) => (
                                <div key={`${ganador.mes}-${ganador.año}`} className="bg-white rounded-lg border border-indigo-200 p-4 shadow-sm">
                                    <div className="text-center">
                                        <div className="flex justify-center mb-3">
                                            {esImagen(obtenerLogoCentro(ganador.centro || "")) ? (
                                                <img
                                                    src={`/${obtenerLogoCentro(ganador.centro || "")}`}
                                                    alt={`Logo ${ganador.centro || "Centro"}`}
                                                    className="w-16 h-16 object-contain rounded-lg border-2 border-yellow-400"
                                                />
                                            ) : (
                                                <span className="text-4xl">{obtenerLogoCentro(ganador.centro || "")}</span>
                                            )}
                                        </div>
                                        <h4 className="font-bold text-gray-800 mb-1">{ganador.centro || "Centro Desconocido"}</h4>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {ganador.mes} {ganador.año}
                                        </p>
                                        <p className="text-lg font-semibold text-indigo-600">
                                            {(ganador.puntaje || 0).toLocaleString()} pts
                                        </p>
                                        <div className="text-2xl mt-2">🏆</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {historialGanadores.length > 12 && (
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-600">
                                    Y {historialGanadores.length - 12} ganadores más en el historial...
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
