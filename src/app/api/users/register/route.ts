import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../database.js';

export async function POST(request: NextRequest) {
    try {
        const { nombre, nick, centro, curso, tipo, email, password } = await request.json();

        // Verificar si el email ya existe
        const existingResult = await pool.query('SELECT id FROM "User" WHERE email = $1', [email]);
        if (existingResult.rows.length > 0) {
            return NextResponse.json({ error: 'Email ya registrado' }, { status: 400 });
        }

        // Insertar el nuevo usuario
        const insertResult = await pool.query(
            `INSERT INTO "User" (nombre, nick, centro, curso, tipo, email, password, "linkPerfil", "textoFechaInscripcion", likes, amigos, historias, comentarios, premium, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW(), NOW())
             RETURNING id, nombre, nick, centro, curso, tipo, email, "linkPerfil", "textoFechaInscripcion"`,
            [
                nombre,
                nick,
                centro,
                curso,
                tipo,
                email,
                password,
                `/perfil/${nick}`,
                `En StoryUp desde: ${new Date().toLocaleDateString('es-ES')}`,
                0,
                [],
                [],
                [],
                false
            ]
        );

        const user = insertResult.rows[0];
        return NextResponse.json({ user });
    } catch (error) {
        console.error('Error en registro:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}