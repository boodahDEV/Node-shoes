import { Router } from "express";
import { signin, signup, profile } from "../controllers/auth.controller";

const router: Router = Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/profile", profile)



export default router; 