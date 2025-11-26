import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET() {
    try {
        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS solicitudes_premium (
                id SERIAL PRIMARY KEY,
                nick VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                metodo_pago VARCHAR(255),
                precio DECIMAL(10,2),
                fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                estado VARCHAR(50) DEFAULT 'pendiente',
                fecha_aprobacion TIMESTAMP,
                fecha_rechazo TIMESTAMP,
                motivo TEXT
            )
        `);

        const result = await pool.query('SELECT * FROM solicitudes_premium ORDER BY fecha DESC');
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error al obtener solicitudes premium:', error);
        return NextResponse.json({ error: 'Error al obtener solicitudes' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, estado, fecha_aprobacion, fecha_rechazo, motivo } = await request.json();
        let query = 'UPDATE solicitudes_premium SET estado = $1';
        const values = [estado];
        let index = 2;

        if (estado === 'aprobado' && fecha_aprobacion) {
            query += `, fecha_aprobacion = $${index}`;
            values.push(fecha_aprobacion);
            index++;
        }
        if (estado === 'rechazado' && fecha_rechazo) {
            query += `, fecha_rechazo = $${index}, motivo = $${index + 1}`;
            values.push(fecha_rechazo, motivo);
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