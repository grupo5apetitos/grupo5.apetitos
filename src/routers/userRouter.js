// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
//Middleware para user -------------------------------------------//
const { check } = require('express-validator');

const validations = [
    check('email').notEmpty().withMessage('Ingrasar correo electronico').bail()
    .isEmail().withMessage('Ingresar correo electronico valido'),
    check('password').notEmpty().withMessage('Ingresar contraseña')
];


const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //
router.get('/', userController.index);
router.post('/', validations, userController.index);
router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar);




// Exportando el router --------------------------//
module.exports = router;