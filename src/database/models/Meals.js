
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
            type: dataTypes.DOUBLE,
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
    Meals.associate = function (models) {
        Meals.belongsTo(models.Category, {
            as: 'category',
            foreigKey: 'id_category',
            onDelete: 'CASCADE'
        });
        Meals.belongsTo(models.ShoppingCart, {
            as: 'shopping_cart',
            through: 'cart_meals',
            foreigKey: 'id_meals',  // Se toman los de la tabla extra
            otherKey: 'id_cart',
            timestamps: false,
            onDelete: 'CASCADE',
        });
    }
    return Meals;
}