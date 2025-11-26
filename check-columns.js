import { Pool } from 'pg';

async function checkColumns() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error('DATABASE_URL environment variable is not set');
        process.exit(1);
    }

    const pool = new Pool({
        connectionString,
    });

    try {
        console.log('Checking columns in User table...');

        const result = await pool.query(`
            SELECT column_name, data_type, is_nullable, column_default
            FROM information_schema.columns
            WHERE table_name = 'User'
            ORDER BY ordinal_position
        `);

        console.log('\nColumnas existentes en tabla User:');
        result.rows.forEach(row => {
            console.log(`- ${row.column_name}: ${row.data_type} ${row.is_nullable === 'YES' ? '(nullable)' : '(not null)'} ${row.column_default ? `default: ${row.column_default}` : ''}`);
        });

    } catch (error) {
        console.error('Error checking columns:', error);
    } finally {
        await pool.end();
    }
}

checkColumns().catch(console.error);