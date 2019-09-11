const express = require('express')
const router = express.Router()
const course = require('../Controllers/course')

router
    .get('/', course.getCourses)
    .get('/:offset/:limit', course.getCoursesPage)
    .get('/:id_course', course.getCourseDetails)
    .get('/search/:name_course', course.searchCourse)
    .get('/instructor/:id_instructor', course.getCourseInstructor)
    .post('/', course.postCourse)
    .patch('/:id_course', course.patchCourse)
    .delete('/:id_course', course.deleteCourse)

module.exports = router