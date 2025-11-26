import { Pool } from 'pg';

async function checkUser() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error('DATABASE_URL environment variable is not set');
        process.exit(1);
    }

    const pool = new Pool({
        connectionString,
    });

    try {
        console.log('Checking user PIPO68...');

        const result = await pool.query('SELECT * FROM "User" WHERE nick = $1', ['PIPO68']);

        if (result.rows.length > 0) {
            console.log('Usuario PIPO68 encontrado:');
            const user = result.rows[0];
            Object.keys(user).forEach(key => {
                console.log(`- ${key}: ${JSON.stringify(user[key])}`);
            });
        } else {
            console.log('Usuario PIPO68 no encontrado');
        }

    } catch (error) {
        console.error('Error checking user:', error);
    } finally {
        await pool.end();
    }
}

checkUser().catch(console.error);