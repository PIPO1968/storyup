import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const nick = searchParams.get('nick');

    if (!nick) {
      return NextResponse.json({ error: 'Nick required' }, { status: 400 });
    }

    // Crear tabla si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS chat (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) NOT NULL,
        mensajes JSONB DEFAULT '[]',
        aviso BOOLEAN DEFAULT FALSE
      )
    `);

    const result = await pool.query('SELECT * FROM chat WHERE nick = $1', [nick]);
    if (result.rows.length > 0) {
      return NextResponse.json(result.rows[0]);
    } else {
      return NextResponse.json({ mensajes: [], aviso: false });
    }
  } catch (error) {
    console.error('Error fetching chat:', error);
    return NextResponse.json({ error: 'Error fetching chat' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nick, mensajes, aviso } = await request.json();

    // Crear tabla si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS chat (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) UNIQUE NOT NULL,
        mensajes JSONB DEFAULT '[]',
        aviso BOOLEAN DEFAULT FALSE
      )
    `);

    const result = await pool.query(
      'INSERT INTO chat (nick, mensajes, aviso) VALUES ($1, $2, $3) ON CONFLICT (nick) DO UPDATE SET mensajes = EXCLUDED.mensajes, aviso = EXCLUDED.aviso RETURNING *',
      [nick, JSON.stringify(mensajes || []), aviso || false]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating chat:', error);
    return NextResponse.json({ error: 'Error updating chat' }, { status: 500 });
  }
}