var express=require('express');
var path=require('path');
var favicon = require('serve-favicon');
var logger   = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var http=require('http');
var session = require('express-session');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app=express();
//var routes=require('./routes')(app);

//设定port端口
app.set('port',process.env.PORT || 3001);

//设定模板路径
app.set('views',path.join(__dirname,'views'));

//设置模板引擎
app.set('view engine','ejs');

//使用中间件
//connect 内建的中间件，使用默认的 favicon 图标，如果想使用自己的图标，
//需改为app.use(express.favicon(__dirname + '/public/images/favicon.ico')); 这里我们把自定义的 favicon.ico 放到了 public/images 文件夹下。
app.use(favicon(__dirname + '/public/favicon.ico'));
//connect 内建的中间件，在开发环境下使用，在终端显示简单的不同颜色的日志，比如在启动 app.js 后访问 localhost:3000，终端会输出：
//          Express server listening on port 3000 GET / 200 21ms - 206b GET /stylesheets/style.css 304 4ms 
//数字200显示为绿色，304显示为蓝色。假如你去掉这一行代码，不管你怎么刷新网页，终端都只有一行 Express server listening on port 3000。
app.use(logger('dev'));
//connect 内建的中间件，可以协助处理 POST 请求，伪装 PUT、DELETE 和其他 HTTP 方法。
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
//connect 内建的中间件，用来解析请求体，支持 application/json， application/x-www-form-urlencoded, 和 multipart/form-data。
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
                  console.log("success");
//app.use(multer());

app.use(cookiePareser());
//设置应用的路由
//app.use(app.router);
//connect 内建的中间件，设置根目录下的 public 文件夹为静态文件服务器，存放 image、css、js 文件于此。
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('hello world !');
});



// 错误处理中间件应当在路由加载之后才能加载
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});