const express = require('express');
const port = 7000;
const app = express();
// const bodyParser = require('body-parser')
const db = require('./config/mongoose');


// app.use(bodyParser()); 
app.use(express.urlencoded());
app.use(express.json())
app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log(`Error! connecting Port : ${err}`);
    }
    console.log(`Connected on Port : ${port}`);
})