"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../app/controllers/user.controller");
const router = (0, express_1.Router)();
router.route("/register").get(user_controller_1.registerUser);
exports.default = router;
