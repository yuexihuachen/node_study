'use strict';

var express = require('express');
var request = require('request');

var PORT = 8090;

var app = express();

let tpl=`<!DOCTYPE html>
<html data-dpr="2" style="font-size: 75px;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>一次性餐用手套 - 网易严选</title>
    <script crossorigin src="https://zeptojs.com/zepto.js" ></script>
    <link rel="stylesheet" href="http://local.mc.hujiang.com:8080/common/bundle.css">
    <meta name="viewport"
        content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no viewport-fit=cover">
    <style>
        .m-btnGroup{position:relative;z-index:4;height:1.38667rem;}
        .m-btnGroup .inner{position:fixed;bottom:0;left:50%;display:flex;width:100%;background-color:#fff;transform:translateX(-50%);-ms-flex-flow:row nowrap;flex-flow:row;-ms-transform:translateX(-50%);}
        @media only screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3){.m-btnGroup .inner{padding-bottom:calc(env(safe-area-inset-bottom) * 3);}
        }
        .m-btnGroup .inner .btn{height:1.38667rem;-ms-flex-align:center;-moz-align-items:center;align-items:center;-ms-flex-pack:center;-moz-justify-content:center;justify-content:center;}
        .m-btnGroup .inner .btn.btn-icon{width:2.08rem;-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}
        .m-btnGroup .inner .btn.btn-text{background-color:#333;color:#fff;font-size:.4rem;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}
        .m-btnGroup .inner .btn.btn-remind{color:#b4282d;}
        .m-btnGroup .inner .w-button-ghostWhite{border-right:0;font-size:.4rem;}
        .dt-section li{height:750pt;}
    </style>
</head>
<body>
    <div class="dt-section">
        <ul class="m-rate">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="m-detailFt">
        <div class="m-btnGroup">
            <div class="inner">
                <button class="w-button w-button-xxl w-button-noRadius btn btn-icon w-button-ghostWhite">
                    icon
                </button>
                <button class="w-button w-button-xxl w-button-noRadius btn btn-text w-button-ghostWhite">
                    立即购买
                </button>
                <button class="w-button w-button-xxl w-button-noRadius btn btn-text">
                    加入购物车
                </button>
            </div>
        </div>
    </div>
</body>
</html>`;

app.get('/', function(req, res) {
  res.send(tpl);
});


app.listen(PORT);

console.log('Running on http://localhost:' + PORT);

