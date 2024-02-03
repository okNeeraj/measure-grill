import IndicatorCircle from '@components/IndicatorCircle'
import { useSelector } from 'react-redux'
import Matrix from './Matrix'

const PerformanceSection = () => {
  const report = useSelector((store: any) => store.lighthouse.report)
  if (!report) return
  const performanceScore = parseFloat((report.categories.performance.score * 100).toFixed(2)) || 'N/A'
  const bestPracticesScore = parseFloat((report.categories['best-practices']?.score * 100).toFixed(2)) || 'N/A'
  const accessibilityScore = parseFloat((report.categories['accessibility']?.score * 100).toFixed(2)) || 'N/A'
  const seoScore = parseFloat((report.categories.seo?.score * 100).toFixed(2)) || 'N/A'
  const pwaScore = parseFloat((report.categories.pwa?.score * 100).toFixed(2)) || 'N/A'

  const matrixFCP = report.audits['first-contentful-paint']
  const matrixLCP = report.audits['largest-contentful-paint']
  const matrixTBT = report.audits['total-blocking-time']
  const matrixCLS = report.audits['cumulative-layout-shift']
  const matrixSI = report.audits['speed-index']
  const matrixFMP = report.audits['first-meaningful-paint']

  return (
    <div className="section mt-10">
      <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
        <span className="material-symbols-outlined">bolt</span>
        <span>Lighthouse Report</span>
      </h2>
      <div className="matrix bg-white rounded-md px-4 py-8 flex gap-16 justify-centerF items-center">
        <div className="w-96 h-72 flex justify-center border border-gray-100 p-3 rounded-md">
          <img src={report.audits['final-screenshot']?.details?.data} alt="VI Desktop" />
        </div>
        {/* <div className="overall-matrix">
          <IndicatorCircle percentage={'B'} label={'MGrill Grade'} size={'lg'} variant={'improvement'} />
        </div> */}
        <div className="scores">
          <div className="lighthouse-score flex items-center justify-center gap-8">
            <IndicatorCircle
              percentage={performanceScore}
              label={'Performance'}
              size={'md'}
              variant={performanceScore <= 49 ? 'poor' : performanceScore <= 89 ? 'improvement' : performanceScore <= 100 ? 'good' : 'nodata'}
            />
            <IndicatorCircle
              percentage={accessibilityScore}
              label={'Accessibility'}
              size={'md'}
              variant={accessibilityScore <= 49 ? 'poor' : accessibilityScore <= 89 ? 'improvement' : accessibilityScore <= 100 ? 'good' : 'nodata'}
            />
            <IndicatorCircle
              percentage={bestPracticesScore}
              label={'Best Practices'}
              size={'md'}
              variant={bestPracticesScore <= 49 ? 'poor' : bestPracticesScore <= 89 ? 'improvement' : bestPracticesScore <= 100 ? 'good' : 'nodata'}
            />
            <IndicatorCircle
              percentage={seoScore}
              label={'SEO'}
              size={'md'}
              variant={seoScore <= 49 ? 'poor' : seoScore <= 89 ? 'improvement' : seoScore <= 100 ? 'good' : 'nodata'}
            />
            <IndicatorCircle
              percentage={pwaScore}
              label={'PWA'}
              size={'md'}
              variant={pwaScore <= 49 ? 'poor' : pwaScore <= 89 ? 'improvement' : pwaScore <= 100 ? 'good' : 'nodata'}
            />
          </div>

          <div className="lh-matrix grid grid-cols-2 gap-x-8 gap-y-2 mt-8">
            <Matrix
              label={matrixFCP.title}
              impact={matrixFCP.score * 100 <= 75 ? 'high' : matrixFCP.score * 100 <= 90 ? 'medium' : 'low'}
              displayValue={matrixFCP.displayValue}
            />
            <Matrix
              label={matrixLCP.title}
              impact={matrixLCP.score * 100 <= 75 ? 'high' : matrixLCP.score * 100 <= 90 ? 'medium' : 'low'}
              displayValue={matrixLCP.displayValue}
            />
            <Matrix
              label={matrixTBT.title}
              impact={matrixTBT.score * 100 <= 75 ? 'high' : matrixTBT.score * 100 <= 90 ? 'medium' : 'low'}
              displayValue={matrixTBT.displayValue}
            />
            <Matrix
              label={matrixCLS.title}
              impact={matrixCLS.score * 100 <= 75 ? 'high' : matrixCLS.score * 100 <= 90 ? 'medium' : 'low'}
              displayValue={matrixCLS.displayValue}
            />
            <Matrix
              label={matrixSI.title}
              impact={matrixSI.score * 100 <= 75 ? 'high' : matrixSI.score * 100 <= 90 ? 'medium' : 'low'}
              displayValue={matrixSI.displayValue}
            />
            <Matrix
              label={matrixFMP.title}
              impact={matrixFMP.score * 100 <= 49 ? 'high' : matrixFMP.score * 100 <= 89 ? 'medium' : 'low'}
              displayValue={matrixFMP.displayValue}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceSection
