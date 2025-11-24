// Endpoint para obtener la lista de usuarios StoryUp
import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const client = getClient();
    await client.connect();
    try {
        const result = await client.query('SELECT email, name FROM users');
        res.status(200).json(result.rows);
    } catch (e) {
        res.status(500).json({ error: e.message });
    } finally {
        await client.end();
    }
}
