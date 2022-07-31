// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

//Middleware para user -------------------------------------------//
const validationLogin = require('../middleware/validationLoginMiddleware');
const validationRegister = require('../middleware/validationRegisterMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multerUserMiddleware');

//Requiriendo el controlador userController--------------------------------//
const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //

router.get('/login', guestMiddleware, userController.login);
router.post('/login', validationLogin, userController.processLogin);

router.get('/registro', guestMiddleware, userController.registro);
router.post('/registro', upload.single('image'), validationRegister, userController.form_registro);

router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar_perfil);

<<<<<<< HEAD
router.get('/registro', userController.registro);
router.post('/registro', upload.single('image'), middleware.register_user, userController.form_registro);
=======
router.get('/logout', userController.logout);
>>>>>>> 34d466fee927e6e6f8ddf863546db244891030b3

//Exportando el router --------------------------//
module.exports = router;