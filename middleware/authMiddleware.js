const tokenService = require("../services/tokenService")


module.exports = function(req,res,next){
    try{
        console.log('ACCESS-------'+req.headers.authorization);
        const autorization = req.headers.authorization
        if(!autorization)throw new Error('нет acTokena')

        const user=tokenService.validateAccessToken(autorization.split(' ')[1])
        if(!user)throw new Error('access просрочен')
        req.user=user
        next()
    }catch(e){
        next(e)
    }
   
}