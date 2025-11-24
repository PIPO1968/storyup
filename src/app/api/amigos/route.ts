import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const nick = searchParams.get('nick');
    if (!nick) {
      return NextResponse.json({ error: 'Nick parameter required' }, { status: 400 });
    }
    const result = await pool.query(
      'SELECT nick2 AS amigo FROM amigos WHERE nick1 = $1 UNION SELECT nick1 AS amigo FROM amigos WHERE nick2 = $1',
      [nick]
    );
    return NextResponse.json(result.rows.map(row => row.amigo));
  } catch (error) {
    console.error('Error fetching amigos:', error);
    return NextResponse.json({ error: 'Error fetching amigos' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nick1, nick2 } = await request.json();
    if (!nick1 || !nick2) {
      return NextResponse.json({ error: 'nick1 and nick2 required' }, { status: 400 });
    }
    // Insertar en orden para unique
    const [n1, n2] = nick1 < nick2 ? [nick1, nick2] : [nick2, nick1];
    const result = await pool.query(
      'INSERT INTO amigos (nick1, nick2) VALUES ($1, $2) ON CONFLICT (nick1, nick2) DO NOTHING RETURNING *',
      [n1, n2]
    );
    return NextResponse.json(result.rows[0] || { message: 'Already friends' });
  } catch (error) {
    console.error('Error adding amigo:', error);
    return NextResponse.json({ error: 'Error adding amigo' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { nick1, nick2 } = await request.json();
    if (!nick1 || !nick2) {
      return NextResponse.json({ error: 'nick1 and nick2 required' }, { status: 400 });
    }
    const [n1, n2] = nick1 < nick2 ? [nick1, nick2] : [nick2, nick1];
    await pool.query('DELETE FROM amigos WHERE nick1 = $1 AND nick2 = $2', [n1, n2]);
    return NextResponse.json({ message: 'Friendship removed' });
  } catch (error) {
    console.error('Error removing amigo:', error);
    return NextResponse.json({ error: 'Error removing amigo' }, { status: 500 });
  }
}