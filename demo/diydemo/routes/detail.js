import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Detail from '../client/components/Detail';
import defaults from '../config/defaults';
import json from '../json/index.json';

let router = express.Router();

router.get('/', function(req, res, next) {
  var params=req.query || '';

  var singProduct=json.product.filter((item)=>{
    return item.id==params.id;
  })

  
  var data={
    "product":singProduct
  }
  
  console.log(req.baseUrl)
  defaults.body=ReactDOMServer.renderToStaticMarkup(<Detail  {...data}/>);

  defaults.title='detail';
  defaults.content="detail";
  defaults.initScript='./bundle/detail.js?v=20173211703';


  res.render('layout', { data:defaults });

});

module.exports = router;
