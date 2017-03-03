var express=require('express');
var app=express();

app.set('port',process.env.PORT || 3001);

var map = {"1":{id:1,name:"test"},"2":{id:2,name:"test"}};
app.get('/index',function(req,res){
   res.set({
     'Content-Type':'text/json; charset=utf-8',
     'Access-Control-Allow-Headers': 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
     'Access-Control-Allow-Origin':'*',
     'Access-Control-Allow-Credentials':'true'
    });  
   res.send(map);
});

app.post('/index',function(req,res){
   res.set({
      'Content-Type':'text/json; charset=utf-8',
     'Access-Control-Allow-Headers': 'Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
     'Access-Control-Allow-Origin':'*',
     'Access-Control-Allow-Credentials':'true'
   });  
   res.send(map);
});

app.listen(app.get('port'));
