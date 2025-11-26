"use client";
import { useEffect, useState } from "react";
import { renderNick } from "@/utils/renderNick";
import { useParams } from 'next/navigation';
import { HistoriasAPI } from "../../../utils/historias";
import { UsersAPI } from "../../../utils/users";

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
        const loadHistoria = async () => {
            if (typeof window !== "undefined" && id) {
                try {
                    const encontrada = await HistoriasAPI.getHistoriaById(id as string);
                    if (encontrada) {
                        setHistoria(encontrada);
                        setLikes(encontrada.likes || 0);
                        setComentarios(encontrada.comentarios || []);

                        // Comprobar si el usuario ya ha dado like
                        const user = sessionStorage.getItem("user");
                        let usuario = "";
                        if (user) {
                            try {
                                const obj = JSON.parse(user);
                                usuario = obj.nick || obj.nombre || obj.usuario || user;
                            } catch {
                                console.error("Error al parsear el usuario desde sessionStorage:", user);
                                usuario = "";
                            }
                        }
                        const likedBy = encontrada.likedBy || [];
                        console.log("Usuario actual:", usuario);
                        console.log("Usuarios que dieron like:", likedBy);
                        setLiked(likedBy.includes(usuario));
                    } else {
                        console.warn("No se encontró la historia con el ID especificado en la API.");
                    }
                } catch (error) {
                    console.error("Error al cargar historia:", error);
                }
            }
        };
        loadHistoria();
    }, [id]);

    const updateAuthorProfile = async (author: string, field: "likes" | "comentariosRecibidos") => {
        try {
            const users = await UsersAPI.getAllUsers();
            const userToUpdate = users.find((u: User) => u.nick === author);
            if (userToUpdate) {
                const currentValue = userToUpdate[field] || 0;
                if (typeof currentValue === "number") {
                    const updatedUser = { ...userToUpdate, [field]: currentValue + 1 };
                    await UsersAPI.updateUser(updatedUser);

                    // Emitir evento global para actualizar el perfil si está abierto
                    window.dispatchEvent(
                        new CustomEvent("profileUpdate", {
                            detail: { nick: author, field, value: updatedUser[field] },
                        })
                    );
                }
            }
        } catch (error) {
            console.error('Error al actualizar perfil del autor:', error);
        }
    };

    const handleLike = async () => {
        if (typeof window !== "undefined" && historia) {
            const user = sessionStorage.getItem("user");
            let usuario = "";
            if (user) {
                try {
                    const obj = JSON.parse(user);
                    usuario = obj.nick || obj.nombre || obj.usuario || user;
                } catch {
                    console.error("Error al parsear el usuario desde sessionStorage:", user);
                    usuario = "";
                }
            }

            try {
                const currentHistoria = await HistoriasAPI.getHistoriaById(historia.id.toString());
                if (currentHistoria) {
                    let likedBy = currentHistoria.likedBy || [];
                    const yaDioLike = likedBy.includes(usuario);
                    let likeDelta = 0;
                    if (!yaDioLike) {
                        // Dar like
                        likedBy.push(usuario);
                        currentHistoria.likedBy = likedBy;
                        currentHistoria.likes = (currentHistoria.likes || 0) + 1;
                        setLikes(currentHistoria.likes);
                        setLiked(true);
                        likeDelta = 1;
                    } else {
                        // Quitar like
                        likedBy = likedBy.filter((u) => u !== usuario);
                        currentHistoria.likedBy = likedBy;
                        currentHistoria.likes = Math.max((currentHistoria.likes || 1) - 1, 0);
                        setLikes(currentHistoria.likes);
                        setLiked(false);
                        likeDelta = -1;
                    }

                    // Actualizar historia en la base de datos
                    await HistoriasAPI.updateHistoria(historia.id, {
                        likedBy: currentHistoria.likedBy,
                        likes: currentHistoria.likes
                    });

                    // Actualizar likes del autor
                    if (historia.autor && likeDelta !== 0) {
                        await updateAuthorProfile(historia.autor, "likes");
                    }
                }
            } catch (error) {
                console.error('Error al manejar like:', error);
            }
        }
    };

    const handleComentar = async () => {
        if (!comentario.trim()) return;
        const usuarioActual = sessionStorage.getItem("user");
        let usuario = "";
        if (usuarioActual) {
            try {
                const obj = JSON.parse(usuarioActual);
                usuario = obj.nick || obj.nombre || obj.usuario || usuarioActual;
            } catch {
                usuario = usuarioActual;
            }
        }
        try {
            const currentHistoria = await HistoriasAPI.getHistoriaById(historia.id.toString());
            if (currentHistoria) {
                const comentarios = currentHistoria.comentarios || [];
                const yaComento = comentarios.some((c: Comentario) => c.usuario === usuario);
                if (!yaComento) {
                    const nuevoComentario: Comentario = {
                        usuario,
                        texto: comentario,
                        fecha: new Date().toLocaleString(),
                    };
                    comentarios.push(nuevoComentario);
                    setComentarios(comentarios);
                    setComentario("");

                    // Actualizar perfil del autor
                    updateAuthorProfile(historia.autor, "comentariosRecibidos");

                    // Guardar cambios en la base de datos
                    const updatedHistoria = await HistoriasAPI.updateHistoria(historia.id, { comentarios });
                    setHistoria(updatedHistoria);

                    console.log("Estado de comentarios después de agregar uno nuevo:", comentarios);
                } else {
                    console.log("El usuario ya comentó en esta historia.");
                }
            }
        } catch (error) {
            console.error('Error al agregar comentario:', error);
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
