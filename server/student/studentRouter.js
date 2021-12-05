const Router = require('express')
const router = new Router()
const controller = require('../student/studentController')

router.post('/setstudent' , controller.addNewStudent)
router.post('/updatemark' , controller.updateMark)
router.get('/getstudents', controller.getStudents)

module.exports = router