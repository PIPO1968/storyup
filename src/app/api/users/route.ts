import { NextRequest, NextResponse } from 'next/server';
import { pool } from './database.js';

// Función para convertir nombres de campos de DB a camelCase
function convertToCamelCase(obj: any): any {
    const converted: any = {};
    for (const [key, value] of Object.entries(obj)) {
        // Convertir nombres de campos
        const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
        converted[camelCaseKey] = value;
    }
    return converted;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const nick = searchParams.get('nick');
    const email = searchParams.get('email');

    try {
        // Crear tabla si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS "User" (
                id SERIAL PRIMARY KEY,
                nick VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                nombre VARCHAR(255),
                centro VARCHAR(255),
                curso VARCHAR(255),
                tipo VARCHAR(255),
                linkperfil VARCHAR(255),
                fechainscripcion TIMESTAMP NOT NULL,
                textofechainscripcion TEXT,
                likes INTEGER DEFAULT 0,
                trofeos INTEGER DEFAULT 0,
                historias JSONB DEFAULT '[]'::jsonb,
                amigos JSONB DEFAULT '[]'::jsonb,
                trofeosdesbloqueados JSONB DEFAULT '[]'::jsonb,
                trofeosbloqueados JSONB DEFAULT '[]'::jsonb,
                preguntasfalladas INTEGER DEFAULT 0,
                competicionessuperadas INTEGER DEFAULT 0,
                estaenranking BOOLEAN DEFAULT FALSE,
                autotrofeos JSONB DEFAULT '[]'::jsonb,
                comentarios JSONB DEFAULT '[]'::jsonb,
                premium BOOLEAN DEFAULT FALSE,
                premiumexpiracion TIMESTAMP
            )
        `);

        // Migrar columnas existentes si es necesario
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "linkPerfil" TO linkperfil`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "fechaInscripcion" TO fechainscripcion`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "textoFechaInscripcion" TO textofechainscripcion`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "trofeosDesbloqueados" TO trofeosdesbloqueados`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "trofeosBloqueados" TO trofeosbloqueados`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "preguntasFalladas" TO preguntasfalladas`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "competicionesSuperadas" TO competicionessuperadas`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "estaEnRanking" TO estaenranking`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "autoTrofeos" TO autotrofeos`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }
        try {
            await pool.query(`ALTER TABLE "User" RENAME COLUMN "premiumExpiracion" TO premiumexpiracion`);
        } catch (e) {
            // Columna ya renombrada o no existe
        }

        // Agregar columnas faltantes si no existen
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS trofeos INTEGER DEFAULT 0`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS historias JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS amigos JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS trofeosdesbloqueados JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS trofeosbloqueados JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS preguntasfalladas INTEGER DEFAULT 0`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS competicionessuperadas INTEGER DEFAULT 0`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS estaenranking BOOLEAN DEFAULT FALSE`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS autotrofeos JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS comentarios JSONB DEFAULT '[]'::jsonb`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS premium BOOLEAN DEFAULT FALSE`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS premiumexpiracion TIMESTAMP`);
        } catch (e) {
            // Columna ya existe
        }
        try {
            await pool.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS avatar VARCHAR(255)`);
        } catch (e) {
            // Columna ya existe
        }

        if (nick) {
            const result = await pool.query('SELECT * FROM "User" WHERE nick = $1', [nick]);
            if (result.rows.length === 0) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            // Parse JSONB fields and convert to camelCase
            const user = result.rows[0];
            const jsonbFields = ['historias', 'amigos', 'trofeosdesbloqueados', 'trofeosbloqueados', 'autotrofeos', 'comentarios'];
            jsonbFields.forEach(field => {
                if (user[field]) {
                    try {
                        user[field] = JSON.parse(user[field]);
                    } catch (e) {
                        // If parsing fails, ensure it's an array
                        user[field] = Array.isArray(user[field]) ? user[field] : [];
                    }
                } else {
                    user[field] = [];
                }
            });
            return NextResponse.json(convertToCamelCase(user));
        } else if (email) {
            const result = await pool.query('SELECT * FROM "User" WHERE email = $1', [email]);
            if (result.rows.length === 0) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }
            // Parse JSONB fields and convert to camelCase
            const user = result.rows[0];
            const jsonbFields = ['historias', 'amigos', 'trofeosdesbloqueados', 'trofeosbloqueados', 'autotrofeos', 'comentarios'];
            jsonbFields.forEach(field => {
                if (user[field]) {
                    try {
                        user[field] = JSON.parse(user[field]);
                    } catch (e) {
                        // If parsing fails, ensure it's an array
                        user[field] = Array.isArray(user[field]) ? user[field] : [];
                    }
                } else {
                    user[field] = [];
                }
            });
            return NextResponse.json(convertToCamelCase(user));
        } else {
            const result = await pool.query('SELECT * FROM "User"');
            // Parse JSONB fields for all users and convert to camelCase
            const users = result.rows.map(user => {
                const jsonbFields = ['historias', 'amigos', 'trofeosdesbloqueados', 'trofeosbloqueados', 'autotrofeos', 'comentarios'];
                jsonbFields.forEach(field => {
                    if (user[field]) {
                        try {
                            user[field] = JSON.parse(user[field]);
                        } catch (e) {
                            // If parsing fails, ensure it's an array
                            user[field] = Array.isArray(user[field]) ? user[field] : [];
                        }
                    } else {
                        user[field] = [];
                    }
                });
                return convertToCamelCase(user);
            });
            return NextResponse.json(users);
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nick, email, password, nombre, centro, curso, tipo, linkPerfil, fechaInscripcion, textoFechaInscripcion, likes = 0, trofeos = 0, historias = [], amigos = [], trofeosDesbloqueados = [], trofeosBloqueados = [], preguntasFalladas = 0, competicionesSuperadas = 0, estaEnRanking = false, autoTrofeos = [], comentarios = [] } = body;

        const result = await pool.query(
            'INSERT INTO "User" (nick, email, password, nombre, centro, curso, tipo, linkperfil, fechainscripcion, textofechainscripcion, likes, trofeos, historias, amigos, trofeosdesbloqueados, trofeosbloqueados, preguntasfalladas, competicionessuperadas, estaenranking, autotrofeos, comentarios) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *',
            [nick, email, password, nombre, centro, curso, tipo, linkPerfil, fechaInscripcion, textoFechaInscripcion, likes, trofeos, JSON.stringify(Array.isArray(historias) ? historias : []), JSON.stringify(Array.isArray(amigos) ? amigos : []), JSON.stringify(Array.isArray(trofeosDesbloqueados) ? trofeosDesbloqueados : []), JSON.stringify(Array.isArray(trofeosBloqueados) ? trofeosBloqueados : []), preguntasFalladas, competicionesSuperadas, estaEnRanking, JSON.stringify(Array.isArray(autoTrofeos) ? autoTrofeos : []), JSON.stringify(Array.isArray(comentarios) ? comentarios : [])]
        );

        // Parse JSONB fields in the returned user and convert to camelCase
        const user = result.rows[0];
        const jsonbFields = ['historias', 'amigos', 'trofeosdesbloqueados', 'trofeosbloqueados', 'autotrofeos', 'comentarios'];
        jsonbFields.forEach(field => {
            if (user[field]) {
                try {
                    user[field] = JSON.parse(user[field]);
                } catch (e) {
                    // If parsing fails, ensure it's an array
                    user[field] = Array.isArray(user[field]) ? user[field] : [];
                }
            } else {
                user[field] = [];
            }
        });

        return NextResponse.json(convertToCamelCase(user), { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        console.log('🔄 PUT /api/users - Body recibido:', body);
        const { nick, ...updates } = body;

        if (!nick) {
            console.log('❌ PUT /api/users - Nick requerido faltante');
            return NextResponse.json({ error: 'Nick is required' }, { status: 400 });
        }

        // Debug: Verificar qué columnas existen realmente
        if (nick === 'PIPO68') {
            console.log('🔍 PUT /api/users - Verificando columnas para PIPO68...');
            try {
                const columnsResult = await pool.query(`
                    SELECT column_name
                    FROM information_schema.columns
                    WHERE table_name = 'User'
                    ORDER BY column_name
                `);
                console.log('📋 Columnas existentes en tabla User:', columnsResult.rows.map(r => r.column_name));
            } catch (colError) {
                console.log('❌ Error verificando columnas:', colError instanceof Error ? colError.message : String(colError));
            }
        }

        console.log('🔍 PUT /api/users - Updates:', updates);

        // Limpiar y validar el objeto updates - solo incluir campos válidos con valores válidos
        const validFields = [
            'nombre', 'centro', 'curso', 'tipo', 'email', 'password', 'linkperfil', 'avatar',
            'fechainscripcion', 'textofechainscripcion', 'likes', 'trofeos',
            'historias', 'amigos', 'trofeosdesbloqueados', 'trofeosbloqueados',
            'preguntasfalladas', 'competicionessuperadas', 'estaenranking',
            'autotrofeos', 'comentarios', 'premium', 'premiumexpiracion'
        ];

        const cleanUpdates: any = {};
        for (const [key, value] of Object.entries(updates)) {
            // Solo incluir campos válidos que no sean undefined
            if (validFields.includes(key) && value !== undefined) {
                cleanUpdates[key] = value;
            }
        }

        console.log('🧹 PUT /api/users - Updates limpiados:', cleanUpdates);

        const fields = [];
        const values = [];
        let index = 1;

        for (const [key, value] of Object.entries(cleanUpdates)) {
            // Skip null/undefined values except for specific fields that can be null
            if (value === null && !['premiumexpiracion'].includes(key)) {
                console.log(`⚠️ PUT /api/users - Skipping null value for field: ${key}`);
                continue;
            }

            let fieldName = key;
            // Convert camelCase to lowercase for database fields
            const fieldMapping: { [key: string]: string } = {
                'linkPerfil': 'linkperfil',
                'fechaInscripcion': 'fechainscripcion',
                'textoFechaInscripcion': 'textofechainscripcion',
                'trofeosDesbloqueados': 'trofeosdesbloqueados',
                'trofeosBloqueados': 'trofeosbloqueados',
                'preguntasFalladas': 'preguntasfalladas',
                'competicionesSuperadas': 'competicionessuperadas',
                'estaEnRanking': 'estaenranking',
                'autoTrofeos': 'autotrofeos',
                'premiumExpiracion': 'premiumexpiracion'
            };

            if (fieldMapping[key]) {
                fieldName = fieldMapping[key];
            }

            // Handle different field types
            if (['autotrofeos', 'trofeosdesbloqueados', 'trofeosbloqueados'].includes(fieldName)) {
                // JSONB fields - convert to JSON string
                let jsonValue = value;
                if (typeof value === 'string') {
                    jsonValue = value;
                } else if (Array.isArray(value)) {
                    jsonValue = JSON.stringify(value);
                } else {
                    jsonValue = '[]';
                }
                fields.push(`${fieldName} = $${index}`);
                values.push(jsonValue);
            } else if (['historias', 'amigos', 'comentarios'].includes(fieldName)) {
                // ARRAY fields - use PostgreSQL array syntax
                let arrayValue = value;
                if (Array.isArray(value)) {
                    // Convert array to PostgreSQL ARRAY format
                    arrayValue = '{' + value.map(item =>
                        typeof item === 'string' ? `"${item.replace(/"/g, '\\"')}"` : String(item)
                    ).join(',') + '}';
                } else if (typeof value === 'string') {
                    // If it's already a string, assume it's PostgreSQL array format
                    arrayValue = value;
                } else {
                    // Default to empty array
                    arrayValue = '{}';
                }
                fields.push(`${fieldName} = $${index}`);
                values.push(arrayValue);
            } else {
                fields.push(`${fieldName} = $${index}`);
                values.push(value);
            }
            index++;
        }

        if (fields.length === 0) {
            console.log('❌ PUT /api/users - No fields to update');
            return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
        }

        values.push(nick);

        const query = `UPDATE "User" SET ${fields.join(', ')} WHERE nick = $${index} RETURNING *`;
        console.log('🔧 PUT /api/users - Query:', query);
        console.log('🔧 PUT /api/users - Values:', values);

        const result = await pool.query(query, values);
        console.log('✅ PUT /api/users - Result:', result.rows[0]);

        if (result.rows.length === 0) {
            console.log('❌ PUT /api/users - User not found');
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Parse fields in the returned user
        const user = result.rows[0];

        // JSONB fields need JSON parsing
        const jsonbFields = ['autotrofeos', 'trofeosdesbloqueados', 'trofeosbloqueados'];
        jsonbFields.forEach(field => {
            if (user[field]) {
                try {
                    user[field] = JSON.parse(user[field]);
                } catch (e) {
                    user[field] = Array.isArray(user[field]) ? user[field] : [];
                }
            } else {
                user[field] = [];
            }
        });

        // ARRAY fields are already in correct format from PostgreSQL
        const arrayFields = ['historias', 'amigos', 'comentarios'];
        arrayFields.forEach(field => {
            if (!user[field]) {
                user[field] = [];
            }
            // Ensure it's always an array
            if (!Array.isArray(user[field])) {
                user[field] = [];
            }
        });

        return NextResponse.json(convertToCamelCase(user));
    } catch (error) {
        console.error('❌ PUT /api/users - Error:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const nick = searchParams.get('nick');
        const action = searchParams.get('action');

        // Endpoint temporal para limpiar datos corruptos
        if (action === 'clean-corrupt-data') {
            console.log('🧹 DELETE /api/users - Limpiando datos corruptos...');
            const result = await pool.query('DELETE FROM "User"');
            console.log(`✅ Eliminados ${result.rowCount} usuarios corruptos`);
            return NextResponse.json({
                success: true,
                message: `Eliminados ${result.rowCount} usuarios corruptos. La aplicación está lista para nuevos registros.`,
                deletedCount: result.rowCount
            });
        }

        if (!nick) {
            return NextResponse.json({ error: 'Nick is required' }, { status: 400 });
        }

        const result = await pool.query('DELETE FROM "User" WHERE nick = $1 RETURNING *', [nick]);

        if (result.rows.length === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}