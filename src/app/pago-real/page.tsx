"use client";
import React, { useState } from "react";

export default function PagoRealPage() {
    const [email, setEmail] = useState("");
    const [nick, setNick] = useState("");
    const [confirmacion, setConfirmacion] = useState("");
    const [procesando, setProcesando] = useState(false);

    const activarPremiumReal = async () => {
        if (!nick.trim() || !email.trim()) {
            alert("Por favor, completa todos los campos");
            return;
        }

        setProcesando(true);

        // Simular procesamiento
        await new Promise(resolve => setTimeout(resolve, 2000));

        // NUEVA LÓGICA: No activar Premium automáticamente
        // En su lugar, crear una solicitud pendiente de verificación
        const solicitudPago = {
            nick: nick.trim(),
            email: email.trim(),
            fechaSolicitud: new Date().toISOString(),
            estado: "pendiente", // pendiente, aprobado, rechazado
            tipo: "anual",
            precio: 12,
            metodoPago: "bizum",
            id: Date.now() + Math.random().toString(36).substr(2, 9) // ID único
        };

        // Guardar en lista de solicitudes pendientes
        const solicitudesPendientes = JSON.parse(localStorage.getItem('solicitudes_premium') || '[]');
        solicitudesPendientes.push(solicitudPago);
        localStorage.setItem('solicitudes_premium', JSON.stringify(solicitudesPendientes));

        // Simular envío de email al administrador (en producción usarías una API real)
        console.log("📧 Email enviado al administrador:", {
            asunto: `Nueva solicitud Premium - ${nick}`,
            mensaje: `Usuario: ${nick}\nEmail: ${email}\nFecha: ${new Date().toLocaleString()}\nMétodo: Bizum €12\nID Solicitud: ${solicitudPago.id}`
        });

        setConfirmacion(`Solicitud enviada para ${nick}. Te notificaremos por email cuando se verifique el pago.`);
        setProcesando(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
                        🎯 Suscripción Premium StoryUp
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        ¡Hazte Premium por solo €12 al año!
                    </p>

                    {!confirmacion ? (
                        <>
                            {/* Datos del usuario */}
                            <div className="mb-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Nick del usuario:
                                    </label>
                                    <input
                                        type="text"
                                        value={nick}
                                        onChange={(e) => setNick(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Ej: PIPO68"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Email (para confirmación):
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="tuemmail@ejemplo.com"
                                    />
                                </div>
                            </div>

                            {/* Método de pago único: Bizum */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                                    � Pago con Bizum
                                </h3>

                                <div className="max-w-md mx-auto">
                                    <div className="p-6 border-2 border-blue-500 bg-blue-50 rounded-xl">
                                        <div className="text-center">
                                            <div className="text-4xl mb-3">📱</div>
                                            <h4 className="font-bold text-xl text-blue-800 mb-2">Bizum</h4>
                                            <p className="text-sm text-blue-600 mb-4">Pago inmediato y seguro</p>

                                            <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                                                <div className="text-lg font-bold text-blue-800 mb-2">
                                                    💰 Importe: <span className="text-green-600">€12</span>
                                                </div>
                                                <div className="text-lg font-bold text-blue-800">
                                                    📞 Número Bizum:
                                                </div>
                                                <div className="text-2xl font-mono font-bold text-blue-900 mt-1">
                                                    699-103-043
                                                </div>
                                            </div>

                                            <div className="mt-4 p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                                                <p className="text-sm font-semibold text-yellow-800">
                                                    💡 Concepto obligatorio:
                                                </p>
                                                <p className="font-mono text-sm text-yellow-900 mt-1">
                                                    "StoryUp Premium - {nick}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Instrucciones Bizum */}
                            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                                <h4 className="font-bold text-blue-800 mb-3 text-center">📋 Pasos para pagar:</h4>
                                <div className="space-y-2 text-sm text-blue-700">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                                        <span>Abre tu app bancaria en el móvil</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                                        <span>Ve a <strong>Bizum → Enviar dinero</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                                        <span>Introduce el número: <strong>699-103-043</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                                        <span>Importe: <strong>€12</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
                                        <span>Concepto: <strong>"StoryUp Premium - {nick}"</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✓</span>
                                        <span>¡Confirma y haz clic abajo!</span>
                                    </div>
                                </div>
                            </div>

                            {/* Botón de confirmación */}
                            <div className="text-center">
                                <button
                                    onClick={activarPremiumReal}
                                    disabled={!nick.trim() || !email.trim() || procesando}
                                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {procesando ? "� Enviando solicitud..." : "📤 Ya envié el Bizum - Solicitar Premium"}
                                </button>

                                <p className="text-xs text-gray-500 mt-3">
                                    Al confirmar, certificas que has enviado €12 por Bizum.<br />
                                    <strong>Tu solicitud será verificada manualmente</strong> y recibirás confirmación por email.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <div className="text-6xl mb-4">📤</div>
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">
                                ¡Solicitud Enviada!
                            </h2>
                            <div className="p-4 bg-blue-100 rounded-lg mb-6">
                                <p className="text-blue-800">{confirmacion}</p>
                            </div>

                            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 mb-6">
                                <h3 className="font-bold text-yellow-800 mb-2">⏳ Próximos pasos:</h3>
                                <ol className="text-sm text-yellow-700 space-y-1">
                                    <li>1. Verificaremos tu pago por Bizum</li>
                                    <li>2. Te enviaremos confirmación por email</li>
                                    <li>3. Tu Premium se activará en 24-48h</li>
                                </ol>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => window.location.href = '/perfil'}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mr-3"
                                >
                                    👤 Ver Mi Perfil Premium
                                </button>

                                <button
                                    onClick={() => window.location.href = '/estadisticas'}
                                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                                >
                                    📊 Ver Estadísticas Premium
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Información adicional */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">� Sobre el pago con Bizum:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li>• <strong>Inmediato:</strong> Tu pago llega al instante</li>
                        <li>• <strong>Sin comisiones:</strong> Bizum es gratuito</li>
                        <li>• <strong>Seguro:</strong> Protegido por tu banco</li>
                        <li>• <strong>Verificación rápida:</strong> Activamos Premium en pocas horas</li>
                        <li>• <strong>Soporte:</strong> Cualquier duda, contáctanos</li>
                    </ul>

                    <div className="mt-3 p-2 bg-yellow-100 rounded border border-yellow-300">
                        <p className="text-xs text-yellow-800 font-semibold">
                            💡 Importante: No olvides poner en el concepto "StoryUp Premium - {nick || 'TuNick'}"
                            para identificar tu pago correctamente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}