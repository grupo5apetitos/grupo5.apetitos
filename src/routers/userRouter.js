// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { check, validationResult } = require('express-validator');

//Middleware para user ------------------------------------------- //
const middleware = require('../middleware/middle_user');
let validateRegister = [
    check('email')
        .notEmpty().withMessage('Acompletar el campo').bail()
        .isEmail().withMessage('Tiene que ser un correo válido!'),
    check('password')
        .notEmpty().withMessage('Acompletar el campo').bail()
        .isLength({ min: 5 })
]; // validaciones aquí

// Multer para subier imágenes de los clientes registrados ------- //

// Llamada al controlador ---------------------------------------- //
const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //
router.get('/', userController.index);
router.post('/', validateRegister, userController.perfil);

// router.get('/perfil', userController.perfil);
// router.put('/perfil/editar', userController.editar);

// Exportando el router --------------------------//
module.exports = router;