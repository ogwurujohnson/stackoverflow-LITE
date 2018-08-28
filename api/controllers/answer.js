const bodyParser = require('body-parser');

exports.postAnswer = (req,res)=>{
    res.json({'message': 'posted answer'});
};

exports.getQuestionAnswers = (req,res)=>{
    res.json({'message': 'answers to question'});
};

exports.editAnswer = (req,res)=>{
    res.json({'message': 'edit question'});
};

exports.deleteAnswer = (req,res)=>{
    res.json({'message': 'delete answer'});
};

exports.replyAnswer = (req,res)=>{
    res.json({'message': 'reply to an answer'});
};

exports.getAllReply = (req,res)=>{
    res.json({'message': 'all replies to answer'});
};

exports.upVoteAnswer = (req,res)=>{
    res.json({'message': 'up-vote an answer'});
};

exports.downVoteAnswer = (req,res)=>{
    res.json({'message':'down-vote an answer'});
};