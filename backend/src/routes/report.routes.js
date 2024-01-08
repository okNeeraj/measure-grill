import { Router } from "express";
import { report } from "../app/controllers/report.controller.js";

const router = Router();

router.route("/").get(report)

export default router;
