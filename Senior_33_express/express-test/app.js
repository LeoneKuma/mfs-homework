var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//导入子路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//解析请求
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//托管静态文件，public目录下的文件可以直接通过host访问了。
app.use(express.static(path.join(__dirname, 'public')));

//将请求按照path分发给两个子路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

//如果没有匹配的子路由，则进行错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
