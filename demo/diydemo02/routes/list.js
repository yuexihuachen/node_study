import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import List from '../client/components/List';
import defaults from '../config/defaults';
import services from '../models/services';
import json from '../json/index.json';

let router = express.Router();

router.get('/', function(req, res, next) {

var listData=  services.fetchData({
    method:'POST',
    headers:{},
    data:{
      goodsLimit:{sort: 0, imageWidth: 160, imageHeight: 160},
      pageIndex:1,
      pageSize:10,
      poid:2,
      resType:[1,2,3,4,5,6,7,8],
      searchType:2
    },
    url:'http://m.ctrip.com/restapi/soa2/12568/search.json'
  });

Promise.all([listData]).then(function(results) {
      
      defaults.body=ReactDOMServer.renderToStaticMarkup(<List  {...results[0]}/>);
      defaults.title='List';
      defaults.content="List";
      defaults.initScript='./bundle/list.js?v=20173211703';
      defaults.initStyles='/stylesheets/listStyle.css?v='+new Date().getTime();
      defaults.delegate=null;
      res.render('layout', { data:defaults });
})
.catch(function(error) {
 // One or more promises was rejected
});





});

module.exports = router;
