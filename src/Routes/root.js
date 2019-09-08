const express = require('express')
const router  = express.Router()

const cart     = require('./cart')
const courses = require('./courses')
const wishlist = require('./wishlist')
const categories = require('./categories')

router.use('/cart', cart)
router.use('/courses', courses)
router.use('/wishlist', wishlist)
router.use('/categories', categories)

module.exports = router