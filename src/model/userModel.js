
const mysql = require('mysql2');

function getUserById(userId, connection, callback) {
    connection.query('SELECT * FROM users WHERE user_id = ?', [userId], callback);
}

module.exports = { getUserById };