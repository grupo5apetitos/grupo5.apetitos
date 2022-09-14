/** Variables para la utilización de funciones dentro del Controlador ...... */
const fs = require("fs");
const path = require("path");
const md5 = require('md5');
const bcryptjs = require('bcryptjs');

/** Variables para obtener de datos desde un archivo JSON -------- */
const userFilePath = path.join(__dirname, "../data/userDataBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

/** Variable para la validación de datos con Express Validator---- */
const { validationResult } = require("express-validator");

/** Variables para obtener datos desde el Modelo Sequelize ------- */
const db = require("../database/models");
const Users = db.Users;

/** Variables para el uso de estilos y nombres en la vista ------- */
let login = {
    titulo: "Inicio de Sesión - Apetitos Delivery",
    css: "login",
};
let registro = {
    titulo: "Registro de Usuarios - Apetitos Delivery",
    css: "register",
};
let perfil = {
    titulo: "Perfil de Usuario -  Apetitos Delivery",
    css: "perfil",
};

/** Controlador ------------------------------------------------------------ */
const controller = {
    login: function (req, res) {
        res.render("users/login", { login });
    },

    processLogin: function (req, res) {
        const errors = validationResult(req);
        /*
        if (errors.isEmpty()) {
            let usuarioEncontrado = User.findByField('email', req.body.email);
            if (usuarioEncontrado) {
                let validatePassword = bcryptjs.compareSync(req.body.password, usuarioEncontrado.password);
                if (validatePassword) {
                    delete usuarioEncontrado.password;
                    delete usuarioEncontrado.password_conf;
                    usuarioEncontrado.session = true;

                    req.session.userLogged = usuarioEncontrado;

                    if (req.body.remember) {
                        res.cookie('emailUsuario', req.body.email, { maxAge: (1000 * 60) * 100 });
                    }
                    res.redirect("/usuarios/perfil");
                } else {
                    res.render("users/login", { errors: { email: { msg: "credenciales invalidas" } }, login });
                }
            }
        } else {
            res.render('users/login', { errors: errors.mapped(), login });
        }
        */

        if (errors.isEmpty()) {
            Users.findAll({
                include: [{ association: 'users_profile' }],
                where: {
                    email: req.body.email
                },
                raw: true,
                nest: true
            }).then((result) => {
                if (result.length > 0) {
                    let data = result[0];
                    if (data.password === md5(req.body.password)) {
                        delete data.password;
                        data.session = true;

                        if (data.users_profile.abrev == "ADMIN") {
                            data.image = `avatars/${data.avatar}`;
                        } else {
                            data.image = `users/${data.avatar}`;
                        }
                        req.session.userLogged = data;
    
                        if (req.body.remeber) {
                            res.cookie('emailUsuario', req.body.email, { maxAge: (1000 * 60) * 100 })
                        }

                        // console.log(req.session.userLogged);
                        res.redirect("/usuarios/perfil");
                    } else {
                        res.render("users/login", { errors: { email: { msg: "Credenciales Inválidas" } }, login });
                    }
                } else {
                    res.render("users/login", { errors: { email: { msg: "Credenciales Inválidas" } }, login });
                }
            });
        }
    },

    perfil: (req, res) => {
        // console.log(req.session.userLogged);
        res.render('users/perfil', {
            users: req.session.userLogged,
            perfil: perfil
        });
    },

    editar_perfil: (req, res) => {
        const errores = validationResult(req);
        /*
        if (errores.isEmpty()) {
            let id = parseInt(req.params.id);
            let form = req.body;
            form.image = req.file.filename;
            form.password = bcryptjs.hashSync(form.password, 10);

            let usuarioEncontrado = User.findByPk(id);
            if (usuarioEncontrado) {
                User.update(id, form);
                res.redirect('/usuarios/perfil');
            }
        } else {
            res.render("users/perfil", { errors: errores.mapped(), users: req.session.userLogged, perfil });
        }
        */
        let id_users = req.params.id;
        let form = req.body;
        if (req.file) {
            form.image = req.file.filename;
        }
        form.password = md5(form.password);
        console.log(form);

        if (errores.isEmpty()) {
            /*
            Users.update({
                user_name: "",
                email: form.email,
                name: form.name,
                last_name: form.lastname,
                password: form.password,
                avatar: form.image,
                id_profile: 2
            }, {
                where: {
                    id_users: id_users
                }
            }).then((result) => {
                console.log("Update: " + result);
                res.redirect('/usuarios/perfil');
            });
            */
        }
    },

    registro: function (req, res) {
        res.render("users/register", { registro });
    },

    form_registro: (req, res) => {
        //----- Validacion desde el controlador al formulario e registro-------//
        const errores = validationResult(req);
        // console.log(errores.mapped());

        if (errores.isEmpty()) {
            let usuarioRegistrado = User.findByField('email', req.body.email);
            if (usuarioRegistrado) {
                res.render("users/register", { errors: { email: { msg: "El usuario ya se encuentra registrado" } }, login });
            } else {
                let usuarioCreado = {
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    image: req.file.filename,
                };
                User.create(usuarioCreado);
                res.redirect('/usuarios/login');
            }
        } else {
            res.render("users/register", { errors: errores.mapped(), registro });
        }
    },

    logout: function (req, res) {
        res.clearCookie('emailUsuario');
        req.session.destroy();
        res.redirect('/');
    },

    // CRUD CON SEQUELIZE PARA MANEJO DEL ORM

    create: function (req, res) {
        User.create({
            name: res.body.name,
            last_name: req.body.last_name,
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
            id_profile: req.body.id_profile
        });

        res.redirect('/', {});
    },

    edit: function (req, res) {
        User.findByPk(req.params.id)   // Opcion de usar findByAll()
            .then((locals) => {
                res.redirect('/perfil');
            })
    },
    update: function (req, res) {
        
    },

    delete: function (req, res) {
        User.destroy(
            {
                where: {
                    id: req.params.id
                }
            })

        res.redirect('');
    },

    userCreate: function(req, res){
        User.create(req.body)
        .then(function(){
            res.json({
                process: 'sucessful',
            })
        })
        .catch(function(error){
            res.send(error);
        })
    },

    userEdit: function(req,res){
        User.findByPk(req.params.id)
        .then(function(user){
            res.json({
                data: user,
            })
        })
        .catch(function(error){
            res.send(error);
        })
    }, 
    userUpdate: function(req, res){
        User.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        .then(function(){
            res.json({
                process: 'succesful',
            })
        })
        .catch(function (error){
            res.send(error);
        })
    },

    userDelete: function(req, res){
        User.delete({
            where: {
                id: req.params.id
            }
        })
        .then(function (){
            res.json({
                process: 'successful',
            })
        })
        .catch(function (error){
            res.send(error);
        })
    }

}


//Exportando el modulo del controlador --------------------------//
module.exports = controller;
