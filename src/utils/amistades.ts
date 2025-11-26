// Utilidad para manejar operaciones de amistades con PostgreSQL

export interface SolicitudAmistad {
    origen: string;
    destino: string;
    fecha?: string;
    [key: string]: unknown;
}

export class AmistadesAPI {
    // Obtener lista de amigos de un usuario
    static async getAmigos(nick: string): Promise<string[]> {
        try {
            const response = await fetch(`/api/amigos?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error fetching amigos');
            return await response.json();
        } catch (error) {
            console.error('Error getting amigos:', error);
            return [];
        }
    }

    // Agregar amistad
    static async addAmigo(nick1: string, nick2: string): Promise<boolean> {
        try {
            const response = await fetch('/api/amigos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick1, nick2 })
            });
            return response.ok;
        } catch (error) {
            console.error('Error adding amigo:', error);
            return false;
        }
    }

    // Eliminar amistad
    static async removeAmigo(nick1: string, nick2: string): Promise<boolean> {
        try {
            const response = await fetch('/api/amigos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick1, nick2 })
            });
            return response.ok;
        } catch (error) {
            console.error('Error removing amigo:', error);
            return false;
        }
    }

    // Obtener solicitudes pendientes para un usuario
    static async getSolicitudesPendientes(nick: string): Promise<SolicitudAmistad[]> {
        try {
            const response = await fetch(`/api/solicitudes?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error fetching solicitudes');
            return await response.json();
        } catch (error) {
            console.error('Error getting solicitudes:', error);
            return [];
        }
    }

    // Enviar solicitud de amistad
    static async enviarSolicitud(origen: string, destino: string): Promise<boolean> {
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ origen, destino })
            });
            return response.ok;
        } catch (error) {
            console.error('Error sending solicitud:', error);
            return false;
        }
    }

    // Aceptar solicitud de amistad
    static async aceptarSolicitud(id: number): Promise<boolean> {
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, estado: 'aceptada' })
            });
            return response.ok;
        } catch (error) {
            console.error('Error accepting solicitud:', error);
            return false;
        }
    }

    // Rechazar solicitud de amistad
    static async rechazarSolicitud(id: number): Promise<boolean> {
        try {
            const response = await fetch('/api/solicitudes', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, estado: 'rechazada' })
            });
            return response.ok;
        } catch (error) {
            console.error('Error rejecting solicitud:', error);
            return false;
        }
    }
}