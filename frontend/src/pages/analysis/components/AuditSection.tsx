import { useSelector } from 'react-redux'
import { Tabs, TabMenu, TabContent, TabList } from '@components/ui/Tabs'
import useAudit from '@hooks/useAudit'
import AuditsFilter from './AuditsFilter'
import { useEffect, useState } from 'react'

const AuditSection = () => {
  const report = useSelector((store: any) => store.lighthouse.report)
  const [selectedMatrix, setSelectedMatrix] = useState('all')

  const allPerformanceCategory = report?.categories?.performance?.auditRefs.map((auditRef) => auditRef.id) || []
  const [performanceCategory, setPerformanceCategory] = useState(allPerformanceCategory)
  const auditsOfPerformance = useAudit(performanceCategory)

  const accessibilityCategory = report?.categories['accessibility']?.auditRefs.map((auditRef) => auditRef.id) || []
  const auditsOfAccessibility = useAudit(accessibilityCategory)

  const bestPracticesCategory = report?.categories['best-practices']?.auditRefs.map((auditRef) => auditRef.id) || []
  const auditsOfBestPractices = useAudit(bestPracticesCategory)

  const seoCategory = report?.categories?.seo?.auditRefs.map((auditRef) => auditRef.id) || []
  const auditsOfSeo = useAudit(seoCategory)

  const pwaCategory = report?.categories?.pwa?.auditRefs.map((auditRef) => auditRef.id) || []
  const auditsOfPwa = useAudit(pwaCategory)

  const matrixCategory = report?.categories?.performance?.auditRefs.filter((audit) => audit.group === 'metrics' && audit.relevantAudits).map((audit) => audit)

  const handleMatrixFilter = (matrixType) => {
    if (matrixType === 'all') {
      setPerformanceCategory(allPerformanceCategory)
      setSelectedMatrix('all')
    } else {
      setPerformanceCategory(matrixType?.relevantAudits)
      setSelectedMatrix(matrixType.id)
    }
  }

  if (!report) return

  return (
    <div className="section mt-10 rounded-md">
      <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
        <span className="material-symbols-outlined">google_home_devices</span>
        <span>Diagnose performance issues</span>
      </h2>
      <div className="audit-diagnos">
        <Tabs activeTab="performance">
          <TabList>
            <TabMenu value={'performance'} label={'Performance'} />
            <TabMenu value={'accessibility'} label={'Accessibility'} />
            <TabMenu value={'best-practices'} label={'Best Practices'} />
            <TabMenu value={'seo'} label={'SEO'} />
            <TabMenu value={'pwa'} label={'PWA'} />
          </TabList>
          <div className="bg-white p-4 rounded-md">
            <TabContent value={'performance'}>
              <div className="audit-filter flex gap-2 flex-col mb-4">
                <div className="filter-text text-xs text-gray-500">Show audits relevant to - </div>
                <div className="filter-list flex gap-2">
                  <label
                    className={`rounded-sm py-1 px-4 text-xs cursor-pointer border ${selectedMatrix === 'all' ? 'bg-violet-800 border-violet-800 text-white' : ''}`}
                    onClick={() => handleMatrixFilter('all')}
                  >
                    All
                  </label>
                  {matrixCategory.map((matrix) => (
                    <label
                      key={matrix.id}
                      className={`rounded-sm py-1 px-4 text-xs cursor-pointer border ${selectedMatrix === matrix.id ? 'bg-violet-800 border-violet-800 text-white' : ''}`}
                      onClick={() => handleMatrixFilter(matrix)}
                    >
                      {matrix?.acronym}
                    </label>
                  ))}
                </div>
              </div>
              {auditsOfPerformance && <AuditsFilter audits={auditsOfPerformance} />}
            </TabContent>

            <TabContent value={'accessibility'}>
              <AuditsFilter audits={auditsOfAccessibility} />
            </TabContent>

            <TabContent value={'best-practices'}>
              <AuditsFilter audits={auditsOfBestPractices} />
            </TabContent>

            <TabContent value={'seo'}>
              <AuditsFilter audits={auditsOfSeo} />
            </TabContent>

            <TabContent value={'pwa'}>
              <AuditsFilter audits={auditsOfPwa} />
            </TabContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default AuditSection
