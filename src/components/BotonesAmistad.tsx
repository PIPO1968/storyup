import React, { useEffect, useState } from "react";

interface BotonesAmistadProps {
    perfilNick: string;
}

const BotonesAmistad: React.FC<BotonesAmistadProps> = ({ perfilNick }) => {
    const [user, setUser] = useState<any>(null);
    const [esAmigo, setEsAmigo] = useState(false);
    const [pendiente, setPendiente] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            if (!userStr) return;
            const userObj = JSON.parse(userStr);
            setUser(userObj);
            if (!perfilNick || perfilNick === userObj.nick) return;
            // Amistad
            const amigosStr = localStorage.getItem(`amigos_${userObj.nick}`);
            let amigos = [];
            if (amigosStr) {
                try { amigos = JSON.parse(amigosStr); } catch { }
            }
            setEsAmigo(amigos.some((a: any) => a.nick === perfilNick));
            // Solicitud pendiente
            const solicitudesEnviadas = localStorage.getItem(`solicitudes_${perfilNick}`);
            let pendienteTmp = false;
            if (solicitudesEnviadas) {
                try {
                    const arr = JSON.parse(solicitudesEnviadas);
                    pendienteTmp = arr.some((s: any) => s.origen === userObj.nick && s.estado === "pendiente");
                } catch { }
            }
            setPendiente(pendienteTmp);
        }
    }, [perfilNick]);

    const handleSolicitar = () => {
        if (!user) return;
        if (!perfilNick || perfilNick === user.nick) return;
        const nuevaSolicitud = {
            origen: user.nick,
            destino: perfilNick,
            estado: "pendiente",
        };
        const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilNick}`);
        const solicitudesActualizadas = solicitudesGuardadas ? JSON.parse(solicitudesGuardadas) : [];
        solicitudesActualizadas.push(nuevaSolicitud);
        localStorage.setItem(`solicitudes_${perfilNick}`, JSON.stringify(solicitudesActualizadas));
        setPendiente(true);
        alert(`Solicitud de amistad enviada a ${perfilNick}`);
    };

    const handleFinalizar = () => {
        if (!user) return;
        // Eliminar amistad de ambos lados
        const amigosStr = localStorage.getItem(`amigos_${user.nick}`);
        let amigos = amigosStr ? JSON.parse(amigosStr) : [];
        amigos = amigos.filter((a: any) => a.nick !== perfilNick);
        localStorage.setItem(`amigos_${user.nick}`, JSON.stringify(amigos));
        const amigosDelOtroStr = localStorage.getItem(`amigos_${perfilNick}`);
        let amigosDelOtro = amigosDelOtroStr ? JSON.parse(amigosDelOtroStr) : [];
        amigosDelOtro = amigosDelOtro.filter((a: any) => a.nick !== user.nick);
        localStorage.setItem(`amigos_${perfilNick}`, JSON.stringify(amigosDelOtro));
        // Actualizar el objeto user y el array de usuarios en localStorage
        const userObj = { ...user, amigos };
        localStorage.setItem("user", JSON.stringify(userObj));
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
            let usersArr = JSON.parse(usersStr);
            usersArr = usersArr.map((u: any) =>
                u.nick === user.nick ? { ...u, amigos } : u
            );
            localStorage.setItem("users", JSON.stringify(usersArr));
        }
        setEsAmigo(false);
        alert(`Has eliminado la amistad con ${perfilNick}`);
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
                    onClick={e => {
                        e.preventDefault();
                        // Aceptar amistad
                        // Añadir a amigos de ambos lados
                        const amigosUser = JSON.parse(localStorage.getItem(`amigos_${user.nick}`) || "[]");
                        amigosUser.push({ nick: perfilNick });
                        localStorage.setItem(`amigos_${user.nick}`, JSON.stringify(amigosUser));
                        const amigosPerfil = JSON.parse(localStorage.getItem(`amigos_${perfilNick}`) || "[]");
                        amigosPerfil.push({ nick: user.nick });
                        localStorage.setItem(`amigos_${perfilNick}`, JSON.stringify(amigosPerfil));
                        // Actualizar el objeto user y el array de usuarios en localStorage
                        const userObj = { ...user, amigos: amigosUser };
                        localStorage.setItem("user", JSON.stringify(userObj));
                        const usersStr = localStorage.getItem("users");
                        if (usersStr) {
                            let usersArr = JSON.parse(usersStr);
                            usersArr = usersArr.map((u: any) =>
                                u.nick === user.nick ? { ...u, amigos: amigosUser } : u
                            );
                            localStorage.setItem("users", JSON.stringify(usersArr));
                        }
                        // Eliminar solicitud pendiente
                        const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilNick}`);
                        let solicitudes = solicitudesGuardadas ? JSON.parse(solicitudesGuardadas) : [];
                        solicitudes = solicitudes.filter((s: any) => !(s.origen === user.nick && s.estado === "pendiente"));
                        localStorage.setItem(`solicitudes_${perfilNick}`, JSON.stringify(solicitudes));
                        setPendiente(false);
                        setEsAmigo(true);
                        alert("¡Amistad aceptada!");
                    }}
                >Aceptar</a>
                <a
                    href="#"
                    className="text-red-700 underline text-xs ml-2"
                    onClick={e => {
                        e.preventDefault();
                        // Rechazar amistad
                        const solicitudesGuardadas = localStorage.getItem(`solicitudes_${perfilNick}`);
                        let solicitudes = solicitudesGuardadas ? JSON.parse(solicitudesGuardadas) : [];
                        solicitudes = solicitudes.filter((s: any) => !(s.origen === user.nick && s.estado === "pendiente"));
                        localStorage.setItem(`solicitudes_${perfilNick}`, JSON.stringify(solicitudes));
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
