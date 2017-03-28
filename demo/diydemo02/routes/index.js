import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Index from '../client/components/Index';
import defaults from '../config/defaults';
import services from '../models/services';
import json from '../json/index.json';

let router = express.Router();

router.get('/', function(req, res, next) {

      defaults.body=ReactDOMServer.renderToStaticMarkup(<Index  />);
      defaults.title='Index';
      defaults.content="Index";
      defaults.initScript='./bundle/index.js?v=20173211703';
      defaults.initStyles='/stylesheets/indexStyle.css?v='+new Date().getTime();
      defaults.delegate=null;
      res.render('layout', { data:defaults });

});

module.exports = router;
