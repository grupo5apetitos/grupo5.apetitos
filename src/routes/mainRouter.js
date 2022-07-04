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

// Registro de usuarios ------------------------------------------ //
router.post('/login', mainController.createUser);
router.get('/', mainController.getUser);

router.put('/products', mainController.update);

// Exportando router --------------------------------------------- //
module.exports = router;