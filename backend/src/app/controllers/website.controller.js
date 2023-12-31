import asyncHandler from "../../utils/asyncHandler.js";
import { WEBSITE_MOCK } from "../../mock/websiteMock.js";

// import lighthouse from 'lighthouse';
// import config from '../../../lighthouse.config.js';
// const report = await lighthouse('https://google.com/', { port: 8000 }, config);

export const website = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: "ok",
		data: WEBSITE_MOCK
	})
})
