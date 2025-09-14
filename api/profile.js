// Endpoint para cambio de contraseña de usuario StoryUp
// Solo acepta POST con action: 'change-password'
import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { action, email, password } = req.body;
    if (action !== 'change-password' || !email || !password) {
        return res.status(400).json({ error: 'Faltan datos o acción inválida' });
    }
    const client = getClient();
    await client.connect();
    try {
        // Verificar que el usuario existe
        const userRes = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userRes.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        // Cambiar la contraseña (deberías hashearla en producción)
        await client.query('UPDATE users SET password = $1 WHERE email = $2', [password, email]);
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(500).json({ error: e.message });
    } finally {
        await client.end();
    }
}
