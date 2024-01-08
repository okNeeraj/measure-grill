import { Router } from "express";
import { website } from "../app/controllers/website.controller.js";

const router = Router();

router.route("/").get(website)

export default router;
