import asyncHandler from "../../utils/asyncHandler.js";
import { WEBSITE_MOCK } from "../../mock/websiteMock.js";

export const website = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: "ok",
		data: WEBSITE_MOCK
	})
})
