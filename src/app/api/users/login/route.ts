import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../database.js';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        const result = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user || user.password !== password) {
            return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error('Error en login:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}