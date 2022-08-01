// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');

// Llamado al controlador por require ---------------------------- //
const adminController = require('../controllers/adminController');

// Uso del Multer para la ruta de admin ------ //
const platillos = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/platillos'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: platillos });

// Multer para guardar avatars de usuarios --- //
const avatar_user = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/avatars'));
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});
const avatar = multer({ storage: avatar_user });

// Validaciones para el Login ------------------------------------ //
const validations = [
    body('user')
        .notEmpty().withMessage('Ingrese un nombre de usuario.').bail(),
    body('password')
        .notEmpty().withMessage('Ingrese una contraseña.')
];

// Acceso al administrador ------------------- //
router.get('/', adminController.admin);
router.post('/', validations, adminController.login);

// agregar un producto ----------------------- //
router.get('/agregar', adminController.mostrar);
router.post('/agregar', upload.single('imagen'), adminController.crear);

// mostrar productos ------------------------- //
router.get('/lista', adminController.lista);

// validar sesión del usuario ---------------- //
router.post('/lista', adminController.session);

// editar un producto ------------------------ //
router.get('/editar/:id', adminController.editar);
router.put('/lista/:id', upload.single('image'), adminController.actualizar);

// eliminar un producto ---------------------- //
router.delete('/lista/:id', adminController.eliminar);

// Exportando router --------------------------------------------- //
module.exports = router;