
import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3001;
const JWT_SECRET = 'storyup_secret_key'; // Cambia esto en producción

app.use(cors());
app.use(express.json());

let db;

// Inicializar base de datos SQLite
(async () => {
        db = await open({
                filename: './storyup.db',
                driver: sqlite3.Database
        });
        await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS stories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            title TEXT,
            text TEXT,
            language TEXT,
            type TEXT,
            likes INTEGER DEFAULT 0,
            FOREIGN KEY(user_id) REFERENCES users(id)
        );
    `);
})();

// Registro de usuario
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'Faltan datos' });
    try {
        const hash = await bcrypt.hash(password, 10);
        await db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hash]);
        res.json({ success: true });
    } catch (e) {
        res.status(400).json({ error: 'El correo ya está registrado' });
    }
});

// Login de usuario
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    if (!user) return res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Usuario o contraseña incorrectos' });
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
});

// Middleware de autenticación
function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'No autorizado' });
    try {
        const token = authHeader.split(' ')[1];
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ error: 'Token inválido' });
    }
}

// Perfil de usuario
app.get('/api/profile', auth, async (req, res) => {
    const user = await db.get('SELECT id, name, email FROM users WHERE id = ?', [req.user.id]);
    res.json(user);
});

// Crear historia
app.post('/api/stories', auth, async (req, res) => {
    const { title, text, language, type } = req.body;
    await db.run('INSERT INTO stories (user_id, title, text, language, type) VALUES (?, ?, ?, ?, ?)', [req.user.id, title, text, language, type]);
    res.json({ success: true });
});

// Obtener historias públicas
app.get('/api/stories', async (req, res) => {
    const stories = await db.all('SELECT s.*, u.name as author FROM stories s JOIN users u ON s.user_id = u.id ORDER BY s.id DESC');
    res.json(stories);
});

// Obtener historias del usuario
app.get('/api/my-stories', auth, async (req, res) => {
    const stories = await db.all('SELECT * FROM stories WHERE user_id = ? ORDER BY id DESC', [req.user.id]);
    res.json(stories);
});

// Like a una historia
app.post('/api/stories/:id/like', auth, async (req, res) => {
    await db.run('UPDATE stories SET likes = likes + 1 WHERE id = ?', [req.params.id]);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`StoryUp backend escuchando en http://localhost:${PORT}`);
});
