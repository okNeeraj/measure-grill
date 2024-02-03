const SubMenu = () => {
  return (
    <div className="tab-menu flex mb-4 gap-4 text-md border-b-2 border-slate-300">
      <div data-id="performance" className="px-4 py-2 cursor-pointer mb-[-2px] flex flex-col gap-2 items-center border-b-2 border-violet-800 text-violet-800">
        <span className="text-xs font-bold">Report</span>
      </div>
      <div
        data-id="accessibility"
        className="px-4 py-2 cursor-pointer rounded-md flex flex-col gap-2 items-center border-transparent text-slate-600 hover:text-violet-800"
      >
        <span className="text-xs font-bold">Performance Timeline</span>
      </div>
      <div
        data-id="best-practices"
        className="px-4 py-2 cursor-pointer rounded-md flex flex-col gap-2 items-center border-transparent text-slate-600 hover:text-violet-800"
      >
        <span className="text-xs font-bold">Compititor Analysis</span>
      </div>
      <div
        data-id="seo"
        className="px-4 py-2 cursor-pointer rounded-md flex flex-col gap-2 items-center border-transparent text-slate-600 hover:text-violet-800"
      >
        <span className="text-xs font-bold">Settings</span>
      </div>
      <div
        data-id="pwa"
        className="px-4 py-2 cursor-pointer rounded-md flex flex-col gap-2 items-center border-transparent text-slate-600 hover:text-violet-800"
      >
        <span className="text-xs font-bold"></span>
      </div>
    </div>
  )
}

export default SubMenu
