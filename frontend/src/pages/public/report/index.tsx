import CruxSection from './components/CruxSection'
import PerformanceSection from './components/PerformanceSection'
import AuditSection from './components/AuditSection'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setReport } from '@store/reportSlice'

const Report = () => {
  const dispatch = useDispatch()
  const fetchReport = async () => {
    const res = await fetch('http://localhost:8000/api/v1/report/')
    const result = await res.json()
    dispatch(setReport(result.data))
    // console.log(result)
  }

  useEffect(() => {
    fetchReport()
  }, [])

  const report = useSelector((store: any) => store.lighthouse.report)
  if (!report) return

  const date = new Date(report.fetchTime)
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' }
  const readableDate = date.toLocaleString('en-US', options)

  return (
    <div className="p-4">
      <div className="border-l-4 border-gray-300 pl-4">
        <h1 className="text-xl font-bold">Report Generated At {readableDate}</h1>
        <div className="audit-url text-gray-500">{report.finalUrl}</div>
      </div>
      <CruxSection />
      <PerformanceSection />
      <AuditSection />
    </div>
  )
}

export default Report
