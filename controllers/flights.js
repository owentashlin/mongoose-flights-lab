//controllers/flights.js

const Flight = require('../models/flight')

function newFlight(req, res) {
    res.render('flights/new')
}

function allFlights(req, res) {
    res.render('flights/all')
}

module.exports = {
    new: newFlight,
    all: allFlights
}