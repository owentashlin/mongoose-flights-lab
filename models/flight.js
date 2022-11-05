//models/flight.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    destination: {
        type: String,
        enum: {
            values: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
            default: 'DEN'
        }
    },
    returnDate: {
        type: Date
        },
    returnTime: {
        type: String
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest',  'United']
    },
    airport: {
        type: String,
        enum: {
            values: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
            default: 'DEN'
        }
    },    
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
        },
    departDate: {
        type: Date,
        },
    departTime: {
        type: String
    },
    destinations: [destinationSchema],
    tickets: [
        {type: Schema.Types.ObjectId, ref: 'Ticket'
    }]
})

module.exports = mongoose.model('Flight', flightSchema)