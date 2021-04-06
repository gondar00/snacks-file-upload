var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'uploads');

app.use(express.static(dir));

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:3000/');
});