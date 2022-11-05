// const Ticket = require('../models/ticket')
const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

function show(req, res) {
    res.render('flights/tickets')
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.redirect('tickets/index')
    });
  }

  function addToFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      flight.ticket.push(req.body.ticketId);
      ticket.save(function (err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  }

module.exports = {
    show,
    create,
    addToFlight
}