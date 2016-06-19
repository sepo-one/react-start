var express = require('express');
var app = express();
var logger = require('express-logging')(require('logops'));

app.use(logger);
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})
 
app.listen(3900)
