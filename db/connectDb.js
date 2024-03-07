
const mysql = require('mysql');

const connection = mysql.createPool({
    'host': 'localhost',
    'database': 'demo',
    'user': 'root',
    'password': ''
})

module.exports = connection;