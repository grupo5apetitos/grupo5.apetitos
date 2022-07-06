// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');




// Constante para indicarle a multer donde vamos aguardar los archivos-------------------//
// Configuracion de Multer---------------------------------------------------//

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path,join(__dirname, '../../public/images'));
    }, 
    filename: (req, file, cb) => {
        newFilename = 'users-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

    const upload = multer({ storage: storage });
// Llamado al controlador por require ---------------------------- //
const mainController = require('../controllers/mainController');








// Acá definimos las rutas --------------------------------------- //
router.get('/', mainController.index );
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/help', mainController.help);


// Ruta de crear usuario  ------------------------------------------//
router.post('/login', mainController.createUser);

// Ruta de Obtener datos del usuario -------------------------------//
router.get('/', mainController.getUser);

// Exportando router --------------------------------------------- //
module.exports = router;