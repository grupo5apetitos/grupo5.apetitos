//.......... REQUIRE'S.......
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//... GET ALL PRODUCTS.....//
router.get('/products', productsController.index);

//.... CREATE ONE PRODUCT...//
router.get('/products/create', productsController.create);
router.post('/products', upload.single('platillosImage'), productsController.store);

//.....GET ONE PRODUCT....//
router.get('/products/:id', productsController.detail);

//....EDIT ONE PRODUCT...//
router.get('/products/edit/:id', productsController.edit);
router.put('/products', productsController.update);

//....DELETE ONE PRODUCT...//
router.delete('/products/:id', productsController.destroy);
