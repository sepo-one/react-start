var express = require('express');
var app = express();
var logger = require('express-logging')(require('logops'));

var wpConfig = require('./webpack.config');
var webpack = require('webpack');
var wpDevMiddleware = require('webpack-dev-middleware');

app.use(logger);
app.use(wpDevMiddleware(webpack(wpConfig)));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(3900);
