"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const website_controller_1 = require("../app/controllers/website.controller");
const router = (0, express_1.Router)();
router.route("/").get(website_controller_1.website);
router.route("/add").post(website_controller_1.create);
exports.default = router;
