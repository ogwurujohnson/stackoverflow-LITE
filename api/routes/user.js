const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//users question routes
router.get('/:username/questions', userController.getUserQuestions);
router.get('/:username/questions/:q_id', userController.getUserSingleQuestion);