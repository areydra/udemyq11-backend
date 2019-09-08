const responses  = require('../Helper/response')
const cartModel = require('../Models/cart')

const cart = {
    getCart : (req, res) => {
        cartModel.getCart(req.params.id_user).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postCart : (req, res) => {
        cartModel.postCart(req.params.id_user, req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteCart : (req, res) => {
        cartModel.deleteCart(req.params.id_user, req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = cart