//routes/flights.js

let express = require('express');
let router = express.Router();

const flightsCtrl = require('../controllers/flights')

router.get('/index', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/all', flightsCtrl.all)

router.post('/', flightsCtrl.create)
//router.get('/:id', flightsCtrl.show)

module.exports = router;
