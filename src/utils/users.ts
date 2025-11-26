// Utilidad para manejar usuarios con PostgreSQL

export interface User {
    nick: string;
    tipo?: string;
    curso?: string | number;
    esProfesor?: boolean;
    premium?: boolean;
    avatar?: string;
    nombre?: string;
    email?: string;
    fechaRegistro?: string;
    ultimoAcceso?: string;
    [key: string]: unknown; // Para propiedades adicionales que puedan existir
}

export class UsersAPI {
    // Obtener todos los usuarios
    static async getAllUsers(): Promise<User[]> {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) throw new Error('Error fetching users');
            return await response.json();
        } catch (error) {
            console.error('Error getting users:', error);
            return [];
        }
    }

    // Obtener un usuario por nick
    static async getUserByNick(nick: string): Promise<User | null> {
        try {
            const response = await fetch(`/api/users?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error('Error fetching user');
            }
            return await response.json();
        } catch (error) {
            console.error('Error getting user:', error);
            return null;
        }
    }

    // Actualizar un usuario
    static async updateUser(user: User): Promise<User | null> {
        try {
            const response = await fetch('/api/users', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (!response.ok) throw new Error('Error updating user');
            return await response.json();
        } catch (error) {
            console.error('Error updating user:', error);
            return null;
        }
    }

    // Crear un usuario
    static async createUser(user: Partial<User>): Promise<User | null> {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (!response.ok) throw new Error('Error creating user');
            return await response.json();
        } catch (error) {
            console.error('Error creating user:', error);
            return null;
        }
    }
}