//controllers/flights.js

const Flight = require('../models/flight')

function index(req, res) {
    res.render('flights/index')
}

function newFlight(req, res) {
    res.render('flights/new')
}

function allFlights(req, res) {
    res.render('flights/all')
}

module.exports = {
    index,
    new: newFlight,
    all: allFlights
}