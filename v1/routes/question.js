const express = require('express');
const router = express.Router();
const questionController = require('../controllers/question');

/**
 * * GET routes**
 */

router.get('/', questionController.getAllQuestions);
router.get('/:id', questionController.getSingleQuestion);
router.get('/edit/:id',questionController.editQuestion);

/**
 * * POST routes**
 */

router.post('/delete/:id', questionController.deleteQuestion);
router.post('/edit/:id',questionController.editQuestion);

module.exports = router;
