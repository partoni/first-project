const {Router} = require('express')
const driversRouter = new Router()
const Driver = require('../models/driversModel')

driversRouter.get('/drivers', async(req,res)=>{
try{
    let drivers = await Driver.findAll()
    res.status(200).json(drivers)
}catch(e){
    res.status(503).json(e.message)
}
   
})
driversRouter.post('/addDriver', async(req,res)=>{
try{
    const {name,firstName,phone,auto} = req.body
    let drivers = await Driver.create({name,firstName,phone,auto})
    res.status(200).json(drivers)
}catch(e){
    res.status(503).json(e.message)
}
})
module.exports = driversRouter