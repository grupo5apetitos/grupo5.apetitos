//.......... REQUIRE'S.......
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//... GET ALL PRODUCTS.....//
router.get('/', productsController.index);

//.... CREATE ONE PRODUCT...//
//router.get('/create', productsController.create);
//router.post('/', upload.single('platillosImage'), productsController.store);

//.....GET ONE PRODUCT....//
//router.get('/:id', productsController.detail);

//....EDIT ONE PRODUCT...//
//router.get('/edit/:id', productsController.edit);
//router.put('/', productsController.update);

//....DELETE ONE PRODUCT...//
//router.delete('/:id', productsController.destroy);


router.get('/productCart', productsController.productCart);
router.get('/productDetails', productsController.productDetails);
router.get('/productList', productsController.productList);