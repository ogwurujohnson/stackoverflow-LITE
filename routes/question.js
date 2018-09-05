const express = require('express');

const router = express.Router();
const questionController = require('../controllers/question');
const answerController = require('../controllers/answer');
const checkAuth = require('../middleware/verify_auth');
/**
 * ?note: q_id = question_id,
 * ? a_id = answer_id
 */

/**
 * * GET routes**
 */

/**
 * Routes to handle Questions
 */
router.get('/', questionController.getAllQuestions);
router.post('/', checkAuth, questionController.postQuestion);

router.get('/:q_id', questionController.getSingleQuestion);
router.delete('/:q_id/delete', checkAuth, questionController.deleteQuestion);

router.get('/:q_id/edit', checkAuth, questionController.editQuestion);
router.put('/:q_id/edit', checkAuth, questionController.editQuestion);


/**
 * Routes to handle answers
 */
router.post('/:q_id/answers', checkAuth, answerController.postAnswer);
router.get('/:q_id/answers', answerController.getQuestionAnswers);

router.put('/:q_id/answers/:a_id/edit', checkAuth, answerController.editAnswer);
router.delete('/:q_id/answers/:a_id/delete', checkAuth, answerController.deleteAnswer);

router.post('/:q_id/answers/:a_id/reply', checkAuth, answerController.replyAnswer);
router.get('/:q_id/answers/:a_id/reply', answerController.getAllReply);

router.put('/:q_id/answers/:a_id/upvote', checkAuth, answerController.upVoteAnswer);
router.put('/:q_id/answers/:a_id/downvote', checkAuth, answerController.downVoteAnswer);


module.exports = router;