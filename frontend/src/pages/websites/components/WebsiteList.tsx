export const WebsiteList = () => {
  return (
    <div className="section mt-10">
      <h2 className="font-bold mb-4 flex items-center gap-2 text-gray-500">
        <span className="material-symbols-outlined">language</span>
        <span>Website List</span>
      </h2>
      <div className="matrix bg-white rounded-md px-4 py-8 flex gap-16 justify-centerF items-center">
        <table className="min-w-full bg-white">
          <thead className="border-b">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">URL</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Performance</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Accessibility</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Best Practices</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">SEO</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">PWA</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">FCP</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">LCP</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">TBT</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">CLS</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">SI</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-3 px-4">ZustQ</td>
              <td className="py-3 px-4">https://zustq.com</td>
              <td className="py-3 px-4">89</td>
              <td className="py-3 px-4">96</td>
              <td className="py-3 px-4">95</td>
              <td className="py-3 px-4">99</td>
              <td className="py-3 px-4">N/A</td>
              <td className="py-3 px-4">1.3 s</td>
              <td className="py-3 px-4">2.4 s</td>
              <td className="py-3 px-4">20 ms</td>
              <td className="py-3 px-4">0.254</td>
              <td className="py-3 px-4">3.7 s</td>
              <td className="py-3 px-4">
                <span className="material-symbols-outlined">settings</span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">Google</td>
              <td className="py-3 px-4">https://google.com</td>
              <td className="py-3 px-4">73</td>
              <td className="py-3 px-4">86</td>
              <td className="py-3 px-4">98</td>
              <td className="py-3 px-4">95</td>
              <td className="py-3 px-4">85</td>
              <td className="py-3 px-4">1.7 s</td>
              <td className="py-3 px-4">2.4 s</td>
              <td className="py-3 px-4">40 ms</td>
              <td className="py-3 px-4">0.27</td>
              <td className="py-3 px-4">1.8 s</td>
              <td className="py-3 px-4">
                <span className="material-symbols-outlined">settings</span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">ZustQ</td>
              <td className="py-3 px-4">https://zustq.com</td>
              <td className="py-3 px-4">89</td>
              <td className="py-3 px-4">96</td>
              <td className="py-3 px-4">95</td>
              <td className="py-3 px-4">99</td>
              <td className="py-3 px-4">N/A</td>
              <td className="py-3 px-4">1.3 s</td>
              <td className="py-3 px-4">2.4 s</td>
              <td className="py-3 px-4">20 ms</td>
              <td className="py-3 px-4">0.254</td>
              <td className="py-3 px-4">3.7 s</td>
              <td className="py-3 px-4">
                <span className="material-symbols-outlined">settings</span>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4">Google</td>
              <td className="py-3 px-4">https://google.com</td>
              <td className="py-3 px-4">73</td>
              <td className="py-3 px-4">86</td>
              <td className="py-3 px-4">98</td>
              <td className="py-3 px-4">95</td>
              <td className="py-3 px-4">85</td>
              <td className="py-3 px-4">1.7 s</td>
              <td className="py-3 px-4">2.4 s</td>
              <td className="py-3 px-4">40 ms</td>
              <td className="py-3 px-4">0.27</td>
              <td className="py-3 px-4">1.8 s</td>
              <td className="py-3 px-4">
                <span className="material-symbols-outlined">settings</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
