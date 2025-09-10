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
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Método no permitido' });
        return;
    }
    const token = getTokenFromHeader(req);
    if (!token) {
        res.status(401).json({ error: 'No autorizado' });
        return;
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const { id } = req.query;
        if (!id) {
            res.status(400).json({ error: 'Falta el id de la historia' });
            return;
        }
        const db = await openDb();
        await db.run('UPDATE stories SET likes = likes + 1 WHERE id = ?', [id]);
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(401).json({ error: 'Token inválido' });
    }
}
