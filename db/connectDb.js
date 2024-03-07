
const mysql = require('mysql');

const connection = mysql.createPool({
    'host': 'bde2uqaewvgvqvxnvs0m-mysql.services.clever-cloud.com',
    'database': 'bde2uqaewvgvqvxnvs0m',
    'user': 'uxuysonnovoj6ofh',
    'password': 'LZFQ0jzB0UVxNEoRCSVf'
})

module.exports = connection;
