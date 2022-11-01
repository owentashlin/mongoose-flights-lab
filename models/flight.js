//models/flight.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let date = new Date()
let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()+1
let defaultDate = `${month}.${day}.${year}.`

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest',  'United']
    },
    airport: {
        type: String,
        enum: {
            values: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
            default: 'DEN',
        },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
        },
    departs: {
        type: Date,
        default: defaultDate
        }
    }  
})

module.exports = mongoose.model('Flight', flightSchema)