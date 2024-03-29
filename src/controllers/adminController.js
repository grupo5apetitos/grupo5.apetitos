const fs = require('fs');
const path = require('path');
const md5 = require('md5');
/** Express Validator -------------------------------------------- */
const { validationResult } = require('express-validator');
/** Sequelize (Modelos, DB) -------------------------------------- */
const db = require('../database/models');

const Users = db.Users;
const Meals = db.Meals;

// Obtener los datos de la carpeta data -------------------------- //
const filePathUser = path.join(__dirname, '../data/adminDataBase.json');
const users = JSON.parse(fs.readFileSync(filePathUser, 'utf-8'));

const filePathProduct = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(filePathProduct, 'utf-8'));

// Titulos y CSS ------------------------------------------------- //
let login = {
    titulo: "Administrador - Apetitos Delivery",
    css: "admin/login"
};
let panel = {
    titulo: "Panel de Control - Apetitos Delivery",
    css: "admin/panel"
};

// Controlador --------------------------------------------------- //
const administrador = {
    admin: (req, res) => {
        res.render('admin/login', { login });
    },
    login: (req, res) => {
        const errores = validationResult(req);

        if (errores.errors.length > 0) {
            res.render('admin/login', {
                errors: errores.mapped(),
                login: login,
                oldData: req.body
            });
        } else {
            let user = req.body.user;
            let pass = md5(req.body.password);
            let error = {
                user: {
                    msg: "Usuario no válido."
                }, password: {
                    msg: "Contraseña no válida."
                }
            }

            Users.findAll({
                include: [{ association: 'users_profile' }],
                where: {
                    email: user
                },
                raw: true,
                nest: true
            }).then((result) => {
                let data = result[0];
                if (data.email !== user) {
                    res.render('admin/login', {
                        errors: error,
                        login: login
                    });
                } else {
                    if (data.password !== pass) {
                        res.render('admin/login', {
                            errors: error,
                            login: login
                        });
                    } else {
                        res.redirect('/administrador/lista');
                    }
                }
            }).catch((err) => {
                console.error(err);
            });
        }
    },
    session: (req, res) => {
        let usuario = req.body.usuario;
        let password = req.body.password;

        let resultado = users.filter((user) => { return (user.user === usuario); });
        (resultado[0].password === password) ? res.render('admin/lista', { panel, products }) : res.render('admin/login', { login });
    },
    mostrar: (req, res) => {
        res.render('admin/agregar', { panel });
    },
    crear: (req, res) => {
        /* 
        let producto = req.body;
        producto.id = products.length + 1;
        producto.image = req.file.filename;
        products.push(producto);

        fs.writeFileSync(filePathProduct, JSON.stringify(products, null, 4));
        res.render('admin/lista', { panel, products });
        */
        db.Meals.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename,
            id_category: req.body.category
        })
        res.redirect('lista');
    },
    lista: (req, res) => {
        //res.render('admin/lista', { panel, products });
        Meals.findAll({
            include: [{ association: 'category' }]
        }).then((meals) => {
            //console.log( meals );
            res.render("admin/lista", { panel, products: meals });
        });
    },
    editar: (req, res) => {
        /* console.log(req.params.id);
         if (req.params.id) {
             let id = req.params.id;
             let resultado = products.filter((producto) => { return (producto.id == id) });
             resultado = resultado[0];
             res.render('admin/editar', { panel, resultado });
         } else {
             res.redirect('administrador/lista');
         }*/
        Meals.findByPk(req.params.id)
            .then(function (meal) {
                const object = {
                    vista: panel,
                    platillo: meal
                }
                res.render('admin/editar', object);
            });

    },
    actualizar: (req, res) => {
        /*
         let id = req.params.id;
         let form = req.body;
         let resultado = products.filter((producto) => { return (producto.id == id) });
         console.log(id);
         console.log('-------------------');
         console.log(form);
         res.send('Entramos a actualizar');
        */
        console.log(req.file);

        Meals.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename,
            id_category: req.body.category
        }, {
            where: {
                id_users: req.params.id
            }
        })
            .then(function () {
                res.redirect('lista');
            })
    },
    eliminar: (req, res) => {
        console.log(req.params.id);
        // res.send('Estamos en eliminar');
        Meals.destroy({
            where: {
                id_meals: req.params.id
            }
        });
        res.redirect('../lista');
    }
};

// Exportando el controlador ------------------------------------- //
module.exports = administrador;