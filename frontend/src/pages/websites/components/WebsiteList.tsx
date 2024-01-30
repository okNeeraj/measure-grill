import Pagination from '@components/ui/Pagination'
import WebsiteTable from './WebsiteTable'

export const WebsiteList = () => {
  const data = [
    {
      id: 'dsyhnf43jlj4oij3l5',
      name: 'zustQ',
      url: 'https://www.zustq.com',
      w3cStatus: 'Passed',
      lastReportAt: '25 Jan 2024, 11:22 PM',
      score: { performance: 99, accessibility: 93, bestPractices: 90, seo: 100, pwa: 99 },
    },
    {
      id: 'g56df43jlj4oij3l5',
      name: 'Google',
      url: 'https://google.com',
      w3cStatus: 'Failed',
      lastReportAt: '26 Jan 2024, 10:35 AM',
      score: { performance: 98, accessibility: 89, bestPractices: 79, seo: 100, pwa: 'n/a' },
    },
    {
      id: 'qwerty12345',
      name: 'Example',
      url: 'https://example.com',
      w3cStatus: 'Passed',
      lastReportAt: '27 Jan 2024, 03:45 PM',
      score: { performance: 75, accessibility: 82, bestPractices: 90, seo: 95, pwa: 'n/a' },
    },
    {
      id: 'h87sd56d4j3i7g9h2',
      name: 'GitHub',
      url: 'https://github.com',
      w3cStatus: 'Passed',
      lastReportAt: '28 Jan 2024, 09:10 AM',
      score: { performance: 100, accessibility: 85, bestPractices: 82, seo: 80, pwa: 'n/a' },
    },
    {
      id: 'i82ns75k4d8h3f6p',
      name: 'Amazon',
      url: 'https://amazon.com',
      w3cStatus: 'Failed',
      lastReportAt: '29 Jan 2024, 01:55 PM',
      score: { performance: 95, accessibility: 100, bestPractices: 85, seo: 95, pwa: 87 },
    },
    {
      id: 'p93f8s4d5h2j7k8l',
      name: 'Netflix',
      url: 'https://netflix.com',
      w3cStatus: 'Passed',
      lastReportAt: '30 Jan 2024, 05:20 PM',
      score: { performance: 82, accessibility: 92, bestPractices: 95, seo: 90, pwa: 'n/a' },
    },
    {
      id: 'u29c8f5s4d3h6j8l',
      name: 'Facebook',
      url: 'https://facebook.com',
      w3cStatus: 'Failed',
      lastReportAt: '31 Jan 2024, 08:45 AM',
      score: { performance: 65, accessibility: 100, bestPractices: 79, seo: 80, pwa: 'n/a' },
    },
    {
      id: 's29d8h5j7k3l4f6g',
      name: 'Twitter',
      url: 'https://twitter.com',
      w3cStatus: 'Passed',
      lastReportAt: '01 Feb 2024, 07:30 PM',
      score: { performance: 78, accessibility: 82, bestPractices: 85, seo: 88, pwa: 'n/a' },
    },
  ]

  return (
    <div className="section mt-4">
      <div className="matrix bg-white rounded-md px-4 pt-5 pb-8 justify-centerF items-center">
        <div className="table-header mb-5 flex items-center gap-8">
          <div>
            <input type="text" className="px-4 py-3 text-xs bg-gray-100 rounded-sm w-56" placeholder="Search website Name or URL" />
          </div>
          <div className="performance-mode flex gap-2">
            <div data-id="performance" className="px-4 py-3 cursor-pointer rounded-md flex flex-col gap-2 items-center bg-violet-100 text-violet-800">
              <span className="text-xs">Desktop</span>
            </div>
            <div data-id="performance" className="px-4 py-3 cursor-pointer rounded-md flex flex-col gap-2 items-center">
              <span className="text-xs">Mobile</span>
            </div>
          </div>
        </div>
        <WebsiteTable data={data} />
        <Pagination />
      </div>
    </div>
  )
}
