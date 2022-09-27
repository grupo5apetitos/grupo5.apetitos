const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/userApiController');

router.get('/', usersAPIController.users);
router.get('/:id', usersAPIController.user);

module.exports = router;