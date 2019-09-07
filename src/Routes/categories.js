const express = require('express')
const router  = express.Router()
const categories = require('../Controllers/categories')

router 
    .get('/', categories.getCategories)
    .get('/:id_category', categories.getCategory)

module.exports = router