import { Pool } from 'pg';

async function runMigrations() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        console.error('DATABASE_URL environment variable is not set');
        process.exit(1);
    }

    const pool = new Pool({
        connectionString,
    });

    try {
        console.log('Starting database migrations...');

        // Migration 1: Rename columns in User table to lowercase
        console.log('Renaming User table columns...');
        const userColumns = [
            { old: 'fechaInscripcion', new: 'fechainscripcion' },
            { old: 'textoFechaInscripcion', new: 'textofechainscripcion' },
            { old: 'linkPerfil', new: 'linkperfil' },
            { old: 'createdAt', new: 'createdat' },
            { old: 'updatedAt', new: 'updatedat' },
            { old: 'trofeosDesbloqueados', new: 'trofeosdesbloqueados' },
            { old: 'trofeosBloqueados', new: 'trofeosbloqueados' },
            { old: 'preguntasFalladas', new: 'preguntasfalladas' },
            { old: 'competicionesSuperadas', new: 'competicionessuperadas' },
            { old: 'estaEnRanking', new: 'estaenranking' },
            { old: 'autoTrofeos', new: 'autotrofeos' },
            { old: 'premiumExpiracion', new: 'premiumexpiracion' }
        ];

        for (const col of userColumns) {
            try {
                await pool.query(`ALTER TABLE "User" RENAME COLUMN "${col.old}" TO "${col.new}"`);
                console.log(`✓ Renamed ${col.old} to ${col.new}`);
            } catch (e) {
                console.log(`⚠️ Column ${col.old} already renamed or doesn't exist`);
            }
        }

        // Migration 2: Rename columns in PremiumUser table to lowercase
        console.log('Renaming PremiumUser table columns...');
        const premiumUserColumns = [
            { old: 'fechaInicio', new: 'fechainicio' },
            { old: 'metodoPago', new: 'metodopago' },
            { old: 'activadoPorAdmin', new: 'activadoporadmin' },
            { old: 'solicitudId', new: 'solicitudid' },
            { old: 'emailPago', new: 'emailpago' },
            { old: 'createdAt', new: 'createdat' },
            { old: 'updatedAt', new: 'updatedat' }
        ];

        for (const col of premiumUserColumns) {
            try {
                await pool.query(`ALTER TABLE "PremiumUser" RENAME COLUMN "${col.old}" TO "${col.new}"`);
                console.log(`✓ Renamed ${col.old} to ${col.new}`);
            } catch (e) {
                console.log(`⚠️ Column ${col.old} already renamed or doesn't exist`);
            }
        }

        // Migration 3: Rename columns in PremiumRequest table to lowercase
        console.log('Renaming PremiumRequest table columns...');
        const premiumRequestColumns = [
            { old: 'fechaSolicitud', new: 'fechasolicitud' },
            { old: 'fechaAprobacion', new: 'fechaaprobacion' },
            { old: 'fechaRechazo', new: 'fecharechazo' },
            { old: 'metodoPago', new: 'metodopago' }
        ];

        for (const col of premiumRequestColumns) {
            try {
                await pool.query(`ALTER TABLE "PremiumRequest" RENAME COLUMN "${col.old}" TO "${col.new}"`);
                console.log(`✓ Renamed ${col.old} to ${col.new}`);
            } catch (e) {
                console.log(`⚠️ Column ${col.old} already renamed or doesn't exist`);
            }
        }

        // Migration 4: Rename columns in Tournament table to lowercase
        console.log('Renaming Tournament table columns...');
        const tournamentColumns = [
            { old: 'fechaInicio', new: 'fechainicio' },
            { old: 'fechaFin', new: 'fechafin' },
            { old: 'createdAt', new: 'createdat' }
        ];

        for (const col of tournamentColumns) {
            try {
                await pool.query(`ALTER TABLE "Tournament" RENAME COLUMN "${col.old}" TO "${col.new}"`);
                console.log(`✓ Renamed ${col.old} to ${col.new}`);
            } catch (e) {
                console.log(`⚠️ Column ${col.old} already renamed or doesn't exist`);
            }
        }

        // Migration 5: Rename columns in CompetitionStat table to lowercase
        console.log('Renaming CompetitionStat table columns...');
        const competitionStatColumns = [
            { old: 'puntuacionTotal', new: 'puntuaciontotal' },
            { old: 'updatedAt', new: 'updatedat' }
        ];

        for (const col of competitionStatColumns) {
            try {
                await pool.query(`ALTER TABLE "CompetitionStat" RENAME COLUMN "${col.old}" TO "${col.new}"`);
                console.log(`✓ Renamed ${col.old} to ${col.new}`);
            } catch (e) {
                console.log(`⚠️ Column ${col.old} already renamed or doesn't exist`);
            }
        }

        console.log('All migrations completed successfully!');

    } catch (error) {
        console.error('Migration failed:', error);
        // Continue with other migrations even if one fails
    } finally {
        await pool.end();
    }
}

runMigrations().catch(console.error);