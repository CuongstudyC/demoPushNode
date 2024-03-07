var express = require('express');
var router = express.Router();
const customer = require('../model/customerModel');

let error = '';

const validate = (data) => {
  // Đây chỉ là xét điều kiện đơn giản nhất, đơn giản vì lười
  if (!data.name.match('^[A-Z]')) {
    error = 'Ten phai bat dau chu hoa';
    return false;
  }

  return true;
}

router.get('/', function (req, res, next) {
  customer.findAll((err, data) => {
    if (err) throw err;
    res.render('customer/index', { customers: data });
  });

});

router.get('/create', function (req, res, next) {
  res.render('customer/create', { title: 'Create', error: error });
})

router.post('/create', function (req, res, next) {
  const data = req.body;
  if (!validate(data)) {
    return res.redirect('/customer/create');
  }
  customer.create(data, (err, result) => {
    if (err) throw err;
    error = '';
    return res.redirect('/customer');
  })
})

router.get('/update/:id', (req, res) => {
  const { id } = req.params;
  customer.findById(id, (err, customer) => {
    if (err) throw err;
    res.render('customer/update', { customer: customer[0] })
  })
})

router.post('/update', (req, res) => {
  const data = req.body;
  customer.update(data, (err, result) => {
    if (err) throw err;
    res.redirect('/customer');
  })
})

router.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  customer.delete(id, (err, result) => {
    if (err) throw err;
    res.redirect('/customer');
  })
})

module.exports = router;
