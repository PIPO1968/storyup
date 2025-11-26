// Utilidad para manejar premios mensuales con PostgreSQL

export interface PremioMensual {
    id?: number;
    nick: string;
    puntos: number;
    posicion: number;
    mes: number;
    year: number;
    premio?: string;
    [key: string]: unknown;
}

export class PremiosMensualesAPI {
    // Obtener premios mensuales
    static async getPremiosMensuales(year: number, month: number): Promise<PremioMensual[]> {
        try {
            const response = await fetch(`/api/premios-mensuales?year=${year}&month=${month}`);
            if (!response.ok) throw new Error('Error fetching premios mensuales');
            return await response.json();
        } catch (error) {
            console.error('Error getting premios mensuales:', error);
            return [];
        }
    }

    // Guardar premios mensuales
    static async setPremiosMensuales(year: number, month: number, premios: PremioMensual[]): Promise<boolean> {
        try {
            const response = await fetch('/api/premios-mensuales', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ year, month, premios })
            });
            return response.ok;
        } catch (error) {
            console.error('Error saving premios mensuales:', error);
            return false;
        }
    }
}