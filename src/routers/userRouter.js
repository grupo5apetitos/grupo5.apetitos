// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

//Middleware para user -------------------------------------------//
const validationLogin = require('../middleware/validationLoginMiddleware');
const validationRegister = require('../middleware/validationRegisterMiddleware');
const validationPerfil = require('../middleware/validationPerfil');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multerUserMiddleware');
const uploadPerfil = require('../middleware/userPerfilMiddleware');

//Requiriendo el controlador userController--------------------------------//
const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //

router.get('/login', guestMiddleware, userController.login);
router.post('/login', validationLogin, userController.processLogin);

router.get('/registro', guestMiddleware, userController.registro);
router.post('/registro', upload.single('image'), validationRegister, userController.form_registro);

router.get('/perfil',userController.perfil);
router.put('/perfil/:id',uploadPerfil.single('image'), validationPerfil, userController.editar_perfil);

router.get('/logout', userController.logout);

//CRUD con sequelize -------------------------------//
/*
router.post('/add', userController.create);
router.post('/add', userController.userCreate);
router.get('/edit/:id', userController.edit);
router.get('/edit/:id', userController.userEdit);
router.put('/edit/:id', userController.update);
router.put('/edit/:id', userController.userUpdate);
router.delete('/delete/:id', userController.delete);
router.delete('/delete/:id', userController.userDelete);
*/

//Exportando el router --------------------------//
module.exports = router;