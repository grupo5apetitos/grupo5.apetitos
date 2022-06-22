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
    productDetail: function (req, res) {
        res.render('products/productDetail', {
            detalleProducto: productDetail
        });
    },
    admin: function (req, res) {
        res.render('admin/admin');
    }
};

// Exportando el controlador ------------------------------------- //
module.exports = mainController;