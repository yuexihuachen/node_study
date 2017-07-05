import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import defaults from '../config/defaults';

let router = express.Router();

router.get('/', function(req, res, next) {
console.log('-----------------------------------------')
  defaults.body='';
  defaults.title='asyncAction';
  defaults.content="asyncAction";
  defaults.initScript='./bundle/index.js?v=20173211703?v='+new Date().getTime();
  defaults.initStyles='/stylesheets/indexStyle.css?v='+new Date().getTime();
  res.render('layout', { data:defaults });
  
});

module.exports = router;
