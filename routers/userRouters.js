const {Router}=require('express')
// const res = require('express/lib/response')
const tokenService = require('../services/tokenService')
const bcript = require('bcrypt')

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
        const hashPass = await bcript.hash(password,3)
        console.log('hashPass--------'+hashPass);
        let user = await User.create({email,password:hashPass})
        const tokens = tokenService.generateTokens({id:user.id,email:user.email})
        console.log(`tокены - ${tokens}`)
        tokenService.saveToken(user.id,tokens.refreshToken)
        res.cookie('refreshToken',tokens.refreshToken,{httpOnly:true,maxAge: 30 * 24 * 60 * 60 * 1000})
        res.status(200).json({...user.dataValues,...tokens})
    
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
// userRouter.post('/refresh', async(req,res)=>{
//         const user=req.user
//         const tokens = tokenService.generateTokens({id:user.id,email:user.email})
//         console.log(`tокены - ${tokens}`)
//         tokenService.saveToken(user.id,tokens.refreshToken)
//         res.cookie('refreshToken',tokens.refreshToken,{httpOnly:true,maxAge: 30 * 24 * 60 * 60 * 1000})
//         res.status(200).json({...user.dataValues,...tokens})
// })
userRouter.get('/logout', async(req,res)=>{
    try {
    const {refreshToken}=req.cookies
    const user = tokenService.validateRefreshToken(refreshToken)
    tokenService.removeToken(refreshToken)
    res.clearCookie('refreshToken')
    res.status(200).json('cookie deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}
)
userRouter.get('/refresh', async(req,res)=>{
   try{ const {refreshToken}=req.cookies
    const user = tokenService.validateRefreshToken(refreshToken)
    console.log(`validateRefreshToken-----${Object.entries(user)}`);
    let candidat = await User.findOne(
        {
            where:{
                email:user.email
            }
        }
    )
        if(!candidat){
           res.status(501).json('такого пользователя уже нет')
        }
        const newTokens = tokenService.generateTokens({id:candidat.dataValues.id,email:candidat.dataValues.email})
        tokenService.saveToken(user.id,newTokens.refreshToken)
        res.cookie('refreshToken',newTokens.refreshToken,{httpOnly:true,maxAge: 30 * 24 * 60 * 60 * 1000})
        res.status(200).json({...candidat.dataValues,accessToken:newTokens.accessToken})}
        catch(e){
            res.status(505).json(e.message)
        }
})

userRouter.post('/auth', async(req,res)=>{
    try{
        const {email,password} = req.body
        console.log(`auth email and password------`+email,password);
        let user = await User.findOne(
            {
                where:{
                    email
                }
            }
        )
        
        if(!user){
            return res.status(503).json('нет такого пользователя!')
        }
        console.log('USER  ---'+user.dataValues.id);
        if(!bcript.compare(user.dataValues.password===password))res.status(503).json('пароль неверный')
        const tokens = tokenService.generateTokens({id:user.dataValues.id,email})
        console.log(`tокены - ${tokens}`)
        tokenService.saveToken(user.dataValues.id,tokens.refreshToken)
        res.cookie('refreshToken',tokens.refreshToken,{httpOnly:true,maxAge: 30 * 24 * 60 * 60 * 1000})
        res.status(200).json({...user.dataValues,...tokens})
    }
    catch(e){
        res.status(503).json(e.message)
    }
})
module.exports = userRouter