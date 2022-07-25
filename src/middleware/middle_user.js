const { body } = require('express-validator');


const middleware = {
    error_404: function(req, res, next) {
        // res.send('Aquí esta el middleware');
        next();
    },
    valida_user: function(req, res, next) {
        // ...
        next();
    }, 
    register_User: function(req, res , next  ){
        module.exports = [
        body('name').notEmpty().withMessage('Ingresa tu nombre'),
        body('lastname').notEmpty().withMessage('Ingresa tu apellido'),
        body('email').notEmpty().withMessage('Ingrasar correo electronico').bail().isEmail().withMessage('Ingresar correo electronico valido'),
        body('email_conf').notEmpty().withMessage('Ingrasar correo electronico').bail().isEmail().withMessage('Ingresar correo electronico valido'),
        body('password').notEmpty().withMessage('Ingresar contraseña'),
        body('password_conf').notEmpty().withMessage('Ingresar contraseña'),
        ];
        next();
     }
};

module.exports = middleware;