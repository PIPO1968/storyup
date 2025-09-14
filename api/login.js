
import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Faltan datos' });
    }
    const client = getClient();
    try {
        await client.connect();
    } catch (e) {
        console.error('Error de conexión a la base de datos:', e);
        return res.status(500).json({ error: 'Error de conexión a la base de datos', detail: e.message });
    }
    try {
        // Buscar usuario por email y contraseña (sin hash, solo para demo; en producción usa hash)
        const userRes = await client.query('SELECT id, email, role, name FROM users WHERE email = $1 AND password = $2', [email, password]);
        if (userRes.rows.length === 0) {
            return res.status(401).json({ error: 'Email o contraseña incorrectos.' });
        }
        // Devuelve solo datos seguros
        const user = userRes.rows[0];
        res.status(200).json(user);
    } catch (e) {
        console.error('Error en la consulta de login:', e);
        res.status(500).json({ error: 'Error en la consulta de login', detail: e.message });
    } finally {
        await client.end();
    }
}
