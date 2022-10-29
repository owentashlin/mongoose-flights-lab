//controllers/flights.js
let Flight = require('../models/flight')

function newFlight(req, res) {
    res.render('/new')
}

module.exports = {
    new: newFlight
}