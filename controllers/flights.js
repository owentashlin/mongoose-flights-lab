//controllers/flights.js

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

//date function
// let date = new Date()
// let day = date.getDate();
// let month = date.getMonth()+1;
// let year = date.getFullYear()+1;

// let defaultDate = `${month}.${day}.${year}.`;
// console.log(defaultDate);


//new flight function
function create(req, res) {
    // res.send('flight saved')
    console.log(req.body.airline) 
    console.log(req.body.airport)
    console.log(req.body.flightNo)
    console.log(req.body.inputDate)
    const flight = new Flight(req.body)
    flight.save(function(err){
        if (err) return res.redirect('/flights/new')
        else res.redirect('/flights/')
    })
}
console.log('flight saved')



module.exports = {
    index,
    new: newFlight,
    all: allFlights,
    create
}