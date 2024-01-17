import CruxSection from './components/CruxSection'
import PerformanceSection from './components/PerformanceSection'
import AuditSection from './components/AuditSection'

const Analysis = () => {
  return (
    <>
      <div className="border-l-4 border-gray-300 pl-4">
        <h1 className="text-2xl">
          Report Generated At December 23, 2023, 08:43:40
        </h1>
        <div className="audit-url text-gray-500">
          https://okneeraj.github.io/netflix-gpt/
        </div>
      </div>

      <CruxSection />
      {/* <PerformanceSection /> */}
      <AuditSection />
    </>
  )
}

export default Analysis
