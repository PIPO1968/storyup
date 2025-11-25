import { Pool } from 'pg';

const pool = new Pool({
    host: 'shinkansen.proxy.rlwy.net',
    port: 20940,
    database: 'railway',
    user: 'postgres',
    password: 'WFpwQvsIvlFMBIFkzxdJLPVFxwUxMSVl',
    ssl: {
        rejectUnauthorized: false
    }
});

export { pool };