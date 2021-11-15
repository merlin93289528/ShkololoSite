const express = require('express')
const PORT = 5000
const app = express()
const mongoose = require('mongoose')

const start = async() => {
    try{
        await
        app.listen(PORT, ()=>console.log(`server run in ${PORT}`))
    }
    catch(e){
        console.log(e)
    }
}
start()