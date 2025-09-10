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
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Faltan datos' });
        return;
    }
    const db = await openDb();
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
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
}
