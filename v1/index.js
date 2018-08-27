const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const questionRouter = require('./routes/question');




app.get('/',(req,res)=>{
    res.send('Welcome Boy');
});

app.use('/question',questionRouter);

const port = process.env.port || 3000;
const host = '127.0.0.1';

app.listen(port,()=>{
    console.log(`app running on ${host}:${port} `);
});