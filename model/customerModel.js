const db = require('../db/connectDb');

const customer = {
    findAll: (cb) => {
        return db.query('SELECT * FROM customer', cb);
    },
    findById: (id, cb) => {
        return db.query('SELECT * FROM customer WHERE id=?', [id], cb);
    },

    create: (data, cb) => {
        return db.query('INSERT INTO customer(name,email,phone) VALUES(?,?,?)',
            [data.name, data.email, data.phone], cb);
    },

    update: (data,cb) => {
        return db.query('UPDATE customer SET name=?,email=?,phone=? WHERE id=?',[data.name,data.email,data.phone,data.id],cb);
    },
    delete: (id,cb) =>{
        return db.query('DELETE FROM customer WHERE id=?',[id],cb);
    }
}

module.exports = customer;