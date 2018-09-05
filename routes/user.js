const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const checkAuth = require('../middleware/verify_auth');


// user routes
router.get('/', userController.getAllUsers);
router.get('/:u_id', userController.getUserDetails);

// users question routes
router.get('/:u_id/questions', checkAuth, userController.getUserQuestions);
router.get('/:u_id/questions/:q_id', checkAuth, userController.getUserSingleQuestion);

// user answer routes

module.exports = router;
