import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../database.js';

export async function GET(request: NextRequest, { params }: { params: Promise<{ nick: string }> }) {
    try {
        const { nick } = await params;
        const result = await pool.query('SELECT * FROM "User" WHERE nick = $1', [nick]);
        const user = result.rows[0];

        if (!user) {
            return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}