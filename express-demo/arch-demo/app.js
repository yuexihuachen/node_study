var express = require('express');
//路径解析，得到规范化的路径格式
var path = require('path');
//Node.js中间件用于服务一个图标。
var favicon = require('serve-favicon');
//morgan是express默认的日志中间件
var logger = require('morgan');
//对http或https传入的cookie进行解析后赋值给req.cookies或作为其他通途
var cookieParser = require('cookie-parser');
//解析http,https请求体，这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
var bodyParser = require('body-parser');
//为了替代现有的服务器端视图解决方案，如jade，ejs或handlebar。
var reactViews = require('express-react-views');

var index = require('./routes/index');

var app = express();

// view engine  //path.join路径结合、合并，路径最后不会带目录分隔符
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')))


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//express.static 是 Express 内置的唯一一个中间件。是基于 serve-static 开发的，负责托管 Express 应用内的静态资源。
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/index', index);

app.get('/*', (req,res) => {
  res.sendfile(path.join(__dirname, 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
