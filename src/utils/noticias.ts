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
}