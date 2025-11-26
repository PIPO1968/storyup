import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

// API para gestionar preferencias de usuario
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const key = searchParams.get('key');

        if (!nick) {
            return NextResponse.json({ error: 'Nick parameter required' }, { status: 400 });
        }

        if (key) {
            // Obtener una preferencia específica
            const result = await pool.query(
                'SELECT value FROM user_preferences WHERE nick = $1 AND key = $2',
                [nick, key]
            );
            if (result.rows.length === 0) {
                return NextResponse.json({ value: null });
            }
            return NextResponse.json({ value: result.rows[0].value });
        } else {
            // Obtener todas las preferencias del usuario
            const result = await pool.query(
                'SELECT key, value FROM user_preferences WHERE nick = $1',
                [nick]
            );
            const preferences: { [key: string]: any } = {};
            result.rows.forEach(row => {
                preferences[row.key] = row.value;
            });
            return NextResponse.json(preferences);
        }
    } catch (error) {
        console.error('Error fetching preferences:', error);
        return NextResponse.json({ error: 'Error fetching preferences' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { nick, key, value } = await request.json();

        if (!nick || !key) {
            return NextResponse.json({ error: 'nick and key required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS user_preferences (
                id SERIAL PRIMARY KEY,
                nick VARCHAR(255) NOT NULL,
                key VARCHAR(255) NOT NULL,
                value TEXT,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(nick, key)
            )
        `);

        // Insertar o actualizar preferencia
        const result = await pool.query(
            'INSERT INTO user_preferences (nick, key, value) VALUES ($1, $2, $3) ON CONFLICT (nick, key) DO UPDATE SET value = EXCLUDED.value, updated_at = CURRENT_TIMESTAMP RETURNING *',
            [nick, key, value]
        );

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error saving preference:', error);
        return NextResponse.json({ error: 'Error saving preference' }, { status: 500 });
    }
}