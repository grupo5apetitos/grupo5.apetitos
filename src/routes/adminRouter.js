// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();

// Llamado al controlador por require ---------------------------- //
const adminController = require('../controllers/adminController');

// Ruta para el administrador ------------------------------------ //
router.get('/', adminController.login);
// agregar un producto ................................. //
router.get('/agregar', adminController.agregar);
router.post('/mostrar', adminController.crear);
// mostrar productos ................................... //
router.get('/mostrar', adminController.lista);
// editar un producto .................................. //
router.get('/editar', adminController.editar);
router.put('/mostrar', adminController.actualizar);
// eliminar un producto ................................ //
router.delete('/eliminar', adminController.eliminar);
// Exportando router --------------------------------------------- //
module.exports = router;