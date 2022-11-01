//routes/flights.js

let express = require('express');
const flights = require('../controllers/flights');
let router = express.Router();

const flightsCtrl = require('../controllers/flights')

router.get('/index', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/all', flightsCtrl.all)
router.get('/details/:id', flightsCtrl.showDetail)

router.post('/', flightsCtrl.create)
router.get('/:id', flightsCtrl.findAll)

module.exports = router;
