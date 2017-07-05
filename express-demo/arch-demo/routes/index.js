import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Counter from '../public/client/components/Counter';
import defaults from '../config/defaults';
/*
ReactDOMServer 类允许您在服务器上渲染组件。
renderToString()
再次render()，只附加事件处理程序，从而拥有非常高性能的第一次加载体验。
renderToStaticMarkup()
作为一个简单的静态页面生成器，很有用
*/

"use strict";
let router = express.Router();

var cfun=function(req, res, next) {

  //输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。它可以是一个函数，也可以是一个对象。
  //函数或者对象做出不同的处理
  /*defaults.body=ReactDOMServer.renderToStaticMarkup(<Counter 
    count={10}
    onIncreaseClick={function(){}}
    onDecreaseClick={function(){}}
    />);*/

    defaults.body=ReactDOMServer.renderToStaticMarkup(<Counter 
      count={10}
      increase={function(){}}
      decrease={function(){}}
    />);

  defaults.title='react-redux-webpack-express-node';
  defaults.content="react-redux-webpack-express-node";
  
  //设置缓存，根据环境不同设置不同的缓存时间，方便开发单元测试
  var version=parseInt(defaults.ResourceVersion/3600000,10);
  defaults.initStyles='/stylesheets/style.css?v'+version;
  defaults.initIndex='./bundle/app.js?v'+version;
  defaults.initVendor='./bundle/vendor.js?v'+version;

  res.render('layout', { data:defaults });

};

//路由
router.get('/', function(req, res, next) {
  cfun(req, res, next);
}).get('/index',function(req, res, next) {
  cfun(req, res, next);
});

module.exports = router;
