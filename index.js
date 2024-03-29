const express = require('express');
const port = process.env.PORT||8000;
const app = express();
const db = require('./config/mongoose');

// To parse incoming requests 
app.use(express.urlencoded());

// It parses incoming requests with JSON
app.use(express.json())

// making connection to index of route
app.use('/', require('./routes/index'))


// connecting to port
app.listen(port, function(err){
    if(err){
        console.log(`Error! connecting Port : ${err}`);
    }
    console.log(`Connected on Port : ${port}`);
})