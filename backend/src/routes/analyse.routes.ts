import { Router } from "express";
import { analyse } from "../app/controllers/analyse.controller";

const router = Router();

router.route("/").get(analyse)

export default router;
