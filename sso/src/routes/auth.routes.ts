import { Router } from "express";
import { authenticate } from "../app/controllers/auth.controller";

const router = Router();

router.route("/").get(authenticate)

export default router;
