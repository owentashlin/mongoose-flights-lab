const mongoose = require('mongoose')
const Schema = mongoose.Schema

function rndmTicketPrice(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const ticketPrice = rndmTicketPrice(0, 250)
//console.log(ticketPrice)

const ticketsSchema = new Schema({
    seat: {
        type: String, 
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number, 
        min: 0,
        vaule: ticketPrice
    },
})

module.exports = mongoose.model('Ticket', ticketsSchema)
