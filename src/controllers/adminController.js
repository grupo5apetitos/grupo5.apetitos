const fs = require('fs');
const path = require('path');
// Obtener los datos de la carpeta data -------------------------- //
const filePathUser = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(filePathUser, 'utf-8'));

const filePathProduct = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(filePathProduct, 'utf-8'));
// Titulos y CSS ------------------------------------------------- //
let login = {
    titulo: "Administrador - Apetitos Delivery",
    css: "admin/login"
};
let panel = {
    titulo: "Panel de Control - Apetitos Delivery",
    css: "admin/panel"
};
// Controlador --------------------------------------------------- //
const administrador = {
    login: (req, res) => {
        res.render('admin/login', { login });
    },
    session: (req, res) => {
        let usuario = req.body.usuario;
        let password = req.body.password;

        let resultado = users.filter((user) => { return (user.user === usuario); });
        (resultado[0].password === password) ? res.render('admin/lista', { panel, products }) : res.render('admin/login', { login });
    },
    mostrar: (req, res) => {
        res.render('admin/agregar', { panel });
    },
    crear: (req, res) => {
        let producto = req.body;
        producto.id = products.length + 1;
        producto.image = req.file.filename;
        products.push(producto);

        fs.writeFileSync(filePathProduct, JSON.stringify(products, null, 4));
        res.render('admin/lista', { panel, products });
    },
    lista: (req, res) => {
        res.render('admin/lista', { panel, products });
    },
    editar: (req, res) => {
        let id = req.params.id;
        let resultado = products.filter((producto) => { return (producto.id == id) });
        resultado = resultado[0];
        res.render('admin/editar', { panel, resultado });
    },
    actualizar: (req, res) => {
        let id = req.params.id;
        let form = req.body;
        let resultado = products.filter((producto) => { return (producto.id == id) });
        console.log(id);
        console.log('-------------------');
        console.log(form);
        res.send('Entramos a actualizar');
    },
    eliminar: (req, res) => {
        res.send('Entramos a eliminar');
    }
};

// Exportando el controlador ------------------------------------- //
module.exports = administrador;