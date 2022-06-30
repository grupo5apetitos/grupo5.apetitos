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
let productDetails = {
    titulo: "Detalle del Producto - Apetitos Delivery",
    css: "productDetails"
}
// Controlador --------------------------------------------------- //
const mainController = {
    index: function (req, res) {
        res.render('index', {
            inicio: index
        });
    },
    login: function (req, res) {
        res.render('users/login', {
            sesion: login
        });
    },
    register: function (req, res) {
        res.render('users/register', {
            registro: register
        });
    },
    productCart: function (req, res) {
        res.render('products/productCart', {
            carritoCompras: productCart
        });
    },
    productDetails: function (req, res) {
        res.render('products/productDetails', {
            detalleProducto: productDetails
        });
    },
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