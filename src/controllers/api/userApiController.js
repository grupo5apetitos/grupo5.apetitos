const db = require('../../database/models');
const sequelize = db.sequelize;

// Llamado de los modelos
const Users = db.Users;

const userApiController = {
    users: (req, res) => {
        Users.findAll({
            attributes: ['id_users', 'name', 'last_name', 'user_name', 'email', 'avatar']
        })
        .then(users => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
            res.json(respuesta);
        });
    },
    user: (req, res) => {
        Users.findByPk(parseInt(req.params.id), {
            attributes: ['id_users', 'name', 'last_name', 'user_name', 'email', 'avatar']
        })
        .then(user => {
            let respuesta = {
                meta: {
                    status: 200,
                    url: 'api/users/' + req.params.id    // `api/user/${req.params.id}`
                },
                data: user
            }
            res.json(respuesta);
        });
    }
}

module.exports = userApiController;