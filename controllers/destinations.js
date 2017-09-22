var express = require('express');
var db = require('../models');
var router = express.Router();
// var Destination = DB.models.Destination;


// show
router.get('/:id', function(req, res) {
  // console.log(db.destination, 'db destination');
  // console.log('req.params.id', req.params.id);
  db.destination.findById(req.params.id)
  .then(function(destinations) {
    res.status(200).json({destinations: destinations});
  })
  .catch(function(error) {
    res.status(400).send('main/404');
  });
});

// post
router.post('/', function(req, res) {
  db.destination.findOrCreate(
      {where: {destination: req.body.destination}
    })
    .then(function(destinations){
      res.status(200).json(destinations);
    })
    .catch(function(error) {
      res.status(400).send('main/404');
    });
});

module.exports = router;
