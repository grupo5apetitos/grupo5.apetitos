const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

// Llamado de los modelos
const Users = db.Users;
const Meals = db.Meals;
const Category = db.Category;

const mainApiController = {
    lastMeal: (req, res) => {
        Meals.findAll({
            include: [{
                model: Category,
                as: 'category'
            }],
            order: [
                ['id_meals', 'DESC']
            ],
            limit: 1
        })
        .then(meals => {
            let respuesta = {
                meta: {
                    status: 200
                },
                data: meals
            }
            res.json(respuesta);
        });
    },
    listCategorys: (req, res) => {
        Category.findAll({
            attributes: ['name']
        })
        .then(category => {
            let respuesta = {
                meta: {
                    status: 200
                },
                data: category
            }
            res.json(respuesta);
        });
    },
    listProducts: (req, res) => {
        Meals.findAll({
            include: [{
                model: Category,
                as: 'category'
            }]
        })
        .then(meals => {
            let respuesta = {
                meta: {
                    status: 200
                },
                data: meals
            }
            res.json(respuesta);
        });
    },
    total: (req, res) => {
        let usuarios, categoria, productos;
        Users.findAll({
            attributes: ['id_users']
        })
        .then(users => {
            usuarios = users.length;
            Category.findAll({
                attributes: ['id_category']
            })
            .then(cat => {
                categoria = cat.length;
                Meals.findAll({
                    attributes: ['id_meals']
                })
                .then(meals => {
                    productos = meals.length;
                    respuesta = {
                        meta: {
                            status: 200
                        },
                        data: {
                            totalProductos: productos,
                            totalUsuarios: usuarios,
                            totalCategorias: categoria
                        }
                    }
                    res.json(respuesta);
                });
            });
        });
    }
}

module.exports = mainApiController;