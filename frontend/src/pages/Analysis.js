// import { useState } from "react";
import IndicatorCircle from "../components/IndicatorCircle"
import IndicatorLine from "../components/IndicatorLine"

const Analysis = () => {
  // const [percentage, setPercentage] = useState(50);
  return (
    <div className="">
      <div className="border-l-4 border-gray-300 pl-4">
        <h1 className="text-2xl">Report Generated At December 23, 2023, 08:43:40</h1>
        <div className="audit-url text-gray-500">https://okneeraj.github.io/netflix-gpt/</div>
      </div>

      <div className="section mt-10 rounded-md">
        <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
          <span class="material-symbols-outlined">google_home_devices</span>
          <span>CRuX Report</span>
        </h2>
        <div className="vital-score gap-4">
          <IndicatorLine label={'LCP'} score={2500} scoreUnit={'ms'} />
          <IndicatorLine label={'FID'} score={14} scoreUnit={'ms'} />
          <IndicatorLine label={'CLS'} score={0.02} scoreUnit={'ms'} />
          <IndicatorLine label={'FCP'} score={2300} scoreUnit={'ms'} />
          <IndicatorLine label={'INP'} score={125} scoreUnit={'ms'} />
          <IndicatorLine label={'TTFB'} score={1700} scoreUnit={'ms'} />
        </div>
      </div>

      <div className="section mt-10">
        <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
          <span class="material-symbols-outlined">bolt</span>
          <span>Lighthouse Report</span>
        </h2>
        <div className="matrix bg-white rounded-md px-4 py-8 flex gap-16 justify-centerF items-center">
          <div className="w-96 h-72 flex justify-center border border-gray-100 p-3 rounded-md">
            {/* <img src="https://foo-software-screenshots.s3.amazonaws.com/final-screenshot-1704112085427.jpg" alt="VI Desktop" /> */}
            <img src="https://foo-software-screenshots.s3.amazonaws.com/final-screenshot-1704112114120.jpg" alt="VI Mobile" />
          </div>
          <div className="overall-matrix">
            <IndicatorCircle percentage={72} label={'Overall Performance'} size={'lg'} variant={'improvement'} />
          </div>
          <div className="scores">
            <div className="lighthouse-score flex items-center justify-center gap-6">
              <IndicatorCircle percentage={47} label={'Performance'} size={'md'} variant={'poor'} />
              <IndicatorCircle percentage={100} label={'Accessibility'} size={'md'} variant={'good'} />
              <IndicatorCircle percentage={96} label={'Best Practices'} size={'md'} variant={'good'} />
              <IndicatorCircle percentage={87} label={'SEO'} size={'md'} variant={'improvement'} />
              <IndicatorCircle percentage={'N/A'} label={'PWA'} size={'md'} variant={'nodata'} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Analysis
