"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analyse_controller_1 = require("../app/controllers/analyse.controller");
const router = (0, express_1.Router)();
router.route("/").get(analyse_controller_1.analyse);
exports.default = router;
