const {Router}=require('express')
// const res = require('express/lib/response')
const tokenService = require('../services/tokenService')


const userRouter = new Router()

const{User} = require('../models/models')


userRouter.post('/reg', async (req,res)=>{
    try{
        // console.log(req.body)
        const {email,password} = req.body
        
        let candidat = await User.findOne(
            {
                where:{
                    email
                }
            }
        )
        console.log('КАНДИДАТ  :'+candidat)
        if(candidat){
            return res.status(500).json('такой пользователь уже есть')
        }
        let user = await User.create({email,password})
        const tokens = tokenService.generateTokens({id:user.id,email:user.email})
        console.log(`tокены - ${tokens}`)
        tokenService.saveToken(user.id,tokens.refreshToken)
        res.cookie('refreshToken',tokens.refreshToken,{httpOnly:true,maxAge: 30 * 24 * 60 * 60 * 1000})
        res.status(200).json({...user,...tokens})
    
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
        console.log('USER  ---'+user.dataValues);
        if(!user){
            return res.status(503).json('нет такого пользователя!')
        }
    
        const tokens = tokenService.generateTokens({id:user.dataValues.id,email:user.dataValues.email})
        console.log(`tокены - ${tokens}`)
        tokenService.saveToken(user.id,tokens.refreshToken)
        res.cookie('refreshToken',tokens.refreshToken,{httpOnly:true,maxAge: 30 * 24 * 60 * 60 * 1000})
        res.status(200).json({...user.dataValues,...tokens})
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
module.exports = userRouter