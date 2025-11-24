"use client";
import React, { useState, useEffect } from "react";

// Interfaces de tipos
interface SolicitudPago {
    id: string;
    nick: string;
    email: string;
    fechaSolicitud: string;
    estado: 'pendiente' | 'aprobado' | 'rechazado';
    tipo: string;
    precio: number;
    metodoPago: string;
    fechaAprobacion?: string;
    fechaRechazo?: string;
    motivo?: string;
}

interface Usuario {
    nick: string;
    email?: string;
    tipo?: string;
}

export default function AdminPremium() {
    const [mensaje, setMensaje] = useState<string>("");
    const [solicitudesPendientes, setSolicitudesPendientes] = useState<SolicitudPago[]>([]);
    const [mostrarSolicitudes, setMostrarSolicitudes] = useState<boolean>(false);
    const [usuarioLogueado, setUsuarioLogueado] = useState<Usuario | null>(null);
    const [accesoDenegado, setAccesoDenegado] = useState<boolean>(false);
    const [nick, setNick] = useState<string>("");

    // Lista de administradores autorizados - Solo PIPO68
    const ADMINS_AUTORIZADOS = ['PIPO68'];

    useEffect(() => {
        // Verificar si hay usuario logueado
        if (typeof window !== 'undefined') {
            const usuarioData = localStorage.getItem('user'); // Cambiado de 'usuario' a 'user'
            if (usuarioData) {
                const usuario = JSON.parse(usuarioData);
                setUsuarioLogueado(usuario);

                // Cargar usuarios
                const usersData = localStorage.getItem('users');
                if (usersData) {
                    try {
                        const users = JSON.parse(usersData);
                        console.log('Usuarios cargados:', users);
                        // Ya no necesitamos almacenar usuarios en el estado
                    } catch (error) {
                        console.error('Error al parsear usuarios:', error);
                    }
                } else {
                    console.log('No se encontraron usuarios en localStorage');
                }

                // Solo denegar acceso si no hay usuario logueado
                // Los usuarios logueados (docentes o PIPO68) pueden acceder
            } else {
                setAccesoDenegado(true);
            }
        }
    }, []);

    // Si no tiene acceso, mostrar página de error
    if (accesoDenegado) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center p-8">
                <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center">
                    <div className="text-6xl mb-4">🚫</div>
                    <h1 className="text-2xl font-bold text-red-600 mb-4">
                        Acceso Denegado
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Acceso restringido a esta página de administración.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
                    >
                        Volver al Inicio
                    </button>

                    <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left">
                        <p className="text-xs text-gray-600">
                            <strong>Acceso autorizado para usuarios registrados:</strong><br />
                            • Administrador: <strong>PIPO68</strong><br />
                            • Docentes: Usuarios con tipo "docente"<br />
                            URL: <code className="bg-gray-200 px-1 rounded">tudominio.com/admin-premium</code>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Cargar solicitudes pendientes
    const cargarSolicitudes = (): void => {
        try {
            const solicitudes: SolicitudPago[] = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
            setSolicitudesPendientes(solicitudes.filter((s: SolicitudPago) => s.estado === 'pendiente'));
            setMostrarSolicitudes(true);
        } catch (error) {
            console.error('Error al cargar solicitudes:', error);
            setMensaje("❌ Error al cargar solicitudes de pago");
        }
    };

    // Aprobar solicitud de pago (activar Premium)
    const aprobarSolicitud = (solicitud: SolicitudPago): void => {
        try {
            // Activar Premium para el usuario
            const fechaExpiracion = new Date();
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);

            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: solicitud.tipo,
                precio: solicitud.precio,
                metodoPago: solicitud.metodoPago,
                activadoPorAdmin: true,
                solicitudId: solicitud.id,
                emailPago: solicitud.email
            };

            localStorage.setItem(`premium_${solicitud.nick}`, JSON.stringify(premiumData));

            // Marcar solicitud como aprobada
            const todasSolicitudes: SolicitudPago[] = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
            const solicitudIndex = todasSolicitudes.findIndex((s: SolicitudPago) => s.id === solicitud.id);
            if (solicitudIndex !== -1) {
                todasSolicitudes[solicitudIndex].estado = 'aprobado';
                todasSolicitudes[solicitudIndex].fechaAprobacion = new Date().toISOString();
                localStorage.setItem('solicitudes_premium', JSON.stringify(todasSolicitudes));
            }

            setMensaje(`🎉 Premium activado para ${solicitud.nick} tras verificar pago de €${solicitud.precio}`);
            cargarSolicitudes(); // Recargar lista

            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', { detail: { nick: solicitud.nick, action: 'add' } }));

        } catch (error) {
            console.error('Error al aprobar solicitud:', error);
            setMensaje("❌ Error al aprobar la solicitud");
        }
    };

    // Rechazar solicitud
    const rechazarSolicitud = (solicitud: SolicitudPago, motivo: string = 'Pago no verificado'): void => {
        try {
            const todasSolicitudes: SolicitudPago[] = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
            const solicitudIndex = todasSolicitudes.findIndex((s: SolicitudPago) => s.id === solicitud.id);
            if (solicitudIndex !== -1) {
                todasSolicitudes[solicitudIndex].estado = 'rechazado';
                todasSolicitudes[solicitudIndex].fechaRechazo = new Date().toISOString();
                todasSolicitudes[solicitudIndex].motivo = motivo;
                localStorage.setItem('solicitudes_premium', JSON.stringify(todasSolicitudes));
            }

            setMensaje(`❌ Solicitud rechazada para ${solicitud.nick}: ${motivo}`);
            cargarSolicitudes(); // Recargar lista

        } catch (error) {
            console.error('Error al rechazar solicitud:', error);
            setMensaje("❌ Error al rechazar la solicitud");
        }
    };

    // Hacer Premium
    const hacerPremium = (): void => {
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }

        try {
            const fechaExpiracion = new Date();
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);

            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: "anual",
                precio: 12,
                activadoPorAdmin: true,
                beneficios: {
                    perfil: "Avatar personalizado, marco dorado, efectos visuales",
                    competencia: "Liga Premium exclusiva, eventos temáticos",
                    aprendizaje: "Minijuegos Premium, pistas ilimitadas, historias Premium"
                }
            };

            localStorage.setItem(`premium_${usuarioSeleccionado}`, JSON.stringify(premiumData));
            setMensaje(`🎉 ¡Premium activado para ${usuarioSeleccionado} hasta ${fechaExpiracion.toLocaleDateString()}!`);

            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', { detail: { nick: usuarioSeleccionado, action: 'add' } }));

        } catch (error) {
            console.error('Error al activar premium:', error);
            setMensaje("❌ Error al activar Premium");
        }
    };

    // Anular Premium
    const anularPremium = (): void => {
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }

        try {
            localStorage.removeItem(`premium_${nick}`);
            setMensaje(`🗑️ Premium anulado para ${nick}`);

            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', { detail: { nick, action: 'remove' } }));

        } catch (error) {
            console.error('Error al anular premium:', error);
            setMensaje("❌ Error al anular Premium");
        }
    };

    const activarPremium = (): void => {
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }

        try {
            // Verificar si ya tiene premium activo
            const premiumExistente = localStorage.getItem(`premium_${nick}`);
            let fechaExpiracion = new Date();
            let tiempoRestante = 0;

            if (premiumExistente) {
                const premiumData = JSON.parse(premiumExistente);
                const fechaExpiracionExistente = new Date(premiumData.expiracion);
                const ahora = new Date();

                if (fechaExpiracionExistente > ahora) {
                    // Calcular días restantes de premium existente
                    tiempoRestante = Math.ceil((fechaExpiracionExistente.getTime() - ahora.getTime()) / (1000 * 60 * 60 * 24));
                }
            }

            // Establecer nueva fecha de expiración: 1 año + tiempo restante
            fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
            fechaExpiracion.setDate(fechaExpiracion.getDate() + tiempoRestante);

            const premiumData = {
                activo: true,
                fechaInicio: new Date().toISOString(),
                expiracion: fechaExpiracion.toISOString(),
                tipo: "anual",
                precio: 12,
                activadoPorAdmin: true,
                tiempoRestanteExtendido: tiempoRestante > 0,
                beneficios: {
                    perfil: "Avatar personalizado, marco dorado, efectos visuales",
                    competencia: "Liga Premium exclusiva, eventos temáticos",
                    aprendizaje: "Minijuegos Premium, pistas ilimitadas, historias Premium"
                }
            };

            localStorage.setItem(`premium_${nick}`, JSON.stringify(premiumData));

            const mensajeExtendido = tiempoRestante > 0
                ? `\n\n⏰ Se ha añadido 1 año al tiempo restante de tu premium anterior (${tiempoRestante} días).`
                : '';

            setMensaje(`🎉 ¡Premium activado exitosamente para ${nick}!\n\nVálido hasta: ${fechaExpiracion.toLocaleDateString()}\nBeneficios: Liga Premium Exclusiva, Estadísticas Avanzadas, Avatares Especiales y más.${mensajeExtendido}`);

            // Disparar eventos para actualizar componentes
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new CustomEvent('premiumUpdate', { detail: { nick, action: 'add' } }));

        } catch (error) {
            console.error('Error al activar Premium:', error);
            setMensaje("❌ Error al activar Premium. Inténtalo de nuevo.");
        }
    };

    const verificarPremium = (): void => {
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }

        try {
            const premiumInfo = localStorage.getItem(`premium_${nick}`);
            if (premiumInfo) {
                const premium = JSON.parse(premiumInfo);
                if (new Date(premium.expiracion) > new Date()) {
                    setMensaje(`✅ ${nick} tiene Premium ACTIVO hasta: ${new Date(premium.expiracion).toLocaleDateString()}`);
                } else {
                    setMensaje(`❌ ${nick} tenía Premium pero ha EXPIRADO el: ${new Date(premium.expiracion).toLocaleDateString()}`);
                }
            } else {
                setMensaje(`❌ ${nick} NO tiene Premium activado`);
            }
        } catch (error) {
            setMensaje("❌ Error al verificar Premium");
        }
    };

    const desactivarPremium = (): void => {
        if (!nick.trim()) {
            setMensaje("❌ Ingresa un nick válido");
            return;
        }

        try {
            localStorage.removeItem(`premium_${nick}`);
            setMensaje(`🗑️ Premium desactivado para ${nick}`);
        } catch (error) {
            setMensaje("❌ Error al desactivar Premium");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        🔧 Admin Premium
                    </h1>

                    <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Nick del usuario:
                        </label>
                        <input
                            type="text"
                            value={nick}
                            onChange={(e) => setNick(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ej: PIPO68"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <button
                            onClick={activarPremium}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                            ✅ Activar Premium
                        </button>

                        <button
                            onClick={anularPremium}
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                            🗑️ Anular Premium
                        </button>

                        <button
                            onClick={verificarPremium}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                            🔍 Verificar Estado
                        </button>

                        <button
                            onClick={cargarSolicitudes}
                            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                            📋 Ver Solicitudes
                        </button>
                    </div>

                    {mensaje && (
                        <div className={`p-4 rounded-lg ${mensaje.includes('✅') || mensaje.includes('🎉')
                            ? 'bg-green-100 border border-green-300 text-green-800'
                            : mensaje.includes('❌')
                                ? 'bg-red-100 border border-red-300 text-red-800'
                                : 'bg-blue-100 border border-blue-300 text-blue-800'
                            }`}>
                            <pre className="whitespace-pre-wrap font-semibold">{mensaje}</pre>
                        </div>
                    )}

                    {/* Sección de solicitudes pendientes */}
                    {mostrarSolicitudes && (
                        <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                📋 Solicitudes de Pago Pendientes
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                    {solicitudesPendientes.length}
                                </span>
                            </h3>

                            {solicitudesPendientes.length === 0 ? (
                                <p className="text-gray-500 text-center py-8">
                                    ✅ No hay solicitudes pendientes
                                </p>
                            ) : (
                                <div className="space-y-4">
                                    {solicitudesPendientes.map((solicitud) => (
                                        <div key={solicitud.id} className="bg-white border border-gray-200 rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg text-gray-800">{solicitud.nick}</h4>
                                                    <p className="text-sm text-gray-600">{solicitud.email}</p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        📅 {new Date(solicitud.fechaSolicitud).toLocaleString()}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                                        {solicitud.metodoPago.toUpperCase()} €{solicitud.precio}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => aprobarSolicitud(solicitud)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
                                                >
                                                    ✅ Aprobar y Activar Premium
                                                </button>
                                                <button
                                                    onClick={() => rechazarSolicitud(solicitud)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
                                                >
                                                    ❌ Rechazar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h3 className="font-bold text-yellow-800 mb-2">📋 Instrucciones:</h3>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li><strong>Activar Premium:</strong> Activa Premium por 1 año para cualquier usuario</li>
                            <li><strong>Anular Premium:</strong> Remueve el estado Premium de un usuario</li>
                            <li><strong>Verificar Estado:</strong> Comprueba si un usuario ya tiene Premium activo</li>
                            <li><strong>Ver Solicitudes:</strong> Muestra pagos pendientes de verificación</li>
                            <li><strong>Aprobar/Rechazar:</strong> Gestiona las solicitudes tras verificar Bizum</li>
                        </ul>

                        <div className="mt-4 p-3 bg-orange-100 border border-orange-300 rounded">
                            <p className="text-sm text-orange-800">
                                <strong>🔒 Proceso de seguridad:</strong> Ahora los usuarios NO pueden hacerse Premium automáticamente.
                                Deben solicitar y esperar verificación manual del pago.
                            </p>
                        </div>

                        <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded">
                            <p className="text-sm text-blue-800">
                                <strong>🌐 Acceso en servidor:</strong><br />
                                • URL: <code className="bg-blue-200 px-1 rounded">tudominio.com/admin-premium</code><br />
                                • Protegido por nick de administrador<br />
                                • Solo usuario autorizado: <strong>PIPO68</strong>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => window.location.href = '/estadisticas'}
                            className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                        >
                            📊 Ver Estadísticas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}