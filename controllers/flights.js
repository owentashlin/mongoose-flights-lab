//controllers/flights.js

const { signedCookie } = require('cookie-parser')
const Flight = require('../models/flight')

//display page functions
function index(req, res) {
    res.render('flights/index')
}

function allFlights(req, res) {
    Flight.find({}, function(err, flights) {
      if (err) return res.redirect('/');
      res.render('flights/all', { flights });
    });
  }

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    let flight = new Flight(req.body)
    flight.save(function(err){
        if (err) return console.log('error')
        else res.redirect('/flights/index')
    })
    console.log('flight saved')
}

function findAll(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) console.log('error, cannot retrieve flight')
        res.render('flights/all', { flights: Flight })
    })
    console.log({ flights: Flight })
}

function showDetail(req, res) {
    //res.send('details')
}

module.exports = {
    index,
    new: newFlight,
    all: allFlights,
    create,
    findAll,
    showDetail
}
