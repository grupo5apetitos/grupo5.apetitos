const path = require("path");
const fs = require("fs");

// Obteniendo el arreglo de productos desde el JSON ------------------------ //
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

// Titulos y CSS ----------------------------------------------------------- //
let index = {
  titulo: "Inicio - Apetitos Delivery",
  css: "inicio",
};
let productCart = {
  titulo: "Carrito de Compras - Apetitos Delivery",
  css: "productCart",
};
let productDetails = {
  titulo: "Detalle del Producto - Apetitos Delivery",
  css: "productDetails",
};
let productList = {
  titulo: "Lista de Productos - Apetitos Delivery",
  css: "productList",
};

// Controlador ------------------------------------------------------------- //
const productos = {
  index: (req, res) => {
    // res.render('products')
    res.send("esta es la pagina de index de productos");
  },

  productDetails: (req, res) => {
    res.render("products/productDetails", { productDetails });
  },

  productCart: (req, res) => {
    res.render("products/productCart", { productCart });
  },
  // Mostrar la lista de productos de la base de datos ----------- //
  productList: (req, res) => {
    res.render("products/productList", { productList, products });
  }
};

// Exportando el Controlador ----------------------------------------------- //
module.exports = productos;
