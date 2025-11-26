// Utilidad para manejar mensajes de chat con PostgreSQL

export interface ChatMessage {
    from: string;
    to: string;
    text: string;
    fecha?: string;
    [key: string]: unknown;
}

export class ChatAPI {
    // Obtener mensajes de chat de un usuario
    static async getChat(nick: string): Promise<{ messages: ChatMessage[], aviso: boolean }> {
        try {
            const response = await fetch(`/api/chat?nick=${encodeURIComponent(nick)}`);
            if (!response.ok) throw new Error('Error fetching chat');
            return await response.json();
        } catch (error) {
            console.error('Error getting chat:', error);
            return { messages: [], aviso: false };
        }
    }

    // Guardar mensajes de chat
    static async setChat(nick: string, messages: ChatMessage[], aviso: boolean = false): Promise<boolean> {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nick, mensajes: messages, aviso })
            });
            return response.ok;
        } catch (error) {
            console.error('Error saving chat:', error);
            return false;
        }
    }
}