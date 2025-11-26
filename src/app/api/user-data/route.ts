import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

// API para gestionar datos específicos de usuario
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const key = searchParams.get('key');

        if (!nick) {
            return NextResponse.json({ error: 'Nick parameter required' }, { status: 400 });
        }

        if (key) {
            // Obtener un dato específico
            const result = await pool.query(
                'SELECT value FROM user_data WHERE nick = $1 AND key = $2',
                [nick, key]
            );
            if (result.rows.length === 0) {
                return NextResponse.json({ value: null });
            }
            return NextResponse.json({ value: result.rows[0].value });
        } else {
            // Obtener todos los datos del usuario
            const result = await pool.query(
                'SELECT key, value FROM user_data WHERE nick = $1',
                [nick]
            );
            const userData: { [key: string]: any } = {};
            result.rows.forEach(row => {
                userData[row.key] = row.value;
            });
            return NextResponse.json(userData);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({ error: 'Error fetching user data' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { nick, key, value } = await request.json();

        if (!nick || !key) {
            return NextResponse.json({ error: 'nick and key required' }, { status: 400 });
        }

        // Insertar o actualizar el dato
        await pool.query(
            'INSERT INTO user_data (nick, key, value) VALUES ($1, $2, $3) ON CONFLICT (nick, key) DO UPDATE SET value = $3',
            [nick, key, value]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error saving user data:', error);
        return NextResponse.json({ error: 'Error saving user data' }, { status: 500 });
    }
}