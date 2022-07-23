const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/user.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

let index = {
    titulo: "Inicio - Apetitos Delivery",
    css: "inicio"
}
let login = {
    titulo: "Inicio de Sesión - Apetitos Delivery",
    css: "login"
}
let register = {
    titulo: "Registro de Usuarios - Apetitos Delivery",
    css: "register"
}
let productCart = {
    titulo: "Carrito de Compras - Apetitos Delivery",
    css: "productCart"
}
let productDetails = {
    titulo: "Detalle del Producto - Apetitos Delivery",
    css: "productDetails"
}
let productList = {
    titulo: "Lista de Productos - Apetitos Delivery",
    css: "productList"
}
let help = {
    titulo: "¿Como funciona? - Apetitos Delivery",
    css: "help"
}

const controller = {
    
    index: function(req, res) {
        req.params.id;
        res.render('users/login');
    },
    login: function (req, res) {
        res.render('users/login', { login: login });
    },
    processLogin: function(req, res) {
                const errors = validationResult(req)                
                   if (errors.isEmpty()) {
                //     for (const user of users) {
                //         if (user.email == req.body.email) {
                //             if (user.password = req.body.password){
                //                 res.redirect('/main');
                //             }else{
                //                 res.render('users/login', { errors: { email: { msg: 'credenciales invalidas'}}, login });
                //             }
                //         } else {
                //             res.render('users/login', { errors: { email: { msg: 'no existe un usuario con este email'}}, login });
                //         }
                //     }
                // } else {
                //     res.render('users/login', { errors: errors.mapped(), login });
                
                // }
                    let usuarioEncontrado = users.find(user => user.email === req.body.email );
                    if (usuarioEncontrado) {
                        if (usuarioEncontrado.password = req.body.password){
                            res.redirect('/');
                        }else{
                            res.render('users/login', { errors: { email: { msg: 'credenciales invalidas'}}, login });
                        }
                    } else {
                        res.render('users/login', { errors: { email: { msg: 'no existe un usuario con este email'}}, login });
                    }
                } else {
                    res.render('users/login', { errors: errors.mapped(), login });
                
                }
            },
//    / processLogin: function(req, res) {
//         let errors = validationResult(req);
        
//         if (errors.isEmpty()) {
            
//         } else {
//             res.render('users/login', { errors: errors.mapped(), login });
//         }
//     },
    perfil: function(req, res) {
        res.render('users/perfil');
    },
    editar: function(req, res) {
        let id = req.params.id;
        let resultado = products.filter((user) => { return (user.id == id) });
        resultado = resultado[0];
        res.render('user/editar', { panel, resultado });
    },

}

//Exportando el modulo del controlador --------------------------//
module.exports = controller;