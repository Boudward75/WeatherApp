var express = require('express');
var router = express.Router();


var cityList = [
  {name: "Paris", desc: "couvert", img: "/images/picto-1.png", temp_min: 9, temp_max: 9 },
  {name: "Marseille", desc: "couvert", img: "/images/picto-1.png", temp_min: 1, temp_max: 10 },
  {name: "Lyon", desc: "bruine légère", img: "/images/picto-1.png", temp_min: 3, temp_max: 6 },
  {name: "Lille", desc: "couvert", img: "/images/picto-1.png", temp_min: 10, temp_max: 10 }
];


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { cityList });
});

/* GET add-city page. */
router.post('/add-city', function(req, res, next) {
  console.log(req.body);
  cityList.push({name: req.body.cityName, desc: "ensoleillé", img: "/images/picto-1.png", temp_min: 11, temp_max: 22 });
  console.log(req.body.cityName);
  res.render('index', { cityList });
});

/* GET delete-city page. */
router.get('/delete-city', function(req, res, next) {
  console.log(req.query.position);
  cityList.splice(req.query.position, 1);
  res.render('index', { cityList });
});

module.exports = router;
