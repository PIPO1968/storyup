import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM solicitudes_premium ORDER BY fecha DESC');
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error al obtener solicitudes premium:', error);
        return NextResponse.json({ error: 'Error al obtener solicitudes' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const solicitud = await request.json();
        const result = await pool.query(
            'INSERT INTO solicitudes_premium (nick, email, metodo_pago, fecha, id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [solicitud.nick, solicitud.email, solicitud.metodoPago, solicitud.fecha, solicitud.id]
        );
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error al crear solicitud premium:', error);
        return NextResponse.json({ error: 'Error al crear solicitud' }, { status: 500 });
    }
}