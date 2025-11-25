import { NextRequest, NextResponse } from 'next/server';
import pool from '@/utils/db';

async function ensureTableExists() {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS noticias (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        contenido TEXT NOT NULL,
        autor TEXT NOT NULL,
        imagen TEXT,
        fecha TIMESTAMP DEFAULT NOW()
      )
    `);
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

export async function GET() {
    try {
        await ensureTableExists();
        const result = await pool.query('SELECT * FROM noticias ORDER BY fecha DESC');
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json({ error: 'Error fetching news' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await ensureTableExists();
        const { titulo, contenido, autor, imagen } = await request.json();
        console.log('Creating news:', { titulo, contenido, autor, imagen });

        if (!titulo || !contenido || !autor) {
            console.log('Missing fields');
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const result = await pool.query(
            'INSERT INTO noticias (titulo, contenido, autor, imagen, fecha) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
            [titulo, contenido, autor, imagen || '']
        );
        console.log('News created:', result.rows[0]);

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error creating news:', error);
        return NextResponse.json({ error: 'Error creating news' }, { status: 500 });
    }
}
}