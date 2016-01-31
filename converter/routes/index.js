var express = require('express'),
    router  = express.Router();

var Converter = require('../controllers/convert.js');

router.get('/', function(req, res){
    res.render('converters/index', { title: '', result1: "", result2: ""});
});

router.post('/', function(req, res){
  var result = Converter.convert(req.body.original);
  var result1 = result[0];
  var result2 = result[1];

    res.render('converters/index',  {title: '', result1: result1 , result2: result2});
});

module.exports = router;
