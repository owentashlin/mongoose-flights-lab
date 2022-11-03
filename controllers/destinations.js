//controllers/desintations.js

const Flight = require('../models/flight')

function create(req, res) {
    res.send('flight updated')
    // flight.destinations.push(req.body)
    // flight.save(function(err){
    //     console.log('destination saved')
    // })
}

module.exports = {
    create
}