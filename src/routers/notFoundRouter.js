// Módulos ------------------------------------------------------- //
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Llamado al controlador por require ---------------------------- //
const notFoundController = require('../controllers/notFoundController');

// Acá definimos la ruta --------------------------------------- //
router.get('/page-not-found', notFoundController.notFound);

// Exportando router --------------------------------------------- //
module.exports = router;