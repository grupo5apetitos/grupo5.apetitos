const db = require('../../database/models');
const sequelize = db.sequelize;

// Llamado de los modelos
const Category = db.Category;

const categoryAPIController = {
    categorias: (req, res) => {
        Category.findAll()
        .then(category => {
            let respuesta = {
                success: true,
                count: category.length,
                countByCategory: {
                    
                },
                data: category,
                detail: 'api/category'
            }
            res.json(respuesta);
        });
    }
}

module.exports = categoryAPIController;