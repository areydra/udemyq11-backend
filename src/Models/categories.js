const conn = require('../Configs/dbconfig')

const categories = {
    getCategories : () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM categories`, (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getCategory : id_category => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM categories WHERE id=?`, [id_category], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}   

module.exports = categories