import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
	origin: process.env.CORS_ORIGIN
}))

app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from "./routes/user.routes.js";
import reportRouter from "./routes/report.routes.js";
import websiteRouter from "./routes/website.routes.js";
app.use("/api/v1/user", userRouter)
app.use("/api/v1/report", reportRouter)
app.use("/api/v1/website", websiteRouter)

export { app }
