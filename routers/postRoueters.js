import { Post } from "../models/models"
import { Router } from "express"
const router = new Router()

router.get('/allposts',async (req,res)=>{
    try {
        const {id} = req.params
        let posts = await Post.findAll({where:{i}})
        res.json(posts)
    } catch (error) {
        
    }
})