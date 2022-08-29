const fs = require('fs');
const path = require('path');

// Titulos y CSS ------------------------------------------------- //
let index = {
    titulo: "Inicio - Apetitos Delivery",
    css: "inicio",
};
// Controlador --------------------------------------------------- //
const controller = {
    notFound: (req, res) => {
        res.render('/not-found', { index });
    }


}
module.exports = controller;