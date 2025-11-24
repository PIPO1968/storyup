"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Torneo {
    id: string;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    categoria: string;
    premio: string;
    maxParticipantes: number;
    participantes: string[];
    estado: 'registro' | 'activo' | 'finalizado';
    ganador?: string;
    resultados?: any[];
}

const TorneosPremiumPage: React.FC = () => {
    const router = useRouter();
    const [usuarioActual, setUsuarioActual] = useState<any>(null);
    const [isPremium, setIsPremium] = useState(false);
    const [loading, setLoading] = useState(true);
    const [torneos, setTorneos] = useState<Torneo[]>([]);
    const [torneoActivo, setTorneoActivo] = useState<Torneo | null>(null);
    const [cursoUsuario, setCursoUsuario] = useState<number>(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userData = localStorage.getItem('currentUser') || localStorage.getItem('user');
            if (userData) {
                const user = JSON.parse(userData);
                setUsuarioActual(user);

                // Determinar curso del usuario
                let cursoDetectado = 1; // Por defecto 1º Primaria

                // Si es docente, usar 6º curso por defecto
                const esDocente = user.esProfesor || user.tipo === "docente" || user.tipo === "Docente";

                if (esDocente) {
                    cursoDetectado = 6;
                } else if (user.curso) {
                    // Para estudiantes, usar su curso real
                    if (typeof user.curso === "string") {
                        const match = user.curso.match(/(\d)/);
                        if (match) {
                            const numero = parseInt(match[1]);
                            cursoDetectado = numero;
                        }
                    } else if (typeof user.curso === "number") {
                        cursoDetectado = user.curso;
                    }
                }

                // Asegurar que el curso esté entre 1 y 6
                if (cursoDetectado < 1) cursoDetectado = 1;
                if (cursoDetectado > 6) cursoDetectado = 6;

                setCursoUsuario(cursoDetectado);

                // Verificar si es premium
                const premiumInfo = localStorage.getItem(`premium_${user.nick}`);
                if (premiumInfo) {
                    const premium = JSON.parse(premiumInfo);
                    if (new Date(premium.expiracion) > new Date()) {
                        setIsPremium(true);
                        cargarTorneos();
                    } else {
                        alert('Tu suscripción Premium ha expirado. Renueva para acceder a los Torneos Premium.');
                        router.push('/premium-nuevo');
                    }
                } else {
                    alert('Los Torneos Premium son exclusivos para usuarios Premium.');
                    router.push('/premium-nuevo');
                }
            } else {
                router.push('/');
            }
            setLoading(false);
        }
    }, []);

    const esTorneoDisponibleParaUsuario = (torneoId: string) => {
        // Extraer el número de curso del ID del torneo (torneo-mensual-1primaria -> 1)
        const match = torneoId.match(/torneo-mensual-(\d)primaria/);
        if (match) {
            const cursoTorneo = parseInt(match[1]);
            return cursoTorneo === cursoUsuario;
        }
        return false;
    };

    const cargarTorneos = () => {
        // FORZAR recreación de torneos nuevos - limpiar datos antiguos
        localStorage.removeItem('torneos_premium');
        localStorage.removeItem('torneos_premium_last_reset');

        // Crear torneos mensuales por defecto
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const torneosDefault: Torneo[] = [
            {
                id: 'torneo-mensual-1primaria',
                nombre: 'Torneo Mensual 1º Primaria',
                descripcion: 'Compite en el torneo mensual de 1º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-2primaria',
                nombre: 'Torneo Mensual 2º Primaria',
                descripcion: 'Compite en el torneo mensual de 2º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-3primaria',
                nombre: 'Torneo Mensual 3º Primaria',
                descripcion: 'Compite en el torneo mensual de 3º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-4primaria',
                nombre: 'Torneo Mensual 4º Primaria',
                descripcion: 'Compite en el torneo mensual de 4º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-5primaria',
                nombre: 'Torneo Mensual 5º Primaria',
                descripcion: 'Compite en el torneo mensual de 5º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            },
            {
                id: 'torneo-mensual-6primaria',
                nombre: 'Torneo Mensual 6º Primaria',
                descripcion: 'Compite en el torneo mensual de 6º Primaria. 25 preguntas de asignaturas generales.',
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date(currentYear, currentMonth + 1, 0).toISOString(),
                categoria: 'general',
                premio: 'Medalla Especial + 200 puntos Liga Premium',
                maxParticipantes: 16,
                participantes: [],
                estado: 'registro'
            }
        ];
        setTorneos(torneosDefault);
        localStorage.setItem('torneos_premium', JSON.stringify(torneosDefault));
        localStorage.setItem('torneos_premium_last_reset', new Date().toISOString());
    };

    const registrarseTorneo = (torneoId: string) => {
        if (!usuarioActual) return;

        const torneosActualizados = torneos.map(torneo => {
            if (torneo.id === torneoId) {
                if (torneo.participantes.includes(usuarioActual.nick)) {
                    alert('Ya estás registrado en este torneo.');
                    return torneo;
                }
                if (torneo.participantes.length >= torneo.maxParticipantes) {
                    alert('Este torneo ya está completo.');
                    return torneo;
                }
                return {
                    ...torneo,
                    participantes: [...torneo.participantes, usuarioActual.nick]
                };
            }
            return torneo;
        });

        setTorneos(torneosActualizados);
        localStorage.setItem('torneos_premium', JSON.stringify(torneosActualizados));
        alert('¡Te has registrado exitosamente en el torneo!');
    };

    const iniciarTorneo = (torneo: Torneo) => {
        // Guardar información del torneo activo en localStorage
        localStorage.setItem('torneo_activo_premium', JSON.stringify({
            torneoId: torneo.id,
            curso: torneo.id.split('-')[2], // Extraer el curso del ID (1primaria, 2primaria, etc.)
            startTime: new Date().toISOString()
        }));

        // Redirigir al modo torneo en Aprende con Pipo
        router.push('/aprende-con-pipo?modo=torneo');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-white text-xl">Cargando Torneos Premium...</div>
            </div>
        );
    }

    if (!isPremium) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">🎯 Torneos Premium</h1>
                    <p className="text-purple-100 text-lg">Compite en torneos exclusivos y gana premios especiales</p>
                </div>

                {torneoActivo ? (
                    /* Pantalla de torneo activo */
                    <div className="bg-white rounded-lg shadow-xl p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">{torneoActivo.nombre}</h2>
                        <div className="text-6xl mb-4">🎯</div>
                        <p className="text-gray-600 mb-6">Torneo en progreso...</p>
                        <div className="animate-spin text-4xl">⏳</div>
                        <p className="text-sm text-gray-500 mt-4">Calculando resultados...</p>
                    </div>
                ) : (
                    /* Lista de torneos */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {torneos.map((torneo) => (
                            <div key={torneo.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                                    <h3 className="text-lg font-bold text-white">{torneo.nombre}</h3>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{torneo.descripcion}</p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Categoría:</span>
                                            <span className="font-semibold text-purple-600">{torneo.categoria}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Participantes:</span>
                                            <span className="font-semibold">{torneo.participantes.length}/{torneo.maxParticipantes}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Estado:</span>
                                            <span className={`font-semibold ${torneo.estado === 'registro' ? 'text-green-600' :
                                                torneo.estado === 'finalizado' ? 'text-gray-600' : 'text-blue-600'
                                                }`}>
                                                {torneo.estado === 'registro' ? 'Abierto' :
                                                    torneo.estado === 'finalizado' ? 'Finalizado' : 'Disponible'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-3 rounded mb-4">
                                        <p className="text-sm font-semibold text-yellow-800">🏆 Premio:</p>
                                        <p className="text-sm text-yellow-700">{torneo.premio}</p>
                                    </div>

                                    {torneo.estado === 'finalizado' && torneo.ganador && (
                                        <div className="bg-green-50 p-3 rounded mb-4">
                                            <p className="text-sm font-semibold text-green-800">🥇 Ganador:</p>
                                            <p className="text-sm text-green-700">{torneo.ganador}</p>
                                            {torneo.resultados && torneo.resultados.length > 0 && (
                                                <div className="mt-2">
                                                    <p className="text-xs text-green-600">Top 3:</p>
                                                    {torneo.resultados.slice(0, 3).map((resultado: any, idx: number) => (
                                                        <p key={idx} className="text-xs">
                                                            {idx + 1}. {resultado.nick} - {resultado.aciertos}/25 ({resultado.puntuacion}pts)
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex gap-2">
                                        {torneo.estado === 'registro' && !torneo.participantes.includes(usuarioActual.nick) && esTorneoDisponibleParaUsuario(torneo.id) && (
                                            <button
                                                onClick={() => registrarseTorneo(torneo.id)}
                                                disabled={torneo.participantes.length >= torneo.maxParticipantes}
                                                className="flex-1 bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 disabled:bg-gray-400 transition-colors"
                                            >
                                                Registrarse
                                            </button>
                                        )}

                                        {torneo.estado === 'registro' && !torneo.participantes.includes(usuarioActual.nick) && !esTorneoDisponibleParaUsuario(torneo.id) && (
                                            <span className="flex-1 text-center bg-gray-100 text-gray-600 px-4 py-2 rounded font-semibold">
                                                Solo para {torneo.nombre.split(' ')[2]} {torneo.nombre.split(' ')[3]}
                                            </span>
                                        )}

                                        {torneo.participantes.includes(usuarioActual.nick) && torneo.estado === 'registro' && (
                                            <span className="flex-1 text-center bg-green-100 text-green-800 px-4 py-2 rounded font-semibold">
                                                ✓ Registrado
                                            </span>
                                        )}

                                        {torneo.participantes.includes(usuarioActual.nick) && (
                                            <button
                                                onClick={() => iniciarTorneo(torneo)}
                                                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-colors"
                                            >
                                                Comenzar Torneo
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Estadísticas personales */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">📊 Tus Estadísticas en Torneos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white/20 rounded p-4">
                            <div className="text-2xl font-bold text-white">
                                {JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"victorias": 0}').victorias}
                            </div>
                            <div className="text-purple-100">Victorias</div>
                        </div>
                        <div className="bg-white/20 rounded p-4">
                            <div className="text-2xl font-bold text-white">
                                {JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"participaciones": 0}').participaciones}
                            </div>
                            <div className="text-purple-100">Participaciones</div>
                        </div>
                        <div className="bg-white/20 rounded p-4">
                            <div className="text-2xl font-bold text-white">
                                {(() => {
                                    const stats = JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"victorias": 0, "participaciones": 0}');
                                    return stats.participaciones > 0 ? Math.round((stats.victorias / stats.participaciones) * 100) : 0;
                                })()}%
                            </div>
                            <div className="text-purple-100">Tasa de Victoria</div>
                        </div>
                        <div className="bg-white/20 rounded p-4">
                            <div className="text-2xl font-bold text-white">
                                {JSON.parse(localStorage.getItem(`competiciones_premium_${usuarioActual.nick}`) || '{"puntuacionTotal": 0}').puntuacionTotal}
                            </div>
                            <div className="text-purple-100">Puntuación Total</div>
                        </div>
                    </div>
                </div>

                {/* Botón volver */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => router.push('/premium-nuevo')}
                        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
                    >
                        ← Volver a Premium
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TorneosPremiumPage;