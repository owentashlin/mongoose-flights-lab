//routes/flights.js

let express = require('express')
let router = express.Router()

const flightsCtrl = require('../controllers/flights')

router.get('/index', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/all', flightsCtrl.all)
router.get('/:id', flightsCtrl.showDetail)


router.post('/', flightsCtrl.create)
router.get('/:id', flightsCtrl.findAll)

module.exports = router
