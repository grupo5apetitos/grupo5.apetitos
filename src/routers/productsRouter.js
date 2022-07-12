// Módulos ------------------------------------------------------- //
const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

// Llamado al controlador por require ---------------------------- //
const productsController = require('../controllers/productsController');

// Rutas para los productos -------------------------------------- //
router.get('/productDetails', productsController.productDetails);
router.get('/productCart', productsController.productCart);
router.get('/productList', productsController.productList);

// Exportando router --------------------------------------------- //
module.exports = router;