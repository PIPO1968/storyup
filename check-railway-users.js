import { Pool } from 'pg';

async function checkUsers() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error('DATABASE_URL environment variable is not set');
        process.exit(1);
    }

    const pool = new Pool({
        connectionString,
    });

    try {
        console.log('Checking users in Railway database...');

        // Contar usuarios
        const countResult = await pool.query('SELECT COUNT(*) as total FROM "User"');
        console.log(`Total usuarios: ${countResult.rows[0].total}`);

        // Ver primeros 5 usuarios
        const usersResult = await pool.query('SELECT nick, fechainscripcion, premium FROM "User" LIMIT 5');
        console.log('\nPrimeros 5 usuarios:');
        usersResult.rows.forEach(user => {
            console.log(`- ${user.nick}: premium=${user.premium}, fecha=${user.fechainscripcion}`);
        });

        // Verificar si hay datos en campos JSONB
        const jsonbResult = await pool.query('SELECT nick, historias, amigos FROM "User" WHERE historias IS NOT NULL OR amigos IS NOT NULL LIMIT 3');
        console.log('\nCampos JSONB (historias, amigos):');
        jsonbResult.rows.forEach(user => {
            console.log(`- ${user.nick}: historias=${user.historias?.substring(0, 50)}..., amigos=${user.amigos?.substring(0, 50)}...`);
        });

    } catch (error) {
        console.error('Error checking users:', error);
    } finally {
        await pool.end();
    }
}

checkUsers().catch(console.error);