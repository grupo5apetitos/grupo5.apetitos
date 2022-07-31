const { body } = require('express-validator');

module.exports = [
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
        .notEmpty().withMessage('Ingresar contraseña'),

    body('image').custom((value, { req }) => {
        let file = req.file;

        if (!file) {
            throw new Error('Tenes que subir una imagen');
        }
        return true;
    }),
];