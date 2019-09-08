const express = require('express');
const transactionsRouter = express.Router();

const transactionsController = require('../Controllers/transactions');

transactionsRouter
    .get('/:id_user', transactionsController.getTransaction)
    .post('/:id_user', transactionsController.postTransaction)

module.exports = transactionsRouter;