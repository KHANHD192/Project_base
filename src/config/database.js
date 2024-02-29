const mysql = require('mysql2')
require('dotenv').config()

const connection =  mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT_DB
});

module.exports = connection;


