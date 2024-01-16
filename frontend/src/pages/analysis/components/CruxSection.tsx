import IndicatorLine from '@components/IndicatorLine'

const CruxSection = () => {
  return (
    <div className="section mt-10 rounded-md">
      <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
        <span className="material-symbols-outlined">google_home_devices</span>
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
  )
}

export default CruxSection
