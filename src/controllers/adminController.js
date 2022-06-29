// Titulos y CSS ------------------------------------------------- //
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
let productDetail = {
    titulo: "Detalle del Producto - Apetitos Delivery",
    css: "productDetail"
}
// Controlador --------------------------------------------------- //
const mainController = {
    admin: function (req, res) {
        res.render('admin/admin');
    },
    adminMostrar: (req, res) => {
        res.render('admin/mostrar');
    },
    adminEditar: (req, res) => {
        res.render('admin/editar');
    }
};

// Exportando el controlador ------------------------------------- //
module.exports = mainController;