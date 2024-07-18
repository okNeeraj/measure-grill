import { Router } from "express";
import { test } from "../app/controllers/test.controller";

const router = Router();

router.route("/test").get(test)

export default router;
