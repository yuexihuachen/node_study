'use strict';

    var express = require('express');

    var PORT = 8888;

    var app = express();
    app.get('/', function (req, res) {
      var data=run(gen);
      res.send(data+'\n');
    });


    app.listen(PORT);
    console.log('Running on http://localhost:' + PORT);

