// const Ticket = require('../models/ticket')
const Ticket = require('../models/ticket')

function show(req, res) {
    res.render('flights/tickets')
}

module.exports = {
    show
}