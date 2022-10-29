let express = require('express');
let router = express.Router();

const flightsCtrl = require('../controllers/flights')

/* GET home page. */
router.get('/new', flightsCtrl.new)

module.exports = router;
