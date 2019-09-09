const conn = require('../Configs/dbconfig');

const transactionsModel = {

    getTransaction: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT transactions.id as id_transaction, transactions.date, users.name, users.email, users.image FROM transactions JOIN users ON transactions.id_user = users.id WHERE transactions.id_user=?', id_user, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getEnrollment: (id_transaction) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT courses.id as id_course, courses.title, courses.image, courses.price, courses.id_instructor FROM enrollment JOIN courses ON enrollment.id_course = courses.id WHERE enrollment.id_transaction=?', id_transaction, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },


    postTransaction: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO transactions (id_user) VALUES (?)', id_user, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    getLastID: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT MAX(id) FROM transactions', (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    postEnrollent: (id_transaction, id_course) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO enrollment (id_transaction, id_course) VALUES (?,?)', [id_transaction, id_course], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}

module.exports = transactionsModel;
