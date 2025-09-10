import sqlite3 from 'sqlite3';
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
    if (req.method === 'GET') {
        // Historias públicas
        const db = await openDb();
        const stories = await db.all('SELECT s.*, u.name as author FROM stories s JOIN users u ON s.user_id = u.id ORDER BY s.id DESC');
        res.status(200).json(stories);
    } else if (req.method === 'POST') {
        // Crear historia (requiere auth)
        const token = getTokenFromHeader(req);
        if (!token) {
            res.status(401).json({ error: 'No autorizado' });
            return;
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            const { title, text, language, type } = req.body;
            if (!title || !text || !language || !type) {
                res.status(400).json({ error: 'Faltan datos' });
                return;
            }
            const db = await openDb();
            await db.run('INSERT INTO stories (user_id, title, text, language, type) VALUES (?, ?, ?, ?, ?)', [decoded.id, title, text, language, type]);
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(401).json({ error: 'Token inválido' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
