// API para manejar palabras prohibidas en PostgreSQL

export class PalabrasProhibidasAPI {
    static async getPalabras(): Promise<string[]> {
        try {
            const response = await fetch('/api/palabras-prohibidas');
            if (!response.ok) throw new Error('Error obteniendo palabras prohibidas');
            return await response.json();
        } catch (error) {
            console.error('Error getting palabras prohibidas:', error);
            return [];
        }
    }

    static async addPalabra(palabra: string): Promise<boolean> {
        try {
            const response = await fetch('/api/palabras-prohibidas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ palabra })
            });
            if (!response.ok) throw new Error('Error guardando palabra');
            const result = await response.json();
            return result.success;
        } catch (error) {
            console.error('Error adding palabra:', error);
            return false;
        }
    }

    static async removePalabra(palabra: string): Promise<boolean> {
        try {
            const response = await fetch(`/api/palabras-prohibidas?palabra=${encodeURIComponent(palabra)}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error('Error removing palabra:', error);
            return false;
        }
    }
}