// Endpoint para cambio de contraseña de usuario StoryUp
// Solo acepta POST con action: 'change-password'

import { Client } from 'pg';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

export default async function handler(req, res) {
    const client = getClient();
    await client.connect();
    try {
        if (req.method === 'GET') {
            // Obtener datos de perfil por email
            const { email } = req.query;
            if (!email) return res.status(400).json({ error: 'Falta email' });
            const userRes = await client.query('SELECT email, name, language, profile_image FROM users WHERE email = $1', [email]);
            if (userRes.rows.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
            return res.status(200).json(userRes.rows[0]);
        }
        if (req.method === 'POST' || req.method === 'PATCH') {
            // Actualizar datos personales o imagen de perfil
            const { email, name, language, profile_image, action, password } = req.body;
            if (!email) return res.status(400).json({ error: 'Falta email' });
            if (action === 'change-password') {
                if (!password) return res.status(400).json({ error: 'Falta password' });
                await client.query('UPDATE users SET password = $1 WHERE email = $2', [password, email]);
                return res.status(200).json({ success: true });
            }
            // Actualizar datos personales
            let updateFields = [];
            let values = [];
            let idx = 1;
            if (name) { updateFields.push(`name = $${idx++}`); values.push(name); }
            if (language) { updateFields.push(`language = $${idx++}`); values.push(language); }
            if (profile_image) { updateFields.push(`profile_image = $${idx++}`); values.push(profile_image); }
            if (updateFields.length === 0) return res.status(400).json({ error: 'Nada que actualizar' });
            values.push(email);
            await client.query(`UPDATE users SET ${updateFields.join(', ')} WHERE email = $${idx}`, values);
            return res.status(200).json({ success: true });
        }
        res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    } catch (e) {
        res.status(500).json({ error: e.message });
    } finally {
        await client.end();
    }
}
