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
    if (req.method !== 'GET') {
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
        const db = await openDb();
        const user = await db.get('SELECT id, name, email FROM users WHERE id = ?', [decoded.id]);
        if (!user) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json(user);
    } catch (e) {
        res.status(401).json({ error: 'Token inválido' });
    }
}
