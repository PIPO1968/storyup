import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');

        if (!nick) {
            return NextResponse.json({ error: 'Nick required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
      CREATE TABLE IF NOT EXISTS premium (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) UNIQUE NOT NULL,
        expiracion TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        const result = await pool.query('SELECT * FROM premium WHERE nick = $1', [nick]);
        if (result.rows.length > 0) {
            const premium = result.rows[0];
            const isActive = new Date(premium.expiracion) > new Date();
            return NextResponse.json({ isActive, expiracion: premium.expiracion });
        } else {
            return NextResponse.json({ isActive: false });
        }
    } catch (error) {
        console.error('Error fetching premium:', error);
        return NextResponse.json({ error: 'Error fetching premium' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { nick, expiracion } = await request.json();

        // Crear tabla si no existe
        await pool.query(`
      CREATE TABLE IF NOT EXISTS premium (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) UNIQUE NOT NULL,
        expiracion TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        const result = await pool.query(
            'INSERT INTO premium (nick, expiracion) VALUES ($1, $2) ON CONFLICT (nick) DO UPDATE SET expiracion = EXCLUDED.expiracion RETURNING *',
            [nick, expiracion]
        );

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error setting premium:', error);
        return NextResponse.json({ error: 'Error setting premium' }, { status: 500 });
    }
}