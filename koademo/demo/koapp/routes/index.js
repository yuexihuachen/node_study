import Router  from 'koa-router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Counter from '../components/Counter';
import defaults from '../config/defaults';

var router=Router();

router.get('/', function *(next) {
  defaults.body=ReactDOMServer.renderToStaticMarkup(<Counter 
    value={10} 
    onIncrement={function(){}}
    onDecrement={function(){}}
  />);
  defaults.title='index';
  defaults.content="index";
  yield this.render('index', {
    data: defaults
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});



module.exports = router;
