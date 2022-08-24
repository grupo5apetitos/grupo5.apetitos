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
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
    };

    const ShoppingCart = sequelize.define(alias, cols, config);

    return ShoppingCart;
};
