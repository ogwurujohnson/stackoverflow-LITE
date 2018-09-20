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
router.delete('/:q_id', checkAuth, questionController.deleteQuestion);

router.put('/:q_id', checkAuth, questionController.editQuestion);


/**
 * Routes to handle answers
 */
router.post('/:q_id/answers', checkAuth, answerController.postAnswer);

router.put('/:q_id/answers/:a_id', checkAuth, answerController.editAnswer);
router.delete('/:q_id/answers/:a_id', checkAuth, answerController.deleteAnswer);

/* router.post('/:q_id/answers/:a_id/reply', checkAuth, answerController.replyAnswer);
router.get('/:q_id/answers/:a_id/reply', answerController.getAllReply); */

router.put('/:q_id/answers/:a_id/upvote', checkAuth, answerController.upVoteAnswer);
router.put('/:q_id/answers/:a_id/downvote', checkAuth, answerController.downVoteAnswer);

router.put('/:q_id/answers/:a_id/accept', checkAuth, answerController.acceptAnswer);


module.exports = router;
