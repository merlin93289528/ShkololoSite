const Student = require('../models/Student')
const Marks = require('../models/Marks')


class studentController {
    async addNewStudent(req, res) {
        try {
            const { studentfullname, studentform, mathmarks, ukrmarks, geografmarks } = req.body
            const studentMarks = new Marks({ MathMarks: JSON.parse(mathmarks), UkrMarks: JSON.parse(ukrmarks), GeografMarks: JSON.parse(geografmarks) })
            const student = new Student({ studentfullname, studentform, studentmarks: studentMarks })
            await student.save()
            return res.json({ message: 'Студент був доданий' })
        }
        catch (e) {
            console.log(e)

        }
    }
    async updateMark(req, res) {
        try {
            const { newMark, user_id, newMarkId, studSubject } = req.body
            const findedStudent = await Student.findById(user_id)
            const findedStudentMarks = { ...findedStudent.studentmarks }

            if (studSubject == 'Математика') {
                if (!newMark) {
                    findedStudentMarks.MathMarks[JSON.parse(newMarkId) - 1] = null
                    await Student.findByIdAndUpdate(user_id, { studentmarks: findedStudentMarks })
                }
                else {
                    findedStudentMarks.MathMarks[JSON.parse(newMarkId) - 1] = JSON.parse(newMark)
                    await Student.findByIdAndUpdate(user_id, { studentmarks: findedStudentMarks })
                }
            }
            else if (studSubject == 'Українська мова') {
                if (!newMark) {
                    findedStudentMarks.UkrMarks[JSON.parse(newMarkId) - 1] = null
                    await Student.findByIdAndUpdate(user_id, { studentmarks: findedStudentMarks })

                }
                else {
                    findedStudentMarks.UkrMarks[JSON.parse(newMarkId) - 1] = JSON.parse(newMark)
                    await Student.findByIdAndUpdate(user_id, { studentmarks: findedStudentMarks })
                }
            }
            else {

                if (!newMark) {
                    findedStudentMarks.GeografMarks[JSON.parse(newMarkId) - 1] = JSON.parse(newMark) = null
                    await Student.findByIdAndUpdate(user_id, { studentmarks: findedStudentMarks })

                }
                else {
                    findedStudentMarks.GeografMarks[JSON.parse(newMarkId) - 1] = JSON.parse(newMark)
                    await Student.findByIdAndUpdate(user_id, { studentmarks: findedStudentMarks })
                }
            }
            return res.json(findedStudent)
        } catch (e) {
            console.log(e)
        }
    }
    async getStudents(req, res) {
        try {
            const students = await Student.find()
            res.json(students)
        }
        catch (e) {
            console.log(e)
        }
    }
}

module.exports = new studentController()