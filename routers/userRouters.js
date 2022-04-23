const {Router}=require('express')



const userRouter = new Router()
// const sequelize = require('../db')
const{User} = require('../models/models')


userRouter.post('/reg', async (req,res)=>{
    try{
        console.log(req.body)
        const {email,password} = req.body
        
        let user = await User.findOne(
            {
                where:{
                    email
                }
            }
        )
         
        if(user){
            return res.status(500).json('такой пользователь уже есть')
        }
        await User.create({email,password})
        res.status(200).json('Пользователь зарегистрирован')
    
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
userRouter.post('/auth',async()=>{
    try{
    // const drivers = await db.query('SELECT*FROM users')
    // console.log(drivers.rows)
    // res.send(drivers.rows)
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
module.exports = userRouter