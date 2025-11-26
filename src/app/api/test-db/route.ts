import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../users/database.js';

export async function GET() {
    try {
        const result = await pool.query('SELECT NOW()');
        return NextResponse.json({
            status: 'success',
            timestamp: result.rows[0],
            database_url: process.env.DATABASE_URL ? 'configured' : 'not configured'
        });
    } catch (error) {
        console.error('Database connection error:', error);
        return NextResponse.json({
            status: 'error',
            error: (error as Error).message,
            database_url: process.env.DATABASE_URL ? 'configured' : 'not configured'
        }, { status: 500 });
    }
}