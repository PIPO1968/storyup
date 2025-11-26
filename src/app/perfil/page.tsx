"use client";
import React, { useState, useEffect } from "react";
import { renderNick } from "@/utils/renderNick";
import { TROFEOS_PREMIUM } from "@/data/trofeosPremiumImport";
import { useTranslation } from "@/utils/i18n";
import { useRouter } from "next/navigation";
import { PremiosMensualesAPI } from "@/utils/premios-mensuales";
import { ConcursosAPI } from "@/utils/concursos";
import { ChatAPI } from "@/utils/chat";
import { UsersAPI, User } from "../../utils/users";

interface Usuario {
    nick: string;
    nombre: string;
    email: string;
    centro: string;
    curso: string;
    tipo: string;
    fechaInscripcion: string;
    likes: number;
    amigos: string[];
    respuestasAcertadas: number;
    competicionesSuperadas: number;
    concursosGanados: number;
    comentariosRecibidos: number;
    historiasCreadas: number;
    anosEnStoryUp: number;
    trofeos: unknown[];
}

function PerfilUsuario() {
    const router = useRouter();
    // Función para bloquear manualmente el trofeo 10 al usuario seleccionado
    // Función para bloquear manualmente cualquier trofeo al usuario seleccionado
    const handleLockTrofeo = async (trofeoIdx: number) => {
        if (!selectedUser) return;
        const updatedUsers = usuarios.map((u: User) =>
            u.nick === selectedUser
                ? {
                    ...u,
                    trofeosDesbloqueados: Array.isArray(u.trofeosDesbloqueados)
                        ? u.trofeosDesbloqueados.filter((idx: number) => idx !== trofeoIdx)
                        : [],
                    trofeosBloqueados: Array.isArray(u.trofeosBloqueados)
                        ? [...new Set([...(u.trofeosBloqueados || []), trofeoIdx])]
                        : [trofeoIdx]
                }
                : u
        );
        setUsuarios(updatedUsers);

        // Actualizar usuario en la base de datos
        const updatedUser = updatedUsers.find((u: User) => u.nick === selectedUser);
        if (updatedUser) {
            await fetch('/api/users', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nick: selectedUser,
                    trofeosDesbloqueados: updatedUser.trofeosDesbloqueados,
                    trofeosBloqueados: updatedUser.trofeosBloqueados
                })
            });
        }

        // Si el usuario administrado es el actual, actualiza también el estado y sessionStorage
        if (user && user.nick === selectedUser && updatedUser) {
            setUser({ ...user, trofeosDesbloqueados: updatedUser.trofeosDesbloqueados, trofeosBloqueados: updatedUser.trofeosBloqueados });
            sessionStorage.setItem("user", JSON.stringify({ ...user, trofeosDesbloqueados: updatedUser.trofeosDesbloqueados, trofeosBloqueados: updatedUser.trofeosBloqueados }));
        }
        // Disparar evento para refrescar la UI
        window.dispatchEvent(new Event('storage'));
        alert(`Trofeo #${trofeoIdx + 1} bloqueado manualmente para ${selectedUser}`);
    };

    // Función para asignar trofeos al usuario si su centro ganó premios este mes
    const asignarTrofeosUsuario = async (usuario: Usuario) => {
        if (typeof window === "undefined") return;

        const fechaActual = new Date();
        const year = fechaActual.getFullYear();
        const month = fechaActual.getMonth() + 1;

        const premios = await PremiosMensualesAPI.getPremiosMensuales(year, month);
        const premioCentro = premios.find((p: unknown) => (p as { centro: string }).centro === usuario.centro);

        if (premioCentro) {
            let idTrofeo = 0;
            switch ((premioCentro as { posicion: number }).posicion) {
                case 1: idTrofeo = 25; break; // Campeón Mensual
                case 2: idTrofeo = 26; break; // Subcampeón Mensual
                case 3: idTrofeo = 27; break; // Tercer Lugar Mensual
                default:
                    if ((premioCentro as { posicion: number }).posicion <= 10) {
                        idTrofeo = 28; // Top 10 Mensual
                    } else {
                        idTrofeo = 29; // Participante Activo
                    }
                    break;
            }

            if (idTrofeo > 0 && !usuario.trofeos.includes(idTrofeo)) {
                usuario.trofeos.push(idTrofeo);
                // Actualizar usuario en la base de datos
                await fetch('/api/users', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        nick: usuario.nick,
                        trofeos: usuario.trofeos
                    })
                });
                // Mostrar notificación de nuevo trofeo
                alert(`¡Felicitaciones! Has desbloqueado un nuevo trofeo: ${(premioCentro as { premio?: string }).premio || 'Premio'}`);
            }
        }
    };

    const [user, setUser] = useState<any>(null);
    const [bullyingActivo, setBullyingActivo] = useState(false);
    const [usuarioBullying, setUsuarioBullying] = useState("");
    const [palabraProhibida, setPalabraProhibida] = useState("");
    const [concursoTitulo, setConcursoTitulo] = useState("");
    const [concursoTexto, setConcursoTexto] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [usuarioGanador, setUsuarioGanador] = useState("");
    const [concursoId, setConcursoId] = useState(1);
    const [nombreArchivo, setNombreArchivo] = useState("");
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [chatInput, setChatInput] = useState("");
    const [chatMessages, setChatMessages] = useState<{ from: string, to: string, text: string, fecha?: string }[]>([]);
    const [mensajeRecibido, setMensajeRecibido] = useState(false);
    const [noticiaTitulo, setNoticiaTitulo] = useState("");
    const [noticiaTexto, setNoticiaTexto] = useState("");
    const [noticiaImagen, setNoticiaImagen] = useState<string>("");
    // Estado para el trofeo seleccionado por el admin
    const [trofeoSeleccionado, setTrofeoSeleccionado] = useState("");
    // Estados para gestionar concursos finalizados
    const [concursoSeleccionado, setConcursoSeleccionado] = useState("");
    const [ganadorSeleccionado, setGanadorSeleccionado] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);
    const [concursos, setConcursos] = useState<any[]>([]);
    // Estados para preguntas
    const [cursoSeleccionado, setCursoSeleccionado] = useState<string>("1primaria");
    const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState<string>("matematicas");
    const [pregunta, setPregunta] = useState<string>("");
    const [respuesta, setRespuesta] = useState<string>("");
    const [mounted, setMounted] = useState(false);

    const { t } = useTranslation();

    // Inicialización y sincronización de usuario y rankings SOLO una vez
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const loadUsersAndRankings = async () => {
            if (typeof window !== "undefined") {
                // Cargar usuarios desde la API
                try {
                    const response = await fetch('/api/users');
                    const usersArr = await response.json();

                    // Procesar usuarios
                    let processedUsers = usersArr.map((u: User) => ({
                        ...u,
                        trofeosDesbloqueados: Array.isArray(u.trofeosDesbloqueados)
                            ? (u.trofeosDesbloqueados as number[]).filter((idx: number) => idx !== 9)
                            : []
                    }));

                    const userStr = sessionStorage.getItem("user");
                    if (userStr) {
                        const userObj = JSON.parse(userStr);
                        processedUsers = processedUsers.map((u: any) => {
                            const amigosCount = Array.isArray(u.amigos) ? u.amigos.length : 0;
                            return {
                                ...u,
                                trofeosDesbloqueados: Array.isArray(u.trofeosDesbloqueados)
                                    ? u.trofeosDesbloqueados.filter((idx: number) => idx !== 9 || true)
                                    : []
                            };
                        });

                        // Rankings
                        const rankingLikes = [...processedUsers].sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3).filter(u => (u.likes || 0) > 0);
                        const rankingComentarios = [...processedUsers].sort((a, b) => (b.comentariosRecibidos || 0) - (a.comentariosRecibidos || 0)).slice(0, 3).filter(u => (u.comentariosRecibidos || 0) > 0);
                        const rankingAmigos = [...processedUsers].sort((a, b) => (b.amigos || 0) - (a.amigos || 0)).slice(0, 3).filter(u => (u.amigos || 0) > 0);
                        const rankingHistorias = [...processedUsers].sort((a, b) => (b.historias || 0) - (a.historias || 0)).slice(0, 3).filter(u => (u.historias || 0) > 0);
                        const rankingConcursos = [...processedUsers].sort((a, b) => (b.concursosGanados || 0) - (a.concursosGanados || 0)).slice(0, 3).filter(u => (u.concursosGanados || 0) > 0);
                        const rankingCompeticiones = [...processedUsers].sort((a, b) => (b.competicionesSuperadas || 0) - (a.competicionesSuperadas || 0)).slice(0, 3).filter(u => (u.competicionesSuperadas || 0) > 0);

                        processedUsers = processedUsers.map((u: any) => ({
                            ...u,
                            estaEnRanking:
                                rankingLikes.some(r => r.nick === u.nick) ||
                                rankingComentarios.some(r => r.nick === u.nick) ||
                                rankingAmigos.some(r => r.nick === u.nick) ||
                                rankingHistorias.some(r => r.nick === u.nick) ||
                                rankingConcursos.some(r => r.nick === u.nick) ||
                                rankingCompeticiones.some(r => r.nick === u.nick),
                            estaEnRankingCompeticiones:
                                rankingCompeticiones.some(r => r.nick === u.nick)
                        }));

                        let userFromArr = processedUsers.find((u: any) => u.nick === userObj.nick);
                        if (!userFromArr) userFromArr = userObj;
                        if (userFromArr) {
                            // Cargar amigos desde la API de amistades
                            const amigosResponse = await fetch(`/api/amigos?nick=${encodeURIComponent(userObj.nick)}`);
                            let amigosArr = [];
                            if (amigosResponse.ok) {
                                const amigosData = await amigosResponse.json();
                                amigosArr = amigosData || [];
                            }
                            let competicionesSuperadas = userFromArr.competicionesSuperadas;
                            if (typeof competicionesSuperadas !== 'number') {
                                competicionesSuperadas = userObj.competicionesSuperadas || 0;
                            }
                            let trofeosDesbloqueados = userFromArr.trofeosDesbloqueados;
                            const trofeosBloqueados = userFromArr.trofeosBloqueados || [];
                            const amigosCount = Array.isArray(amigosArr) ? amigosArr.length : 0;
                            if (Array.isArray(trofeosDesbloqueados)) {
                                trofeosDesbloqueados = trofeosDesbloqueados.filter(idx => idx !== 9 || true);
                            }
                            const autoTrofeos = TROFEOS_AUTO
                                .map((t, idx) => (typeof t.condicion === 'function' && t.condicion({ ...userFromArr, amigos: amigosArr })) ? idx : null)
                                .filter((idx: number | null) => idx !== null);
                            const usuarioActualizado = { ...userFromArr, amigos: amigosArr, competicionesSuperadas, estaEnRanking: userFromArr.estaEnRanking, trofeosDesbloqueados, trofeosBloqueados, autoTrofeos };
                            setUser(usuarioActualizado);
                            // Asignar trofeos si el centro ganó premios este mes
                            asignarTrofeosUsuario(usuarioActualizado as Usuario);
                        }
                        setUsuarios(processedUsers);
                        // No necesitamos guardar en localStorage ya que los datos están en la BD
                    }
                    // Cargar último ID de concurso desde la API
                    const concursos = await ConcursosAPI.getConcursos();
                    if (concursos.length > 0) {
                        const concursosConId = concursos.filter(c => c.id !== undefined);
                        if (concursosConId.length > 0) {
                            const maxId = Math.max(...concursosConId.map(c => c.id!));
                            setConcursoId(maxId + 1);
                        }
                    }
                } catch (error) {
                    console.error('Error loading users and rankings:', error);
                }
            }
        };
        loadUsersAndRankings();
    }, [mounted]);

    // Cargar mensajes del chat y aviso solo cuando cambia el usuario
    useEffect(() => {
        if (user && user.nick) {
            ChatAPI.getChat(user.nick).then(chatData => {
                setChatMessages(chatData.messages);
                setMensajeRecibido(chatData.aviso);
            });
        }
    }, [user]);

    // Escuchar cambios en el perfil
    useEffect(() => {
        const handleProfileUpdate = async () => {
            try {
                const users = await UsersAPI.getAllUsers();
                setUsuarios(users);
                const userStr = sessionStorage.getItem("user");
                if (userStr) {
                    const currentUser = JSON.parse(userStr);
                    // Actualizar el usuario actual desde la BD si es necesario
                    const updatedUser = users.find(u => u.nick === currentUser.nick);
                    if (updatedUser) {
                        setUser(updatedUser);
                        sessionStorage.setItem("user", JSON.stringify(updatedUser));
                    } else {
                        // Si no se encuentra en BD, mantener el user de sessionStorage
                        setUser(currentUser);
                    }
                }
            } catch (error) {
                console.error('Error al actualizar perfil:', error);
            }
        };
        window.addEventListener('profileUpdate', handleProfileUpdate);
        window.addEventListener('storage', handleProfileUpdate);
        return () => {
            window.removeEventListener('profileUpdate', handleProfileUpdate);
            window.removeEventListener('storage', handleProfileUpdate);
        };
    }, []);

    // Cargar concursos desde la API
    useEffect(() => {
        const loadConcursos = async () => {
            try {
                const concursosData = await ConcursosAPI.getConcursos();
                setConcursos(concursosData);
            } catch (error) {
                console.error('Error al cargar concursos:', error);
            }
        };
        loadConcursos();
    }, []);

    const handlePalabraProhibidaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Palabra prohibida seleccionada: ${palabraProhibida}`);
        setPalabraProhibida("");
    };
    const handleApagarBullying = () => {
        setBullyingActivo(false);
        setUsuarioBullying("");
    };
    const handleConcursoSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const nuevoConcurso = {
                numero: concursoId,
                titulo: concursoTitulo,
                descripcion: concursoTexto,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                ganador: usuarioGanador,
                estado: 'activo' as const
            };

            await ConcursosAPI.createConcurso(nuevoConcurso);

            setConcursoId(concursoId + 1);
            setConcursoTitulo("");
            setConcursoTexto("");
            setFechaInicio("");
            setFechaFin("");
            setUsuarioGanador("");
            // Refrescar concursos en otras páginas
            window.dispatchEvent(new Event('storage'));
            alert("Concurso creado y ganador registrado");
        } catch (error) {
            console.error('Error al crear concurso:', error);
            alert('Error al crear el concurso. Inténtalo de nuevo.');
        }
    };
    const handleSeleccionarGanador = async () => {
        if (usuarioGanador) {
            try {
                // Actualizar el concurso más reciente con el ganador
                const concursos = await ConcursosAPI.getConcursos();
                if (concursos.length > 0) {
                    const ultimoConcurso = concursos[0];
                    await ConcursosAPI.updateConcurso(ultimoConcurso.id!, { ...ultimoConcurso, ganador: usuarioGanador });
                }

                // Sumar concursosGanados al usuario seleccionado
                const winnerUser = usuarios.find(u => u.nick === usuarioGanador);
                if (winnerUser) {
                    const updatedWinner = { ...winnerUser, concursosGanados: (winnerUser.concursosGanados || 0) + 1 };
                    await UsersAPI.updateUser(updatedWinner);

                    const updatedUsers = usuarios.map(u =>
                        u.nick === usuarioGanador ? updatedWinner : u
                    );
                    setUsuarios(updatedUsers);

                    // Si el usuario actual es el ganador, actualizar también el estado user
                    if (user && user.nick === usuarioGanador) {
                        setUser(updatedWinner);
                        sessionStorage.setItem("user", JSON.stringify(updatedWinner));
                    }
                }

                // Refrescar perfil y concursos
                window.dispatchEvent(new Event('profileUpdate'));
                window.dispatchEvent(new Event('storage'));
                alert(`Ganador seleccionado: ${usuarioGanador}`);
            } catch (error) {
                console.error('Error al seleccionar ganador:', error);
                alert('Error al seleccionar el ganador. Inténtalo de nuevo.');
            }
        } else {
            alert("Selecciona un usuario ganador");
        }
    };
    const handleAsignarGanador = async () => {
        if (!concursoSeleccionado || !ganadorSeleccionado) {
            alert("Selecciona un concurso y un ganador");
            return;
        }
        try {
            // Actualizar el concurso seleccionado con el ganador
            await ConcursosAPI.updateConcurso(parseInt(concursoSeleccionado), { ganador: ganadorSeleccionado });

            // Sumar concursosGanados al usuario seleccionado
            const winnerUser = usuarios.find(u => u.nick === ganadorSeleccionado);
            if (winnerUser) {
                const updatedWinner = { ...winnerUser, concursosGanados: (winnerUser.concursosGanados || 0) + 1 };
                await UsersAPI.updateUser(updatedWinner);

                const updatedUsers = usuarios.map(u =>
                    u.nick === ganadorSeleccionado ? updatedWinner : u
                );
                setUsuarios(updatedUsers);

                // Si el usuario actual es el ganador, actualizar también el estado user
                if (user && user.nick === ganadorSeleccionado) {
                    setUser(updatedWinner);
                    sessionStorage.setItem("user", JSON.stringify(updatedWinner));
                }
            }

            // Sumar 10 likes al ganador
            await updateLikes(ganadorSeleccionado, 10);
            // Limpiar selecciones
            setConcursoSeleccionado('');
            setGanadorSeleccionado('');
            // Refrescar perfil y concursos
            window.dispatchEvent(new Event('profileUpdate'));
            window.dispatchEvent(new Event('storage'));
            alert(`Ganador asignado a concurso ${concursoSeleccionado}: ${ganadorSeleccionado}`);
            setConcursoSeleccionado("");
            setGanadorSeleccionado("");
            // Forzar re-render para actualizar la lista de concursos
            setRefreshKey(prev => prev + 1);
        } catch (error) {
            console.error('Error al asignar ganador:', error);
            alert('Error al asignar el ganador. Inténtalo de nuevo.');
        }
    };
    const handleNoticiaSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setNoticiaTitulo("");
        setNoticiaTexto("");
        setNoticiaImagen("");
        alert("Noticia publicada (simulado)");
    };

    // Función para enviar pregunta
    const enviarPregunta = async () => {
        if (!pregunta.trim() || !respuesta.trim()) {
            alert("Por favor, completa la pregunta y la respuesta");
            return;
        }

        try {
            const response = await fetch('/api/add-question', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    curso: cursoSeleccionado,
                    asignatura: asignaturaSeleccionada,
                    pregunta: pregunta.trim(),
                    respuesta: respuesta.trim(),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Pregunta agregada exitosamente a ${asignaturaSeleccionada}-${cursoSeleccionado}.json\n\nPregunta: ${pregunta}\nRespuesta: ${respuesta}`);
                // Limpiar campos
                setPregunta("");
                setRespuesta("");
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Error al enviar pregunta:', error);
            alert('Error al enviar la pregunta. Inténtalo de nuevo.');
        }
    };

    // Función para añadir trofeo al usuario seleccionado
    const handleAddTrofeo = async () => {
        if (!selectedUser) return;
        try {
            const userToUpdate = usuarios.find(u => u.nick === selectedUser);
            if (userToUpdate) {
                const updatedUser = { ...userToUpdate, trofeos: (userToUpdate.trofeos || 0) + 1 };
                await UsersAPI.updateUser(updatedUser);

                const updatedUsers = usuarios.map(u =>
                    u.nick === selectedUser ? updatedUser : u
                );
                setUsuarios(updatedUsers);

                // Si el usuario actual es el seleccionado, actualizar también el estado user
                if (user && user.nick === selectedUser) {
                    setUser(updatedUser);
                    sessionStorage.setItem("user", JSON.stringify(updatedUser));
                }

                alert(`Trofeo añadido a ${selectedUser}`);
            }
        } catch (error) {
            console.error('Error al añadir trofeo:', error);
            alert('Error al añadir el trofeo. Inténtalo de nuevo.');
        }
    };
    // Función general para sumar o restar likes a cualquier usuario
    const updateLikes = async (nick: string, cantidad: number) => {
        if (!nick) return;
        const updatedUsers = usuarios.map(u =>
            u.nick === nick
                ? { ...u, likes: (u.likes || 0) + cantidad }
                : u
        );
        setUsuarios(updatedUsers);

        // Actualizar usuario en la base de datos
        await fetch('/api/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nick: nick,
                likes: (updatedUsers.find(u => u.nick === nick)?.likes || 0)
            })
        });

        // Si el usuario actual es el modificado, actualiza también el estado user
        if (user && user.nick === nick) {
            const newLikes = (user.likes || 0) + cantidad;
            setUser({ ...user, likes: newLikes });
            sessionStorage.setItem("user", JSON.stringify({ ...user, likes: newLikes }));
        }
        // Emitir evento 'storage' manualmente para refrescar otras páginas
        window.dispatchEvent(new Event('storage'));
    };
    // Función para desbloquear trofeo específico
    const handleUnlockTrofeo = async (trofeoIdx: number) => {
        if (!selectedUser) return;
        try {
            // Obtener el usuario seleccionado actualizado
            const currentUser = usuarios.find(u => u.nick === selectedUser);
            if (!currentUser) return;

            const updatedTrofeosDesbloqueados = Array.isArray(currentUser.trofeosDesbloqueados)
                ? [...new Set([...(currentUser.trofeosDesbloqueados || []), trofeoIdx])]
                : [trofeoIdx];
            const updatedTrofeosBloqueados = Array.isArray(currentUser.trofeosBloqueados)
                ? currentUser.trofeosBloqueados.filter((idx: number) => idx !== trofeoIdx)
                : [];

            // Actualizar el usuario en la base de datos
            const updatedUser = {
                ...currentUser,
                trofeosDesbloqueados: updatedTrofeosDesbloqueados,
                trofeosBloqueados: updatedTrofeosBloqueados
            };

            await UsersAPI.updateUser(updatedUser);

            // Actualizar el estado local
            const updatedUsers = usuarios.map(u =>
                u.nick === selectedUser ? updatedUser : u
            );
            setUsuarios(updatedUsers);

            // Si el usuario administrado es el actual, actualiza también el estado y sessionStorage
            if (user && user.nick === selectedUser) {
                setUser(updatedUser);
                sessionStorage.setItem("user", JSON.stringify(updatedUser));
            }

            // Disparar evento para refrescar la UI
            window.dispatchEvent(new Event('storage'));
            alert(`Trofeo #${trofeoIdx + 1} desbloqueado para ${selectedUser}`);
        } catch (error) {
            console.error('Error al desbloquear trofeo:', error);
            alert('Error al desbloquear el trofeo. Inténtalo de nuevo.');
        }
    };

    // Lista de trofeos normales (24)
    const TROFEOS = [
        { src: "/trofeo1.jpg", texto: "Trofeo 1", tipo: "auto" },
        { src: "/trofeo2.jpg", texto: "Trofeo 2", tipo: "auto" },
        { src: "/trofeo3.jpg", texto: "Trofeo 3", tipo: "auto" },
        { src: "/trofeo4.jpg", texto: "Trofeo 4", tipo: "auto" },
        { src: "/trofeo5.jpg", texto: "Trofeo 5", tipo: "auto" },
        { src: "/trofeo6.jpg", texto: "Trofeo 6", tipo: "auto" },
        { src: "/trofeo7.jpg", texto: "Trofeo 7", tipo: "auto" },
        { src: "/trofeo8.jpg", texto: "Trofeo 8", tipo: "auto" },
        { src: "/trofeo9.jpg", texto: "Trofeo 9", tipo: "auto" },
        { src: "/trofeo10.jpg", texto: "Trofeo 10", tipo: "auto" },
        { src: "/trofeo11.jpg", texto: "Trofeo 11", tipo: "auto" },
        { src: "/trofeo12.jpg", texto: "Trofeo 12", tipo: "auto" },
        { src: "/trofeo13.png", texto: "Trofeo 13", tipo: "auto" },
        { src: "/trofeo14.jpg", texto: "Trofeo 14", tipo: "auto" },
        { src: "/trofeo15.jpg", texto: "Trofeo 15", tipo: "auto" },
        { src: "/trofeo16.jpg", texto: "Trofeo 16", tipo: "auto" },
        { src: "/trofeo17.jpg", texto: "Trofeo 17", tipo: "auto" },
        { src: "/trofeo18.jpg", texto: "Trofeo 18", tipo: "auto" },
        { src: "/trofeo19.jpg", texto: "Trofeo 19", tipo: "auto" },
        { src: "/trofeo20.jpg", texto: "Trofeo 20", tipo: "auto" },
        { src: "/trofeo21.jpg", texto: "Trofeo 21", tipo: "auto" },
        { src: "/trofeo22.jpg", texto: "Trofeo 22", tipo: "auto" },
        { src: "/trofeo23.jpg", texto: "Trofeo 23", tipo: "auto" },
        { src: "/trofeo24.jpg", texto: "Trofeo 24", tipo: "auto" },
        { src: "/trofeo1.jpg", texto: "🏆 Campeón Mensual", tipo: "asignado" },
        { src: "/trofeo2.jpg", texto: "🥈 Subcampeón Mensual", tipo: "asignado" },
        { src: "/trofeo3.jpg", texto: "🥉 Tercer Lugar Mensual", tipo: "asignado" },
        { src: "/trofeo4.jpg", texto: "🏅 Top 10 Mensual", tipo: "asignado" },
        { src: "/trofeo5.jpg", texto: "📚 Participante Activo", tipo: "asignado" }
    ];
    // Lista de trofeos premium (12)
    // TROFEOS_PREMIUM ahora se importa desde trofeosPremiumImport.ts
    // Trofeos automáticos con condición
    const TROFEOS_AUTO = [
        { src: "/trofeo1.jpg", texto: "Trofeo 1", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 10 },
        { src: "/trofeo2.jpg", texto: "Trofeo 2", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 1 },
        { src: "/trofeo3.jpg", texto: "Trofeo 3", tipo: "auto", condicion: (user: any) => (user.comentariosRealizados || 0) >= 1 },
        { src: "/trofeo4.jpg", texto: "Trofeo 4", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 1 },
        { src: "/trofeo5.jpg", texto: "Trofeo 5", tipo: "auto", condicion: (user: any) => (user.preguntasAcertadas || 0) >= 20 },
        { src: "/trofeo6.jpg", texto: "Trofeo 6", tipo: "auto", condicion: (user: any) => (user.competicionesSuperadas || 0) >= 1 },
        { src: "/trofeo7.jpg", texto: "Trofeo 7", tipo: "auto", condicion: (user: any) => !!user.estaEnRanking },
        { src: "/trofeo8.jpg", texto: "Trofeo 8", tipo: "auto", condicion: (user: any) => (user.concursosGanados || 0) >= 1 },
        { src: "/trofeo9.jpg", texto: "Trofeo 9", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 100 },
        { src: "/trofeo10.jpg", texto: "Trofeo 10", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 10 },
        { src: "/trofeo11.jpg", texto: "Trofeo 11", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 3 },
        { src: "/trofeo12.jpg", texto: "Trofeo 12", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 3 },
        { src: "/trofeo13.png", texto: "Trofeo 13", tipo: "auto", condicion: (user: any) => !!user.estaEnRankingCompeticiones },
        { src: "/trofeo14.jpg", texto: "Trofeo 14", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 500 },
        { src: "/trofeo15.jpg", texto: "Trofeo 15", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 30 },
        { src: "/trofeo16.jpg", texto: "Trofeo 16", tipo: "auto", condicion: (user: any) => (user.comentariosRecibidos || 0) >= 10 },
        { src: "/trofeo17.jpg", texto: "Trofeo 17", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 15 },
        { src: "/trofeo18.jpg", texto: "Trofeo 18", tipo: "auto", condicion: (user: any) => (user.concursosGanados || 0) >= 3 },
        { src: "/trofeo19.jpg", texto: "Trofeo 19", tipo: "auto", condicion: (user: any) => (user.preguntasAcertadas || 0) >= 1000 },
        {
            src: "/trofeo20.jpg", texto: "Trofeo 20", tipo: "auto", condicion: (user: any) => {
                if (!user.fechaInscripcion) return false;
                const fecha = new Date(user.fechaInscripcion);
                const ahora = new Date();
                const diff = ahora.getTime() - fecha.getTime();
                return diff >= 365 * 24 * 60 * 60 * 1000; // 1 año en ms
            }
        },
        { src: "/trofeo21.jpg", texto: "Trofeo 21", tipo: "auto", condicion: (user: any) => (user.historias?.length || 0) >= 30 },
        { src: "/trofeo22.jpg", texto: "Trofeo 22", tipo: "auto", condicion: (user: any) => (user.likes || 0) >= 1000 },
        { src: "/trofeo23.jpg", texto: "Trofeo 23", tipo: "auto", condicion: (user: any) => (user.amigos?.length || 0) >= 50 }
    ];
    // Unificar todos los trofeos para el selector
    const TROFEOS_ALL = [...TROFEOS, ...TROFEOS_PREMIUM];
    // Función para obtener trofeos desbloqueados automáticamente
    const getAutoTrofeos = (user: any) => {
        // Trofeo Premium 7: Diseñador del Futuro
        // ...existing code...
        // Asegurar que el campo amigos es siempre un array actualizado
        const userSync = {
            ...user,
            amigos: Array.isArray(user.amigos) ? user.amigos : []
        };
        const autoTrofeos = TROFEOS_AUTO
            .map((t, idx) => (typeof t.condicion === 'function' && t.condicion(userSync)) ? idx : null)
            .filter(idx => idx !== null);

        // Desbloqueo automático de trofeos premium
        const esPremium = userSync.premium === true || userSync.isPremium === true || userSync.tipo === "premium";
        const historiasCreadas = Array.isArray(userSync.historias) ? userSync.historias.length : (userSync.historiasCreadas || 0);
        const preguntasAcertadas = userSync.preguntasAcertadas || 0;
        // Trofeo Premium 1: Historiador Premium
        if (esPremium && historiasCreadas >= 35) {
            autoTrofeos.push(TROFEOS.length); // Índice del trofeo premium 1
        }
        // Trofeo Premium 2: Sabio Premium
        if (esPremium && preguntasAcertadas >= 1200) {
            autoTrofeos.push(TROFEOS.length + 1); // Índice del trofeo premium 2
        }
        // Trofeo Premium 3: Amigo Premium
        const amigosCount = Array.isArray(userSync.amigos) ? userSync.amigos.length : 0;
        if (esPremium && amigosCount >= 60) {
            autoTrofeos.push(TROFEOS.length + 2); // Índice del trofeo premium 3
        }
        // Trofeo Premium 4: Espíritu Navideño Premium
        let tieneHistoriaNavidad = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaNavidad = userSync.historias.some((historia: any) => {
                if (!historia || !historia.titulo || !historia.fecha || !historia.modo) return false;
                const tituloLower = historia.titulo.toLowerCase();
                const esNavidad = tituloLower.includes("navidad") || tituloLower.includes("navideño") || tituloLower.includes("navideña");
                const fecha = new Date(historia.fecha);
                const year = fecha.getFullYear();
                // Rango: 20 diciembre a 6 enero (del año siguiente)
                const inicio = new Date(year, 11, 20); // 20 diciembre
                const fin = new Date(year + 1, 0, 6, 23, 59, 59); // 6 enero
                return historia.modo === "My Live" && esNavidad && fecha >= inicio && fecha <= fin;
            });
        }
        if (esPremium && tieneHistoriaNavidad) {
            autoTrofeos.push(TROFEOS.length + 3); // Índice del trofeo premium 4
        }
        // Trofeo Premium 5: Verano Dorado Premium
        let tieneHistoriaVerano = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneHistoriaVerano = userSync.historias.some((historia: any) => {
                if (!historia || !historia.fecha || !historia.modo) return false;
                const fecha = new Date(historia.fecha);
                // Rango: 15 junio a 15 septiembre
                const year = fecha.getFullYear();
                const inicio = new Date(year, 5, 15); // 15 junio
                const fin = new Date(year, 8, 15, 23, 59, 59); // 15 septiembre
                return historia.modo === "My Live" && fecha >= inicio && fecha <= fin;
            });
        }
        if (esPremium && tieneHistoriaVerano) {
            autoTrofeos.push(TROFEOS.length + 4); // Índice del trofeo premium 5
        }
        // Trofeo Premium 6: Veterano Dorado
        let mesesPremium = 0;
        if (userSync.premiumInicio && userSync.premiumExpiracion) {
            const inicio = new Date(userSync.premiumInicio);
            const fin = new Date(userSync.premiumExpiracion);
            // Calcular meses completos entre inicio y fin
            mesesPremium = (fin.getFullYear() - inicio.getFullYear()) * 12 + (fin.getMonth() - inicio.getMonth());
            // Si el día de expiración es menor que el de inicio, restar un mes
            if (fin.getDate() < inicio.getDate()) {
                mesesPremium--;
            }
        }
        if (esPremium && mesesPremium >= 6) {
            autoTrofeos.push(TROFEOS.length + 5); // Índice del trofeo premium 6
        }
        // Trofeo Premium 7: Diseñador del Futuro
        let tieneLogoStoryUp = false;
        if (esPremium && Array.isArray(userSync.historias)) {
            tieneLogoStoryUp = userSync.historias.some((historia: any) => {
                if (!historia || !historia.titulo || !historia.imagen) return false;
                const tituloLower = historia.titulo.toLowerCase();
                return tituloLower.includes("logo storyup") && !!historia.imagen;
            });
        }
        if (esPremium && tieneLogoStoryUp) {
            autoTrofeos.push(TROFEOS.length + 6); // Índice del trofeo premium 7
        }
        // Trofeo Premium 8: Escritor Premium
        if (esPremium && historiasCreadas >= 15) {
            autoTrofeos.push(TROFEOS.length + 7); // Índice del trofeo premium 8
        }

        // Trofeo Premium 9: Competidor Premium
        // Consigue al menos 30 trofeos (normales + premium)
        const totalTrofeosDesbloqueados = Array.isArray(userSync.trofeosDesbloqueados) ? userSync.trofeosDesbloqueados.length : 0;
        // Incluye los automáticos calculados en esta función
        const totalAutoTrofeos = autoTrofeos.length;
        const totalTrofeos = totalTrofeosDesbloqueados + totalAutoTrofeos;
        if (esPremium && totalTrofeos >= 30) {
            autoTrofeos.push(TROFEOS.length + 8); // Índice del trofeo premium 9
        }
        // Trofeo Premium 10: Cerebro de Oro
        // 2500+ preguntas acertadas en Aprende con Pipo
        if (esPremium && preguntasAcertadas >= 2500) {
            autoTrofeos.push(TROFEOS.length + 9); // Índice del trofeo premium 10
        }

        // Trofeo Premium 11: Analista Premium
        // Consigue nivel 3 en todas las materias en "Analisis por materias" de Estadísticas premium Avanzadas
        // Suponemos que user.nivelesMaterias es un objeto tipo { matematicas: 3, lenguaje: 3, ... }
        const materiasRequeridas = ["matematicas", "lenguaje", "ciencias", "ingles", "historia", "geografia", "literatura"];
        const nivelesMaterias = userSync.nivelesMaterias || {};
        const todasNivel3 = materiasRequeridas.every(m => nivelesMaterias[m] >= 3);
        if (esPremium && todasNivel3) {
            autoTrofeos.push(TROFEOS.length + 10); // Índice del trofeo premium 11
        }
        // Trofeo Premium 12: Red Social Premium
        // Conseguir 100+ amigos
        if (esPremium && amigosCount >= 100) {
            autoTrofeos.push(TROFEOS.length + 11); // Índice del trofeo premium 12
        }
        return autoTrofeos;
    };
    // Función para saber si un trofeo está desbloqueado
    const isTrofeoUnlocked = (user: any, idx: number) => {
        const auto = getAutoTrofeos(user);
        const manual = Array.isArray(user.trofeosDesbloqueados) ? user.trofeosDesbloqueados : [];
        const bloqueados = Array.isArray(user.trofeosBloqueados) ? user.trofeosBloqueados : [];
        const asignados = Array.isArray(user.trofeos) ? user.trofeos : [];
        return (auto.includes(idx) || manual.includes(idx) || asignados.includes(idx)) && !bloqueados.includes(idx);
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-green-100 flex items-center justify-center">
                <div className="max-w-md w-full bg-white shadow rounded p-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Perfil</h2>
                    <p className="text-gray-600">No se ha iniciado sesión.</p>
                </div>
            </div>
        );
    }
    const displayedUser = selectedUser ? usuarios.find(u => u.nick === selectedUser) || user : user;

    const isPremium = displayedUser ? displayedUser.premium === true : false;

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className="min-h-screen bg-green-100 flex flex-col pt-4">
                <div className="flex items-center justify-center mt-2 mb-4">
                    {mensajeRecibido && (
                        <button
                            className="bg-yellow-400 text-white px-2 py-1 rounded font-bold mr-4 animate-bounce"
                            onClick={() => {
                                setMensajeRecibido(false);
                                // No necesitamos remover de localStorage ya que se maneja en la BD
                            }}
                        >Mensaje recibido</button>
                    )}
                    <h2 className="text-3xl font-bold text-center">Perfil de {renderNick(displayedUser.nick)}</h2>

                    {/* Indicador Premium Animado */}
                    {isPremium && (
                        <div className="flex justify-center mt-2">
                            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg shadow-yellow-500/50 animate-pulse flex items-center gap-2">
                                <span className="animate-bounce">👑</span>
                                <span>PREMIUM ACTIVO</span>
                                <span className="animate-bounce">✨</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-row w-full">
                    {/* Datos personales */}
                    <div className={`max-w-md w-full bg-white shadow rounded p-6 ml-8 transition-all duration-500 ${isPremium
                        ? 'border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 animate-pulse relative overflow-hidden'
                        : ''
                        }`}>
                        {/* Efecto de partículas para premium */}
                        {isPremium && (
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                                <div className="absolute top-4 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
                                <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-80"></div>
                            </div>
                        )}

                        <div className="flex justify-between items-center mb-4 relative">
                            <h3 className={`text-xl font-bold text-center w-full transition-all duration-300 ${isPremium ? 'text-yellow-600' : ''
                                }`}>
                                {t('informacionPersonal')}
                                {isPremium && (
                                    <span className="ml-2 animate-spin">👑</span>
                                )}
                            </h3>
                        </div>                        <div className="flex flex-col items-center mb-4">
                            <div className={`relative ${isPremium ? '' : ''}`}>
                                <img
                                    src={displayedUser.avatar || "/avatars/simple1.png"}
                                    alt="Avatar"
                                    className={`w-20 h-20 rounded-full mb-2 transition-all duration-300 ${isPremium
                                        ? 'ring-4 ring-yellow-400 ring-opacity-70 shadow-lg shadow-yellow-400/50 hover:scale-110'
                                        : ''
                                        }`}
                                />
                                {isPremium && (
                                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs animate-bounce">
                                        ✨
                                    </div>
                                )}
                            </div>

                            <button className={`px-4 py-2 rounded font-semibold transition-all duration-300 ${isPremium
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 shadow-lg hover:shadow-yellow-500/50 hover:scale-105'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`} onClick={() => router.push('/perfil/avatar')}>
                                Cambiar avatar
                            </button>
                        </div>
                        <div className="mb-2"><strong>{t('nombre')}:</strong> {displayedUser.nombre}</div>
                        <div className="mb-2"><strong>Nick:</strong> {renderNick(displayedUser.nick)}</div>
                        <div className="mb-2"><strong>{t('email')}:</strong> {displayedUser.email}</div>
                        <div className="mb-2"><strong>{t('centroEducativo')}:</strong> {displayedUser.centro}</div>
                        <div className="mb-2"><strong>{t('curso')}:</strong> {displayedUser.curso}</div>
                        <div className="mb-2"><strong>{t('tipoUsuario')}:</strong> {user.tipo}</div>
                        <div className="mb-2"><strong>{t('fechaInscripcion')}:</strong> {user.fechaInscripcion ? new Date(user.fechaInscripcion).toLocaleDateString('es-ES') : ''}</div>
                        <div className="mb-2 flex items-center">
                            {/* Datos personales en filas de dos en dos, con bloques redondos */}
                            <div className="flex flex-col mt-2 gap-y-4">
                                <div className="flex flex-row gap-x-12">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">👍</span>
                                        <strong>Likes:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-300 text-green-900 font-bold text-sm">{displayedUser.likes || 0}</span>
                                    </div>
                                    <div className="flex items-center ml-8">
                                        <span className="mr-2 text-lg">👥</span>
                                        <strong>{t('totalAmigos')}:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-900 font-bold text-sm">{displayedUser.amigos ? displayedUser.amigos.length : 0}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-12">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">📖</span>
                                        <strong>{t('totalHistorias')}:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-200 text-purple-900 font-bold text-sm">{displayedUser.historias ? displayedUser.historias.length : 0}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">💬</span>
                                        <strong>{t('totalComentarios')}:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-200 text-yellow-900 font-bold text-sm">{displayedUser.comentariosRecibidos || 0}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-12">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">🏆</span>
                                        <strong>{t('trofeosDesbloqueados')}:</strong>
                                        {(() => {
                                            // Trofeos automáticos
                                            const auto = getAutoTrofeos(displayedUser);
                                            // Manuales
                                            const manual = Array.isArray(displayedUser.trofeosDesbloqueados) ? displayedUser.trofeosDesbloqueados : [];
                                            // Asignados (por competiciones, etc.)
                                            const asignados = Array.isArray(displayedUser.trofeos) ? displayedUser.trofeos : [];
                                            // Premium
                                            const premiumCount = manual.filter((idx: number) => idx >= TROFEOS.length && idx < TROFEOS.length + TROFEOS_PREMIUM.length).length;
                                            // Unir todos y contar únicos
                                            const total = new Set([...auto, ...manual, ...asignados]).size + premiumCount;
                                            return (
                                                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-200 text-pink-900 font-bold text-sm">{total}</span>
                                            );
                                        })()}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">✅</span>
                                        <strong>Respuestas acertadas:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-200 text-indigo-900 font-bold text-sm">{user.preguntasAcertadas || 0}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-12">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">🥇</span>
                                        <strong>Competiciones:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-200 text-teal-900 font-bold text-sm">{displayedUser.competicionesSuperadas || 0}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2 text-lg">🎉</span>
                                        <strong>Concursos:</strong>
                                        <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-200 text-red-900 font-bold text-sm">{displayedUser.concursosGanados || 0}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 ml-8">
                        <div className="flex flex-row gap-4">
                            {/* Trofeos */}
                            <div className="max-w-md w-full bg-white shadow rounded p-6">
                                <h3 className="text-xl font-bold mb-4 text-center">{t('trofeosDesbloqueados')}</h3>
                                <div className="grid grid-cols-6 gap-2">
                                    {TROFEOS.map((trofeo, idx) => {
                                        const tieneTrofeo = isTrofeoUnlocked(user, idx);
                                        return (
                                            <div key={idx} className={`relative bg-white rounded-lg shadow flex items-center justify-center w-14 h-14 border border-gray-200 ${tieneTrofeo ? '' : 'opacity-40'}`}>
                                                <img src={trofeo.src} alt={trofeo.texto} className="w-10 h-10 object-contain" />
                                                {tieneTrofeo ? (
                                                    <span className="absolute top-1 right-1 bg-yellow-200 text-xs font-bold rounded px-1 py-0.5">{idx + 1}</span>
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <svg width="56" height="56" viewBox="0 0 56 56" className="absolute text-red-500" style={{ zIndex: 2, left: 0, top: 0 }}>
                                                            <line x1="0" y1="0" x2="56" y2="56" stroke="currentColor" strokeWidth="6" />
                                                            <line x1="56" y1="0" x2="0" y2="56" stroke="currentColor" strokeWidth="6" />
                                                        </svg>
                                                        <svg width="48" height="48" viewBox="0 0 20 20" fill="none" className="text-yellow-500">
                                                            <rect x="2" y="7" width="16" height="10" rx="3" fill="currentColor" />
                                                            <rect x="5" y="2" width="10" height="7" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                                                            <circle cx="10" cy="13" r="2" fill="#fff" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* Trofeos Premium */}
                            <div className={`max-w-md w-full bg-white shadow rounded p-6 transition-all duration-500 ${isPremium
                                ? 'border-4 border-yellow-400 shadow-2xl shadow-yellow-400/50 animate-pulse relative overflow-hidden'
                                : ''
                                }`}>
                                {/* Efectos premium para trofeos */}
                                {isPremium && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                                        <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-300 rounded-full animate-bounce opacity-70"></div>
                                    </div>
                                )}

                                <h3 className={`text-xl font-bold mb-4 text-center transition-all duration-300 ${isPremium ? 'text-yellow-600' : ''
                                    }`}>
                                    Trofeos Premium
                                    {isPremium && <span className="ml-2 animate-spin">👑</span>}
                                </h3>
                                <div className="grid grid-cols-4 gap-4 w-full">
                                    {TROFEOS_PREMIUM.map((trofeo, idx) => {
                                        const tieneTrofeo = isTrofeoUnlocked(user, TROFEOS.length + idx);
                                        return (
                                            <div key={idx} className={`relative bg-white rounded-lg shadow flex items-center justify-center w-20 h-20 border-2 border-yellow-400 ${tieneTrofeo ? '' : 'opacity-40'}`}>
                                                <img src={trofeo.src} alt={`Premium ${idx + 1}`} className="w-16 h-16 object-contain" />
                                                {tieneTrofeo ? (
                                                    <span className="absolute top-1 right-1 bg-yellow-300 text-sm font-bold rounded px-2 py-0.5">{idx + 1}</span>
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <svg width="72" height="72" viewBox="0 0 72 72" className="absolute text-red-500" style={{ zIndex: 2, left: 0, top: 0 }}>
                                                            <line x1="0" y1="0" x2="72" y2="72" stroke="currentColor" strokeWidth="8" />
                                                            <line x1="72" y1="0" x2="0" y2="72" stroke="currentColor" strokeWidth="8" />
                                                        </svg>
                                                        <svg width="64" height="64" viewBox="0 0 20 20" fill="none" className="text-yellow-500">
                                                            <rect x="2" y="7" width="16" height="10" rx="3" fill="currentColor" />
                                                            <rect x="5" y="2" width="10" height="7" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                                                            <circle cx="10" cy="13" r="2" fill="#fff" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Chat justo debajo de los trofeos, con ancho limitado */}
                        <div className="flex flex-row justify-start mt-16">
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row items-start gap-6" style={{ width: 'calc(2 * 28rem + 1rem)' }}>
                                {/* 2 bloques de trofeos de max-w-md (28rem) + gap-4 (1rem) */}
                                <div className="w-64 flex flex-col items-start">
                                    <label htmlFor="destinatario" className="font-medium mb-2 text-sm">Enviar a usuario:</label>
                                    <select
                                        id="destinatario"
                                        className="px-2 py-2 rounded border border-blue-300 bg-white w-full text-sm"
                                        value={selectedUser}
                                        onChange={e => setSelectedUser(e.target.value)}
                                    >
                                        <option value="">{t('seleccionarUsuario')}</option>
                                        {usuarios
                                            .filter((u, i, arr) => arr.findIndex(x => x.nick === u.nick) === i)
                                            .sort((a, b) => a.nick.localeCompare(b.nick))
                                            .map((u: any) => (
                                                <option key={u.nick} value={u.nick}>{u.nick}</option>
                                            ))}
                                    </select>
                                </div>
                                <div className="flex-1 flex flex-col items-center">
                                    <div className="flex items-center mb-4">
                                        <h3 className="text-xl font-bold text-center flex-1">Chat</h3>
                                    </div>
                                    <div className="w-full h-64 bg-gray-50 rounded-lg border border-gray-200 p-4 overflow-y-auto flex flex-col">
                                        {chatMessages.length === 0 ? (
                                            <div className="flex-1 flex items-center justify-center text-gray-400">El chat estará disponible aquí.</div>
                                        ) : (
                                            chatMessages.map((msg, idx) => (
                                                <div key={idx} className="mb-2 text-sm flex justify-between items-center">
                                                    <span>
                                                        <strong>{msg.from === user.nick ? "Tú" : msg.from} → {msg.to === user.nick ? "Tú" : msg.to}:</strong> {msg.text}
                                                    </span>
                                                    {msg.fecha && (
                                                        <span className="ml-2 text-xs text-gray-500">{msg.fecha}</span>
                                                    )}
                                                </div>
                                            ))
                                        )}
                                        <div className="w-full mt-4 flex">
                                            <input
                                                type="text"
                                                className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
                                                placeholder="Escribe un mensaje..."
                                                value={chatInput}
                                                onChange={e => setChatInput(e.target.value)}
                                                disabled={!selectedUser}
                                            />
                                            <button
                                                className="bg-green-500 text-white px-4 py-2 rounded-r font-semibold"
                                                disabled={!selectedUser || !chatInput.trim()}
                                                onClick={async () => {
                                                    if (selectedUser && chatInput.trim() && user && user.nick) {
                                                        try {
                                                            const mensaje = {
                                                                from: user.nick,
                                                                to: selectedUser,
                                                                text: chatInput,
                                                                fecha: new Date().toLocaleString('es-ES')
                                                            };

                                                            // Obtener mensajes actuales del emisor
                                                            const chatEmisor = await ChatAPI.getChat(user.nick);
                                                            const mensajesEmisorActuales = chatEmisor.messages || [];
                                                            const nuevosMensajesEmisor = [...mensajesEmisorActuales, mensaje];
                                                            await ChatAPI.setChat(user.nick, nuevosMensajesEmisor, false);

                                                            // Obtener mensajes actuales del receptor
                                                            const chatReceptor = await ChatAPI.getChat(selectedUser);
                                                            const mensajesReceptorActuales = chatReceptor.messages || [];
                                                            const nuevosMensajesReceptor = [...mensajesReceptorActuales, mensaje];
                                                            await ChatAPI.setChat(selectedUser, nuevosMensajesReceptor, true);

                                                            // Actualizar mensajes locales
                                                            setChatMessages(nuevosMensajesEmisor.slice(-5));

                                                            // Activar aviso para receptor (esto podría manejarse en la API)
                                                            // Forzar actualización en la app del receptor
                                                            window.dispatchEvent(new Event('storage'));

                                                            setChatInput("");
                                                        } catch (error) {
                                                            console.error('Error al enviar mensaje:', error);
                                                            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
                                                        }
                                                    }
                                                }}
                                            >{t('enviar')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Solo los docentes ven los siguientes bloques debajo del chat */}
                {user.tipo === "docente" && (
                    <div className="w-full max-w-6xl mx-auto mt-20">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-center mb-2">Crear noticia</h3>
                                <form className="w-full flex flex-col gap-4" onSubmit={handleNoticiaSubmit}>
                                    <input
                                        type="text"
                                        className="border rounded px-3 py-2 w-full"
                                        placeholder="Título de la noticia"
                                        value={noticiaTitulo}
                                        onChange={e => setNoticiaTitulo(e.target.value)}
                                    />
                                    <div className="relative w-full">
                                        <textarea
                                            className="border rounded px-3 py-2 w-full min-h-[80px]"
                                            placeholder="Escribe la noticia aquí..."
                                            value={noticiaTexto}
                                            onChange={e => setNoticiaTexto(e.target.value)}
                                        />
                                        {noticiaImagen && (
                                            <img src={noticiaImagen} alt="Previsualización" className="absolute left-0 top-0 w-full h-full object-contain rounded shadow pointer-events-none" style={{ zIndex: 1, opacity: 0.7 }} />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 mt-2">
                                        <input
                                            id="noticia-imagen"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={e => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setNombreArchivo(file.name);
                                                    const reader = new FileReader();
                                                    reader.onload = (ev) => {
                                                        setNoticiaImagen(ev.target?.result as string);
                                                    };
                                                    reader.readAsDataURL(file);
                                                } else {
                                                    setNombreArchivo("");
                                                    setNoticiaImagen("");
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded font-semibold border"
                                            onClick={() => document.getElementById('noticia-imagen')?.click()}
                                        >Seleccionar imagen</button>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Publicar noticia</button>
                                    </div>
                                </form>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-center mb-2">Crear concurso</h3>
                                <form className="w-full flex flex-col gap-4" onSubmit={handleConcursoSubmit}>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="text"
                                            className="border rounded px-3 py-2 flex-1"
                                            placeholder={t('titulo')}
                                            value={concursoTitulo}
                                            onChange={e => setConcursoTitulo(e.target.value)}
                                        />
                                        <span className="text-sm text-gray-500">ID: {concursoId}</span>
                                    </div>
                                    <textarea
                                        className="border rounded px-3 py-2 w-full min-h-[80px]"
                                        placeholder={t('descripcion')}
                                        value={concursoTexto}
                                        onChange={e => setConcursoTexto(e.target.value)}
                                    />
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col flex-1">
                                            <label className="text-sm mb-1">{t('fechaInicio')}</label>
                                            <input type="date" className="border rounded px-3 py-2" value={fechaInicio} onChange={e => setFechaInicio(e.target.value)} />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="text-sm mb-1">{t('fechaFin')}</label>
                                            <input type="date" className="border rounded px-3 py-2" value={fechaFin} onChange={e => setFechaFin(e.target.value)} />
                                        </div>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">{t('enviar')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Gestión de Concursos Finalizados - Solo para docentes */}
                        <div className="w-full mt-6 pt-4 border-t border-gray-200">
                            <h4 className="text-lg font-semibold text-center mb-3 text-gray-700">{t('gestionarConcursosFinalizados')}</h4>
                            <div className="flex flex-col gap-3">
                                <select
                                    className="border rounded px-3 py-2 text-sm"
                                    value={concursoSeleccionado}
                                    onChange={e => setConcursoSeleccionado(e.target.value)}
                                    key={`concurso-select-${refreshKey}`}
                                >
                                    <option value="">{t('seleccionarConcurso')}</option>
                                    {(() => {
                                        const hoy = new Date();
                                        return concursos
                                            .filter((c: any) => {
                                                if (!c.fin) return false;
                                                const fechaFin = new Date(c.fin);
                                                const ahora = new Date();
                                                // Solo mostrar concursos del docente actual que hayan finalizado y sin ganador
                                                return fechaFin < ahora && c.autor === user.nick && !c.ganador;
                                            })
                                            .map((c: any) => (
                                                <option key={c.numero} value={c.numero}>
                                                    {c.titulo} (ID: {c.numero}) - {c.ganador ? `Ganador: ${c.ganador}` : 'Sin ganador'}
                                                </option>
                                            ));
                                    })()}
                                </select>
                                <select
                                    className="border rounded px-3 py-2 text-sm"
                                    value={ganadorSeleccionado}
                                    onChange={e => setGanadorSeleccionado(e.target.value)}
                                >
                                    <option value="">{t('seleccionarGanador')}</option>
                                    {usuarios.sort((a, b) => a.nick.localeCompare(b.nick)).map((u, idx) => (
                                        <option key={idx} value={u.nick}>{u.nick}</option>
                                    ))}
                                </select>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded font-semibold text-sm"
                                    onClick={handleAsignarGanador}
                                    disabled={!concursoSeleccionado || !ganadorSeleccionado}
                                >
                                    {t('asignarGanador')}
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 mt-6">
                            <h3 className="text-xl font-bold text-center mb-2">Agregar Pregunta - Aprende con Pipo</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-700 mb-2">Curso:</label>
                                    <select
                                        value={cursoSeleccionado}
                                        onChange={(e) => setCursoSeleccionado(e.target.value)}
                                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="1primaria">1º Primaria</option>
                                        <option value="2primaria">2º Primaria</option>
                                        <option value="3primaria">3º Primaria</option>
                                        <option value="4primaria">4º Primaria</option>
                                        <option value="5primaria">5º Primaria</option>
                                        <option value="6primaria">6º Primaria</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-blue-700 mb-2">Asignatura:</label>
                                    <select
                                        value={asignaturaSeleccionada}
                                        onChange={(e) => setAsignaturaSeleccionada(e.target.value)}
                                        className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="campeonato">Campeonato</option>
                                        <option value="general">General</option>
                                        <option value="matematicas">Matemáticas</option>
                                        <option value="lenguaje">Lenguaje</option>
                                        <option value="literatura">Literatura</option>
                                        <option value="historia">Historia</option>
                                        <option value="geografia">Geografía</option>
                                        <option value="ingles">Inglés</option>
                                        <option value="naturaleza">Naturaleza</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-blue-700 mb-2">Pregunta:</label>
                                <textarea
                                    value={pregunta}
                                    onChange={(e) => setPregunta(e.target.value)}
                                    placeholder="Escribe la pregunta aquí..."
                                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-blue-700 mb-2">Respuesta:</label>
                                <input
                                    type="text"
                                    value={respuesta}
                                    onChange={(e) => setRespuesta(e.target.value)}
                                    placeholder="Escribe la respuesta aquí..."
                                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    onClick={enviarPregunta}
                                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all"
                                >
                                    ✅ Enviar Pregunta
                                </button>
                            </div>
                            <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded">
                                <p className="text-sm text-blue-800">
                                    <strong>💡 Información:</strong> Las preguntas se agregan automáticamente al archivo correspondiente
                                    <code className="bg-blue-200 px-1 rounded">{asignaturaSeleccionada}-{cursoSeleccionado}.json</code>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                {/* Panel de administración y antibullying solo para docentes */}
                {
                    user.tipo && user.tipo.toLowerCase() === "docente" && (
                        <div className="w-full max-w-6xl mx-auto mt-16 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                            <div className="w-full">
                                <h3 className="text-xl font-bold mb-4 text-center">{t('panelAdministracion')}</h3>
                                <form className="w-full flex flex-col items-center gap-4" onSubmit={handlePalabraProhibidaSubmit}>
                                    <div className="flex w-full max-w-xs items-center gap-2">
                                        <input
                                            type="text"
                                            className="border rounded px-3 py-2 min-w-[280px] max-w-full"
                                            placeholder={t('palabraProhibida')}
                                            value={palabraProhibida}
                                            onChange={e => setPalabraProhibida(e.target.value)}
                                        />
                                        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded font-semibold whitespace-nowrap">Seleccionar</button>
                                    </div>
                                </form>
                                <h4 className="text-lg font-semibold mt-6 text-center">{t('sistemaAntibullying')}</h4>
                                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md text-gray-700 max-w-2xl mx-auto">
                                    <div className="flex flex-row items-start gap-8">
                                        <div className="flex-1">
                                            <p className="font-semibold mb-2">{t('avisoAntibullying')}</p>
                                            <ol className="list-decimal ml-6 space-y-1">
                                                <li>{t('historiasTerror')}</li>
                                                <li>{t('perdidaLikes')}</li>
                                                <li>{t('mensajesUsuario')}</li>
                                                <li>{t('palabrasProhibidasChat')}</li>
                                                <li>{t('actividadConsecutiva')}</li>
                                            </ol>
                                        </div>
                                        <div className="flex flex-col items-center justify-center min-w-[180px]">
                                            <button
                                                type="button"
                                                className={`relative w-32 h-32 rounded-full font-bold text-white text-lg mb-2 transition-all flex items-center justify-center ${bullyingActivo ? 'bg-red-600 opacity-100 shadow-lg animate-blink' : 'bg-green-600 opacity-40'}`}
                                                disabled={!bullyingActivo}
                                                onClick={handleApagarBullying}
                                            >
                                                {bullyingActivo ? 'Aviso Antibullying' : t('sinPeligro')}
                                                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-70">
                                                        <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="10" />
                                                        <line x1="90" y1="10" x2="10" y2="90" stroke="white" strokeWidth="10" />
                                                    </svg>
                                                </span>
                                            </button>
                                            {usuarioBullying && (
                                                <div className="text-center text-red-700 font-semibold text-base">{usuarioBullying}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* Bloque especial para PIPO68(Admin) */}
                {
                    user.nick === "PIPO68" && (
                        <div className="w-full max-w-2xl mx-auto mt-16 bg-blue-50 border-l-4 border-blue-400 p-2 rounded-md text-blue-700">
                            <h4 className="text-lg font-bold text-center mb-2">Solo para PIPO68(Admin)</h4>
                            <div className="flex flex-col gap-2 items-center">
                                <label htmlFor="admin-user-select" className="font-semibold">Selecciona usuario:</label>
                                <select
                                    id="admin-user-select"
                                    className="border rounded px-3 py-2 w-full max-w-xs"
                                    value={selectedUser}
                                    onChange={e => setSelectedUser(e.target.value)}
                                >
                                    <option value="">Selecciona un usuario</option>
                                    {usuarios
                                        .filter((u, i, arr) => arr.findIndex(x => x.nick === u.nick) === i)
                                        .sort((a, b) => a.nick.localeCompare(b.nick))
                                        .map((u: any) => (
                                            <option key={u.nick} value={u.nick}>{u.nick}</option>
                                        ))}
                                </select>
                                <div className="flex gap-4 mt-1">
                                    <button
                                        className="bg-pink-500 text-white px-4 py-2 rounded font-semibold"
                                        disabled={!selectedUser}
                                        onClick={() => selectedUser && updateLikes(selectedUser, 1)}
                                    >Añadir like</button>
                                </div>
                                {/* Selector de trofeos para desbloquear */}
                                <div className="flex flex-col gap-1 mt-2 w-full max-w-xs">
                                    <label className="font-semibold">Desbloquear trofeo:</label>
                                    <select
                                        className="border-2 border-blue-500 bg-white rounded px-3 py-2"
                                        value={trofeoSeleccionado}
                                        onChange={e => setTrofeoSeleccionado(e.target.value)}
                                    >
                                        <option value="">Selecciona trofeo</option>
                                        {TROFEOS.map((trofeo, idx) => (
                                            <option key={"normal-" + (idx + 1)} value={"normal-" + (idx + 1)}>{`Trofeo #${idx + 1} - ${trofeo.texto}`}</option>
                                        ))}
                                        {TROFEOS_PREMIUM.map((trofeo, idx) => (
                                            <option key={"premium-" + (idx + 1)} value={"premium-" + (idx + 1)}>{`Premium #${idx + 1} - ${trofeo.texto}`}</option>
                                        ))}
                                    </select>
                                    <button
                                        className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold mt-1"
                                        disabled={!selectedUser || trofeoSeleccionado === ""}
                                        onClick={() => {
                                            if (trofeoSeleccionado.startsWith("normal-")) {
                                                handleUnlockTrofeo(Number(trofeoSeleccionado.replace("normal-", "")) - 1);
                                            } else if (trofeoSeleccionado.startsWith("premium-")) {
                                                handleUnlockTrofeo(24 + Number(trofeoSeleccionado.replace("premium-", "")) - 1);
                                            }
                                        }}
                                    >
                                        Desbloquear trofeo
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded font-semibold mt-1"
                                        disabled={!selectedUser || trofeoSeleccionado === ""}
                                        onClick={() => {
                                            if (trofeoSeleccionado.startsWith("normal-")) {
                                                handleLockTrofeo(Number(trofeoSeleccionado.replace("normal-", "")) - 1);
                                            } else if (trofeoSeleccionado.startsWith("premium-")) {
                                                handleLockTrofeo(24 + Number(trofeoSeleccionado.replace("premium-", "")) - 1);
                                            }
                                        }}
                                    >
                                        Bloquear trofeo
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </>
    );
}

export default PerfilUsuario;
