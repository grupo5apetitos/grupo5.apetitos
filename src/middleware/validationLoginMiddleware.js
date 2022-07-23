const { body } = require('express-validator');
module.exports = [
    body('email')
        .notEmpty().withMessage('Ingrasar correo electronico').bail()
        .isEmail().withMessage('Ingresar correo electronico valido'),
    body('password')
        .notEmpty().withMessage('Ingresar contraseña')
];