interface Noticia {
    id: number;
    titulo: string;
    contenido: string;
    autor: string;
    imagen?: string;
    fecha: string;
}

export class NoticiasAPI {
    static async getAllNoticias(): Promise<Noticia[]> {
        const response = await fetch('/api/noticias');
        if (!response.ok) {
            throw new Error('Error al obtener noticias');
        }
        return response.json();
    }

    static async crearNoticia(noticia: Omit<Noticia, 'id' | 'fecha'>): Promise<Noticia> {
        const response = await fetch('/api/noticias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noticia),
        });
        if (!response.ok) {
            throw new Error('Error al crear noticia');
        }
        return response.json();
    }
}