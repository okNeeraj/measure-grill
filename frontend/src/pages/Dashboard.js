import { useEffect, useState } from "react";
import { REPORTS } from "../utils/mocks/reports";

const Dashboard = () => {
  const [websiteUrl, setWebsiteUrl] = useState('https://www.google.com/');
  const [data, setData] = useState(null);

  const getReport = async () => {
    // const categories = `category=ACCESSIBILITY&category=BEST_PRACTICES&category=PERFORMANCE&category=SEO&category=PWA`;
    // const strategy = `strategy=DESKTOP`;
    // const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${websiteUrl}&${categories}&${strategy}&key=AIzaSyAgzcH7flPzUEssmUV73i_Y2wFpWJOWBCs`;
    // const response = await fetch(url);
    // const result = await response.json()

    const result = REPORTS[1];
    const lh = result.lighthouseResult;
    const audits = Object.values(lh.audits);
    console.log(result.id, audits.length);
  }
  const handleWebsiteUrl = (e) => {
    // console.log(e.target.value);
    setWebsiteUrl(e.target.value);
  }

  useEffect(() => {
    getReport();
  }, [websiteUrl]);

  return (
    <>
      <div className="text-center mb-4">
        <h1 className="ff text-[38px] mb-4">Performance Reports</h1>
        <div className="flex justify-center">
          <input type="text" value={websiteUrl} onChange={handleWebsiteUrl} className="border px-4 w-96 focus-within:outline-none" placeholder="Enter website URL" />
          <button
            onClick={getReport}
            className="p-4 bg-blue-700 text-white">Get Report</button>
        </div>
      </div>
    </>

  )
}



export default Dashboard;
