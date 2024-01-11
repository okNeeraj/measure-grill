import { useState } from "react";

const AuditUrl = () => {
	const [websiteUrl, setWebsiteUrl] = useState(null);
	const getReport = async () => {
		const categories = `category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&category=PWA`;
		const strategy = `strategy=DESKTOP`;
		const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${websiteUrl}&${categories}&${strategy}&key=AIzaSyAgzcH7flPzUEssmUV73i_Y2wFpWJOWBCs`;
		const response = await fetch(url);
		const result = await response.json();
		console.log(result)
	}
	const handleWebsiteUrl = (e) => {
		setWebsiteUrl(e.target.value);
	}

	return (
		<>
			<div className="text-center">
				<div className="flex justify-center">
					<input type="text" value={websiteUrl} onChange={handleWebsiteUrl} className="border px-4 py-2 w-96 rounded-sm focus-within:outline-none" placeholder="Enter website URL" />
					<button
						onClick={getReport}
						className=" bg-violet-800 px-4 mx-1 rounded-sm border-none text-white text-sm">Get Report</button>
				</div>
			</div>
		</>
	)
}



export default AuditUrl;
