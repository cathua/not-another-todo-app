var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var rowdy = require('rowdy-logger');
var app = express();

rowdy.begin(app);

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

/* get all destinatinos */
app.get('/', function(req, res) {

});

app.use('/destinations', require('./controllers/destinations'));

var server = app.listen(process.env.PORT || 3000, function() {
  rowdy.print();
});

module.exports = server;
