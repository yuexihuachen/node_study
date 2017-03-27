import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Detail from '../client/components/Detail';
import defaults from '../config/defaults';
import services from '../models/services';
import json from '../json/index.json';

let router = express.Router();

router.get('/', function(req, res, next) {
  var params=req.query || '';

  console.log(params)
 var detailData=  services.fetchData({
    method:'POST',
    headers:{},
    data:{
      goodsLimit:{productIds:[parseInt(params.id,10)]},
      guideLimit:{"advisorIds":[parseInt(params.aid,10)],"ageTag":[],"onlyThesePoi":true},
      poid:parseInt(params.poid,10),
      resType:[],
      searchType:3
    },
    url:'http://m.ctrip.com/restapi/soa2/12568/search.json'
  });

Promise.all([detailData]).then(function(results) {
      defaults.body=ReactDOMServer.renderToStaticMarkup(<Detail  {...results[0]}/>);
      defaults.title='detail';
      defaults.content="detail";
      defaults.initScript='./bundle/detail.js?v=20173211703';
      defaults.initStyles='/stylesheets/detailStyle.css?v='+new Date().getTime();

      res.render('layout', { data:defaults });
})
.catch(function(error) {
 // One or more promises was rejected
});


});

module.exports = router;
