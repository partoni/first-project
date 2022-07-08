const tokenService = require("../services/tokenService")


module.exports = function(req,res,next){
    try{
        console.log('ACCESS middleware-------'+req.headers.authorization);
        const autorization = req.headers.authorization
        if(!autorization) next(new Error('нет acTokena')) 

        const user=tokenService.validateAccessToken(autorization.split(' ')[1])
        console.log(user);
        if(!user) next(new Error('access просрочен'))
        req.user=user
        next()
    }catch(e){
        console.log(e);
        next(e)
    }
   
}