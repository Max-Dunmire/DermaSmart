const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.user_create_get);

module.exports = router;