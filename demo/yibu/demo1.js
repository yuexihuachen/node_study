'use strict';

var express = require('express');

var PORT = 8090;

var app = express();

app.use(express.static('./_book'));

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);

