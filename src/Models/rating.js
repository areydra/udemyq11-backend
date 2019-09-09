const conn = require('../Configs/dbconfig');

const ratingModel = {

    getRating: (id_course) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM rating WHERE id_course =?' , id_course, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    postRating: (params,body) => {
        const id_user = params.id_user;
        const id_course = params.id_course;
        const rating = body.rating;
        const comment = body.comment;

        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO rating (id_user, id_course, rating, comment) VALUES (?,?,?,?)', [id_user, id_course, rating, comment], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            }) 
        })
    }

}

module.exports = ratingModel;