import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../components/MyComponent';

let router = express.Router();

router.get('/', function(req, res, next) {

  let result={
    body:'',
    title:'zishen2b'
  }

  result.body=ReactDOMServer.renderToString(<MyComponent  {...result}/>);
  //console.log(html)
  res.render('index', result);
});

module.exports = router;
