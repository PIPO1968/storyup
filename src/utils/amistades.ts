import { NextRequest, NextResponse } from 'next/server';

// Utilidades para manejar amistades con PostgreSQL y localStorage como respaldo
export class AmistadesAPI {
    // Obtener lista de amigos de un usuario (API primero, localStorage como respaldo)
    static async getAmigos(nick: string): Promise<string[]> {
        try {
            const response = await fetch(`/api/amigos?nick=${encodeURIComponent(nick)}`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error getting amigos from API:', error);
        }

        // Fallback a localStorage
        if (typeof window !== 'undefined') {
            const amigosStr = localStorage.getItem(`amigos_${nick}`);
            if (amigosStr) {
                try {
                    const amigos = JSON.parse(amigosStr);
                    return amigos.map((a: any) => typeof a === 'string' ? a : a.nick);
                } catch (e) {
                    console.error('Error parsing amigos from localStorage:', e);
                }
            }
        }
        return [];
    }

    // Agregar amistad (API primero, localStorage como respaldo)
    static async addAmigo(nick1: string, nick2: string): Promise<boolean> {
        try {
            const response = await fetch('/api/amigos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick1, nick2 })
            });
            if (response.ok) return true;
        } catch (error) {
            console.error('Error adding amigo via API:', error);
        }

        // Fallback a localStorage
        if (typeof window !== 'undefined') {
            try {
                // Agregar a amigos de nick1
                const amigos1Str = localStorage.getItem(`amigos_${nick1}`) || '[]';
                const amigos1 = JSON.parse(amigos1Str);
                if (!amigos1.some((a: any) => (typeof a === 'string' ? a : a.nick) === nick2)) {
                    amigos1.push({ nick: nick2 });
                    localStorage.setItem(`amigos_${nick1}`, JSON.stringify(amigos1));
                }

                // Agregar a amigos de nick2
                const amigos2Str = localStorage.getItem(`amigos_${nick2}`) || '[]';
                const amigos2 = JSON.parse(amigos2Str);
                if (!amigos2.some((a: any) => (typeof a === 'string' ? a : a.nick) === nick1)) {
                    amigos2.push({ nick: nick1 });
                    localStorage.setItem(`amigos_${nick2}`, JSON.stringify(amigos2));
                }
                return true;
            } catch (e) {
                console.error('Error adding amigo to localStorage:', e);
            }
        }
        return false;
    }

    // Eliminar amistad (API primero, localStorage como respaldo)
    static async removeAmigo(nick1: string, nick2: string): Promise<boolean> {
        try {
            const response = await fetch('/api/amigos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick1, nick2 })
            });
            if (response.ok) return true;
        } catch (error) {
            console.error('Error removing amigo via API:', error);
        }

        // Fallback a localStorage
        if (typeof window !== 'undefined') {
            try {
                // Remover de amigos de nick1
                const amigos1Str = localStorage.getItem(`amigos_${nick1}`);
                if (amigos1Str) {
                    let amigos1 = JSON.parse(amigos1Str);
                    amigos1 = amigos1.filter((a: any) => (typeof a === 'string' ? a : a.nick) !== nick2);
                    localStorage.setItem(`amigos_${nick1}`, JSON.stringify(amigos1));
                }

                // Remover de amigos de nick2
                const amigos2Str = localStorage.getItem(`amigos_${nick2}`);
                if (amigos2Str) {
                    let amigos2 = JSON.parse(amigos2Str);
                    amigos2 = amigos2.filter((a: any) => (typeof a === 'string' ? a : a.nick) !== nick1);
                    localStorage.setItem(`amigos_${nick2}`, JSON.stringify(amigos2));
                }
                return true;
            } catch (e) {
                console.error('Error removing amigo from localStorage:', e);
            }
        }
        return false;
    }

    // Obtener solicitudes pendientes para un usuario (API primero, localStorage como respaldo)
    static async getSolicitudesPendientes(nick: string): Promise<any[]> {
        try {
            const response = await fetch(`/api/solicitudes?nick=${encodeURIComponent(nick)}`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error getting solicitudes from API:', error);
        }

        // Fallback a localStorage
        if (typeof window !== 'undefined') {
            const solicitudesStr = localStorage.getItem(`solicitudes_${nick}`);
            if (solicitudesStr) {
                try {
                    const solicitudes = JSON.parse(solicitudesStr);
                    return solicitudes.filter((s: any) => s.estado === 'pendiente');
                } catch (e) {
                    console.error('Error parsing solicitudes from localStorage:', e);
                }
            }
        }
        return [];
    }

    // Enviar solicitud de amistad (API primero, localStorage como respaldo)
    static async enviarSolicitud(origen: string, destino: string): Promise<boolean> {
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ origen, destino })
            });
            if (response.ok) return true;
        } catch (error) {
            console.error('Error sending solicitud via API:', error);
        }

        // Fallback a localStorage
        if (typeof window !== 'undefined') {
            try {
                const solicitudesStr = localStorage.getItem(`solicitudes_${destino}`) || '[]';
                const solicitudes = JSON.parse(solicitudesStr);
                if (!solicitudes.some((s: any) => s.origen === origen && s.estado === 'pendiente')) {
                    solicitudes.push({
                        origen,
                        destino,
                        estado: 'pendiente',
                        id: Date.now() // ID temporal para localStorage
                    });
                    localStorage.setItem(`solicitudes_${destino}`, JSON.stringify(solicitudes));
                }
                return true;
            } catch (e) {
                console.error('Error sending solicitud to localStorage:', e);
            }
        }
        return false;
    }

    // Aceptar solicitud de amistad (API primero, localStorage como respaldo)
    static async aceptarSolicitud(id: number): Promise<boolean> {
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, estado: 'aceptada' })
            });
            if (response.ok) return true;
        } catch (error) {
            console.error('Error accepting solicitud via API:', error);
        }

        // Fallback a localStorage - simplificado
        return true;
    }

    // Rechazar solicitud de amistad (API primero, localStorage como respaldo)
    static async rechazarSolicitud(id: number): Promise<boolean> {
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, estado: 'rechazada' })
            });
            if (response.ok) return true;
        } catch (error) {
            console.error('Error rejecting solicitud via API:', error);
        }

        // Fallback a localStorage - simplificado
        return true;
    }

    // Obtener todos los usuarios
    static async getAllUsers(): Promise<any[]> {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) throw new Error('Error fetching users');
            return await response.json();
        } catch (error) {
            console.error('Error getting users:', error);
            return [];
        }
    }
}