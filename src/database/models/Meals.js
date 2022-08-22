const { BelongsTo } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    const alias = 'Meals';
    const cols = 
    {
        id_meals: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_category: {
            type: dataTypes.TINYINT
        }
    };
        const config = {
            tableName: 'meals',
            timestamps: false,
            deletedAt: false
    }

        const Meals = sequelize.define(alias, cols, config);
// Definiendo asociacion de Meals con Category-----------------------------------// 
        Meals.associate = function(models) {
                Meals.belongsTo(models.Category, {
                    as: 'category',
                    foreigKey: 'id_category'
            })
        }
    return Meals;
}