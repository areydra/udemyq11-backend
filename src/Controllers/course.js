const responses = require('../Helper/response')
const courseModel = require('../Models/course')

const course = {
    searchCourse: (req, res) => {
        courseModel.searchCourses(req.params.name_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCourses: (req, res) => {
        courseModel.getCourses().then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCoursesPage: (req, res) => {
        courseModel.getCoursesPage(req.params.offset, req.params.limit).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    getCourseDetails: async (req, res) => {
        courseModel.getCourseDetails(req.params.id_course).then(responseCourse => {
            courseModel.getSection(responseCourse[0].id).then(async responseSection => {
                // membuat responseCourse kemudian spread responCourse index[0], lalu masukan key baru berisi lectures: dengan value lectures section
                responseCourse = {
                    ...responseCourse[0],
                    'section': responseSection
                }

                //mengambil data lecture berdasarkan index dari section 
                for (let index = 0; index < responseSection.length; index++) {
                    //tunggu hingga proses getLecture selesai kemudian jalankan selanjutnya
                    await courseModel.getLecture(responseCourse.section[index].id).then(responseLecture => {
                        responseCourse.section[index] = {
                            ...responseCourse.section[index],
                            'lecture': responseLecture
                        }
                    })
                }
                responses.success(res, 200, responseCourse)
            })
        }).catch(err => {
            console.log(err)
        })
    },

    getCourseInstructor: (req, res) => {
        courseModel.getCourseInstructor(req.params.id_instructor).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    postCourse: (req, res) => {
        courseModel.postCourse(req.body).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    patchCourse: (req, res) => {
        courseModel.patchCourse(req.body, req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteCourse: (req, res) => {
        courseModel.deleteCourse(req.params.id_course).then(response => {
            responses.success(res, 200, response)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = course