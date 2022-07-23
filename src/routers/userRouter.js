// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Middleware para user -------------------------------------------//

// Configuracion de Multer    ---------------------------------------------------//

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let users = path.join(__dirname, '../../public/images/users');
        cb(null, path.join(__dirname, '../../public/images/users'));
    }, 
    filename: (req, file, cb) => {
        //newFilename = 'users-'+ Date.now() + path.extname(file.originalname);
        cb(null, path.join(__dirname, '../../public/images/users'));
    }
});

const upload = multer({ storage: storage });


//Requiriendo el controlador userController---------------------//
const userController = require('../controllers/userController');

//Definiendo las rutas ----------------------------- //
router.get('/', userController.index);
router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar);
router.post('/perfil/editar', upload.single('image'), userController.editar);




// Exportando el router --------------------------//
module.exports = router;