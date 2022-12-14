//controllers/desintations.js

const Flight = require('../models/flight')

function create(req, res) {
   //res.send('destination updated')
    Flight.findById(req.params.id, function(err, flight) {
      console.log(req.body)
      flight.destinations.push(req.body)      
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }

module.exports = {
    create
}