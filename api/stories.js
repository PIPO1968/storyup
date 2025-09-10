import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
    return open({
        filename: './storyup.db',
        driver: sqlite3.Database
    });
}

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const db = await openDb();
        const stories = await db.all('SELECT s.*, u.name as author FROM stories s JOIN users u ON s.user_id = u.id ORDER BY s.id DESC');
        res.status(200).json(stories);
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
