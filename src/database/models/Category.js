const { BelongsTo } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';
    const cols = 
    {
        id_category: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        
    };
    
        const config = {
            
            timestamps: false,
            deletedAt: false
    }

        const Meals = sequelize.define(alias, cols, config);

        Category.associate = function(models) {
                Meals.hasMany(model.Meals, {
                    as: 'categorys',
                    foreigKey: 'id_category'
                })
        }



    return Meals;
}