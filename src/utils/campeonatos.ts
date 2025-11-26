// API para manejar datos de campeonatos en PostgreSQL

export interface CampeonatoData {
    temporada: string;
    tipo: string;
    nick: string;
    preguntas_acertadas?: number;
    preguntas_falladas?: number;
    ganados?: number;
    perdidos?: number;
    likes?: number;
}

export class CampeonatosAPI {
    static async getCampeonatos(temporada?: string, tipo?: string, nick?: string): Promise<CampeonatoData[]> {
        try {
            const params = new URLSearchParams();
            if (temporada) params.append('temporada', temporada);
            if (tipo) params.append('tipo', tipo);
            if (nick) params.append('nick', nick);

            const response = await fetch(`/api/campeonatos?${params}`);
            if (!response.ok) throw new Error('Error obteniendo campeonatos');
            return await response.json();
        } catch (error) {
            console.error('Error getting campeonatos:', error);
            return [];
        }
    }

    static async saveCampeonato(data: CampeonatoData): Promise<CampeonatoData | null> {
        try {
            const response = await fetch('/api/campeonatos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error guardando campeonato');
            return await response.json();
        } catch (error) {
            console.error('Error saving campeonato:', error);
            return null;
        }
    }

    static async updateCampeonato(data: CampeonatoData): Promise<CampeonatoData | null> {
        try {
            const response = await fetch('/api/campeonatos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Error actualizando campeonato');
            return await response.json();
        } catch (error) {
            console.error('Error updating campeonato:', error);
            return null;
        }
    }

    static async deleteCampeonatos(temporada: string, tipo: string): Promise<boolean> {
        try {
            const response = await fetch(`/api/campeonatos?temporada=${temporada}&tipo=${tipo}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error('Error deleting campeonatos:', error);
            return false;
        }
    }
}