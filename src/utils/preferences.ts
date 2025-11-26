// Utilidad para manejar preferencias de usuario con PostgreSQL
export class UserPreferencesAPI {
    // Obtener una preferencia específica
    static async getPreference(nick: string, key: string): Promise<unknown> {
        try {
            const response = await fetch(`/api/preferences?nick=${encodeURIComponent(nick)}&key=${encodeURIComponent(key)}`);
            if (!response.ok) throw new Error('Error fetching preference');
            const data = await response.json();
            return data.value;
        } catch (error) {
            console.error('Error getting preference:', error);
            return null;
        }
    }

    // Guardar una preferencia
    static async setPreference(nick: string, key: string, value: unknown): Promise<boolean> {
        try {
            const response = await fetch('/api/preferences', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick, key, value })
            });
            return response.ok;
        } catch (error) {
            console.error('Error saving preference:', error);
            return false;
        }
    }

    // Obtener todas las preferencias de un usuario
    static async getAllPreferences(nick: string): Promise<Record<string, unknown>> {
        try {
            const response = await fetch(`/api/preferences?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error fetching preferences');
            return await response.json();
        } catch (error) {
            console.error('Error getting preferences:', error);
            return {};
        }
    }
}