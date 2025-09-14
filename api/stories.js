import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

async function ensureTable(client) {
    await client.query(`CREATE TABLE IF NOT EXISTS stories (
		id SERIAL PRIMARY KEY,
		author VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		likes INTEGER DEFAULT 0
	)`);
}

export default async function handler(req, res) {
    const client = getClient();
    await client.connect();
    await ensureTable(client);
    try {
        if (req.method === 'GET') {
            // Listar historias (todas o por autor)
            const { author } = req.query;
            let result;
            if (author) {
                result = await client.query('SELECT * FROM stories WHERE author = $1 ORDER BY created_at DESC', [author]);
            } else {
                result = await client.query('SELECT * FROM stories ORDER BY created_at DESC');
            }
            res.status(200).json(result.rows);
        } else if (req.method === 'POST') {
            // Crear historia o dar like
            if (req.body.action === 'like') {
                const { id } = req.body;
                if (!id) return res.status(400).json({ error: 'Falta id' });
                await client.query('UPDATE stories SET likes = likes + 1 WHERE id = $1', [id]);
                return res.status(200).json({ success: true });
            }
            const { author, content } = req.body;
            if (!author || !content) return res.status(400).json({ error: 'Faltan campos' });
            const result = await client.query(
                'INSERT INTO stories (author, content) VALUES ($1, $2) RETURNING *',
                [author, content]
            );
            res.status(201).json(result.rows[0]);
        } else if (req.method === 'PUT') {
            // Actualizar historia
            const { id, content } = req.body;
            if (!id || !content) return res.status(400).json({ error: 'Faltan campos' });
            await client.query('UPDATE stories SET content = $1 WHERE id = $2', [content, id]);
            res.status(200).json({ success: true });
        } else if (req.method === 'DELETE') {
            // Eliminar historia
            const { id } = req.body;
            if (!id) return res.status(400).json({ error: 'Falta id' });
            await client.query('DELETE FROM stories WHERE id = $1', [id]);
            res.status(200).json({ success: true });
        } else {
            res.status(405).json({ error: 'Método no permitido' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    } finally {
        await client.end();
    }
}
