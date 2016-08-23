var express = require('express');
var http = require('http');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res)
{
	res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket)
{
	console.log('Un client est connecté !');
});

server.listen(8888);