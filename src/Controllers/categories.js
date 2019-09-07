const responses       = require('../Middleware/response')
const categoriesModel = require('../Models/categories')

const categories = {
    getCategories : (req, res) => {
        categoriesModel.getCategories().then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCategory : (req, res) => {
        categoriesModel.getCategory(req.params.id_category).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = categories