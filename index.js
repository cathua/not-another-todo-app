var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var rowdy = require('rowdy-logger');
var app = express();

rowdy.begin(app);

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* get all destinatinos */
app.get('/', function(req, res) {
  db.destination.findAll({
    })
      .then(function(destinations) {
        res.status(200).json(destinations);
      })
      .catch(function(error) {
        res.json(error);
      });
});

app.use('/destinations', require('./controllers/destinations'));

var server = app.listen(process.env.PORT || 3000, function() {
  rowdy.print();
});

module.exports = server;
