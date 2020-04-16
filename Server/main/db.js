const { Pool } = require('pg');
const secure = require('./secure.json');

const pool = new Pool({
    user: 'lucifer',
    host: 'localhost',
    database: 'mydb',
    password: 'ronak@123',
    port: 5432
});

module.exports = pool;