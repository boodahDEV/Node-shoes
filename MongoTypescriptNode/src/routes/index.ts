import { Router,Request,Response } from "express";
import { indexController } from "../controllers/indexController";

const router:Router = Router();

router.get('/', indexController.index)

router.get('/books/add', (req:Request,res:Response)=>{
    res.send('Form')
})


export default router;