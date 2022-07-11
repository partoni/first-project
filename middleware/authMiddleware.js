const tokenService = require("../services/tokenService")


module.exports = function(req,res,next){
    try{
        console.log('ACCESS middleware-------'+req.headers.authorization);
        const autorization = req.headers.authorization
        // if(!autorization) res.status(500).json('нет accessTokena')
        if(!autorization) next(new Error('нет acTokena')) 

        const user=tokenService.validateAccessToken(autorization.split(' ')[1])
        console.log('authMiddleware validateAccessToken----'+user);
        // if(!user) res.status(500).json('access просрочен')
        if(!user) next(new Error('access просрочен'))
        req.user=user
        next()
    }catch(e){
        console.log(e);
        next(e)
    }
   
}