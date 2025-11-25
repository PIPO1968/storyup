const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

async function runSQL() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });

    try {
        const sqlFilePath = path.join(__dirname, 'create_tables.sql');
        const sql = fs.readFileSync(sqlFilePath, 'utf8');

        console.log('Conectando a la base de datos...');
        const client = await pool.connect();

        console.log('Ejecutando SQL...');
        await client.query(sql);

        console.log('¡Tablas creadas exitosamente!');
    } catch (error) {
        console.error('Error ejecutando SQL:', error);
    } finally {
        await pool.end();
    }
}

runSQL();