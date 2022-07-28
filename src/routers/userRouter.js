// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Middleware para user -------------------------------------------//
const validationLogin = require('../middleware/validationLoginMiddleware');
const middleware = require('../middleware/middle_user');

// Constante para indicarle a multer donde vamos aguardar los archivos-------------------//
// Configuracion de Multer---------------------------------------------------//

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));
    }, 
    filename: (req, file, cb) => {
        newFilename = 'users-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage: storage });

//Requiriendo el controlador userController--------------------------------//
const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //

router.get('/login', userController.login);
router.post('/login', validationLogin, userController.processLogin);


router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar_perfil);

router.get('/registro', userController.registro);
router.post('/registro', upload.single('image'), middleware, userController.form_registro);

//Exportando el router --------------------------//
module.exports = router;