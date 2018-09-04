const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

// user auth route
router.post('/signup', userController.addUser);
router.post('/login', userController.loginUser);


// user routes
router.get('/', userController.getAllUsers);
router.get('/:u_id', userController.getUserDetails);

// users question routes
router.get('/:u_id/questions', userController.getUserQuestions);
router.get('/:u_id/questions/:q_id', userController.getUserSingleQuestion);

// user answer routes

module.exports = router;
