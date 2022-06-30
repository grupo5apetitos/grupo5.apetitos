// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

// Llamado al controlador por require ---------------------------- //
const mainController = require('../controllers/mainController');

// Ruta para el administrador ------------------------------------ //
router.get('/', mainController.admin);
router.get('/mostrar', mainController.adminMostrar);
router.get('/editar', mainController.adminEditar);

// Exportando router --------------------------------------------- //
module.exports = router;