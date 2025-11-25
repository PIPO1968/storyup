import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM historias ORDER BY fecha DESC');
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching historias:', error);
        return NextResponse.json({ error: 'Error fetching historias' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { titulo, contenido, autor, imagen, concurso } = await request.json();
        const fecha = new Date().toISOString();
        const result = await pool.query(
            'INSERT INTO historias (titulo, contenido, autor, fecha, imagen, likes, comentarios, concurso) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [titulo, contenido, autor, fecha, imagen || null, 0, JSON.stringify([]), concurso || '']
        );
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error creating historia:', error);
        return NextResponse.json({ error: 'Error creating historia' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, action, usuario, comentario } = await request.json();
        if (action === 'like') {
            // Toggle like
            const historia = await pool.query('SELECT likes, liked_by FROM historias WHERE id = $1', [id]);
            if (historia.rows.length === 0) return NextResponse.json({ error: 'Historia not found' }, { status: 404 });
            const likedBy = historia.rows[0].liked_by || [];
            const alreadyLiked = likedBy.includes(usuario);
            let newLikes = historia.rows[0].likes;
            let newLikedBy = likedBy;
            if (alreadyLiked) {
                newLikedBy = likedBy.filter((u: string) => u !== usuario);
                newLikes -= 1;
            } else {
                newLikedBy.push(usuario);
                newLikes += 1;
            }
            await pool.query('UPDATE historias SET likes = $1, liked_by = $2 WHERE id = $3', [newLikes, JSON.stringify(newLikedBy), id]);
            return NextResponse.json({ likes: newLikes, liked: !alreadyLiked });
        } else if (action === 'comment') {
            const historia = await pool.query('SELECT comentarios FROM historias WHERE id = $1', [id]);
            if (historia.rows.length === 0) return NextResponse.json({ error: 'Historia not found' }, { status: 404 });
            const comentarios = historia.rows[0].comentarios || [];
            const newComment = { usuario, texto: comentario, fecha: new Date().toISOString() };
            comentarios.push(newComment);
            await pool.query('UPDATE historias SET comentarios = $1 WHERE id = $2', [JSON.stringify(comentarios), id]);
            return NextResponse.json({ comentarios });
        }
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Error updating historia:', error);
        return NextResponse.json({ error: 'Error updating historia' }, { status: 500 });
    }
}