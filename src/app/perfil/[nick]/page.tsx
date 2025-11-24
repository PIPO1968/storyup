
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { renderNick } from "@/utils/renderNick";
import BotonesAmistad from "@/components/BotonesAmistad";

export default function PerfilPorNick() {
    const params = useParams();
    const nick = params?.nick as string;
    const [perfil, setPerfil] = useState<any>(null); // El perfil mostrado
    const [user, setUser] = useState<any>(null); // El usuario logueado
    const [esAmigo, setEsAmigo] = useState(false);
    const [solicitudPendiente, setSolicitudPendiente] = useState(false);

    const isPerfilPremium = perfil ? (() => {
        const premiumData = localStorage.getItem(`premium_${perfil.nick}`);
        if (premiumData) {
            try {
                const data = JSON.parse(premiumData);
                return data.activo === true;
            } catch {
                return false;
            }
        }
        return false;
    })() : false;

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            const usersStr = localStorage.getItem("users");
            if (!userStr || !usersStr) return;
            const userObj = JSON.parse(userStr);
            setUser(userObj);
            const usersArr = JSON.parse(usersStr);
            const perfilObj = usersArr.find((u: any) => u.nick === nick);
            if (!perfilObj) {
                setPerfil(null);
                return;
            }
            setPerfil(perfilObj);
            // Amistad
            const amigosStr = localStorage.getItem(`amigos_${userObj.nick}`);
            let amigos = [];
            if (amigosStr) {
                try { amigos = JSON.parse(amigosStr); } catch { }
            }
            setEsAmigo(amigos.some((a: any) => a.nick === perfilObj.nick));
            // Verificar si hay solicitud pendiente
            const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilObj.nick}`);
            let solicitudes = [];
            if (solicitudesGuardadas) {
                try { solicitudes = JSON.parse(solicitudesGuardadas); } catch { }
            }
            setSolicitudPendiente(solicitudes.some((s: any) => s.origen === userObj.nick && s.estado === "pendiente"));
            // Likes y comentarios (puedes mantener tu lógica aquí)
        }
    }, [nick]);

    if (!perfil) {
        return (
            <div className="min-h-screen bg-red-100 p-8 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4 text-center text-red-700">Usuario no encontrado</h1>
                <p className="text-center">El perfil solicitado no existe o es anónimo.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-green-100 p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Información Personal</h1>

            {/* Indicador Premium Animado */}
            {isPerfilPremium && (
                <div className="flex justify-center mt-2 mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg shadow-yellow-500/50 animate-pulse flex items-center gap-2">
                        <span className="animate-bounce">👑</span>
                        <span>PREMIUM ACTIVO</span>
                        <span className="animate-bounce">✨</span>
                    </div>
                </div>
            )}

            <div className={`max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col items-center relative transition-all duration-500 ${isPerfilPremium
                    ? 'border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 animate-pulse overflow-hidden'
                    : ''
                }`}>
                {/* Efecto de partículas para premium */}
                {isPerfilPremium && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute top-4 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
                        <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-80"></div>
                    </div>
                )}

                {/* Botones de amistad globales */}
                <BotonesAmistad perfilNick={perfil.nick} />

                <div className="flex justify-between items-center mb-4 relative">
                    <h3 className={`text-xl font-bold text-center w-full transition-all duration-300 ${isPerfilPremium ? 'text-yellow-600' : ''
                        }`}>
                        Información Personal
                        {isPerfilPremium && (
                            <span className="ml-2 animate-spin">👑</span>
                        )}
                    </h3>
                </div>

                <div className="flex flex-col items-center mb-4 relative">
                    <div className={`relative ${isPerfilPremium ? '' : ''}`}>
                        <img src={perfil.avatar || "/avatars/default.png"} alt="Avatar" className={`w-20 h-20 rounded-full mb-2 transition-all duration-300 ${isPerfilPremium
                                ? 'ring-4 ring-yellow-400 ring-opacity-70 shadow-lg shadow-yellow-400/50 hover:scale-110'
                                : ''
                            }`} />
                        {isPerfilPremium && (
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs animate-bounce">
                                ✨
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4 relative">
                    <h3 className={`text-xl font-bold text-center w-full transition-all duration-300 ${isPerfilPremium ? 'text-yellow-600' : ''
                        }`}>
                        Información Personal
                        {isPerfilPremium && (
                            <span className="ml-2 animate-spin">👑</span>
                        )}
                    </h3>
                </div>
                <p><strong>Nick:</strong> {renderNick(perfil.nick)}</p>
                <p><strong>Email:</strong> {perfil.email}</p>
                <p><strong>Centro Educativo:</strong> {perfil.centro}</p>
                <p><strong>Curso:</strong> {perfil.curso}</p>
                <p><strong>Tipo de Usuario:</strong> {perfil.tipo}</p>
                <p><strong>Fecha de Inscripción:</strong> {perfil.fechaInscripcion ? new Date(perfil.fechaInscripcion).toLocaleDateString('es-ES') : ''}</p>
                <div className="mb-2 flex items-center">
                    <div className="flex flex-col mt-2 gap-y-4">
                        <div className="flex flex-row gap-x-12">
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">👍</span>
                                <strong>Likes:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-300 text-green-900 font-bold text-sm">{perfil.likes || 0}</span>
                            </div>
                            <div className="flex items-center ml-8">
                                <span className="mr-2 text-lg">👥</span>
                                <strong>Total de Amigos:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-900 font-bold text-sm">{perfil.amigos ? perfil.amigos.length : 0}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-12">
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">📖</span>
                                <strong>Total de Historias:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-sm">{perfil.historias ? perfil.historias.length : 0}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">💬</span>
                                <strong>Total de Comentarios:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-900 font-bold text-sm">{perfil.comentariosRecibidos || 0}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-12">
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">🏆</span>
                                <strong>Trofeos Desbloqueados:</strong>
                                {(() => {
                                    const trofeos = Array.isArray(perfil.trofeos) ? perfil.trofeos : [];
                                    const total = trofeos.length;
                                    return (
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-200 text-pink-900 font-bold text-sm">{total}</span>
                                    );
                                })()}
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">✅</span>
                                <strong>Respuestas acertadas:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 font-bold text-sm">{perfil.preguntasAcertadas || 0}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-12">
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">🥇</span>
                                <strong>Competiciones:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-200 text-teal-900 font-bold text-sm">{perfil.competicionesSuperadas || 0}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-2 text-lg">🎉</span>
                                <strong>Concursos:</strong>
                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-900 font-bold text-sm">{perfil.concursosGanados || 0}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
