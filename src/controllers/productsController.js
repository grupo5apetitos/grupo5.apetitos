const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Titulos y CSS ------------------------------------------------- //
let index = {
    titulo: "Inicio - Apetitos Delivery",
    css: "inicio"
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


// Controlador ------------------------//
const productsController = {
   index: (req, res) => {
   // res.render('products')
   res.send('esta es la pagina de index')
   },
   
   productDetails: (req, res) => {
    res.render('products/productDetails', { productDetails });
   },

   productCart: (req, res) => {
    res.render('products/productCart', { productCart });
   },

   productList: (req, res) => {
    res.render('products/productList', { productList });
   },


// Get data from product ------------//
getProduct: (req,res) => { 
    res.render('product/productList', { products });

}

};

// Exportando el Controlador --------//
module.exports = productsController;