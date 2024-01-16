import { Tabs, TabMenu, TabContent, TabList } from '@components/ui/Tabs'

const AuditSection = () => {
  return (
    <div className="section mt-10 rounded-md">
      <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
        <span className="material-symbols-outlined">google_home_devices</span>
        <span>Diagnose and Performance Auditing</span>
      </h2>
      <div className="audit-diagnos gap-4 px-4 py-8 rounded-md bg-white">
        <Tabs activeTab="performance">
          <TabList>
            <TabMenu value={'performance'} label={'Performance'} />
            <TabMenu value={'best-practices'} label={'Best Practices'} />
            <TabMenu value={'seo'} label={'SEO'} />
          </TabList>

          <TabContent value={'performance'}>
            <h1>Performance</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </TabContent>
          <TabContent value={'best-practices'}>
            <h1>Best Practices</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </TabContent>
          <TabContent value={'seo'}>
            <h1>SEO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </TabContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AuditSection
