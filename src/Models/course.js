const conn = require('../Configs/dbconfig')

const course = {
    searchCourses: search => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses WHERE title LIKE ?', ['%' + search + '%'], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getCourses: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses', (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getCoursesPage: (offset, limit) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses LIMIT ?,?', [parseInt(offset),parseInt(limit)] , (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getCourseDetails: id_course => {
        return new Promise((resolve, reject) => {

            conn.query('SELECT courses.*, users.name FROM courses INNER JOIN users ON courses.id_instructor=users.id WHERE courses.id = ?', [id_course], (err, res) => {

                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getSection: id_course => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM section WHERE id_course=?', [id_course], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getLecture: id_section => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM lectures WHERE id_section=?', [id_section], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    getCourseInstructor: id_instructor => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM courses WHERE id_instructor = ?', [id_instructor], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    postCourse: req => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO courses SET ?', [req], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    patchCourse: (req, id_course) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE courses SET ? WHERE id=?', [req, id_course], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    },

    deleteCourse: id_course => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM courses WHERE id=?', [id_course], (err, res) => {
                (!err) ? resolve(res): reject(err)
            })
        })
    }
}

module.exports = course