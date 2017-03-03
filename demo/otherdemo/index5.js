var express=require('express');
var http=require('http');

var app=express();

app.all('*',function(req,res,next){
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log('jingguo');
    next();
});

app.get('/',function(req,res){
        res.end('welcome to homepage!\n');
});

app.get('/about',function(req,res){
        res.end('welcome to about!\n');
});

app.get('*',function(req,res){
    res.end('404 error !');
})

http.createServer(app).listen(3001);