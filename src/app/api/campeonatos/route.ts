import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const temporada = searchParams.get('temporada');
        const tipo = searchParams.get('tipo');

        let query = 'SELECT * FROM campeonatos';
        const params: any[] = [];
        if (temporada) {
            query += ' WHERE temporada = $1';
            params.push(parseInt(temporada));
        }
        if (tipo) {
            query += params.length ? ' AND tipo = $2' : ' WHERE tipo = $1';
            params.push(tipo);
        }
        query += ' ORDER BY id DESC';

        const result = await pool.query(query, params);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching campeonatos:', error);
        return NextResponse.json({ error: 'Error fetching campeonatos' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { temporada, tipo, datos } = await request.json();
        const result = await pool.query(
            'INSERT INTO campeonatos (temporada, tipo, datos) VALUES ($1, $2, $3) RETURNING *',
            [temporada, tipo, JSON.stringify(datos)]
        );
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error creating campeonato:', error);
        return NextResponse.json({ error: 'Error creating campeonato' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, datos } = await request.json();
        const result = await pool.query(
            'UPDATE campeonatos SET datos = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
            [JSON.stringify(datos), id]
        );
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Campeonato not found' }, { status: 404 });
        }
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating campeonato:', error);
        return NextResponse.json({ error: 'Error updating campeonato' }, { status: 500 });
    }
}