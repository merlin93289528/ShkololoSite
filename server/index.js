const express = require('express')
const PORT = 5000
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const authRouter = require('./auth/authRouter')
const studentRouter = require('./student/studentRouter')
app.use(cors())
app.use(express.json())
app.use('/auth' , authRouter)
app.use('/student', studentRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://root:1234@cluster0.woe2n.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server run in ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}
start()