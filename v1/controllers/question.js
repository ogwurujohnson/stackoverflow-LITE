const bodyParser = require('body-parser');


exports.getAllQuestions = (req,res)=>{
    res.json({'message': 'All Questions'});
};

exports.getSingleQuestion = (req,res)=>{
    res.json({'message': 'Single Question'});
};

exports.editQuestion = (req,res)=>{
    res.json({'message': 'edit Question'});
};

exports.deleteQuestion = (req,res)=>{
    res.json({'message': 'delete question'});
};

exports.postQuestion = (req,res)=>{
    res.json({'message': 'ask question'});
};




