var express = require('express');
var router = express.Router();
var productModel = require('../model/productModel');

router.get('/',async (req,res)=>{
    const prods = await productModel.find();
    res.render('product/index',{products: prods});
})

router.get('/create',(req, res) => {
    res.render('product/create');
})

router.post('/create',async (req,res)=> {
    const {name,price} = req.body;

    let prod = new productModel({
        name: name,
        price: price
    })
    await prod.save();
    res.redirect('/product');
})

router.get('/update/:id', async (req,res) => {
    const {id} = req.params;
    const prod = await productModel.findById(id);
    res.render('product/update',{product: prod});
})

module.exports = router;