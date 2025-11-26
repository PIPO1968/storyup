import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const temporada = searchParams.get('temporada');
    const tipo = searchParams.get('tipo');
    const nick = searchParams.get('nick');

    try {
        let query = 'SELECT * FROM campeonatos WHERE 1=1';
        const params: any[] = [];
        let paramIndex = 1;

        if (temporada) {
            query += ` AND temporada = $${paramIndex}`;
            params.push(temporada);
            paramIndex++;
        }

        if (tipo) {
            query += ` AND tipo = $${paramIndex}`;
            params.push(tipo);
            paramIndex++;
        }

        if (nick) {
            query += ` AND nick = $${paramIndex}`;
            params.push(nick);
            paramIndex++;
        }

        query += ' ORDER BY likes DESC, preguntas_acertadas DESC';

        const result = await pool.query(query, params);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error obteniendo campeonatos:', error);
        return NextResponse.json({ error: 'Error obteniendo datos' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { temporada, tipo, nick, preguntas_acertadas, preguntas_falladas, ganados, perdidos, likes } = body;

        const result = await pool.query(`
            INSERT INTO campeonatos (temporada, tipo, nick, preguntas_acertadas, preguntas_falladas, ganados, perdidos, likes)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            ON CONFLICT (temporada, tipo, nick)
            DO UPDATE SET
                preguntas_acertadas = EXCLUDED.preguntas_acertadas,
                preguntas_falladas = EXCLUDED.preguntas_falladas,
                ganados = EXCLUDED.ganados,
                perdidos = EXCLUDED.perdidos,
                likes = EXCLUDED.likes,
                updated_at = CURRENT_TIMESTAMP
            RETURNING *
        `, [temporada, tipo, nick, preguntas_acertadas || 0, preguntas_falladas || 0, ganados || 0, perdidos || 0, likes || 0]);

        return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.error('Error guardando campeonato:', error);
        return NextResponse.json({ error: 'Error guardando datos' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { temporada, tipo, nick, ...updates } = body;

        if (!temporada || !tipo || !nick) {
            return NextResponse.json({ error: 'temporada, tipo y nick son requeridos' }, { status: 400 });
        }

        const fields = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(updates)) {
            fields.push(`${key} = $${index}`);
            values.push(value);
            index++;
        }

        values.push(temporada, tipo, nick);

        const query = `UPDATE campeonatos SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE temporada = $${index} AND tipo = $${index + 1} AND nick = $${index + 2} RETURNING *`;

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Registro no encontrado' }, { status: 404 });
        }

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error actualizando campeonato:', error);
        return NextResponse.json({ error: 'Error actualizando datos' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const temporada = searchParams.get('temporada');
        const tipo = searchParams.get('tipo');

        if (!temporada || !tipo) {
            return NextResponse.json({ error: 'temporada y tipo son requeridos' }, { status: 400 });
        }

        await pool.query('DELETE FROM campeonatos WHERE temporada = $1 AND tipo = $2', [temporada, tipo]);
        return NextResponse.json({ message: 'Datos eliminados exitosamente' });
    } catch (error) {
        console.error('Error eliminando campeonato:', error);
        return NextResponse.json({ error: 'Error eliminando datos' }, { status: 500 });
    }
}