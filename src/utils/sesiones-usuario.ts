// API para manejar sesiones de usuario en PostgreSQL

export class SesionesUsuarioAPI {
    static async getSesionUsuario(nick: string): Promise<any> {
        try {
            const response = await fetch(`/api/sesiones-usuario?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error obteniendo sesión');
            return await response.json();
        } catch (error) {
            console.error('Error getting session:', error);
            return null;
        }
    }

    static async saveSesionUsuario(nick: string, sessionData: any): Promise<boolean> {
        try {
            const response = await fetch('/api/sesiones-usuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick, sessionData })
            });
            return response.ok;
        } catch (error) {
            console.error('Error saving session:', error);
            return false;
        }
    }

    static async clearSesionUsuario(nick: string): Promise<boolean> {
        try {
            const response = await fetch(`/api/sesiones-usuario?nick=${encodeURIComponent(nick)}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error('Error clearing session:', error);
            return false;
        }
    }
}