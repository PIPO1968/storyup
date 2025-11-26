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
        await pool.query(`
            ALTER TABLE "User" RENAME COLUMN "fechaInscripcion" TO "fechainscripcion";
            ALTER TABLE "User" RENAME COLUMN "textoFechaInscripcion" TO "textofechainscripcion";
            ALTER TABLE "User" RENAME COLUMN "linkPerfil" TO "linkperfil";
            ALTER TABLE "User" RENAME COLUMN "createdAt" TO "createdat";
            ALTER TABLE "User" RENAME COLUMN "updatedAt" TO "updatedat";
        `);
        console.log('✓ User table columns renamed successfully');

        // Migration 2: Rename columns in PremiumUser table to lowercase
        await pool.query(`
            ALTER TABLE "PremiumUser" RENAME COLUMN "fechaInicio" TO "fechainicio";
            ALTER TABLE "PremiumUser" RENAME COLUMN "metodoPago" TO "metodopago";
            ALTER TABLE "PremiumUser" RENAME COLUMN "activadoPorAdmin" TO "activadoporadmin";
            ALTER TABLE "PremiumUser" RENAME COLUMN "solicitudId" TO "solicitudid";
            ALTER TABLE "PremiumUser" RENAME COLUMN "emailPago" TO "emailpago";
            ALTER TABLE "PremiumUser" RENAME COLUMN "createdAt" TO "createdat";
            ALTER TABLE "PremiumUser" RENAME COLUMN "updatedAt" TO "updatedat";
        `);
        console.log('✓ PremiumUser table columns renamed successfully');

        // Migration 3: Rename columns in PremiumRequest table to lowercase
        await pool.query(`
            ALTER TABLE "PremiumRequest" RENAME COLUMN "fechaSolicitud" TO "fechasolicitud";
            ALTER TABLE "PremiumRequest" RENAME COLUMN "fechaAprobacion" TO "fechaaprobacion";
            ALTER TABLE "PremiumRequest" RENAME COLUMN "fechaRechazo" TO "fecharechazo";
            ALTER TABLE "PremiumRequest" RENAME COLUMN "metodoPago" TO "metodopago";
        `);
        console.log('✓ PremiumRequest table columns renamed successfully');

        // Migration 4: Rename columns in Tournament table to lowercase
        await pool.query(`
            ALTER TABLE "Tournament" RENAME COLUMN "fechaInicio" TO "fechainicio";
            ALTER TABLE "Tournament" RENAME COLUMN "fechaFin" TO "fechafin";
            ALTER TABLE "Tournament" RENAME COLUMN "createdAt" TO "createdat";
        `);
        console.log('✓ Tournament table columns renamed successfully');

        // Migration 5: Rename columns in CompetitionStat table to lowercase
        await pool.query(`
            ALTER TABLE "CompetitionStat" RENAME COLUMN "puntuacionTotal" TO "puntuaciontotal";
            ALTER TABLE "CompetitionStat" RENAME COLUMN "updatedAt" TO "updatedat";
        `);
        console.log('✓ CompetitionStat table columns renamed successfully');

        console.log('All migrations completed successfully!');

    } catch (error) {
        console.error('Migration failed:', error);
        // Continue with other migrations even if one fails
    } finally {
        await pool.end();
    }
}

runMigrations().catch(console.error);