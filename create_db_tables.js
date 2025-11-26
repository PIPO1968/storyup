const { pool } = require('./src/app/api/users/database.js');

async function createTables() {
    try {
        // Tabla para datos de campeonatos
        await pool.query(`
      CREATE TABLE IF NOT EXISTS campeonatos (
        id SERIAL PRIMARY KEY,
        temporada VARCHAR(10) NOT NULL,
        tipo VARCHAR(50) NOT NULL, -- 'centros', 'individual', 'docentes'
        nick VARCHAR(255) NOT NULL,
        preguntas_acertadas INTEGER DEFAULT 0,
        preguntas_falladas INTEGER DEFAULT 0,
        ganados INTEGER DEFAULT 0,
        perdidos INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(temporada, tipo, nick)
      )
    `);

        // Tabla para palabras prohibidas
        await pool.query(`
      CREATE TABLE IF NOT EXISTS palabras_prohibidas (
        id SERIAL PRIMARY KEY,
        palabra TEXT NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Tabla para sesiones de usuario
        await pool.query(`
      CREATE TABLE IF NOT EXISTS sesiones_usuario (
        id SERIAL PRIMARY KEY,
        nick VARCHAR(255) NOT NULL UNIQUE,
        session_data JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Tabla para configuración del sistema
        await pool.query(`
      CREATE TABLE IF NOT EXISTS configuracion (
        id SERIAL PRIMARY KEY,
        clave VARCHAR(255) NOT NULL UNIQUE,
        valor TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        console.log('✅ Tablas creadas exitosamente');
    } catch (error) {
        console.error('❌ Error creando tablas:', error);
    } finally {
        await pool.end();
    }
}

createTables();