import asyncHandler from "../../utils/asyncHandler";

export const authenticate = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: "ok",
		data: 'Authenticated'
	})
})
