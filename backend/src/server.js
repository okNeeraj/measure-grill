"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = require("./app");
// connectDB()
// 	.then(() => {
// 		app.on("Error", (error) => {
// 			console.log("Application Error !!", error);
// 			throw error;
// 		})
// 		app.listen(process.env.PORT || 8000, () => {
// 			console.log(`Server is running at port ${process.env.PORT}`)
// 		})
// 	})
// 	.catch((error) => {
// 		console.log('Database Error !!', error)
// 	})
app_1.app.on("Error", (error) => {
    console.log("Application Error !!", error);
    throw error;
});
app_1.app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});
