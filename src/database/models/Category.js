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
        timestamps: false,
        deletedAt: false,
    };
    const category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Meals, {
            as: "meals",  // A la tabla que estamos asociando
            foreigKey: "id_category",
        });
    }
    return category;
};
