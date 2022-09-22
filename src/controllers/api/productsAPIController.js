const db = require('../../database/models');
const sequelize = db.sequelize;

// Llamado de los modelos
const Products = db.Meals;

const productsAPIController = {
    productos: (req, res) => {
        Products.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: {
                    count: products.length,
                    countByCategory: {

                    },
                    products: products,
                    detail: 'api/products'
                }
            }
            res.json(respuesta);
        });
    }
}

module.exports = productsAPIController;