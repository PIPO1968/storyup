// API para manejar configuración del sistema en PostgreSQL

export class ConfiguracionAPI {
    static async getConfiguracion(clave?: string): Promise<any> {
        try {
            const url = clave ? `/api/configuracion?clave=${encodeURIComponent(clave)}` : '/api/configuracion';
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error obteniendo configuración');
            return await response.json();
        } catch (error) {
            console.error('Error getting config:', error);
            return clave ? null : {};
        }
    }

    static async setConfiguracion(clave: string, valor: string): Promise<boolean> {
        try {
            const response = await fetch('/api/configuracion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ clave, valor })
            });
            return response.ok;
        } catch (error) {
            console.error('Error setting config:', error);
            return false;
        }
    }

    static async deleteConfiguracion(clave: string): Promise<boolean> {
        try {
            const response = await fetch(`/api/configuracion?clave=${encodeURIComponent(clave)}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            console.error('Error deleting config:', error);
            return false;
        }
    }
}