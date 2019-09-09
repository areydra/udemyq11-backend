const conn = require('../Configs/dbconfig')

const course = {
    searchCourses : search => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses WHERE title LIKE ?', ['%'+search+'%'], (err,res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getCourses : () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses', (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getCourseDetails : id_course => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT courses.*, section.title AS section, lectures.title AS lectures, lectures.duration FROM courses INNER JOIN section ON courses.id=section.id_course INNER JOIN lectures ON section.id=lectures.id_section WHERE courses.id=?', [id_course], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    getCourseInstructor : id_instructor => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses WHERE id_instructor = ?', [id_instructor], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    postCourse : req => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO courses SET ?', [req], (err,res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    patchCourse: (req, id_course) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE courses SET ? WHERE id=?', [req, id_course], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    },

    deleteCourse: id_course => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM courses WHERE id=?', [id_course], (err, res) => {
                (!err) ? resolve(res) : reject(err)
            })
        })
    }
}

module.exports = course