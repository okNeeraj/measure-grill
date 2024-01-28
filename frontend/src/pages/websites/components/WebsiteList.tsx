export const WebsiteList = () => {
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
        <table className="min-w-full bg-white">
          <thead className="border-b">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-20">Website</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">Performance</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">Accessibility</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">Best Practices</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">SEO</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">PWA</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">W3C</th>
              <th className="py-3 px-4 uppercase font-semibold text-sm text-center">Last Report</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="font-bold">ZustQ</div>
                <div className="text-xs truncate w-52">
                  https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">89</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">96</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">95</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">100</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-na border-indicate-na border">N/A</span>
              </td>
              <td className="py-3 px-4 text-center">
                <a href="#">
                  <span className="p-2 text-xs font-bold rounded-md text-indicate-poor border-indicate-poor border">Failed</span>
                </a>
              </td>
              <td className="py-3 px-4 text-center">28 Jan 2024, 02:14 PM</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Analysis"
                  >
                    monitoring
                  </button>
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Timeline"
                  >
                    timeline
                  </button>
                  <button className="border p-1 w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="W3c Validator">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg" alt="w3c" />
                  </button>
                  <button className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="Setting">
                    more_vert
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="font-bold">ZustQ</div>
                <div className="text-xs truncate w-52">
                  https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">89</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">96</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">95</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">100</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-na border-indicate-na border">N/A</span>
              </td>
              <td className="py-3 px-4 text-center">
                <a href="#">
                  <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">Passed</span>
                </a>
              </td>
              <td className="py-3 px-4 text-center">28 Jan 2024, 02:14 PM</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Analysis"
                  >
                    monitoring
                  </button>
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Timeline"
                  >
                    timeline
                  </button>
                  <button className="border p-1 w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="W3c Validator">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg" alt="w3c" />
                  </button>
                  <button className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="Setting">
                    more_vert
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="font-bold">ZustQ</div>
                <div className="text-xs truncate w-52">
                  https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">89</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">96</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">95</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">100</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-na border-indicate-na border">N/A</span>
              </td>
              <td className="py-3 px-4 text-center">
                <a href="#">
                  <span className="p-2 text-xs font-bold rounded-md text-indicate-poor border-indicate-poor border">Failed</span>
                </a>
              </td>
              <td className="py-3 px-4 text-center">28 Jan 2024, 02:14 PM</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Analysis"
                  >
                    monitoring
                  </button>
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Timeline"
                  >
                    timeline
                  </button>
                  <button className="border p-1 w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="W3c Validator">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg" alt="w3c" />
                  </button>
                  <button className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="Setting">
                    more_vert
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="font-bold">ZustQ</div>
                <div className="text-xs truncate w-52">
                  https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">89</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">96</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">95</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">100</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-na border-indicate-na border">N/A</span>
              </td>
              <td className="py-3 px-4 text-center">
                <a href="#">
                  <span className="p-2 text-xs font-bold rounded-md text-indicate-poor border-indicate-poor border">Failed</span>
                </a>
              </td>
              <td className="py-3 px-4 text-center">28 Jan 2024, 02:14 PM</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Analysis"
                  >
                    monitoring
                  </button>
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Timeline"
                  >
                    timeline
                  </button>
                  <button className="border p-1 w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="W3c Validator">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg" alt="w3c" />
                  </button>
                  <button className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="Setting">
                    more_vert
                  </button>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="font-bold">ZustQ</div>
                <div className="text-xs truncate w-52">
                  https://stores.myvi.in/vi-vodafone-idea-store-vi-store-vfstore-cp-telecommunications-service-provider-connaught-place-new-delhi-128884/Home
                </div>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">89</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">96</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-good border-indicate-good border">95</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-improvement border-indicate-improvement border">100</span>
              </td>
              <td className="py-3 px-4 text-center">
                <span className="p-2 text-xs font-bold rounded-md text-indicate-na border-indicate-na border">N/A</span>
              </td>
              <td className="py-3 px-4 text-center">
                <a href="#">
                  <span className="p-2 text-xs font-bold rounded-md text-indicate-poor border-indicate-poor border">Failed</span>
                </a>
              </td>
              <td className="py-3 px-4 text-center">28 Jan 2024, 02:14 PM</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Analysis"
                  >
                    monitoring
                  </button>
                  <button
                    className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800"
                    title="Performance Timeline"
                  >
                    timeline
                  </button>
                  <button className="border p-1 w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="W3c Validator">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg" alt="w3c" />
                  </button>
                  <button className="material-symbols-outlined border w-9 h-9 rounded-md bg-white hover:bg-violet-100 hover:text-violet-800" title="Setting">
                    more_vert
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
