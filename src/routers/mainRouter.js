// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Llamado al controlador por require ---------------------------- //
const mainController = require('../controllers/mainController');

// Acá definimos las rutas --------------------------------------- //
router.get('/', mainController.index );
router.get('/ayuda', mainController.help);

// Ruta de Obtener datos del usuario ----------------------------- //
//router.get('/', mainController.getUser);

// Exportando router --------------------------------------------- //
module.exports = router;