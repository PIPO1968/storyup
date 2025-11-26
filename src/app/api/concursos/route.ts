import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

// API para gestionar concursos
export async function GET(request: NextRequest) {
    try {
        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS concursos (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                descripcion TEXT,
                premio VARCHAR(255),
                fechaInicio TIMESTAMP,
                fechaFin TIMESTAMP,
                participantes JSONB DEFAULT '[]'::jsonb,
                ganador VARCHAR(255),
                estado VARCHAR(50) DEFAULT 'activo',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const result = await pool.query('SELECT * FROM concursos ORDER BY id DESC');
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching concursos:', error);
        return NextResponse.json({ error: 'Error fetching concursos' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { titulo, descripcion, premio, fechaInicio, fechaFin, participantes = [], ganador, estado = 'activo' } = await request.json();

        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS concursos (
                id SERIAL PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                descripcion TEXT,
                premio VARCHAR(255),
                fechaInicio TIMESTAMP,
                fechaFin TIMESTAMP,
                participantes JSONB DEFAULT '[]'::jsonb,
                ganador VARCHAR(255),
                estado VARCHAR(50) DEFAULT 'activo',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const result = await pool.query(
            'INSERT INTO concursos (titulo, descripcion, premio, fechaInicio, fechaFin, participantes, ganador, estado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [titulo, descripcion, premio, fechaInicio, fechaFin, JSON.stringify(participantes), ganador, estado]
        );

        return NextResponse.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.error('Error creating concurso:', error);
        return NextResponse.json({ error: 'Error creating concurso' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, ...updates } = body;

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const fields = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(updates)) {
            if (key === 'participantes') {
                fields.push(`${key} = $${index}`);
                values.push(JSON.stringify(value));
            } else {
                fields.push(`${key} = $${index}`);
                values.push(value);
            }
            index++;
        }

        values.push(id);

        const query = `UPDATE concursos SET ${fields.join(', ')} WHERE id = $${index} RETURNING *`;

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Concurso not found' }, { status: 404 });
        }

        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating concurso:', error);
        return NextResponse.json({ error: 'Error updating concurso' }, { status: 500 });
    }
}