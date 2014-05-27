var express = require('express');
var router = express.Router();
var artist = require('../lib/artist');

/* GET list artists. */
router.get('/', function(req, res) {
  var artists = [
  	'justin',
  	'miley',
  	'shakira',
  	'sean'
  ];
res.render('artists/index',{artists:artists})
});

module.exports = router;
