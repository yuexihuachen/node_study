import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Counter from '../components/Counter';
import defaults from '../config/defaults';
import json from '../json/index.json';

let router = express.Router();

router.get('/', function(req, res, next) {

  defaults.body=ReactDOMServer.renderToStaticMarkup(<Counter  {...json}/>);
  defaults.title='server';
  defaults.content="server";
  defaults.initScript='./bundle/index.js?v=20173211703';

  res.render('layout', { data:defaults });

});

module.exports = router;
