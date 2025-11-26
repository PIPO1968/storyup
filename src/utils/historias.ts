interface Comentario {
    usuario: string;
    texto: string;
    fecha: string;
    likes?: number;
}

interface Historia {
    id: number;
    titulo: string;
    contenido: string;
    autor: string;
    fecha: string;
    imagen?: string;
    likes: number;
    comentarios: Comentario[];
    concurso?: string;
    likedBy?: string[];
}

export class HistoriasAPI {
    static async getAllHistorias(): Promise<Historia[]> {
        const response = await fetch('/api/historias');
        if (!response.ok) {
            throw new Error('Error al obtener historias');
        }
        return response.json();
    }

    static async getHistoriaById(id: string): Promise<Historia | null> {
        const historias = await this.getAllHistorias();
        return historias.find(h => h.id.toString() === id) || null;
    }

    static async createHistoria(historia: Omit<Historia, 'id' | 'fecha' | 'likes' | 'comentarios'>): Promise<Historia> {
        const response = await fetch('/api/historias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(historia),
        });
        if (!response.ok) {
            throw new Error('Error al crear historia');
        }
        return response.json();
    }

    static async updateHistoria(id: number, updates: Partial<Historia>): Promise<Historia> {
        const response = await fetch(`/api/historias/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar historia');
        }
        return response.json();
    }
}