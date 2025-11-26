import React, { useEffect, useState } from "react";
import { AmistadesAPI, SolicitudAmistad } from "../utils/amistades";
import { User } from "../utils/users";

interface BotonesAmistadProps {
    perfilNick: string;
}

const BotonesAmistad: React.FC<BotonesAmistadProps> = ({ perfilNick }) => {
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== "undefined") {
            const userStr = sessionStorage.getItem("user");
            return userStr ? JSON.parse(userStr) : null;
        }
        return null;
    });
    const [esAmigo, setEsAmigo] = useState(false);
    const [pendiente, setPendiente] = useState(false);

    useEffect(() => {
        if (!user) return;
        if (!perfilNick || perfilNick === user.nick) return;

        // Cargar amigos desde la API
        AmistadesAPI.getAmigos(user.nick).then(amigos => {
            setEsAmigo(amigos.includes(perfilNick));
        });

        // Cargar solicitudes pendientes desde la API
        AmistadesAPI.getSolicitudesPendientes(perfilNick).then(solicitudes => {
            const pendienteTmp = solicitudes.some((s: SolicitudAmistad) => s.origen === user.nick);
            setPendiente(pendienteTmp);
        });
    }, [perfilNick, user]);

    const handleSolicitar = async () => {
        if (!user) return;
        if (!perfilNick || perfilNick === user.nick) return;

        const success = await AmistadesAPI.enviarSolicitud(user.nick, perfilNick);
        if (success) {
            setPendiente(true);
            alert(`Solicitud de amistad enviada a ${perfilNick}`);
        } else {
            alert("Error al enviar la solicitud de amistad");
        }
    };

    const handleFinalizar = async () => {
        if (!user) return;

        const success = await AmistadesAPI.removeAmigo(user.nick, perfilNick);
        if (success) {
            setEsAmigo(false);
            alert(`Has eliminado la amistad con ${perfilNick}`);
        } else {
            alert("Error al eliminar la amistad");
        }
    };

    if (!user || perfilNick === user.nick) return null;
    if (esAmigo) {
        return (
            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-pulse"
                onClick={handleFinalizar}
            >Finalizar amistad</button>
        );
    }
    if (pendiente) {
        return (
            <span className="bg-yellow-300 text-yellow-900 font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-pulse flex items-center gap-2">
                Amistad pendiente
                <a
                    href="#"
                    className="text-green-700 underline text-xs ml-2"
                    onClick={async (e) => {
                        e.preventDefault();
                        // Obtener solicitudes pendientes para encontrar el ID
                        const solicitudes = await AmistadesAPI.getSolicitudesPendientes(perfilNick);
                        const solicitud = solicitudes.find((s: SolicitudAmistad) => s.origen === user.nick);
                        if (solicitud) {
                            const aceptada = await AmistadesAPI.aceptarSolicitud(solicitud.id as number);
                            if (aceptada) {
                                const agregada = await AmistadesAPI.addAmigo(user.nick, perfilNick);
                                if (agregada) {
                                    setPendiente(false);
                                    setEsAmigo(true);
                                    alert("¡Amistad aceptada!");
                                }
                            }
                        }
                    }}
                >Aceptar</a>
                <a
                    href="#"
                    className="text-red-700 underline text-xs ml-2"
                    onClick={async (e) => {
                        e.preventDefault();
                        // Obtener solicitudes pendientes para encontrar el ID
                        const solicitudes = await AmistadesAPI.getSolicitudesPendientes(perfilNick);
                        const solicitud = solicitudes.find((s: SolicitudAmistad) => s.origen === user.nick);
                        if (solicitud) {
                            const rechazada = await AmistadesAPI.rechazarSolicitud(solicitud.id as number);
                            if (rechazada) {
                                setPendiente(false);
                                alert("Solicitud de amistad rechazada");
                            }
                        }
                    }}
                >Rechazar</a>
            </span>
        );
    }
    return (
        <button
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl text-base shadow mb-2 animate-bounce"
            onClick={handleSolicitar}
        >Solicitar Amistad</button>
    );
};

export default BotonesAmistad;
