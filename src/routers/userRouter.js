// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
//Middleware para user -------------------------------------------//
const validationLogin = require('../middleware/validationLoginMiddleware');



// Llamada al controlador ---------------------------------------- //
const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //
router.get('/', userController.index);
router.post('/', validationLogin, userController.processLogin);
router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar);

router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar);

// Exportando el router --------------------------//
module.exports = router;