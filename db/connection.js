var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '22@Beeper22',
        database: 'burger_db'
    });
};

connection.connect();
module.exports = connection;