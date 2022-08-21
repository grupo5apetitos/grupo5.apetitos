module.exports = (sequelize, dataTypes) => {
    const alias = 'Shopping_Car';
    const cols = { 
        id_cart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_users: {
            type: dataTypes.INTEGER,
            allowNull: false
        } 
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Shopping_Car = sequelize.define(alias, cols, config);

    return Shopping_Car;
}