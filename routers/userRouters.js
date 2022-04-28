const {Router}=require('express')
const res = require('express/lib/response')



const userRouter = new Router()
// const sequelize = require('../db')
const{User} = require('../models/models')


userRouter.post('/reg', async (req,res)=>{
    try{
        console.log(req.body)
        const {email,password} = req.body
        
        let candidat = await User.findOne(
            {
                where:{
                    email
                }
            }
        )
        console.log(candidat)
        if(candidat){
            return res.status(500).json('такой пользователь уже есть')
        }
        let user = await User.create({email,password})
        res.status(200).json(user)
    
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
userRouter.post('/auth', async(req,res)=>{
    try{
        const {email,password} = req.body
        console.log(email,password);
        let user = await User.findOne(
            {
                where:{
                    email
                }
            }
        )
        console.log(user);
        if(!user){
            return res.status(503).json('нет такого пользователя!')
        }
    
         res.status(200).json(user)
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
module.exports = userRouter