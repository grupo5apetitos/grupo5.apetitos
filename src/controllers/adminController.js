// Titulos y CSS ------------------------------------------------- //
let login = {
    titulo: "Administrador - Apetitos Delivery",
    css: "admin/login"
}
// Controlador --------------------------------------------------- //
const mainController = {
    login: function() {
        res.render('admin/login', { login });
    },
    agregar: function (req, res) {
        res.render('admin/agregar');
    },
    crear: function(req, res) {
        let producto = req.body;
        let imagen = req.file.filename;
    },
    lista: (req, res) => {
        res.render('admin/mostrar');
    },
    editar: (req, res) => {
        res.render('admin/editar');
    },
    actualizar: (req, res) => {

    }
};

// Exportando el controlador ------------------------------------- //
module.exports = mainController;