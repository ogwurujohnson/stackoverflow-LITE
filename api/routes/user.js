const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');


// user routes
router.get('/', userController.getAllUsers);
router.get('/:username', userController.getUserDetails);

// users question routes
router.get('/:username/questions', userController.getUserQuestions);
router.get('/:username/questions/:q_id', userController.getUserSingleQuestion);

// user answer routes

module.exports = router;
