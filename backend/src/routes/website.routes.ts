import { Router } from "express";
import { create, website } from "../app/controllers/website.controller";

const router = Router();

router.route("/").get(website)
router.route("/add").post(create)

export default router;
