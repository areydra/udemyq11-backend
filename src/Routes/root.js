const express = require('express')

const ratingRouter = require('./rating');
const userRouter = require('./user');
const transactionsRouter = require('./transactions');

const router  = express.Router()


router.use('/rating', ratingRouter);
router.use('/user', userRouter);
router.use('/transactions', transactionsRouter);

module.exports = router;