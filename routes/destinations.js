// routes/destinations.js

let express = require('express');
let router = express.Router();

const destinationsCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationsCtrl.create)

// router.post('/movies/:id/reviews', reviewsCtrl.create)

module.exports = router