import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/lib/db.ts',
    out: './drizzle',
});