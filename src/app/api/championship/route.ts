import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

// API para gestionar datos de campeonatos
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const type = searchParams.get('type'); // 'respuestas', 'individual', 'centros', 'docentes'

        if (!nick) {
            return NextResponse.json({ error: 'Nick parameter required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS championship_data (
                id SERIAL PRIMARY KEY,
                nick VARCHAR(255) NOT NULL,
                type VARCHAR(255) NOT NULL,
                data JSONB DEFAULT '{}'::jsonb,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(nick, type)
            )
        `);

        if (type) {
            // Obtener datos específicos
            const result = await pool.query(
                'SELECT data FROM championship_data WHERE nick = $1 AND type = $2',
                [nick, type]
            );
            if (result.rows.length === 0) {
                return NextResponse.json({});
            }
            return NextResponse.json(result.rows[0].data);
        } else {
            // Obtener todos los datos del usuario
            const result = await pool.query(
                'SELECT type, data FROM championship_data WHERE nick = $1',
                [nick]
            );
            const championshipData: { [key: string]: any } = {};
            result.rows.forEach(row => {
                championshipData[row.type] = row.data;
            });
            return NextResponse.json(championshipData);
        }
    } catch (error) {
        console.error('Error fetching championship data:', error);
        return NextResponse.json({ error: 'Error fetching championship data' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { nick, type, data } = await request.json();

        if (!nick || !type) {
            return NextResponse.json({ error: 'nick and type required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS championship_data (
                id SERIAL PRIMARY KEY,
                nick VARCHAR(255) NOT NULL,
                type VARCHAR(255) NOT NULL,
                data JSONB DEFAULT '{}'::jsonb,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(nick, type)
            )
        `);

        // Insertar o actualizar datos
        const result = await pool.query(
            'INSERT INTO championship_data (nick, type, data) VALUES ($1, $2, $3) ON CONFLICT (nick, type) DO UPDATE SET data = EXCLUDED.data, updated_at = CURRENT_TIMESTAMP RETURNING *',
            [nick, type, JSON.stringify(data)]
        );

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error saving championship data:', error);
        return NextResponse.json({ error: 'Error saving championship data' }, { status: 500 });
    }
}