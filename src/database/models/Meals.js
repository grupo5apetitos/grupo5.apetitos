module.exports = (sequelize, dataTypes) => {
    const alias = 'Meals';
    const cols = { 
        id_meals: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type:dataTypes.STRING(80), 
            allowNull: false
        },
        description:{
            type:dataTypes.STRING(400),
            allowNull: false
        },
        price:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type:dataTypes.STRING(100),
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