export interface SolicitudPremium {
    id: string;
    nick: string;
    email: string;
    metodoPago: string;
    fecha: string;
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
}