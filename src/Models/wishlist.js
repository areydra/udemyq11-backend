const conn = require('../Configs/dbconfig')

const wishlist = {
    getWishlist : id_user => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT wishlist.*, courses.title FROM wishlist INNER JOIN courses ON wishlist.id_course=courses.id WHERE wishlist.id_user = ?`, [id_user], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postWishlist : (id_user, id_course) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO wishlist SET id_user = ? , id_course = ?`, [id_user, id_course], (err,res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteWishlist : (id_user, id_course) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM wishlist WHERE id_user = ? AND id_course = ?`, [id_user, id_course], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}

module.exports = wishlist