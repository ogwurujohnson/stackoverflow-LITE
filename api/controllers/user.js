const bodyParser = require('body-parser');


//users question controller
exports.getUserQuestions = (req,res)=>{
    res.json({'message': 'user centric questions'});
};

exports.getUserSingleQuestion = (req,res)=>{
    res.json({'message': 'users single view of their question'});
};