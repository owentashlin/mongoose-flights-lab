//controllers/desintations.js

const Flight = require('../models/flight')

function create(req, res) {
   //res.send('destination updated')
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
        //if (err) return console.log('error, cannot retrieve flight information')
        //res.send('destination updated')
        //res.render('/flights/destinations')
      })
      console.log(req.body)
    })
  }

module.exports = {
    create
}