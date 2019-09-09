const express = require('express')

const ratingRouter = require('./rating');
const userRouter = require('./user');
const transactionsRouter = require('./transactions');

const router  = express.Router()

router.use('/rating', ratingRouter);
router.use('/user', userRouter);
router.use('/transactions', transactionsRouter);

const cart     = require('./cart')
const courses = require('./courses')
const wishlist = require('./wishlist')
const categories = require('./categories')

router.use('/cart', cart)
router.use('/courses', courses)
router.use('/wishlist', wishlist)
router.use('/categories', categories)

module.exports = router

