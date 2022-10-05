const express = require('express');
const router = express.Router();
const mainApiController = require('../../controllers/api/mainApiController');

router.get('/total', mainApiController.total);
router.get('/ultimoProducto', mainApiController.lastMeal);
router.get('/listaCategorias', mainApiController.listCategorys);
router.get('/listaProductos', mainApiController.listProducts);

module.exports = router;