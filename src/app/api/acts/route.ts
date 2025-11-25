import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function POST(request: NextRequest) {
    try {
        const { email, tipo, descripcion } = await request.json();

        const result = await pool.query(
            'INSERT INTO "Act" (email, tipo, descripcion, fecha) VALUES ($1, $2, $3, NOW()) RETURNING *',
            [email, tipo, descripcion]
        );

        const act = result.rows[0];
        return NextResponse.json({ act });
    } catch (error) {
        console.error('Error al crear actividad:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ error: 'Email requerido' }, { status: 400 });
        }

        const result = await pool.query('SELECT * FROM "Act" WHERE email = $1 ORDER BY fecha DESC', [email]);
        return NextResponse.json({ acts: result.rows });
    } catch (error) {
        console.error('Error al obtener actividades:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}