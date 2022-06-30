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
let productList = {
    titulo: "Lista de Productos - Apetitos Delivery",
    css: "productList"
 }
let help = {
    titulo: "¿Como funciona? - Apetitos Delivery",
    css: "help"
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
            
        })},

    productList: function (req, res) {
        res.render('products/productList', {
            productList: productList
        });
    },
    help: function(req, res) {
        res.render('help', { help } );
    }
};

// Exportando el controlador ------------------------------------- //
module.exports = mainController;