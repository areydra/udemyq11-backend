const conn = require('../Configs/dbconfig')

const userModel = {

    getUser: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM users WHERE id=?', id_user, (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    postUser: (body) => {
        return new Promise((resolve,reject) => {
            const id_level = body.id_level;
            const name = body.name;
            const email = body.email;
            const password = body.password;
            const image = body.image;

            conn.query('INSERT INTO users (id_level, name, email, password, image) VALUES (?,?,?,?,?)', [id_level, name, email,password,image], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    patchUser: (id_user, body) => {
        return new Promise((resolve,reject) => {
            const id_level = body.id_level;
            const name = body.name;
            const email = body.email;
            const password = body.password;
            const image = body.image;

            conn.query('UPDATE users SET id_level=?, name=?, email=?, password=?, image=? WHERE id=?', [id_level, name, email,password,image, id_user], (err, result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },

    deleteUser: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM users WHERE id=?', id_user, (err,result) => {
                if(!err){
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }

}

module.exports = userModel;