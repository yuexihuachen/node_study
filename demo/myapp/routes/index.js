import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../components/MyComponent';

let router = express.Router();

router.get('/', function(req, res, next) {

  let result={
    body:'server',
    title:'server'
  }

  result.body=ReactDOMServer.renderToString(<MyComponent  {...result}/>);

  res.render('index', result);
});

module.exports = router;
