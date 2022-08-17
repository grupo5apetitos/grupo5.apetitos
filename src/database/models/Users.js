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
            email:{
                type:dataTypes.STRING(70),
                allowNull: false
            }, 
            password:{
                type:dataTypes.STRING(100),
                allowNull: false
            },
            avatar:{
                type:dataTypes.STRING(100),
                allowNull:false
            }   
        };
            let config = {
                timestamps: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: false
            }

        const Users = sequelize.define(alias, cols, config);
        return Users;
}