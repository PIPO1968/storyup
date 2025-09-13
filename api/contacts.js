import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

// Utilidad para crear la tabla de contactos si no existe
async function ensureTable(client) {
    await client.query(`CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        user_nick VARCHAR(255) NOT NULL,
        contact_nick VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_nick, contact_nick)
    )`);
}

export default async function handler(req, res) {
    const client = getClient();
    await client.connect();
    await ensureTable(client);
    try {
        if (req.method === 'POST') {
            // Agregar contacto por nick
            const { user_nick, contact_nick } = req.body;
            if (!user_nick || !contact_nick) {
                res.status(400).json({ error: 'Faltan campos requeridos' });
                return;
            }
            await client.query(
                'INSERT INTO contacts (user_nick, contact_nick) VALUES ($1, $2) ON CONFLICT DO NOTHING',
                [user_nick, contact_nick]
            );
            res.status(200).json({ success: true });
        } else if (req.method === 'GET') {
            // Listar contactos de un usuario por nick
            const { user_nick } = req.query;
            if (!user_nick) {
                res.status(400).json({ error: 'Falta user_nick' });
                return;
            }
            const result = await client.query(
                'SELECT contact_nick FROM contacts WHERE user_nick = $1',
                [user_nick]
            );
            res.status(200).json(result.rows.map(r => r.contact_nick));
        } else if (req.method === 'DELETE') {
            // Eliminar contacto por nick
            const { user_nick, contact_nick } = req.body;
            if (!user_nick || !contact_nick) {
                res.status(400).json({ error: 'Faltan campos requeridos' });
                return;
            }
            await client.query(
                'DELETE FROM contacts WHERE user_nick = $1 AND contact_nick = $2',
                [user_nick, contact_nick]
            );
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
