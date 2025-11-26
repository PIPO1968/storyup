import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET() {
    try {
        const result = await pool.query('SELECT palabra FROM palabras_prohibidas ORDER BY palabra');
        const palabras = result.rows.map(row => row.palabra);
        return NextResponse.json(palabras);
    } catch (error) {
        console.error('Error obteniendo palabras prohibidas:', error);
        return NextResponse.json({ error: 'Error obteniendo palabras' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { palabra } = await request.json();

        if (!palabra || typeof palabra !== 'string') {
            return NextResponse.json({ error: 'Palabra requerida' }, { status: 400 });
        }

        const result = await pool.query(
            'INSERT INTO palabras_prohibidas (palabra) VALUES ($1) ON CONFLICT (palabra) DO NOTHING RETURNING *',
            [palabra.trim().toLowerCase()]
        );

        return NextResponse.json({ success: true, inserted: result.rows.length > 0 });
    } catch (error) {
        console.error('Error guardando palabra prohibida:', error);
        return NextResponse.json({ error: 'Error guardando palabra' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const palabra = searchParams.get('palabra');

        if (!palabra) {
            return NextResponse.json({ error: 'Palabra requerida' }, { status: 400 });
        }

        await pool.query('DELETE FROM palabras_prohibidas WHERE palabra = $1', [palabra]);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error eliminando palabra prohibida:', error);
        return NextResponse.json({ error: 'Error eliminando palabra' }, { status: 500 });
    }
}