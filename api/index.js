const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const questionRouter = require('./routes/question');
const userRouter = require('./routes/user');


/**
 * ?HINT: For other versions make sure you to uncomment the following code
 * const version-n = require('location of the version-n index.js file');
 * app.use('/v2', version-n);
 * the code in the version-n index.js takes over
 */

 


app.get('/v1',(req,res)=>{
    res.send('Welcome Boy');
});

app.use('/v1/questions',questionRouter);
app.use('/v1/users', userRouter);

const port = process.env.port || 3000;
const host = '127.0.0.1';

app.listen(port,()=>{
    console.log(`app running on ${host}:${port} `);
});