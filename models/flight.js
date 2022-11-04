//models/flight.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let defaultDepartDate = `${month + 1}.${day}.${year + 1}.`
let defaultReturnDate = `${month + 1}.${day + 1}.${year + 1}.`

console.log(defaultDepartDate)
console.log(defaultReturnDate)

const destinationSchema = new Schema({
    destination: {
        type: String,
        enum: {
            values: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
            default: 'DEN'
        }
    },
    returnDate: {
        type: Date,
        default: defaultReturnDate
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
        default: defaultDepartDate
        },
    departTime: {
        type: String
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema)