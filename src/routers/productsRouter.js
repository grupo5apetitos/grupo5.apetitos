// Módulos ------------------------------------------------------- //
const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

// Llamado al controlador por require ---------------------------- //
const productsController = require('../controllers/productsController');

// Rutas para los productos -------------------------------------- //
router.get('/detalleProductos', productsController.productDetails);
router.get('/carroProductos', productsController.productCart);
router.get('/listaProductos', productsController.productList);

// CRUD ------------------------------------------------------------//
router.post('/crearProducto', productsController.productCreate);
router.put('/editarProducto/:id', productsController.productEdit);
router.delete('/eliminarProducto/:id', productsController.productDelete);

// Exportando router --------------------------------------------- //
module.exports = router;