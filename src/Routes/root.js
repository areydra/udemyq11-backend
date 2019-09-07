const express = require('express')
const router  = express.Router()

const cart     = require('./cart')
const wishlist = require('./wishlist')
const categories = require('./categories')

router.use('/cart', cart)
router.use('/wishlist', wishlist)
router.use('/categories', categories)

module.exports = router