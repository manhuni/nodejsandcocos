
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
var rootPath = path.join(__dirname, '../');
//设置默认view路径
app.set('views', rootPath);

//设置默认后缀名为html 并且使用ejs模板
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

//设置静态文件路径
app.use(express.static(rootPath));


app.get('/index', function (req, res) {
	res.render('index', { title: 'Hellow Cocos2d-HTML5' });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
