
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var app = express();
var socket = require('socket.io');
var config = require('./config');
var GCTRL = require('./gamecontroller/gamecontroller');
// all environments
app.set('port', process.env.PORT || 8088);
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

var myIP = '192.168.15.144';

var server = http.createServer(app).listen(app.get('port'), myIP, function(){
  console.log("Express server listening on port " + app.get('port'));
});

var io = socket.listen(server);
//When a client connect or connection server will handle as connection event and auto into connection
io.sockets.on('connection', function (socket) {
  console.log('a user connected');
  //an event happended
  socket.on(config.GAME_SETTING.SOCKETIO.EVENT.client_request_begin_info, function(data){
  	GCTRL.processTalking(socket, config.GAME_SETTING.SOCKETIO.EVENT.server_send_begin_info, data);
  });
  //another event
  socket.on(config.GAME_SETTING.SOCKETIO.EVENT.client_request_end_of_game, function(data){
  	GCTRL.processTalking(socket, config.GAME_SETTING.SOCKETIO.EVENT.server_send_end_of_game, data);
  });
  //disconnect event
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});