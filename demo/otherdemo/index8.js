var express=require('express');
var bodyParser = require('body-parser');
var app=express();

var hbs=require('hbs');
// 加载数据模块
var blogEngine = require('./public/javascript/blog');
//设定port端口
app.set('port',process.env.PORT || 3001);

app.set('view engine','html');
console.log(hbs.__express)
app.engine('html',hbs.__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.render('index8',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});

app.get('/about', function(req, res) {
   res.render('index8about', {title:"自我介绍"});
});
 
app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('index8article',{title:entry.title, blog:entry});
});

app.listen(app.get('port'));
