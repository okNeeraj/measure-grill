"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_controller_1 = require("../app/controllers/report.controller");
const router = (0, express_1.Router)();
router.route("/").get(report_controller_1.report);
exports.default = router;
