const express = require('express');

const router = express.Router();
const questionController = require('../controllers/question');
const answerController = require('../controllers/answer');

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
router.post('/', questionController.postQuestion);

router.get('/:q_id', questionController.getSingleQuestion);
router.delete('/:q_id/delete', questionController.deleteQuestion);

router.get('/:q_id/edit', questionController.editQuestion);
router.put('/:q_id/edit', questionController.editQuestion);


/**
 * Routes to handle answers
 */
router.post('/:q_id/answers', answerController.postAnswer);
router.get('/:q_id/answers', answerController.getQuestionAnswers);

router.put('/:q_id/answers/:a_id/edit', answerController.editAnswer);
router.delete('/:q_id/answers/:a_id/delete', answerController.deleteAnswer);

router.post('/:q_id/answers/:a_id/reply', answerController.replyAnswer);
router.get('/:q_id/answers/:a_id/reply', answerController.getAllReply);

router.put('/:q_id/answers/:a_id/upvote', answerController.upVoteAnswer);
router.put('/:q_id/answers/:a_id/downvote', answerController.downVoteAnswer);


module.exports = router;
