const express = require('express')
const router  = express.Router()
const cart    = require('../Controllers/cart.js')

router
    .get('/:id_user', cart.getCart)
    .post('/:id_user/:id_course', cart.postCart)
    .delete('/:id_user/:id_course', cart.deleteCart)

module.exports = router