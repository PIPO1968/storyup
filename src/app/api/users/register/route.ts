import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../database.js';

// Función para convertir nombres de campos de DB a camelCase
function convertToCamelCase(obj: any): any {
    const converted: any = {};
    for (const [key, value] of Object.entries(obj)) {
        // Convertir nombres de campos
        const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        converted[camelCaseKey] = value;
    }
    return converted;
}

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
            `INSERT INTO "User" (nombre, nick, centro, curso, tipo, email, password, linkperfil, fechainscripcion, textofechainscripcion, likes, amigos, historias, comentarios, premium, trofeos, trofeosdesbloqueados, trofeosbloqueados, preguntasfalladas, competicionessuperadas, estaenranking, autotrofeos, premiumexpiracion, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25)
             RETURNING id, nombre, nick, centro, curso, tipo, email, linkperfil, textofechainscripcion`,
            [
                nombre, // nombre
                nick, // nick
                centro, // centro
                curso, // curso
                tipo, // tipo
                email, // email
                password, // password
                `/perfil/${nick}`, // linkperfil
                new Date(), // fechainscripcion
                `En StoryUp desde: ${new Date().toLocaleDateString('es-ES')}`, // textofechainscripcion
                0, // likes
                '{}', // amigos (ARRAY vacío)
                '{}', // historias (ARRAY vacío)
                '{}', // comentarios (ARRAY vacío)
                false, // premium
                0, // trofeos
                JSON.stringify([]), // trofeosdesbloqueados (jsonb)
                JSON.stringify([]), // trofeosbloqueados (jsonb)
                0, // preguntasfalladas
                0, // competicionessuperadas
                false, // estaenranking
                JSON.stringify([]), // autotrofeos (jsonb)
                null, // premiumexpiracion (puede ser null)
                new Date(), // createdAt
                new Date() // updatedAt
            ]
        );

        const user = insertResult.rows[0];
        // Convertir a camelCase antes de devolver
        const camelCaseUser = convertToCamelCase(user);
        return NextResponse.json({ user: camelCaseUser });
    } catch (error) {
        console.error('Error en registro:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}