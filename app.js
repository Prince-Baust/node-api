const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/node_api_DB", {useUnifiedTopology: true, useNewUrlParser: true}, function () {
    console.log('database started!');
});

const apiroutes = require('./routes/api_routes');
app.use('/', apiroutes);

app.listen(3000, function () {
   console.log("Server started on port 3000");
});