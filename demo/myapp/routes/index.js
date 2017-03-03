import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../components/MyComponent';

let router = express.Router();

router.get('/', function(req, res, next) {

  let result={
    value:2
  }

  let html=ReactDOMServer.renderToString(<MyComponent  {...result}/>);
  console.log(html)
  res.render('index', { title: 'name'});
});

module.exports = router;
