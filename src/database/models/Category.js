module.exports = (sequelize, dataTypes) => {
    const alias = "Category";
    const cols = {
        id_category: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
    };
    const config = {
        tableName: 'category',
        timestamps: false,
        deletedAt: false,

    };
    
    const Category = sequelize.define(alias, cols, config);


    return Category;
};
