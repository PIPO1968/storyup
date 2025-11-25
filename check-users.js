const { pool } = require('./src/app/api/users/database.js');

pool.query('SELECT nick, email FROM "User" LIMIT 5')
    .then(result => {
        console.log('Usuarios:', result.rows);
        return pool.end();
    })
    .catch(err => {
        console.error('Error:', err.message);
        pool.end();
    });