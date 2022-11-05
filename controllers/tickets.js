// const Ticket = require('../models/ticket')
const Ticket = require('../models/ticket')

function show(req, res) {
    res.render('flights/tickets')
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.send('ticket purchased')
        //res.redirect('/flights/tickets');
    });
  }


module.exports = {
    show,
    create
}