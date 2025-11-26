// Utilidad para manejar datos de campeonatos con PostgreSQL
export class ChampionshipAPI {
    // Obtener datos de campeonato específicos
    static async getChampionshipData(nick: string, type: string): Promise<unknown> {
        try {
            const response = await fetch(`/api/championship?nick=${encodeURIComponent(nick)}&type=${encodeURIComponent(type)}`);
            if (!response.ok) throw new Error('Error fetching championship data');
            return await response.json();
        } catch (error) {
            console.error('Error getting championship data:', error);
            return {};
        }
    }

    // Guardar datos de campeonato
    static async setChampionshipData(nick: string, type: string, data: unknown): Promise<boolean> {
        try {
            const response = await fetch('/api/championship', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick, type, data })
            });
            return response.ok;
        } catch (error) {
            console.error('Error saving championship data:', error);
            return false;
        }
    }

    // Obtener todos los datos de campeonato de un usuario
    static async getAllChampionshipData(nick: string): Promise<Record<string, unknown>> {
        try {
            const response = await fetch(`/api/championship?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error fetching championship data');
            return await response.json();
        } catch (error) {
            console.error('Error getting championship data:', error);
            return {};
        }
    }
}