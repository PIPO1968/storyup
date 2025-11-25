import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../database';

export async function GET() {
    try {
        const result = await pool.query('SELECT COUNT(*) as count FROM "User"');
        return NextResponse.json({ count: parseInt(result.rows[0].count) });
    } catch (error) {
        console.error('Error en count:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}