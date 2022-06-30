// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

// Llamado al controlador por require ---------------------------- //
const adminController = require('../controllers/adminController');

// Ruta para el administrador ------------------------------------ //
router.get('/', adminController.admin);
router.get('/mostrar', adminController.adminMostrar);
router.get('/editar', adminController.adminEditar);

// Exportando router --------------------------------------------- //
module.exports = router;