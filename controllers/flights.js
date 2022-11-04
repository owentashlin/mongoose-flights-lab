//controllers/flights.js
const { signedCookie } = require('cookie-parser')
const Flight = require('../models/flight')

//display page functions
function index(req, res) {
    res.render('flights/index')
}

function allFlights(req, res) {
    Flight.find({}, function(err, flights) {
      if (err) return res.redirect('/')
      res.render('flights/all', { flights })
    })
  }

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    let flight = new Flight(req.body)
    console.log(req.body)
    flight.save(function(err){
        if (err) return console.log('error')
        else res.redirect('/flights/index')
    })
}

function findAll(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) alert('error, cannot retrieve flight information')
        res.render('flights/all', { flights: Flight })
    })
}

function showDetail(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) console.log('error, cannot retrieve flight information')
        //res.send('flight info')
        else res.render('flights/detail', { flightNo: 'Flight Number', flight })
    })
}

module.exports = {
    index,
    new: newFlight,
    all: allFlights,
    create,
    findAll,
    showDetail
}
