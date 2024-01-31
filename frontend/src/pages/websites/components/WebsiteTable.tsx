import { Link } from 'react-router-dom'
import { PAGE } from '@routes/index'
import { performanceImpact } from '@utils/performanceImpact'

interface WebsiteTableProps {
  data: {
    id: string
    name: string
    url: string
    w3cStatus: string
    lastReportAt: string
    score: {
      performance: number | string
      accessibility: number | string
      bestPractices: number | string
      seo: number | string
      pwa: number | string
    }
  }[]
}
const WebsiteTable: React.FC<WebsiteTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead className="border-b">
        <tr>
          <th className="text-left py-3 px-4 uppercase font-bol text-xs w-20">Website</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">Performance</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">Accessibility</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">Best Practices</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">SEO</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">PWA</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">W3C</th>
          <th className="py-3 px-4 uppercase font-bol text-xs text-center">Last Report</th>
          <th className="text-left py-3 px-4 uppercase font-bol text-xs"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((website) => (
          <tr key={website.id} className="hover:bg-gray-50">
            <td className="py-3 px-4">
              <div className="font-bold">{website.name}</div>
              <div className="text-xs truncate w-52">{website.url}</div>
            </td>
            <td className="py-3 px-4 text-center">
              <span
                className={`p-2 text-xs font-bold rounded-md border text-${performanceImpact(website.score.performance)} border-${performanceImpact(website.score.performance)}`}
              >
                {website.score.performance}
              </span>
            </td>
            <td className="py-3 px-4 text-center">
              <span
                className={`p-2 text-xs font-bold rounded-md border text-${performanceImpact(website.score.accessibility)} border-${performanceImpact(website.score.accessibility)}`}
              >
                {website.score.accessibility}
              </span>
            </td>
            <td className="py-3 px-4 text-center">
              <span
                className={`p-2 text-xs font-bold rounded-md border text-${performanceImpact(website.score.bestPractices)} border-${performanceImpact(website.score.bestPractices)}`}
              >
                {website.score.bestPractices}
              </span>
            </td>
            <td className="py-3 px-4 text-center">
              <span
                className={`p-2 text-xs font-bold rounded-md border text-${performanceImpact(website.score.seo)} border-${performanceImpact(website.score.seo)}`}
              >
                {website.score.seo}
              </span>
            </td>
            <td className="py-3 px-4 text-center">
              <span
                className={`p-2 text-xs font-bold rounded-md border text-${performanceImpact(website.score.pwa)} border-${performanceImpact(website.score.pwa)}`}
              >
                {website.score.pwa}
              </span>
            </td>
            <td className="py-3 px-4 text-center">
              <a href="#!">
                <span
                  className={`p-2 text-xs font-bold rounded-md border ${website.w3cStatus === 'Passed' ? 'text-indicate-good border-indicate-good' : 'text-indicate-poor border-indicate-poor'}`}
                >
                  {website.w3cStatus}
                </span>
              </a>
            </td>
            <td className="py-3 px-4 text-center">{website.lastReportAt}</td>
            <td className="py-3 px-4">
              <div className="flex gap-2">
                <Link
                  to={`${PAGE['analysis']}/${website.id}`}
                  className="flex items-center justify-center border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                  title="Performance Analysis"
                >
                  <span className="material-symbols-outlined">monitoring</span>
                </Link>
                <Link
                  to={`${PAGE['analysis']}/${website.id}`}
                  className="flex items-center justify-center border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                  title="Performance Timeline"
                >
                  <span className="material-symbols-outlined">timeline</span>
                </Link>
                <Link
                  to={`${PAGE['analysis']}/${website.id}`}
                  className="flex items-center justify-center border p-1 w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                  title="W3c Validator"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg" alt="w3c" />
                </Link>
                <button className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="Setting">
                  more_vert
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WebsiteTable
