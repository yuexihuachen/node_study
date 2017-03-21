var express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import MyComponent from '../client/components/MyComponent';

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let other=function(){};
    let result={
      nums:0,
      onIncrement:other,
      onDecrement:other
    }

    result.body=ReactDOMServer.renderToString(<MyComponent  {...result}/>);

    res.render('users', result);
});

module.exports = router;
