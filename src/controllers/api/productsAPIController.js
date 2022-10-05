const db = require('../../database/models');
const sequelize = db.sequelize;

// Llamado de los modelos
const Products = db.Meals;

const productsAPIController = {
    productos: (req, res) => {
        Products.findAll()
        .then(products => {
            let respuesta = {
                success: true,
                count: products.length,
                countByCategory: {
                    
                },
                data: products,
                detail: 'api/products'
            }
            res.json(respuesta);
        });
    }
}

module.exports = productsAPIController;