import express from 'express'

const PORT = 5000;
const app = express()

app.get('/',(res, req) => {
    res.status(200).json('сервер працює')
})
app.listen(PORT, ()=> console.log('SERVER WORKING'))