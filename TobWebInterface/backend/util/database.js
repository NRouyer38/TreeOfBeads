// IMPORTS
const mysql = require('mysql2');

const config = require('../config/config.json');

// Create connexion to DB
const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});

// Export connexion
module.exports = pool.promise();