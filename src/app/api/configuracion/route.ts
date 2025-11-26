import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const clave = searchParams.get('clave');

    try {
        if (clave) {
            const result = await pool.query('SELECT valor FROM configuracion WHERE clave = $1', [clave]);
            if (result.rows.length === 0) {
                return NextResponse.json(null);
            }
            return NextResponse.json(result.rows[0].valor);
        } else {
            const result = await pool.query('SELECT clave, valor FROM configuracion');
            const config: { [key: string]: string } = {};
            result.rows.forEach(row => {
                config[row.clave] = row.valor;
            });
            return NextResponse.json(config);
        }
    } catch (error) {
        console.error('Error obteniendo configuración:', error);
        return NextResponse.json({ error: 'Error obteniendo configuración' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { clave, valor } = await request.json();

        if (!clave) {
            return NextResponse.json({ error: 'Clave requerida' }, { status: 400 });
        }

        const result = await pool.query(`
            INSERT INTO configuracion (clave, valor)
            VALUES ($1, $2)
            ON CONFLICT (clave)
            DO UPDATE SET
                valor = EXCLUDED.valor,
                updated_at = CURRENT_TIMESTAMP
            RETURNING *
        `, [clave, valor]);

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error guardando configuración:', error);
        return NextResponse.json({ error: 'Error guardando configuración' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const clave = searchParams.get('clave');

        if (!clave) {
            return NextResponse.json({ error: 'Clave requerida' }, { status: 400 });
        }

        await pool.query('DELETE FROM configuracion WHERE clave = $1', [clave]);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error eliminando configuración:', error);
        return NextResponse.json({ error: 'Error eliminando configuración' }, { status: 500 });
    }
}