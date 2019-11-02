const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect("mongodb://localhost:27017/node_api_DB", {useUnifiedTopology: true, useNewUrlParser: true}, function () {
    console.log('database started!');
});

app.get('/', (req, res, next) =>{
    res.send('running node api');
});

app.listen(3000, function () {
   console.log("Server started on port 3000");
});