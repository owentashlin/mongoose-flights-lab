let express = require('express')
let router = express.Router()

const ticketsCtrl = require('../controllers/tickets')

router.get('/index', ticketsCtrl.show)

module.exports = router