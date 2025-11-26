import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const nick = searchParams.get('nick');

    if (!nick) {
        return NextResponse.json({ error: 'Nick requerido' }, { status: 400 });
    }

    try {
        const result = await pool.query('SELECT session_data FROM sesiones_usuario WHERE nick = $1', [nick]);

        if (result.rows.length === 0) {
            return NextResponse.json(null);
        }

        return NextResponse.json(result.rows[0].session_data);
    } catch (error) {
        console.error('Error obteniendo sesión:', error);
        return NextResponse.json({ error: 'Error obteniendo sesión' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { nick, sessionData } = await request.json();

        if (!nick) {
            return NextResponse.json({ error: 'Nick requerido' }, { status: 400 });
        }

        const result = await pool.query(`
            INSERT INTO sesiones_usuario (nick, session_data)
            VALUES ($1, $2)
            ON CONFLICT (nick)
            DO UPDATE SET
                session_data = EXCLUDED.session_data,
                updated_at = CURRENT_TIMESTAMP
            RETURNING *
        `, [nick, JSON.stringify(sessionData || {})]);

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error guardando sesión:', error);
        return NextResponse.json({ error: 'Error guardando sesión' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');

        if (!nick) {
            return NextResponse.json({ error: 'Nick requerido' }, { status: 400 });
        }

        await pool.query('DELETE FROM sesiones_usuario WHERE nick = $1', [nick]);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error eliminando sesión:', error);
        return NextResponse.json({ error: 'Error eliminando sesión' }, { status: 500 });
    }
}