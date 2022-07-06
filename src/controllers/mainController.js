const fs = require('fs');
const path = require('path');
// Todo aquello que llegue de un formulario capturarlo como un objeto literal---------------------//
const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
// Cpnvierte los datos del JSON en objetos para trabajarlos
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
    }, 
// Crear usuario --------------------------------------------//
    createUser: function(req,res) {
        let user = req.body;
        let image = req.file.filename;
      
        let objectNew = {
			id: users.length + 1,
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			password: user.password,
            image: image,
		}

        users.push(objectNew);
		let arrJSON = JSON.stringify(users, null, 4);
		fs.writeFileSync(productsFilePath, arrJSON);
		res.render('users/login', { login }); 
    }, 

// Obtener datos del usuario --------------------------------------------//

    getUser: function(req, res) {
        let usuario = req.body; 
        let usuarioValido;

        for(let i=0; i < users.length; i++){
            if(usuario.email == users[i].email){
                if(usuario.password == users[i].password){
                    usuarioValido = users[i];
                }
            }
        }
        res.render('index', {
            inicio: index,
            usuario: usuarioValido
        })
        
    }

};

// Exportando el controlador ------------------------------------- //
module.exports = mainController;