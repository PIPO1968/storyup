import React, { useEffect, useState } from "react";

interface BotonesAmistadProps {
    perfilNick: string;
}

const BotonesAmistad: React.FC<BotonesAmistadProps> = ({ perfilNick }) => {
    const [user, setUser] = useState<any>(null);
    const [esAmigo, setEsAmigo] = useState(false);
    const [pendiente, setPendiente] = useState(false);
    const [solicitudId, setSolicitudId] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            if (!userStr) return;
            const userObj = JSON.parse(userStr);
            setUser(userObj);
            if (!perfilNick || perfilNick === userObj.nick) return;
            // Cargar amigos desde API
            fetch(`/api/amigos?nick=${userObj.nick}`)
                .then(res => res.json())
                .then(amigos => setEsAmigo(amigos.includes(perfilNick)))
                .catch(console.error);
            // Cargar solicitudes desde API
            fetch(`/api/solicitudes?nick=${perfilNick}`)
                .then(res => res.json())
                .then(solicitudes => {
                    const solicitud = solicitudes.find((s: any) => s.origen === userObj.nick);
                    if (solicitud) {
                        setPendiente(true);
                        setSolicitudId(solicitud.id);
                    }
                })
                .catch(console.error);
        }
    }, [perfilNick]);

    const handleSolicitar = async () => {
        if (!user) return;
        if (!perfilNick || perfilNick === user.nick) return;
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ origen: user.nick, destino: perfilNick }),
            });
            if (response.ok) {
                setPendiente(true);
                alert(`Solicitud de amistad enviada a ${perfilNick}`);
            } else {
                alert('Error al enviar solicitud');
            }
        } catch (error) {
            console.error(error);
            alert('Error al enviar solicitud');
        }
    };

    const handleFinalizar = async () => {
        if (!user) return;
        try {
            const response = await fetch('/api/amigos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick1: user.nick, nick2: perfilNick }),
            });
            if (response.ok) {
                setEsAmigo(false);
                alert(`Has eliminado la amistad con ${perfilNick}`);
            } else {
                alert('Error al eliminar amistad');
            }
        } catch (error) {
            console.error(error);
            alert('Error al eliminar amistad');
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
                    onClick={async e => {
                        e.preventDefault();
                        // Aceptar amistad
                        // Añadir a amigos
                        await fetch('/api/amigos', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ nick1: user.nick, nick2: perfilNick }),
                        });
                        // Actualizar solicitud a aceptada
                        await fetch('/api/solicitudes', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: solicitudId, estado: 'aceptada' }),
                        });
                        setPendiente(false);
                        setEsAmigo(true);
                        alert("¡Amistad aceptada!");
                    }}
                >Aceptar</a>
                <a
                    href="#"
                    className="text-red-700 underline text-xs ml-2"
                    onClick={async e => {
                        e.preventDefault();
                        // Rechazar solicitud
                        await fetch('/api/solicitudes', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: solicitudId, estado: 'rechazada' }),
                        });
                        setPendiente(false);
                        alert("Solicitud de amistad rechazada");
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
