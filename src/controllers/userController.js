const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

let login = {
    titulo: "Inicio de Sesión - Apetitos Delivery",
    css: "login"
}
let registro = {
    titulo: "Registro de Usuarios - Apetitos Delivery",
    css: "register"
}
let perfil = {
    titulo: "Perfil de Usuario -  Apetitos Delivery",
    css: "perfil"
}

const controller = {
    
   
    login: function (req, res) {
        res.render('users/login', { login });
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
        res.render('users/perfil', { perfil: perfil });
    },
    
    editar_perfil: function(req, res) {
        let id = req.params.id;
        let resultado = products.filter((user) => { return (user.id == id) });
        resultado = resultado[0];
        res.render('user/editar', { panel, resultado });
    },
    registro: function(req, res) {
        res.render('users/register', { registro });
    }, 

    form_registro: function(req, res) {
        
        let userNew = req.body;
        userNew.id = users.length + 1;
        userNew.image = req.file.filename;
        users.push(userNew);
        fs.writeFileSync(userFilePath, JSON.stringify(users, null, 4));
        res.render('users/login', { login });


    },
}

//Exportando el modulo del controlador --------------------------//
module.exports = controller;