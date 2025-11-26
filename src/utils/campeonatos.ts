interface Campeonato {
    id: number;
    temporada: number;
    tipo: string;
    datos: Record<string, unknown>;
}

export class CampeonatosAPI {
    static async getCampeonatos(temporada?: number, tipo?: string): Promise<Campeonato[]> {
        const params = new URLSearchParams();
        if (temporada) params.append('temporada', temporada.toString());
        if (tipo) params.append('tipo', tipo);
        const url = `/api/campeonatos?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener campeonatos');
        }
        return response.json();
    }

    static async createCampeonato(cam: Omit<Campeonato, 'id'>): Promise<Campeonato> {
        const response = await fetch('/api/campeonatos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cam),
        });
        if (!response.ok) {
            throw new Error('Error al crear campeonato');
        }
        return response.json();
    }

    static async updateCampeonato(id: number, datos: Record<string, unknown>): Promise<Campeonato> {
        const response = await fetch('/api/campeonatos', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, datos }),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar campeonato');
        }
        return response.json();
    }
}