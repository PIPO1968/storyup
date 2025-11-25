import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET(request: NextRequest) {
  try {
    // Crear tabla si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS torneos (
        id VARCHAR(255) PRIMARY KEY,
        resultados JSONB DEFAULT '[]'
      )
    `);

    const result = await pool.query('SELECT * FROM torneos');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching torneos:', error);
    return NextResponse.json({ error: 'Error fetching torneos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { id, resultados } = await request.json();

    // Crear tabla si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS torneos (
        id VARCHAR(255) PRIMARY KEY,
        resultados JSONB DEFAULT '[]'
      )
    `);

    const result = await pool.query(
      'INSERT INTO torneos (id, resultados) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET resultados = EXCLUDED.resultados RETURNING *',
      [id, JSON.stringify(resultados || [])]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating torneos:', error);
    return NextResponse.json({ error: 'Error updating torneos' }, { status: 500 });
  }
}