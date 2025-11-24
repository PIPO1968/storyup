import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS historias (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        contenido TEXT NOT NULL,
        autor TEXT NOT NULL,
        fecha TIMESTAMP NOT NULL,
        imagen TEXT,
        likes INTEGER DEFAULT 0,
        comentarios JSONB DEFAULT '[]'::jsonb,
        concurso TEXT DEFAULT '',
        liked_by JSONB DEFAULT '[]'::jsonb
      );
    `);
    console.log('Tabla historias creada exitosamente');
  } catch (error) {
    console.error('Error creando tabla:', error);
  } finally {
    pool.end();
  }
}

createTable();