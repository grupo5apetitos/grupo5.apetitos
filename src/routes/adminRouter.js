// Módulos ------------------------------------------------------- //
const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

// Llamado al controlador por require ---------------------------- //
const adminController = require('../controllers/adminController');

// Uso del Multer para la ruta de admin -------------------------- //
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/platillos'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Ruta para el administrador ------------------------------------ //
router.get('/', adminController.login);
// agregar un producto ................................. //
router.get('/agregar', adminController.mostrar);
router.post('/agregar', upload.single('imagen'), adminController.crear);
// mostrar productos ................................... //
router.get('/lista', adminController.lista);
// validar sesión del usuario .......................... //
router.post('/lista', adminController.session);
// editar un producto .................................. //
router.get('/editar/:id', adminController.editar);
router.put('/lista/:id', upload.single('image'), adminController.actualizar);
// eliminar un producto ................................ //
router.delete('/lista/:id', adminController.eliminar);
// Exportando router --------------------------------------------- //
module.exports = router;