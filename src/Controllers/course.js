const responses = require('../Helper/response')
const courseModel = require('../Models/course')

const course = {
    searchCourse : (req, res) => {
        courseModel.searchCourses(req.params.name_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCourses : (req, res) => {
        courseModel.getCourses().then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCourseDetails : (req, res) => {
        courseModel.getCourseDetails(req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCourseInstructor : (req, res) => {
        courseModel.getCourseInstructor(req.params.id_instructor).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postCourse : (req, res) => {
        courseModel.postCourse(req.body).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    patchCourse : (req, res) => {
        courseModel.patchCourse(req.body, req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => { 
            console.log(err)
        })
    },

    deleteCourse : (req, res) => {
        courseModel.deleteCourse(req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = course