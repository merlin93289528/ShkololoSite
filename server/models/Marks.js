const {Schema, model} = require('mongoose')

const Marks = new Schema({
    MathMarks: {type: Array},
    UkrMarks: {type: Array},
    GeografMarks: {type: Array},
})

module.exports = model('Marks', Marks)