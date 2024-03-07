const mongoose = require('mongoose');

const schema = mongoose.Schema;

const products = new schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('products', products);