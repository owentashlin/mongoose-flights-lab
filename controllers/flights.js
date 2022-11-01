//controllers/flights.js

const { signedCookie } = require('cookie-parser')
const Flight = require('../models/flight')

//display page functions
function index(req, res) {
    res.render('flights/index')
}

function newFlight(req, res) {
    res.render('flights/new')
}

function allFlights(req, res) {
    res.render('flights/all')
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err) return console.log('error')
        else res.redirect('/flights/index')
    })
    console.log('flight saved')
}

function findAll(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) console.log('error, cannot retrieve flight')
        res.render('flights/all', { flights })
        flight: flight
    })
}

// function index(req, res) {
//     Movie.find({}, function(err, movies) {
//       if (err) return res.redirect('/');
//       res.render('movies/index', { movies });
//     });
//   }

module.exports = {
    index,
    new: newFlight,
    all: allFlights,
    create,
    findAll
}

// app.get('/store', function(req, res) {
//     res.render('store', {
//       user: req.user,
//       title: 'Store'});
//   });

// app.get('/store', function(req, res) {
//     res.render('store', {
//       user: req.user,
//       title: 'Store',
//       cards: cards
//     });
//   })