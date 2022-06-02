require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

const db = require('./db')
// const bot = require('./tgbot/tgbot')

const config = require('config')
const  router = require('./routers/router')
const PORT = config.get('port')
const cors = require('cors')
const {User}=require('./models/models')

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))

app.use('/api',router)

const startApp= async()=>{
    try {
        await db.authenticate()
        await db.sync()
       
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()