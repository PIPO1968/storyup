import { open } from 'sqlite';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'storyup_secret_key';

async function openDb() {
    return open({
        filename: './storyup.db',
        driver: sqlite3.Database
    });
}

function getTokenFromHeader(req) {
    const auth = req.headers.authorization;
    if (!auth) return null;
    const parts = auth.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
    return parts[1];
}


export default async function handler(req, res) {
    const { id } = req.query;
    if (!id) {
        res.status(400).json({ error: 'Falta el id de la historia' });
        return;
    }
    const db = await openDb();
    if (req.method === 'GET') {
        // Obtener una historia por id
        const story = await db.get('SELECT * FROM stories WHERE id = ?', [id]);
        if (!story) {
            res.status(404).json({ error: 'Historia no encontrada' });
            return;
        }
        res.status(200).json(story);
        return;
    }
    if (req.method === 'PUT') {
        // Editar una historia (requiere autenticación y ser el autor)
        const token = getTokenFromHeader(req);
        if (!token) {
            res.status(401).json({ error: 'No autorizado' });
            return;
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            const { title, content } = req.body;
            if (!title || !content) {
                res.status(400).json({ error: 'Faltan campos requeridos' });
                return;
            }
            // Verificar autor
            const story = await db.get('SELECT * FROM stories WHERE id = ?', [id]);
            if (!story) {
                res.status(404).json({ error: 'Historia no encontrada' });
                return;
            }
            if (story.author_id !== decoded.id) {
                res.status(403).json({ error: 'No tienes permiso para editar esta historia' });
                return;
            }
            await db.run('UPDATE stories SET title = ?, content = ? WHERE id = ?', [title, content, id]);
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(401).json({ error: 'Token inválido' });
        }
        return;
    }
    if (req.method === 'DELETE') {
        // Eliminar una historia (requiere autenticación y ser el autor)
        const token = getTokenFromHeader(req);
        if (!token) {
            res.status(401).json({ error: 'No autorizado' });
            return;
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            // Verificar autor
            const story = await db.get('SELECT * FROM stories WHERE id = ?', [id]);
            if (!story) {
                res.status(404).json({ error: 'Historia no encontrada' });
                return;
            }
            if (story.author_id !== decoded.id) {
                res.status(403).json({ error: 'No tienes permiso para eliminar esta historia' });
                return;
            }
            await db.run('DELETE FROM stories WHERE id = ?', [id]);
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(401).json({ error: 'Token inválido' });
        }
        return;
    }
    res.status(405).json({ error: 'Método no permitido' });
}
