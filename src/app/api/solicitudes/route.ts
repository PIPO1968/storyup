import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        if (!nick) {
            return NextResponse.json({ error: 'Nick parameter required' }, { status: 400 });
        }
        const result = await pool.query(
            'SELECT * FROM solicitudes_amistad WHERE destino = $1 AND estado = $2',
            [nick, 'pendiente']
        );
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching solicitudes:', error);
        return NextResponse.json({ error: 'Error fetching solicitudes' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { origen, destino } = await request.json();
        if (!origen || !destino) {
            return NextResponse.json({ error: 'origen and destino required' }, { status: 400 });
        }
        const result = await pool.query(
            'INSERT INTO solicitudes_amistad (origen, destino, estado) VALUES ($1, $2, $3) ON CONFLICT (origen, destino) DO NOTHING RETURNING *',
            [origen, destino, 'pendiente']
        );
        return NextResponse.json(result.rows[0] || { message: 'Request already exists' });
    } catch (error) {
        console.error('Error sending solicitud:', error);
        return NextResponse.json({ error: 'Error sending solicitud' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, estado } = await request.json();
        if (!id || !estado) {
            return NextResponse.json({ error: 'id and estado required' }, { status: 400 });
        }
        if (!['aceptada', 'rechazada'].includes(estado)) {
            return NextResponse.json({ error: 'Invalid estado' }, { status: 400 });
        }
        const result = await pool.query(
            'UPDATE solicitudes_amistad SET estado = $1 WHERE id = $2 RETURNING *',
            [estado, id]
        );
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Solicitud not found' }, { status: 404 });
        }
        // Si aceptada, agregar a amigos
        if (estado === 'aceptada') {
            const solicitud = result.rows[0];
            const [n1, n2] = solicitud.origen < solicitud.destino ? [solicitud.origen, solicitud.destino] : [solicitud.destino, solicitud.origen];
            await pool.query('INSERT INTO amigos (nick1, nick2) VALUES ($1, $2) ON CONFLICT DO NOTHING', [n1, n2]);
        }
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating solicitud:', error);
        return NextResponse.json({ error: 'Error updating solicitud' }, { status: 500 });
    }
}