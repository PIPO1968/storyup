"use client";
import { useEffect, useState } from "react";
import { renderNick } from "@/utils/renderNick";
import { useParams } from 'next/navigation';

// Definición de tipos
interface User {
    nick: string;
    nombre?: string;
    usuario?: string;
    likes?: number;
    comentariosRecibidos?: number;
}

interface Historia {
    id: number;
    titulo: string;
    autor: string;
    fecha: string;
    contenido?: string;
    imagen?: string;
    likes?: number;
    likedBy?: string[];
    comentarios?: Comentario[];
}

interface Comentario {
    usuario: string;
    texto: string;
    fecha: string;
}

export default function HistoriaDetalle() {
    const params = useParams();
    const id = params?.id;
    const [historia, setHistoria] = useState<any>(null);
    const [comentario, setComentario] = useState("");
    const [comentarios, setComentarios] = useState<any[]>([]);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && id) {
            const historias = localStorage.getItem("historias");
            const arr = historias ? JSON.parse(historias) : [];
            const encontrada = arr.find((h: any) => h.id == id);
            if (encontrada) {
                setHistoria(encontrada);
                setLikes(encontrada.likes || 0);
                setComentarios(encontrada.comentarios || []);

                // Comprobar si el usuario ya ha dado like
                const user = localStorage.getItem("user");
                let usuario = "";
                if (user) {
                    try {
                        const obj = JSON.parse(user);
                        usuario = obj.nick || obj.nombre || obj.usuario || user;
                    } catch {
                        console.error("Error al parsear el usuario desde localStorage:", user);
                        usuario = "";
                    }
                }
                const likedBy = encontrada.likedBy || [];
                console.log("Usuario actual:", usuario);
                console.log("Usuarios que dieron like:", likedBy);
                setLiked(likedBy.includes(usuario));
            } else {
                console.warn("No se encontró la historia con el ID especificado en localStorage.");
            }
        }
    }, [id]);

    const updateAuthorProfile = (author: string, field: "likes" | "comentariosRecibidos") => {
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
            const users: User[] = JSON.parse(usersStr);
            const userIndex = users.findIndex((u: User) => u.nick === author);
            if (userIndex !== -1) {
                const currentValue = users[userIndex][field] || 0;
                if (typeof currentValue === "number") {
                    users[userIndex][field] = currentValue + 1;
                    localStorage.setItem("users", JSON.stringify(users));

                    // Emitir evento global para actualizar el perfil si está abierto
                    window.dispatchEvent(
                        new CustomEvent("profileUpdate", {
                            detail: { nick: author, field, value: users[userIndex][field] },
                        })
                    );
                }
            }
        }
    };

    const handleLike = () => {
        if (typeof window !== "undefined" && historia) {
            const user = localStorage.getItem("user");
            let usuario = "";
            if (user) {
                try {
                    const obj = JSON.parse(user);
                    usuario = obj.nick || obj.nombre || obj.usuario || user;
                } catch {
                    console.error("Error al parsear el usuario desde localStorage:", user);
                    usuario = "";
                }
            }

            const historias = localStorage.getItem("historias");
            const arr: Historia[] = historias ? JSON.parse(historias) : [];
            const idx = arr.findIndex((h: Historia) => h.id == historia.id);
            if (idx !== -1) {
                let likedBy = arr[idx].likedBy || [];
                const yaDioLike = likedBy.includes(usuario);
                let likeDelta = 0;
                if (!yaDioLike) {
                    // Dar like
                    likedBy.push(usuario);
                    arr[idx].likedBy = likedBy;
                    arr[idx].likes = (arr[idx].likes || 0) + 1;
                    setLikes(arr[idx].likes);
                    setLiked(true);
                    likeDelta = 1;
                } else {
                    // Quitar like
                    likedBy = likedBy.filter((u) => u !== usuario);
                    arr[idx].likedBy = likedBy;
                    arr[idx].likes = Math.max((arr[idx].likes || 1) - 1, 0);
                    setLikes(arr[idx].likes);
                    setLiked(false);
                    likeDelta = -1;
                }

                // Actualizar localStorage
                localStorage.setItem("historias", JSON.stringify(arr));

                // Actualizar likes del autor en localStorage y en el array de usuarios
                const autor = arr[idx].autor;
                const usersStr = localStorage.getItem("users");
                if (usersStr && autor) {
                    let usersArr = JSON.parse(usersStr);
                    const userIdx = usersArr.findIndex((u: any) => u.nick === autor);
                    if (userIdx !== -1) {
                        const nuevoLikes = (usersArr[userIdx].likes || 0) + likeDelta;
                        usersArr[userIdx].likes = nuevoLikes;
                        localStorage.setItem("users", JSON.stringify(usersArr));
                        // Actualizar también el objeto user si el autor está logueado
                        const userStr = localStorage.getItem("user");
                        if (userStr) {
                            let userObj = JSON.parse(userStr);
                            if (userObj.nick === autor) {
                                userObj.likes = nuevoLikes;
                                localStorage.setItem("user", JSON.stringify(userObj));
                                // Emitir evento para refrescar el perfil
                                window.dispatchEvent(new CustomEvent("profileUpdate", {
                                    detail: { nick: autor, field: "likes", value: nuevoLikes }
                                }));
                            }
                        }
                    }
                }
            } else {
                console.warn("No se encontró la historia con el ID especificado para actualizar en localStorage.");
            }
        }
    };

    const handleComentar = () => {
        if (!comentario.trim()) return;
        const usuarioActual = localStorage.getItem("usuarioActual");
        let usuario = "";
        if (usuarioActual) {
            try {
                const obj = JSON.parse(usuarioActual);
                usuario = obj.nick || obj.nombre || obj.usuario || usuarioActual;
            } catch {
                usuario = usuarioActual;
            }
        }
        const historias = localStorage.getItem("historias");
        const arr: Historia[] = historias ? JSON.parse(historias) : [];
        const idx = arr.findIndex((h: Historia) => h.id == historia.id);
        if (idx !== -1) {
            const comentarios = arr[idx].comentarios || [];
            const yaComento = comentarios.some((c: Comentario) => c.usuario === usuario);
            if (!yaComento) {
                const nuevoComentario: Comentario = {
                    usuario,
                    texto: comentario,
                    fecha: new Date().toLocaleString(),
                };
                comentarios.push(nuevoComentario);
                arr[idx].comentarios = comentarios;
                setComentarios(comentarios);
                setComentario("");

                // Actualizar perfil del autor
                updateAuthorProfile(historia.autor, "comentariosRecibidos");

                // Guardar cambios en localStorage
                localStorage.setItem("historias", JSON.stringify(arr));

                // Actualizar el estado de la historia
                setHistoria(arr[idx]);

                console.log("Estado de comentarios después de agregar uno nuevo:", comentarios);
            } else {
                console.log("El usuario ya comentó en esta historia.");
            }
        }
    };

    if (!historia) {
        return <div className="min-h-screen bg-green-100 p-8">Cargando historia...</div>;
    }

    return (
        <div className="min-h-screen bg-green-100 p-8">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-2">{historia.titulo}</h1>
                <div className="mb-2 text-gray-700">Por: {renderNick(historia.autor)} | {historia.fecha}</div>
                {historia.imagen && (
                    <img src={historia.imagen} alt="Imagen" className="mb-4 max-h-64 rounded" />
                )}
                <div className="border rounded p-4 mb-4 bg-gray-50" dangerouslySetInnerHTML={{ __html: historia.contenido }} />
                <div className="flex items-center gap-4 mb-4">
                    <button
                        className={`font-bold py-2 px-4 rounded ${liked ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600 text-white"}`}
                        onClick={handleLike}
                    >
                        {liked ? `💔 (${likes})` : `❤️ Like (${likes === 0 ? "0" : likes})`}
                    </button>
                </div>
                <div className="mb-4">
                    <h2 className="font-bold mb-2">Comentarios</h2>
                    <ul className="mb-2">
                        {comentarios.slice(-5).map((c, idx) => (
                            <li key={idx} className="border-b py-1 text-gray-800">
                                <span>{c.texto}</span>
                                <span className="ml-2 text-xs text-gray-500">{c.fecha}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={comentario}
                            onChange={e => setComentario(e.target.value)}
                            placeholder="Escribe un comentario..."
                            className="border rounded px-2 py-1 flex-1"
                        />
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 rounded" onClick={handleComentar}>
                            Comentar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
