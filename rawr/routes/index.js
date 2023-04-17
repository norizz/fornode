var express = require('express');
var router = express.Router();
var fs=require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/toTXT', function(req, res) {
  fs.appendFileSync("db.txt", req.query.autoName+" "+req.query.autoModel+" "+req.query.autoHorsePower+"  ,  ")
  res.render('car.hbs', {})
});
router.get('/listOfCars', function(req, res){
  let carlist = fs.readFileSync('db.txt', 'utf-8')
  res.render('carlist.hbs', {
    key1: carlist
  })
});
module.exports = router;
