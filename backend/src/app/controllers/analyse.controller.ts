import asyncHandler from "../../utils/asyncHandler";
import { isValidURL } from "../../utils/isValidUrl";

const getReport = async (websiteUrl: string) => {
	const categories = `category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO`
	const strategy = `strategy=DESKTOP`
	const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${websiteUrl}&${categories}&${strategy}&key=AIzaSyAgzcH7flPzUEssmUV73i_Y2wFpWJOWBCs`
	const response = await fetch(url)
	const result = await response.json()
	return result;
}

export const analyse = asyncHandler(async (req, res) => {
	const { url } = req.query;
	if (!isValidURL(url)) return
	const report = await getReport(url)
	if (!report) return

	res.status(200).json({
		message: "ok",
		lighthouseVersion: '11.4.0',
		data: report
	})
})
