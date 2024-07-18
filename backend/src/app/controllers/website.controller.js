"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.website = void 0;
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const websiteMock_1 = require("../../mock/websiteMock");
// import lighthouse from 'lighthouse';
// import config from '../../../lighthouse.config.js';
// const report = await lighthouse('https://google.com/', { port: 8000 }, config);
exports.website = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        message: "ok",
        data: websiteMock_1.WEBSITE_MOCK
    });
}));
exports.create = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    res.status(200).json({
        message: "ok",
        data: req.body
    });
}));
