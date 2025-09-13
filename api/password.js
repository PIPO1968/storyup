import { Client } from 'pg';
import nodemailer from 'nodemailer';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

// Configuración de nodemailer (puedes cambiar por tu proveedor real)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function ensureTable(client) {
    await client.query(`CREATE TABLE IF NOT EXISTS password_resets (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        token VARCHAR(255) NOT NULL,
        expires_at TIMESTAMP NOT NULL
    )`);
}

export default async function handler(req, res) {
    if (req.method === 'POST' && req.body.action === 'request') {
        // Solicitar recuperación
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Falta email' });
        const client = getClient();
        await client.connect();
        try {
            // Verificar usuario
            const userRes = await client.query('SELECT * FROM users WHERE email = $1', [email]);
            if (userRes.rows.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
            // Generar token
            const token = Math.random().toString(36).substr(2, 32);
            const expires = new Date(Date.now() + 1000 * 60 * 30); // 30 min
            await ensureTable(client);
            await client.query('INSERT INTO password_resets (email, token, expires_at) VALUES ($1, $2, $3)', [email, token, expires]);
            // Enviar email
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Recupera tu contraseña en StoryUp',
                text: `Para restablecer tu contraseña, visita: https://storyup.vercel.app/reset-password.html?token=${token}`
            });
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(500).json({ error: e.message });
        } finally {
            await client.end();
        }
    } else if (req.method === 'POST' && req.body.action === 'reset') {
        // Cambiar contraseña con token
        const { token, password } = req.body;
        if (!token || !password) return res.status(400).json({ error: 'Faltan datos' });
        const client = getClient();
        await client.connect();
        try {
            await ensureTable(client);
            const resetRes = await client.query('SELECT * FROM password_resets WHERE token = $1 AND expires_at > NOW()', [token]);
            if (resetRes.rows.length === 0) return res.status(400).json({ error: 'Token inválido o expirado' });
            const email = resetRes.rows[0].email;
            await client.query('UPDATE users SET password = $1 WHERE email = $2', [password, email]);
            await client.query('DELETE FROM password_resets WHERE token = $1', [token]);
            res.status(200).json({ success: true });
        } catch (e) {
            res.status(500).json({ error: e.message });
        } finally {
            await client.end();
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
