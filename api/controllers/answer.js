const bodyParser = require('body-parser');

exports.postAnswer = (req,res)=>{
    res.json({'message': 'posted question'});
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


exports.replyAnswer

exports.upVoteAnswer


exports.downVoteAnswer