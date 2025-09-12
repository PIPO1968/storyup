import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Enviar mensaje
        const { from, to, content } = req.body;
        if (!from || !to || !content) {
            res.status(400).json({ error: 'Faltan campos requeridos' });
            return;
        }
        const client = getClient();
        await client.connect();
        try {
            await client.query(
                'CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, sender VARCHAR(255), receiver VARCHAR(255), content TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
            );
            await client.query(
                'INSERT INTO messages (sender, receiver, content) VALUES ($1, $2, $3)',
                [from, to, content]
            );
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(500).json({ error: e.message });
        } finally {
            await client.end();
        }
    } else if (req.method === 'GET') {
        // Listar mensajes entre dos usuarios
        const { from, to } = req.query;
        if (!from || !to) {
            res.status(400).json({ error: 'Faltan parámetros' });
            return;
        }
        const client = getClient();
        await client.connect();
        try {
            const result = await client.query(
                'SELECT * FROM messages WHERE (sender = $1 AND receiver = $2) OR (sender = $2 AND receiver = $1) ORDER BY created_at ASC',
                [from, to]
            );
            res.status(200).json(result.rows);
        } catch (e) {
            res.status(500).json({ error: e.message });
        } finally {
            await client.end();
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
