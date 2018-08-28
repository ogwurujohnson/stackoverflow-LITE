const bodyParser = require('body-parser');
//users controller
exports.getAllUsers = (req,res)=>{
    res.json({'message': 'All Users'});
};

exports.getUserDetails = (req,res)=>{
    res.json({'message': 'Logged User details'});
};


//users question controller
exports.getUserQuestions = (req,res)=>{
    res.json({'message': 'user centric questions'});
};

exports.getUserSingleQuestion = (req,res)=>{
    res.json({'message': 'users single view of their question'});
};