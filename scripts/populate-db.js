// Script para poblar la base de datos con datos de prueba
// Ejecutar con: node scripts/populate-db.js

const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
        ca: null
    }
});

async function populateDB() {
    try {
        console.log('Poblando base de datos...');

        // Insertar usuarios de prueba
        const users = [
            {
                nick: 'PIPO68',
                nombre: 'Pipo',
                centro: 'Camino La Villa',
                curso: '6º primaria',
                tipo: 'docente',
                email: 'pipocanarias@hotmail.com',
                password: 'PaLMeRiTa1968',
                likes: 5,
                amigos: '[]',
                trofeosdesbloqueados: '[1,2,3]',
                competicionessuperadas: 2,
                preguntasfalladas: 1
            },
            {
                nick: 'TestUser',
                nombre: 'Usuario de Prueba',
                centro: 'CEIP Test',
                curso: '1º primaria',
                tipo: 'usuario',
                email: 'test@example.com',
                password: 'test123',
                likes: 3,
                amigos: '["PIPO68"]',
                trofeosdesbloqueados: '[1]',
                competicionessuperadas: 1,
                preguntasfalladas: 0
            }
        ];

        for (const user of users) {
            await pool.query(`
                INSERT INTO "User" (nick, nombre, centro, curso, tipo, email, password, likes, amigos, trofeosdesbloqueados, competicionessuperadas, preguntasfalladas, fechainscripcion, textofechainscripcion, premium, trofeos, historias, comentarios, estaenranking, autotrofeos, trofeosbloqueados)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW(), 'En StoryUp desde: ' || TO_CHAR(NOW(), 'DD/MM/YYYY'), false, 0, '[]', '[]', false, '[]', '[]')
                ON CONFLICT (nick) DO NOTHING
            `, [user.nick, user.nombre, user.centro, user.curso, user.tipo, user.email, user.password, user.likes, user.amigos, user.trofeosdesbloqueados, user.competicionessuperadas, user.preguntasfalladas]);
        }

        // Insertar amistades
        await pool.query(`
            INSERT INTO amigos (nick1, nick2) VALUES ('PIPO68', 'TestUser')
            ON CONFLICT (nick1, nick2) DO NOTHING
        `);

        // Insertar datos de campeonatos
        const campeonatos = [
            { temporada: 't1', tipo: 'alumnos', nick: 'PIPO68', preguntas_acertadas: 10, preguntas_falladas: 2, ganados: 3, perdidos: 1, likes: 5 },
            { temporada: 't1', tipo: 'alumnos', nick: 'TestUser', preguntas_acertadas: 8, preguntas_falladas: 1, ganados: 2, perdidos: 0, likes: 3 }
        ];

        for (const camp of campeonatos) {
            await pool.query(`
                INSERT INTO campeonatos (temporada, tipo, nick, preguntas_acertadas, preguntas_falladas, ganados, perdidos, likes)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                ON CONFLICT DO NOTHING
            `, [camp.temporada, camp.tipo, camp.nick, camp.preguntas_acertadas, camp.preguntas_falladas, camp.ganados, camp.perdidos, camp.likes]);
        }

        console.log('Base de datos poblada exitosamente!');
    } catch (error) {
        console.error('Error poblando BD:', error);
    } finally {
        await pool.end();
    }
}

populateDB();