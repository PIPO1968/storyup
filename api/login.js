
import { Client } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'storyup_secret_key';

function getClient() {
    return new Client({ connectionString: process.env.DATABASE_URL });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Faltan datos' });
        return;
    }
    const client = getClient();
    await client.connect();
    try {
        const { rows } = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = rows[0];
        if (!user) {
            res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
            return;
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
            return;
        }
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
        res.status(200).json({ token });
    } finally {
        await client.end();
    }
}
