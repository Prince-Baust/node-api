const express = require('express');
const app = express();

app.get('/', (req, res, next) =>{
    res.send('running node api');
});


app.listen(3000, function () {
   console.log("Server started on port 3000");
});