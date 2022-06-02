const {Router} = require('express')
const router = new Router()
const userRouter = require('./userRouters')
const driversRouter = require('./driversRouter')
const authMiddleware = require('../middleware/authMiddleware')
// const dispetchersRouter = require('./dispetchersRouters')

router.use('/user',userRouter)
router.use('/drivers',authMiddleware,driversRouter)
// router.use('/dispetchers',dispetchersRouter)

module.exports = router
