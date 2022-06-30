// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

// Llamado al controlador por require ---------------------------- //
const mainController = require('../controllers/mainController');

// Acá definimos las rutas --------------------------------------- //
router.get('/', mainController.index );
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/productDetails', mainController.productDetails);
router.get('/productList', mainController.productList);
router.get('/register', mainController.register);

// Exportando router --------------------------------------------- //
module.exports = router;