const conn = require('../Configs/dbconfig')

const cart = {
    getCart : id_user => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT cart.*, courses.title, courses.image, courses.price FROM cart INNER JOIN courses ON cart.id_course=courses.id WHERE cart.id_user = ?`, [id_user], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postCart : (id_user, id_course) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO cart SET id_user = ? , id_course = ?`, [id_user, id_course], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteCart : (id_user, id_course) => {
        return new Promise((resolve,reject) => {
            conn.query(`DELETE FROM cart WHERE id_user = ? AND id_course = ?`, [id_user, id_course], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}

module.exports = cart