//routes/flights.js

let express = require('express');
let router = express.Router();

const flightsCtrl = require('../controllers/flights')

/* GET home page. */
router.get('/new', flightsCtrl.new)
router.get('/all', flightsCtrl.all)


module.exports = router;
