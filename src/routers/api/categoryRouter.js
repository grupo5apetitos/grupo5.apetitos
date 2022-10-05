const express = require('express');
const router = express.Router();
const categoryAPIController = require('../../controllers/api/categoryAPIController');

router.get('/', categoryAPIController.categorias);

module.exports = router;