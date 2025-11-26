import { NextRequest, NextResponse } from 'next/server';
import { pool } from './database.js';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const nick = searchParams.get('nick');
    const email = searchParams.get('email');

    try {
        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS "User" (
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
                comentarios JSONB DEFAULT '[]'::jsonb,
                premium BOOLEAN DEFAULT FALSE,
                premiumExpiracion TIMESTAMP
            )
        `);

        if (nick) {
            const result = await pool.query('SELECT * FROM "User" WHERE nick = $1', [nick]);
            if (result.rows.length === 0) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            return NextResponse.json(result.rows[0]);
        } else if (email) {
            const result = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
            if (result.rows.length === 0) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            return NextResponse.json(result.rows[0]);
        } else {
            const result = await pool.query('SELECT * FROM "User"');
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
            'INSERT INTO "User" (nick, email, password, nombre, centro, curso, tipo, linkPerfil, fechaInscripcion, textoFechaInscripcion, likes, trofeos, historias, amigos, trofeosDesbloqueados, trofeosBloqueados, preguntasFalladas, competicionesSuperadas, estaEnRanking, autoTrofeos, comentarios) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *',
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
        console.log('🔄 PUT /api/users - Body recibido:', body);
        const { nick, ...updates } = body;

        if (!nick) {
            console.log('❌ PUT /api/users - Nick requerido faltante');
            return NextResponse.json({ error: 'Nick is required' }, { status: 400 });
        }

        console.log('🔍 PUT /api/users - Updates:', updates);

        const fields = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(updates)) {
            // Skip null/undefined values except for specific fields that can be null
            if (value === null && !['premiumExpiracion'].includes(key)) {
                console.log(`⚠️ PUT /api/users - Skipping null value for field: ${key}`);
                continue;
            }

            if (['historias', 'amigos', 'trofeosDesbloqueados', 'trofeosBloqueados', 'autoTrofeos'].includes(key)) {
                fields.push(`${key} = $${index}`);
                values.push(JSON.stringify(value));
            } else {
                fields.push(`${key} = $${index}`);
                values.push(value);
            }
            index++;
        }

        if (fields.length === 0) {
            console.log('❌ PUT /api/users - No fields to update');
            return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
        }

        values.push(nick);

        const query = `UPDATE "User" SET ${fields.join(', ')} WHERE nick = $${index} RETURNING *`;
        console.log('🔧 PUT /api/users - Query:', query);
        console.log('🔧 PUT /api/users - Values:', values);

        const result = await pool.query(query, values);
        console.log('✅ PUT /api/users - Result:', result.rows[0]);

        if (result.rows.length === 0) {
            console.log('❌ PUT /api/users - User not found');
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('❌ PUT /api/users - Error:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');

        if (!nick) {
            return NextResponse.json({ error: 'Nick is required' }, { status: 400 });
        }

        const result = await pool.query('DELETE FROM "User" WHERE nick = $1 RETURNING *', [nick]);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}