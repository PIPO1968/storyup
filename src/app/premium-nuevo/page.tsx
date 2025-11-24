"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Usuario {
    nick: string;
    tipo: string;
    escuela?: string;
    puntos?: number;
}

const PremiumPage: React.FC = () => {
    const router = useRouter();
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [isPremium, setIsPremium] = useState(false);
    const [loading, setLoading] = useState(true);
    const [procesandoPago, setProcesandoPago] = useState(false);

    // Cargar información del usuario
    useEffect(() => {
        if (typeof window !== "undefined") {
            const userData = localStorage.getItem('currentUser') || localStorage.getItem('user');
            if (userData) {
                const user = JSON.parse(userData);
                setUsuario(user);

                // Verificar si tiene premium activo
                const premiumInfo = localStorage.getItem(`premium_${user.nick}`);
                if (premiumInfo) {
                    const premium = JSON.parse(premiumInfo);
                    if (new Date(premium.expiracion) > new Date()) {
                        setIsPremium(true);
                    }
                }
            }
            setLoading(false);
        }
    }, []);

    const beneficiosPremium = {
        perfil: [
            {
                icon: "🎨",
                titulo: "Avatar Personalizado Premium",
                descripcion: "60+ avatares exclusivos únicos para Premium"
            },
            {
                icon: "👑",
                titulo: "Marco Dorado VIP",
                descripcion: "Marco especial dorado que destaca tu perfil"
            },
            {
                icon: "✨",
                titulo: "Efectos Visuales",
                descripcion: "Animaciones y efectos especiales en tu perfil"
            },
            {
                icon: "📊",
                titulo: "Estadísticas Premium Avanzadas",
                descripcion: "Página de estadísticas súper completa con gráficos profesionales"
            }
        ],
        competencia: [
            {
                icon: "🏆",
                titulo: "Liga Premium Exclusiva",
                descripcion: "Liga separada solo entre usuarios Premium (no afecta liga normal)"
            },
            {
                icon: "🎪",
                titulo: "Eventos Temáticos",
                descripcion: "Acceso a eventos especiales con temas divertidos"
            },
            {
                icon: "🥇",
                titulo: "Medallas Coleccionables",
                descripcion: "Medallas especiales coleccionables (sin ventajas)"
            },
            {
                icon: "🎯",
                titulo: "Torneos Premium",
                descripcion: "Torneos exclusivos entre usuarios Premium semanales"
            }
        ],
        aprendizaje: [
            {
                icon: "⚽",
                titulo: "Manager Online de Fútbol",
                descripcion: "Juego manager de fútbol online exclusivo para usuarios Premium"
            },
            {
                icon: "🔥",
                titulo: "Modo Racha Premium",
                descripcion: "Sistema de rachas mejorado con súper recompensas"
            },
            {
                icon: "🌟",
                titulo: "Pistas Ilimitadas",
                descripcion: "Sin límites en las pistas de los quiz y ejercicios"
            },
            {
                icon: "📖",
                titulo: "Historias Premium",
                descripcion: "Contenido educativo premium adicional exclusivo"
            }
        ]
    };

    const activarPremium = async () => {
        if (!usuario) return;

        setProcesandoPago(true);

        try {
            // Simular procesamiento de pago
            await new Promise(resolve => setTimeout(resolve, 3000));

            // Activar Premium por 1 año
            const fechaExpiracion = new Date();
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);

            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: "anual",
                precio: 12,
                beneficios: beneficiosPremium
            };

            localStorage.setItem(`premium_${usuario.nick}`, JSON.stringify(premiumData));
            setIsPremium(true);

            alert(`🎉 ¡Bienvenido a StoryUp Premium, ${usuario.nick}!\n\nTu experiencia de aprendizaje acaba de mejorar significativamente. ¡Disfruta de todos los beneficios Premium por un año completo!`);

        } catch (error) {
            console.error('Error al activar Premium:', error);
            alert('Error al procesar el pago. Por favor, inténtalo de nuevo.');
        } finally {
            setProcesandoPago(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-white text-xl">Cargando...</div>
            </div>
        );
    }

    if (!usuario) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-white text-xl">Debes iniciar sesión para acceder a Premium</div>
            </div>
        );
    }

    if (isPremium) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            👑 ¡Eres Premium! 👑
                        </h1>
                        <p className="text-xl text-purple-100">
                            ¡Disfruta de todos los beneficios exclusivos, {usuario.nick}!
                        </p>
                    </div>

                    {/* Acceso rápido a funciones Premium */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <button
                            onClick={() => router.push('/liga-premium')}
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                            <div className="text-4xl mb-2">🏆</div>
                            <div className="text-xl">Liga Premium Exclusiva</div>
                            <div className="text-sm opacity-90">Compite con otros Premium</div>
                        </button>

                        <button
                            onClick={() => router.push('/torneos-premium')}
                            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-6 px-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                            <div className="text-4xl mb-2">🎯</div>
                            <div className="text-xl">Torneos Premium</div>
                            <div className="text-sm opacity-90">Gana premios especiales</div>
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {/* Perfil Premium */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                🎨 Perfil Premium
                            </h3>
                            <div className="space-y-3">
                                {beneficiosPremium.perfil.map((beneficio, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="text-2xl">{beneficio.icon}</span>
                                        <div>
                                            <h4 className="text-white font-semibold">{beneficio.titulo}</h4>
                                            <p className="text-purple-100 text-sm">{beneficio.descripcion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Competencia Premium */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                🏆 Liga Premium Exclusiva
                            </h3>
                            <div className="space-y-3">
                                {beneficiosPremium.competencia.map((beneficio, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="text-2xl">{beneficio.icon}</span>
                                        <div>
                                            <h4 className="text-white font-semibold">{beneficio.titulo}</h4>
                                            <p className="text-purple-100 text-sm">{beneficio.descripcion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => window.location.href = '/perfil'}
                            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                        >
                            🚀 ¡Explorar Mi Perfil Premium!
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        ✨ StoryUp Premium ✨
                    </h1>
                    <p className="text-xl text-purple-100 mb-2">
                        ¡La mejor experiencia de aprendizaje por solo €12 al año!
                    </p>
                    <p className="text-lg text-purple-200">
                        Hola <span className="font-bold text-yellow-300">{usuario.nick}</span>,
                        ¿listo para sentirte como un verdadero ganador?
                    </p>
                </div>

                {/* Plan Premium Único */}
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-1 mb-8 shadow-2xl">
                    <div className="bg-white rounded-3xl p-8">
                        <div className="text-center mb-6">
                            <h2 className="text-4xl font-bold text-gray-800 mb-2">
                                👑 Plan Premium Anual
                            </h2>
                            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                                €12
                            </div>
                            <p className="text-xl text-gray-600">por todo el año</p>
                            <p className="text-sm text-gray-500">Solo €1 al mes</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            {/* Beneficios de Perfil */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-800 text-center border-b-2 border-orange-300 pb-2">
                                    🎨 Tu Identidad Premium
                                </h3>
                                {beneficiosPremium.perfil.map((beneficio, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-lg">{beneficio.icon}</span>
                                        <span className="text-sm text-gray-700">{beneficio.titulo}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Beneficios de Competencia */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-800 text-center border-b-2 border-orange-300 pb-2">
                                    🏆 Liga Premium Exclusiva
                                </h3>
                                {beneficiosPremium.competencia.map((beneficio, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-lg">{beneficio.icon}</span>
                                        <span className="text-sm text-gray-700">{beneficio.titulo}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => window.location.href = '/pago-real'}
                                disabled={procesandoPago}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
                            >
                                {procesandoPago ? (
                                    <>🔄 Procesando Pago...</>
                                ) : (
                                    <>📱 ¡Pagar €12 con Bizum!</>
                                )}
                            </button>
                            <p className="text-xs text-gray-500 mt-2">
                                Pago inmediato con Bizum • €0 comisiones
                            </p>
                            <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-300">
                                <p className="text-sm text-green-800 font-semibold">
                                    ✅ Premium es 100% justo: Solo mejoras visuales, diversión extra y Liga Premium separada.
                                    <br />Los usuarios Premium compiten entre sí sin afectar la liga normal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Por qué Premium es genial */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        🤔 ¿Por qué ser Premium?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-purple-100">
                        <div>
                            <span className="text-4xl">💫</span>
                            <h4 className="font-bold text-white">Destaca del Resto</h4>
                            <p className="text-sm">Tu perfil será único y llamará la atención de todos</p>
                        </div>
                        <div>
                            <span className="text-4xl">🎯</span>
                            <h4 className="font-bold text-white">Liga Premium Exclusiva</h4>
                            <p className="text-sm">Compite solo con otros Premium sin afectar la liga normal</p>
                        </div>
                        <div>
                            <span className="text-4xl">🎉</span>
                            <h4 className="font-bold text-white">Diversión Premium</h4>
                            <p className="text-sm">Contenido exclusivo que hace el aprendizaje súper divertido</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumPage;