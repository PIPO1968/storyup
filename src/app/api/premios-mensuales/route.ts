import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

// API para gestionar premios mensuales
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const year = searchParams.get('year');
        const month = searchParams.get('month');

        if (!year || !month) {
            return NextResponse.json({ error: 'Year and month parameters required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS premios_mensuales (
                id VARCHAR(255) PRIMARY KEY,
                premios JSONB DEFAULT '[]'::jsonb,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const id = `premios_mensuales_${year}_${month}`;
        const result = await pool.query('SELECT * FROM premios_mensuales WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return NextResponse.json([]);
        }

        return NextResponse.json(result.rows[0].premios);
    } catch (error) {
        console.error('Error fetching premios mensuales:', error);
        return NextResponse.json({ error: 'Error fetching premios mensuales' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { year, month, premios } = await request.json();

        if (!year || !month) {
            return NextResponse.json({ error: 'Year and month required' }, { status: 400 });
        }

        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS premios_mensuales (
                id VARCHAR(255) PRIMARY KEY,
                premios JSONB DEFAULT '[]'::jsonb,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const id = `premios_mensuales_${year}_${month}`;
        const result = await pool.query(
            'INSERT INTO premios_mensuales (id, premios) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET premios = EXCLUDED.premios RETURNING *',
            [id, JSON.stringify(premios)]
        );

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error saving premios mensuales:', error);
        return NextResponse.json({ error: 'Error saving premios mensuales' }, { status: 500 });
    }
}