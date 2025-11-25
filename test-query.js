const { pool } = require('./src/lib/database.js');

pool.query('SELECT COUNT(*) as count FROM "User"')
    .then(result => {
        console.log('Query result:', result.rows);
        return pool.end();
    })
    .catch(err => {
        console.error('Query error:', err.message);
        pool.end();
    });