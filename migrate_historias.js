import pool from './src/lib/db.js';

// Datos de ejemplo para migrar (simulando localStorage)
const historiasEjemplo = [
  {
    titulo: "Historia de ejemplo",
    contenido: "Contenido de la historia",
    autor: "Usuario1",
    fecha: new Date().toISOString(),
    imagen: null,
    likes: 5,
    comentarios: JSON.stringify([{ usuario: "User2", texto: "Buena historia", fecha: new Date().toISOString() }]),
    concurso: "",
    liked_by: JSON.stringify(["User2", "User3"])
  }
  // Agregar más si es necesario
];

async function migrateHistorias() {
  try {
    for (const historia of historiasEjemplo) {
      await pool.query(
        'INSERT INTO historias (titulo, contenido, autor, fecha, imagen, likes, comentarios, concurso, liked_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [historia.titulo, historia.contenido, historia.autor, historia.fecha, historia.imagen, historia.likes, historia.comentarios, historia.concurso, historia.liked_by]
      );
    }
    console.log('Migración completada');
  } catch (error) {
    console.error('Error en migración:', error);
  } finally {
    pool.end();
  }
}

migrateHistorias();