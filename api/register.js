

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
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ error: 'Faltan datos' });
        return;
    }
    const client = getClient();
    await client.connect();
    try {
        const hash = await bcrypt.hash(password, 10);
        // Crear tabla si no existe
        await client.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(200) NOT NULL
        )`);
        // Insertar usuario
        await client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hash]);
        // Obtener usuario insertado
        const { rows } = await client.query('SELECT id, name, email FROM users WHERE email = $1', [email]);
        const user = rows[0];
        // Generar token JWT
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({ token });
    } catch (e) {
        res.status(400).json({ error: 'El correo ya está registrado' });
    } finally {
        await client.end();
    }
}
