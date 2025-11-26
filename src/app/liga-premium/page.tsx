"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersAPI, User } from "../../utils/users";

interface UsuarioPremium {
    nick: string;
    avatar?: string;
    puntos: number;
    historiasCreadas: number;
    preguntasAcertadas: number;
    amigos: number;
    medallas: number;
}

const LigaPremiumPage: React.FC = () => {
    const router = useRouter();
    const [usuarioActual, setUsuarioActual] = useState<User | null>(null);
    const [isPremium, setIsPremium] = useState(false);
    const [loading, setLoading] = useState(true);
    const [usuariosPremium, setUsuariosPremium] = useState<UsuarioPremium[]>([]);
    const [mensaje, setMensaje] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const loadData = async () => {
            if (typeof window !== "undefined") {
                const userData = sessionStorage.getItem('user');
                if (userData) {
                    const user = JSON.parse(userData);
                    setUsuarioActual(user);

                    // Verificar si es premium
                    if (user.premium && user.premiumExpiracion && new Date(user.premiumExpiracion as string) > new Date()) {
                        setIsPremium(true);
                        await cargarLigaPremium();
                    } else {
                        setMensaje("Debes tener una suscripción Premium activa para acceder a la Liga Premium.");
                        alert('Tu suscripción Premium ha expirado. Renueva para acceder a la Liga Premium.');
                        router.push('/premium-nuevo');
                    }
                } else {
                    setMensaje("Debes iniciar sesión para acceder a la Liga Premium.");
                    alert('Esta función es exclusiva para usuarios Premium.');
                    router.push('/premium-nuevo');
                }
            } else {
                router.push('/');
            }
            setLoading(false);
        };
        loadData();
    }, [mounted]);

    const cargarLigaPremium = async () => {
        try {
            const users = await UsersAPI.getAllUsers();
            const premiumUsers: UsuarioPremium[] = [];

            users.forEach((user: User) => {
                if (user.premium && user.premiumExpiracion && new Date(user.premiumExpiracion as string) > new Date()) {
                    // Calcular puntos basados en actividades premium
                    const puntos = calcularPuntosUsuario(user);
                    premiumUsers.push({
                        nick: user.nick,
                        avatar: user.avatar,
                        puntos: puntos,
                        historiasCreadas: (user.historiasCreadas as number) || 0,
                        preguntasAcertadas: (user.preguntasAcertadas as number) || 0,
                        amigos: Array.isArray(user.amigos) ? user.amigos.length : 0,
                        medallas: Array.isArray(user.medallas) ? user.medallas.length : 0
                    });
                }
            });

            // Ordenar por puntos descendente
            premiumUsers.sort((a, b) => b.puntos - a.puntos);
            setUsuariosPremium(premiumUsers);
        } catch (error) {
            console.error('Error al cargar liga premium:', error);
        }
    };

    const calcularPuntosUsuario = (user: User): number => {
        let puntos = 0;

        // Puntos por historias creadas (10 puntos cada una)
        puntos += ((user.historiasCreadas as number) || 0) * 10;

        // Puntos por preguntas acertadas (5 puntos cada una)
        puntos += ((user.preguntasAcertadas as number) || 0) * 5;

        // Puntos por amigos (20 puntos cada amigo)
        const amigosCount = Array.isArray(user.amigos) ? user.amigos.length : 0;
        puntos += amigosCount * 20;

        // Puntos por medallas (50 puntos cada medalla)
        const medallasCount = Array.isArray(user.medallas) ? user.medallas.length : 0;
        puntos += medallasCount * 50;

        // Puntos por participación en competiciones premium
        puntos += (user.competicionesPremium as { puntuacionTotal?: number })?.puntuacionTotal || 0;
        return puntos;
    };

    if (!mounted) {
        return null;
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center">
                <div className="text-white text-xl">Cargando Liga Premium...</div>
            </div>
        );
    }

    if (!isPremium) {
        return null; // Ya redirigió
    }

    const posicionUsuario = usuarioActual ? usuariosPremium.findIndex(u => u.nick === usuarioActual.nick) + 1 : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">🏆 Liga Premium Exclusiva</h1>
                    <p className="text-yellow-100 text-lg">Compite con los mejores usuarios Premium</p>
                </div>

                {/* Tu posición */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Tu Posición</h2>
                    <div className="text-6xl font-bold text-yellow-300">#{posicionUsuario}</div>
                    <div className="text-yellow-100 mt-2">
                        {usuariosPremium.find(u => u.nick === usuarioActual?.nick)?.puntos || 0} puntos
                    </div>
                </div>

                {/* Tabla de clasificación */}
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4">
                        <h3 className="text-xl font-bold text-white text-center">🏅 Clasificación Premium</h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntos</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Historias</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aciertos</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amigos</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medallas</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {usuariosPremium.slice(0, 20).map((usuario, index) => (
                                    <tr key={usuario.nick} className={usuario.nick === usuarioActual?.nick ? 'bg-yellow-50' : ''}>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`text-lg font-bold ${index === 0 ? 'text-yellow-500' :
                                                    index === 1 ? 'text-gray-400' :
                                                        index === 2 ? 'text-orange-600' :
                                                            'text-gray-600'
                                                    }`}>
                                                    #{index + 1}
                                                </div>
                                                {index < 3 && (
                                                    <span className="ml-2">
                                                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={usuario.avatar || '/avatars/simple1.png'}
                                                        alt={usuario.nick}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {usuario.nick}
                                                        {usuario.nick === usuarioActual?.nick && (
                                                            <span className="ml-2 text-yellow-500">(Tú)</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                                            {usuario.puntos.toLocaleString()}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {usuario.historiasCreadas}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {usuario.preguntasAcertadas}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {usuario.amigos}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {usuario.medallas}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cómo ganar puntos */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">💡 Cómo ganar puntos en la Liga Premium</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-100">
                        <div>
                            <strong>📖 Historias creadas:</strong> 10 puntos cada una<br />
                            <strong>✅ Preguntas acertadas:</strong> 5 puntos cada una<br />
                            <strong>👥 Amigos:</strong> 20 puntos cada amigo<br />
                        </div>
                        <div>
                            <strong>🏅 Medallas:</strong> 50 puntos cada medalla<br />
                            <strong>🎯 Torneos Premium:</strong> Puntuación total de torneos<br />
                        </div>
                    </div>
                </div>

                {/* Botón volver */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => router.push('/premium-nuevo')}
                        className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-bold hover:bg-yellow-50 transition-colors"
                    >
                        ← Volver a Premium
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LigaPremiumPage;