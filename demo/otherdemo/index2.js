var express=require('express');
var http=require('http');
var fetch=require('node-fetch');
var services=require('./models/services');

var app=express();

app.use(function(req,res,next){
    console.log('In comes a '+req.method+' to '+req.url);
    next();
});

app.use(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    var callback=function(res){
        console.log(res);
    }
    services.init(callback);
    var data={title:'hello world !'};
    res.end(data.title);
})



http.createServer(app).listen(3001);