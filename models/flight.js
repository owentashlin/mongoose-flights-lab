//models/flight.js

const mongoose = require('mongoose');
const { defaultDate } = require('../controllers/flights');

const Schema = mongoose.Schema;

let date = new Date()
let day = date.getDate()
let month = date.getMonth()+1
let year = date.getFullYear()+1

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
        min: `${month}.${day}.${year}.`
        }
    }  
})

module.exports = mongoose.model('Flight', flightSchema)