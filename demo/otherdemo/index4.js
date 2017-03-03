var express=require('express');
var http=require('http');

var app=express();

app.use('/home',function(req,res,next){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('welcome to homepage!\n');
});

app.use('/about',function(req,res,next){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('welcome to about!\n');
});

app.use(function(req,res){
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('404 error !');
})

http.createServer(app).listen(3001);