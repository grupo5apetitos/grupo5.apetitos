module.exports = (sequelize, dataTypes) => {
    const alias = "ShoppingCart";
    const cols = {
        id_cart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        id_users: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    let config = {
        tableName: 'shopping_cart',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
    };

    const ShoppingCart = sequelize.define(alias, cols, config);
    
    ShoppingCart.associate = function (models) {
        ShoppingCart.belongsTo(models.Meals, {
            as: 'meals',
            through: 'cart_meals',
            foreigKey: 'id_meals',  // Se toman las PK Y FK  los de la tabla extra
            otherKey: 'id_cart',
            timestamps: false,
            onDelete: 'CASCADE',
        })
    }

    return ShoppingCart;
};
