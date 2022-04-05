const {Router}=require('express')
const router = new Router()
const db = require('./db')


router.get('/auth', async (req,res)=>{
    const drivers = await db.query('SELECT*FROM users')
    console.log(drivers.rows)
    res.send(drivers.rows)
})
module.exports = router