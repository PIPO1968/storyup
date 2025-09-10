
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const JWT_SECRET = 'storyup_secret_key';

async function openDb() {
    return open({
        filename: './storyup.db',
        driver: sqlite3.Database
    });
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
    const db = await openDb();
    try {
        const hash = await bcrypt.hash(password, 10);
        const result = await db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hash]);
        // Obtener el id del usuario insertado
        const user = await db.get('SELECT id, name, email FROM users WHERE email = ?', [email]);
        // Generar token JWT
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({ token });
    } catch (e) {
        res.status(400).json({ error: 'El correo ya está registrado' });
    }
}
