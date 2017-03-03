var express=require('express');
var http=require('http');
var path=require('path');
var app=express();

//放模板文件的目录
 app.set('views', './views');
//模板引擎
 app.set('view engine','ejs');
 //然后安装相应的模板引擎 npm 软件包。
 
 //方法即可创建一个你自己的模板引擎
 //app.engine(ext, callback)

app.get("/hello/:who?", function(req, res) {
    console.log(req.ip,req.files);
    if(req.params.id){
        res.end("hello, "+req.params.who+' .');
    } else {
        //方法允许网址的重定向。
         //res.redirect('/hello/world');
         //方法用于发送文件。
         //res.sendFile(__dirname+'/public/cuit1.jpg')
         //方法用于渲染网页模板。
         res.render("index6", { title: "Hello World" });
    }   
 
});

http.createServer(app).listen(3001);