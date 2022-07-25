const { body } = require('express-validator');

const middleware = {
    register_user: [
        body('name')
            .notEmpty().withMessage('Ingresa tu nombre'),
        body('lastname')
            .notEmpty().withMessage('Ingresa tu apellido'),
        body('email')
            .notEmpty().withMessage('Ingrasar correo electronico').bail()
            .isEmail().withMessage('Ingresar correo electronico valido'),
        body('email_conf').notEmpty().withMessage('Ingrasar correo electronico').bail()
            .isEmail().withMessage('Ingresar correo electronico valido'),
        body('password')
            .notEmpty().withMessage('Ingresar contraseña'),
        body('password_conf')
            .notEmpty().withMessage('Ingresar contraseña')
    ]
};

module.exports = middleware;