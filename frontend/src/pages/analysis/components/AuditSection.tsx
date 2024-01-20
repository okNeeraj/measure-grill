import { Accordion, AccordionContent } from '@components/ui/Accordion'
import { Tabs, TabMenu, TabContent, TabList } from '@components/ui/Tabs'

const AuditSection = () => {
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
                  <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border bg-violet-800 border-violet-800 text-white">
                    All
                  </label>
                  <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border">FCP</label>
                  <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border">LCP</label>
                  <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border">TBT</label>
                  <label className="rounded-sm py-1 px-4 text-xs cursor-pointer border">CLS</label>
                </div>
              </div>
              <Accordion title={'Avoid large layout shifts'} impact={'high'} subtitle={'7 elements found'} open={false}>
                <AccordionContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorem dignissimos ex illum,
                    accusantium minus alias necessitatibus expedita provident perspiciatis pariatur sequi totam eveniet?
                    Maiores nostrum possimus architecto id atque!
                  </p>
                </AccordionContent>
              </Accordion>
              <Accordion
                title={'Largest Contentful Paint element '}
                impact={'medium'}
                subtitle={'1,980 ms'}
                open={false}
              >
                <AccordionContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorem dignissimos ex illum,
                    accusantium minus alias necessitatibus expedita provident perspiciatis pariatur sequi totam eveniet?
                    Maiores nostrum possimus architecto id atque!
                  </p>
                </AccordionContent>
              </Accordion>
              <Accordion
                title={'Eliminate render-blocking resources'}
                impact={'low'}
                subtitle={'Potential savings of 150 ms'}
              >
                <AccordionContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorem dignissimos ex illum,
                    accusantium minus alias necessitatibus expedita provident perspiciatis pariatur sequi totam eveniet?
                    Maiores nostrum possimus architecto id atque!
                  </p>
                </AccordionContent>
              </Accordion>
            </TabContent>

            <TabContent value={'accessibility'}>
              <h1>Accessibility</h1>
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

            <TabContent value={'pwa'}>
              <h1>PWA</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </TabContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default AuditSection
