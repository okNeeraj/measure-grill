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

      <div className="bg-white mt-5 p-8 rounded-md">
        <div className="matrix flex gap-16 justify-center items-center">
          <div className="overall-matrix">
            <IndicatorCircle percentage={72} label={'Overall Performance'} size={'lg'} variant={'improvement'} />
          </div>
          <div className="scores">
            <div className="lighthouse-score flex items-center justify-center gap-6">
              <IndicatorCircle percentage={47} label={'Performance'} size={'md'} variant={'poor'} />
              <IndicatorCircle percentage={100} label={'Accessibility'} size={'md'} variant={'good'} />
              <IndicatorCircle percentage={96} label={'Best Practices'} size={'md'} variant={'good'} />
              <IndicatorCircle percentage={87} label={'SEO'} size={'md'} variant={'improvement'} />
            </div>
            <div className="mt-8 px-5 pb-8 border rounded-md">
              <h2 className="text-sm font-bold py-5">Core Web Vitals Assessment</h2>
              <div className="vital-score">
                <IndicatorLine label={'LCP'} />
                <IndicatorLine label={'FID'} />
                <IndicatorLine label={'CLS'} />
                <IndicatorLine label={'FCP'} />
                <IndicatorLine label={'INP'} />
                <IndicatorLine label={'TTFB'} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Analysis
