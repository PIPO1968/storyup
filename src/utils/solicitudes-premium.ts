export interface SolicitudPremium {
    id: string;
    nick: string;
    email: string;
    metodoPago: string;
    fecha: string;
    estado?: string;
    fecha_aprobacion?: string;
    fecha_rechazo?: string;
    motivo?: string;
}

export class SolicitudesPremiumAPI {
    static async getAllSolicitudes(): Promise<SolicitudPremium[]> {
        const response = await fetch('/api/solicitudes-premium');
        if (!response.ok) {
            throw new Error('Error al obtener solicitudes premium');
        }
        return response.json();
    }

    static async createSolicitud(solicitud: SolicitudPremium): Promise<SolicitudPremium> {
        const response = await fetch('/api/solicitudes-premium', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(solicitud),
        });
        if (!response.ok) {
            throw new Error('Error al crear solicitud premium');
        }
        return response.json();
    }

    static async updateSolicitud(id: string, updates: Partial<SolicitudPremium>): Promise<SolicitudPremium | null> {
        try {
            const response = await fetch('/api/solicitudes-premium', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, ...updates })
            });
            if (!response.ok) throw new Error('Error al actualizar solicitud premium');
            return await response.json();
        } catch (error) {
            console.error('Error al actualizar solicitud premium:', error);
            return null;
        }
    }
}