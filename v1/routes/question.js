const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question');

router.get('/', questionController.getAllQuestions);
router.get('/:id', questionController.getSingleQuestion);
router.get('/delete/:id', questionController.deleteQuestion);
router.get('/edit/:id',questionController.editQuestion);

module.exports = router;
