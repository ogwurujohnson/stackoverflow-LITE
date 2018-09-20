const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

// user auth route
router.post('/signup', authController.addUser);
router.post('/login', authController.loginUser);

module.exports = router;
