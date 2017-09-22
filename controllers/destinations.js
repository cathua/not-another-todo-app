var express = require('express');
var db = require('../models');
var router = express.Router();


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
  db.destination.create(req.body)
    .then(function(destination){
      res.status(200).json(destination);
    })
    .catch(function(error) {
      res.status(400).send('main/404');
    });
});

// edit
router.put('/:id', function(req, res){
  db.destination.findById(req.params.id)
    .then(function(destination) {
      destination.updateAttributes({
        location: req.body.location
      })
      .then(function(){
        res.status(200).json(req.body);
      })
    })
});

// delete
router.delete('/:id', function(req, res){
  db.destination.findById(req.params.id)
    .then(destination => {
      destination.destroy();
    })
    res.json({
      message: 'deleted'
    })
});

module.exports = router;
