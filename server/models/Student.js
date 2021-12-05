const {Schema, model} = require('mongoose')

const Student = new Schema({
    studentfullname: {type: String ,required: true},
    studentform: {type: String, required: true},
    studentmarks: {type: Object , ref:'marks'}, 
})

module.exports = model('Student', Student)