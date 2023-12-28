import dotenv from "dotenv";
dotenv.config({
	path: '../.env'
});

import connectDB from "./config/database.js";

connectDB();
