import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const { curso, asignatura, pregunta, respuesta } = await request.json();

        if (!curso || !asignatura || !pregunta || !respuesta) {
            return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
        }

        const fileName = `${asignatura}-${curso}.json`;
        const filePath = path.join(process.cwd(), 'src', 'questions', fileName);

        // Verificar si el archivo existe
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: `Archivo ${fileName} no encontrado` }, { status: 404 });
        }

        // Leer el archivo
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let questions = JSON.parse(fileContent);        // Agregar la nueva pregunta
        const nuevaPregunta = {
            pregunta: pregunta.trim(),
            respuesta: respuesta.trim(),
            categoria: asignatura.charAt(0).toUpperCase() + asignatura.slice(1) // Capitalizar
        };

        questions.push(nuevaPregunta);

        // Escribir de vuelta
        fs.writeFileSync(filePath, JSON.stringify(questions, null, 2));

        return NextResponse.json({ message: `Pregunta agregada a ${fileName}` });
    } catch (error) {
        console.error('Error al agregar pregunta:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}