module.exports = (sequelize, dataTypes) => {
    const alias = 'Users';

    const cols = {
        id_users: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        user_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_profile: {
            type: dataTypes.TINYINT
        }
    };

    const config = {
        timestamps: false,
        deletedAt: false
    }

    const Users = sequelize.define(alias, cols, config);

    // Definiendo Asociación con UsersProfile -------------------- //
    Users.associate = function(models) {
        Users.belongsTo(models.UserProfile, {
            as: 'users_profile',
            foreignKey: 'id_profile',
            onDelete: 'CASCADE'
        });
    }

    return Users;
}