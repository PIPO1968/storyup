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

export async function PUT(request: NextRequest) {
    try {
        const { id, estado, fechaAprobacion, fechaRechazo, motivo } = await request.json();
        let query = 'UPDATE solicitudes_premium SET estado = $1';
        const values = [estado];
        let index = 2;

        if (estado === 'aprobado' && fechaAprobacion) {
            query += `, fecha_aprobacion = $${index}`;
            values.push(fechaAprobacion);
            index++;
        }
        if (estado === 'rechazado' && fechaRechazo) {
            query += `, fecha_rechazo = $${index}, motivo = $${index + 1}`;
            values.push(fechaRechazo, motivo);
            index += 2;
        }

        query += ` WHERE id = $${index} RETURNING *`;
        values.push(id);

        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Solicitud no encontrada' }, { status: 404 });
        }
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error al actualizar solicitud premium:', error);
        return NextResponse.json({ error: 'Error al actualizar solicitud' }, { status: 500 });
    }
}