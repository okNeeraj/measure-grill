import { Router } from "express";
import { registerUser } from "../app/controllers/user.controller.js";

const router = Router();

router.route("/register").get(registerUser)

export default router;
