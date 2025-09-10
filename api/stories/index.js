
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
    const client = getClient();
    await client.connect();
    // Crear tabla si no existe
    await client.query(`CREATE TABLE IF NOT EXISTS stories (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        title VARCHAR(200) NOT NULL,
        text TEXT NOT NULL,
        language VARCHAR(20) NOT NULL,
        type VARCHAR(50) NOT NULL,
        likes INTEGER DEFAULT 0
    )`);
    if (req.method === 'GET') {
        // Historias públicas
        const { rows } = await client.query('SELECT s.*, u.name as author FROM stories s JOIN users u ON s.user_id = u.id ORDER BY s.id DESC');
        await client.end();
        res.status(200).json(rows);
    } else if (req.method === 'POST') {
        // Crear historia (requiere auth)
        const token = getTokenFromHeader(req);
        if (!token) {
            await client.end();
            res.status(401).json({ error: 'No autorizado' });
            return;
        }
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            const { title, text, language, type } = req.body;
            if (!title || !text || !language || !type) {
                await client.end();
                res.status(400).json({ error: 'Faltan datos' });
                return;
            }
            await client.query('INSERT INTO stories (user_id, title, text, language, type) VALUES ($1, $2, $3, $4, $5)', [decoded.id, title, text, language, type]);
            await client.end();
            res.status(200).json({ success: true });
        } catch (e) {
            await client.end();
            res.status(401).json({ error: 'Token inválido' });
        }
    } else {
        await client.end();
        res.status(405).json({ error: 'Método no permitido' });
    }
}
