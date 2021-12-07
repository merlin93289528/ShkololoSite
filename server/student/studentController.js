const Student = require('../models/Student')
const Marks = require('../models/Marks')


class studentController {
    async addNewStudent(req, res) {
        try {
            const { studentfullname, studentform } = req.body
            if (!studentfullname) {
                return res.status(400).json({ message: "поле 'ім'я школяра' є обов'язковим" })
            }
            if (!studentform) {
                return res.status(400).json({ message: "поле 'клас' є обов'язковим" })
            }
            const studentMarks = new Marks()
            const student = new Student({ studentfullname, studentform, studentmarks: studentMarks })
            await student.save()
            return res.json(student)
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