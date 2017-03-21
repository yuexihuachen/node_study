import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../client/components/MyComponent';

let router = express.Router();

router.get('/', function(req, res, next) {

  let other=function(){};
  let result={
    nums:0,
    onIncrement:other,
    onDecrement:other
  }

  result.body=ReactDOMServer.renderToString(<MyComponent  {...result}/>);

  res.render('index', result);
});

module.exports = router;
