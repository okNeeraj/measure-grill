import { Router } from "express";
import { website } from "../app/controllers/website.controller";

const router = Router();

router.route("/").get(website)

export default router;
