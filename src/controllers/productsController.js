const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const Users = require("../database/models/Users");
const Meals = db.Meals;

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
    },
    productListCrud: (req, res) => {
        //res.render("products/productList", { productList, products });
        Meals.findAll()
            .then(function (meals) {
                res.render("products/productList",  { productList, products: meals });
        });
    },
    productCreate: function(req, res) {
       db.Meals.create({
                name: req.body.name,
                descripcion: req.body.descripcion,
                price: req.body.price,
                image: req.body.image,
                id_category: req.body.id_category
        });
            res.redirect('/');
    }, 

    productEdit: function(req, res) {
        Meals.update({
            name: req.body.name,
            descripcion: req.body.descripcion,
            price: req.body.price,
            image: req.body.image,
            id_category: req.body.id_category
         },{
            where:{
                id:req.params.id
            }
         })
            .then(function(){
                res.redirect('/productList');
            })
    },

    productDelete: function(req, res) {
        Meals.findByPk(req.params.id)
            .then(function(products){
                res.render('/productList', { products })
            })
    }
};

// Exportando el Controlador ----------------------------------------------- //
module.exports = productos;
