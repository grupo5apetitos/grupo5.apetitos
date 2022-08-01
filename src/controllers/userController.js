const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');

const userFilePath = path.join(__dirname, "../data/userDataBase.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
const { validationResult } = require("express-validator");

const User = require('../models/User');

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

const controller = {
    login: function (req, res) {
        res.render("users/login", { login });
    },
    processLogin: function (req, res) {
        const errors = validationResult(req);
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
                    res.render("users/login", { errors: { email: { msg: "credenciales invalidas" } }, login});
                }
            }
        } else {
            res.render('users/login', { errors: errors.mapped(), login });
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
        let id = req.params.id;
        let usuarioEncontrado = User.findByField('id', id);
        
        console.log(usuarioEncontrado);
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
                res.render("users/register", { errors: { email: { msg: "El usuario ya se encuentra registrado" } }, login});
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
    }
};

//Exportando el modulo del controlador --------------------------//
module.exports = controller;
