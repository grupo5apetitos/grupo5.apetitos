// Controlador 

const mainController = {
    index: function(req,res){
        res.render('index');
    }, 
    login: function(req, res){
        res.render('/users/login');
    },
    productCart: function(req, res){
        res.render('/products/productCart');
    },
    productDetail: function(req, res){
        res.render('/products/productDetail');
    },
    register: function(req, res){
        res.render('/users/register');
    }
};

// Exportando el controlador
module.exports = mainController;