import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const nick = searchParams.get('nick');
    const email = searchParams.get('email');

    try {
        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                nick VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                nombre VARCHAR(255),
                centro VARCHAR(255),
                curso VARCHAR(255),
                tipo VARCHAR(255),
                linkPerfil VARCHAR(255),
                fechaInscripcion TIMESTAMP NOT NULL,
                textoFechaInscripcion TEXT,
                likes INTEGER DEFAULT 0,
                trofeos INTEGER DEFAULT 0,
                historias JSONB DEFAULT '[]'::jsonb,
                amigos JSONB DEFAULT '[]'::jsonb,
                trofeosDesbloqueados JSONB DEFAULT '[]'::jsonb,
                trofeosBloqueados JSONB DEFAULT '[]'::jsonb,
                preguntasFalladas INTEGER DEFAULT 0,
                competicionesSuperadas INTEGER DEFAULT 0,
                estaEnRanking BOOLEAN DEFAULT FALSE,
                autoTrofeos JSONB DEFAULT '[]'::jsonb,
                comentarios JSONB DEFAULT '[]'::jsonb
            )
        `);

        if (nick) {
            const result = await pool.query('SELECT * FROM users WHERE nick = $1', [nick]);
            if (result.rows.length === 0) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            return NextResponse.json(result.rows[0]);
        } else if (email) {
            const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            if (result.rows.length === 0) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            return NextResponse.json(result.rows[0]);
        } else {
            const result = await pool.query('SELECT * FROM users');
            return NextResponse.json(result.rows);
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nick, email, password, nombre, centro, curso, tipo, linkPerfil, fechaInscripcion, textoFechaInscripcion, likes = 0, trofeos = 0, historias = [], amigos = [], trofeosDesbloqueados = [], trofeosBloqueados = [], preguntasFalladas = 0, competicionesSuperadas = 0, estaEnRanking = false, autoTrofeos = [], comentarios = [] } = body;

        const result = await pool.query(
            'INSERT INTO users (nick, email, password, nombre, centro, curso, tipo, linkPerfil, fechaInscripcion, textoFechaInscripcion, likes, trofeos, historias, amigos, trofeosDesbloqueados, trofeosBloqueados, preguntasFalladas, competicionesSuperadas, estaEnRanking, autoTrofeos, comentarios) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *',
            [nick, email, password, nombre, centro, curso, tipo, linkPerfil, fechaInscripcion, textoFechaInscripcion, likes, trofeos, JSON.stringify(historias), JSON.stringify(amigos), JSON.stringify(trofeosDesbloqueados), JSON.stringify(trofeosBloqueados), preguntasFalladas, competicionesSuperadas, estaEnRanking, JSON.stringify(autoTrofeos), JSON.stringify(comentarios)]
        );

        return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { nick, ...updates } = body;

        if (!nick) {
            return NextResponse.json({ error: 'Nick is required' }, { status: 400 });
        }

        const fields = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(updates)) {
            if (['historias', 'amigos', 'trofeosDesbloqueados', 'trofeosBloqueados', 'autoTrofeos'].includes(key)) {
                fields.push(`${key} = $${index}`);
                values.push(JSON.stringify(value));
            } else {
                fields.push(`${key} = $${index}`);
                values.push(value);
            }
            index++;
        }

        values.push(nick);

        const query = `UPDATE users SET ${fields.join(', ')} WHERE nick = $${index} RETURNING *`;

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}