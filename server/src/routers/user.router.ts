import { Router } from "express";
import { login, register, conversation } from './../controller/user.controller';

const router = Router()

router.get("/convo", conversation)
router.post("/register",register)
router.post("/login",login)

export default router