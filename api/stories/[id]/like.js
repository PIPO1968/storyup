
import { Client } from 'pg';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'storyup_secret_key';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
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
        const client = getClient();
        await client.connect();
        await client.query('UPDATE stories SET likes = likes + 1 WHERE id = $1', [id]);
        await client.end();
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(401).json({ error: 'Token inválido' });
    }
}
