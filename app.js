/**
 * Created by danieldihardja on 07/05/17.
 */
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(4000);
