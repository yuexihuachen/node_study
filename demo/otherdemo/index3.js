var express=require('express');
var http=require('http');

var app=express();

app.use(function(req,res,next){
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('welcome to homepage!\n');
    } else {
        next();
    }
});

app.use(function(req,res,next){
    if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('welcome to about!\n');
    } else {
        next();
    }
});

app.use(function(req,res){
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 error !');
})

http.createServer(app).listen(3001);