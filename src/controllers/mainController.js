const fs = require('fs');
const path = require('path');

// Llamado para el funcionamiento de Sequelize ------------------- //
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

// Llamado de los modelos ---------------------------------------- //
const Meals = db.Meals;

// Convierte los datos del JSON en objetos para trabajarlos ------ //
const userFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
// Uso de express-validator para validar los datos --------------- //


// Titulos y CSS ------------------------------------------------- //
let index = {
    titulo: "Inicio - Apetitos Delivery",
    css: "inicio"
}
let ayuda = {
    titulo: "¿Como funciona? - Apetitos Delivery",
    css: "help"
}
// Controlador --------------------------------------------------- //
const mainController = {
    index: function (req, res) {
        res.render('index', { index });
    },
    help: function(req, res) {
        res.render('help', { ayuda } );
    },
    getUser: function(req, res) {
        // Código para obtener por sesión el usuario
    },
    error404: function(req, res) {
        res.render('error-404/not-found', { index });
    },
    // Rutas para trabajar con el CRUD --------------------------- //
    home: (req, res) => {
        Meals.findAll().then((meals) => {
            console.log(meals);
            res.render('index', { index, meals });
        });
    }
};

// Exportando el controlador ------------------------------------- //
module.exports = mainController;