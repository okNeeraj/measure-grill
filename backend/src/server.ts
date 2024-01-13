import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./config/database";
import { app } from "./app"

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


app.on("Error", (error) => {
	console.log("Application Error !!", error);
	throw error;
})
app.listen(process.env.PORT || 8000, () => {
	console.log(`Server is running at port ${process.env.PORT}`)
})



// import express from 'express';
// import { REPORT_STATIC } from './mock/reportStatic';

// const app = express();
// const port = 8000;

// app.get('/', (req, res) => {
// 	res.send(REPORT_STATIC[1].lighthouseResult.audits);
// });

// app.listen(port, () => {
// 	console.log(`Server is running at http://localhost:${port}`);
// });
