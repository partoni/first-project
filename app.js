const express = require('express')
const app = express()
const config = require('config')
const  router = require('./routers')
const PORT = config.get('port')
const cors = require('cors')
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
app.use('/api',router)
const startApp= ()=>{

    app.listen(PORT,()=>{
        
        console.log(`server is working on the ${PORT}`)
    })
}
startApp()