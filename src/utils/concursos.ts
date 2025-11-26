// Utilidad para manejar concursos con PostgreSQL

export interface Concurso {
    id?: number;
    numero?: number;
    titulo: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    premio?: string;
    estado: 'activo' | 'finalizado' | 'cancelado';
    participantes?: string[];
    ganador?: string;
}

export class ConcursosAPI {
    // Obtener todos los concursos
    static async getConcursos(): Promise<Concurso[]> {
        try {
            const response = await fetch('/api/concursos');
            if (!response.ok) throw new Error('Error fetching concursos');
            return await response.json();
        } catch (error) {
            console.error('Error getting concursos:', error);
            return [];
        }
    }

    // Crear un concurso
    static async createConcurso(concurso: Omit<Concurso, 'id'>): Promise<Concurso | null> {
        try {
            const response = await fetch('/api/concursos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(concurso)
            });
            if (!response.ok) throw new Error('Error creating concurso');
            return await response.json();
        } catch (error) {
            console.error('Error creating concurso:', error);
            return null;
        }
    }

    // Actualizar un concurso
    static async updateConcurso(id: number, updates: Partial<Concurso>): Promise<Concurso | null> {
        try {
            const response = await fetch('/api/concursos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, ...updates })
            });
            if (!response.ok) throw new Error('Error updating concurso');
            return await response.json();
        } catch (error) {
            console.error('Error updating concurso:', error);
            return null;
        }
    }
}