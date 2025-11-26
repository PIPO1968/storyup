// Utilidad para manejar datos específicos de usuario con PostgreSQL
export class UserDataAPI {
    // Obtener un dato específico
    static async getUserData(nick: string, key: string): Promise<any> {
        try {
            const response = await fetch(`/api/user-data?nick=${encodeURIComponent(nick)}&key=${encodeURIComponent(key)}`);
            if (!response.ok) throw new Error('Error fetching user data');
            const data = await response.json();
            return data.value;
        } catch (error) {
            console.error('Error getting user data:', error);
            return null;
        }
    }

    // Guardar un dato
    static async setUserData(nick: string, key: string, value: any): Promise<boolean> {
        try {
            const response = await fetch('/api/user-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick, key, value })
            });
            return response.ok;
        } catch (error) {
            console.error('Error saving user data:', error);
            return false;
        }
    }

    // Obtener todos los datos de un usuario
    static async getAllUserData(nick: string): Promise<Record<string, unknown>> {
        try {
            const response = await fetch(`/api/user-data?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error fetching user data');
            return await response.json();
        } catch (error) {
            console.error('Error getting user data:', error);
            return {};
        }
    }
}