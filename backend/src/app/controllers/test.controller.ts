import asyncHandler from "../../utils/asyncHandler";

export const analyse = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: "APIs are working fine...",
	})
})
