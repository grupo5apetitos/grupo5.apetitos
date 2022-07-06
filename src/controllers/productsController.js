const fs = require('fs');
const path = require('path');
const { actualizar } = require('./adminController');
const { productList } = require('./mainController');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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

// Controlador ------------------------//
const productsController = {
   index: (req, res) => {
    res.render('products')
   },
   
   productDetails: (req, res) => {
    res.render('ProductDetails');
   },

   agregar: (req, res) => {
    res.render('products/agregar');
   },

   productCart: (req, res) => {
    res.render('products/productCart');
   },

   productList: (req, res) => {
    res.render('products/productList');
   },

   editar: (req,res) => {
    res.render('products/editar');
   },

   actualizar: (req, res) => {
    res.render('products');
   },

// Create Product ----------------//
createProduct: (req, res) => {
    let product = req.body;
    let image = req.file.filename;

    let newObj = {
        id: products.length + 1,
        name: products.name,
        description: products.description,
        category: products.category,
        price: products.price,
        image: image
    }
    products.push(newObj);
    let arrJSON = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, arrJSON);
    res.render('products', { products });
},

// Get data from product ------------//
getProduct: (req,res) => {

}

};

// Exportando el Controlador --------//
module.exports = productsController;