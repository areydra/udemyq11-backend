const express = require('express');
const ratingRouter = express.Router();

const ratingController = require('../Controllers/rating');

ratingRouter
    .get('/:id_course', ratingController.getRating)
    .post('/:id_user/:id_course', ratingController.postRating)

module.exports = ratingRouter;
