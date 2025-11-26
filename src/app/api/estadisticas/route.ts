import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const tipo = searchParams.get('tipo');

        if (!nick) {
            return NextResponse.json({ error: 'Nick required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
      CREATE TABLE IF NOT EXISTS estadisticas (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        puntos INTEGER DEFAULT 0,
        UNIQUE(nick, tipo)
      )
    `);

        let query = 'SELECT * FROM estadisticas WHERE nick = $1';
        const params: any[] = [nick];

        if (tipo) {
            query += ' AND tipo = $2';
            params.push(tipo);
        }

        const result = await pool.query(query, params);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching estadisticas:', error);
        return NextResponse.json({ error: 'Error fetching estadisticas' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { nick, tipo, puntos } = await request.json();

        // Crear tabla si no existe
        await pool.query(`
      CREATE TABLE IF NOT EXISTS estadisticas (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        puntos INTEGER DEFAULT 0,
        UNIQUE(nick, tipo)
      )
    `);

        const result = await pool.query(
            'INSERT INTO estadisticas (nick, tipo, puntos) VALUES ($1, $2, $3) ON CONFLICT (nick, tipo) DO UPDATE SET puntos = estadisticas.puntos + EXCLUDED.puntos RETURNING *',
            [nick, tipo, puntos]
        );

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating estadisticas:', error);
        return NextResponse.json({ error: 'Error updating estadisticas' }, { status: 500 });
    }
}