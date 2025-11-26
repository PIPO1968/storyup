import { Pool } from 'pg';

async function addMissingColumns() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error('DATABASE_URL environment variable is not set');
        process.exit(1);
    }

    const pool = new Pool({
        connectionString,
    });

    try {
        console.log('Adding missing columns to User table...');

        // Columnas que faltan según el error
        const missingColumns = [
            { name: 'trofeos', type: 'INTEGER DEFAULT 0' },
            { name: 'historias', type: 'JSONB DEFAULT \'[]\'::jsonb' },
            { name: 'amigos', type: 'JSONB DEFAULT \'[]\'::jsonb' },
            { name: 'trofeosdesbloqueados', type: 'JSONB DEFAULT \'[]\'::jsonb' },
            { name: 'trofeosbloqueados', type: 'JSONB DEFAULT \'[]\'::jsonb' },
            { name: 'preguntasfalladas', type: 'INTEGER DEFAULT 0' },
            { name: 'competicionessuperadas', type: 'INTEGER DEFAULT 0' },
            { name: 'estaenranking', type: 'BOOLEAN DEFAULT FALSE' },
            { name: 'autotrofeos', type: 'JSONB DEFAULT \'[]\'::jsonb' },
            { name: 'comentarios', type: 'JSONB DEFAULT \'[]\'::jsonb' },
            { name: 'premium', type: 'BOOLEAN DEFAULT FALSE' },
            { name: 'premiumexpiracion', type: 'TIMESTAMP' }
        ];

        for (const col of missingColumns) {
            try {
                await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS ${col.name} ${col.type}`);
                console.log(`✓ Added column ${col.name}`);
            } catch (e) {
                console.log(`⚠️ Column ${col.name} already exists or error:`, e.message);
            }
        }

        console.log('All missing columns added successfully!');

    } catch (error) {
        console.error('Error adding columns:', error);
    } finally {
        await pool.end();
    }
}

addMissingColumns().catch(console.error);