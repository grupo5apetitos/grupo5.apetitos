const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/user.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

const controller = {
    
    index: function(req, res) {
        req.params.id;
        res.render('users/login');
    },
    perfil: function(req, res) {
        res.render('users/perfil');
    },
    editar: function(req, res) {
        let id = req.params.id;
        let resultado = products.filter((user) => { return (user.id == id) });
        resultado = resultado[0];
        res.render('user/editar', { panel, resultado });
    },
    processLogin: function(req, res) {
        let resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('login', {
                errors: resultValidation.mapped()
            });
        }
    }
}

//Exportando el modulo del controlador --------------------------//
module.exports = controller;