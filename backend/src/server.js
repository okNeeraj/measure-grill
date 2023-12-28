import dotenv from "dotenv";
dotenv.config({
	path: '../.env'
});

import connectDB from "./config/database.js";
import { app } from "./app.js"

connectDB()
	.then(() => {
		app.on("Error", (error) => {
			console.log("Application Error !!", error);
			throw error;
		})
		app.listen(process.env.PORT || 8000, () => {
			console.log(`Server is running at port ${process.env.PORT}`)
		})
	})
	.catch((error) => {
		console.log('Database Error !!', error)
	})

