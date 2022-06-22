// MODULOS
const express = require('express');
const router = express.Router();

// REQUIRE AL CONTROLLER DEL ARCHIVO MAINCONTROLLERS
const mainController = require('../controllers/mainController');

// Acá definimos las rutas
router.get('/', mainController.index );
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
router.get('/register', mainController.register);
// Ruta para el administrador
router.get('/administrador', mainController.admin);
router.get('/mostrar', mainController.adminMostrar);
router.get('/editar', mainController.adminEditar);

// Exportando router
module.exports = router; 