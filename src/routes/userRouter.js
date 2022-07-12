// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const userController = requie('../controllers/userController');

//Definiendo las rutas ----------------------------- //
router.get('/', userController.index);
router.get('/perfil', userController.perfil);
router.put('/perfil/editar', userController.editar);

// Exportando el router --------------------------//
module.exports = router;