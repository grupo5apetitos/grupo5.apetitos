// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

// Llamado al controlador por require ---------------------------- //
const mainController = require('../controllers/mainController');

// Acá definimos las rutas --------------------------------------- //
router.get('/', mainController.index );
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/help', mainController.help);

// Ruta de crear usuario  ------------------------------------------//
router.post('/login', mainController.createUser);

// Ruta de Obtener datos del usuario -------------------------------//
router.get('/', mainController.getUser);

// Exportando router --------------------------------------------- //
module.exports = router;