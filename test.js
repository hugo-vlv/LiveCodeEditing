var express = require('express');

var app = express();

app.get('/', function(req, res)
{
	res.render('index.ejs', {test: 'okay'});
});

app.listen(8888);