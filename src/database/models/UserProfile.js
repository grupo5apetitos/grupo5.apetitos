module.exports = (sequelize, dataTypes) => {
    const alias = "UserProfile";
    const cols = {
        id_profile: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        abrev: {
            type: dataTypes.STRING(5)
        }
    };

    const config = {
        tableName: 'users_profile',
        timestamps: false,
        deletedAt: false
    };
    
    const UserProfile = sequelize.define(alias, cols, config);

    return UserProfile;
};