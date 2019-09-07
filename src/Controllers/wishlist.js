const responses = require('../Middleware/response')
const wishlistModel = require('../Models/wishlist')

const wishlist = {
    getWishlist : (req, res) => {
        wishlistModel.getWishlist(req.params.id_user).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postWishlist : (req, res) => {
        wishlistModel.postWishlist(req.params.id_user, req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteWishlist : (req, res) => {
        wishlistModel.deleteWishlist(req.params.id_user, req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = wishlist