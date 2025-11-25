import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const result = await pool.query('SELECT * FROM historias WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'Historia not found' }, { status: 404 });
        }
        return NextResponse.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching historia:', error);
        return NextResponse.json({ error: 'Error fetching historia' }, { status: 500 });
    }
}