import { WebsiteList } from './components/WebsiteList'
const Websites = () => {
  return (
    <div className="mb-10">
      <div className="border-l-4 border-gray-300 pl-4 flex items-center">
        <div className="head-info">
          <h1 className="text-2xl">Websites</h1>
          <div className="audit-url text-gray-500">Get overview and Manage all your websites</div>
        </div>
        <div className="head-action ml-auto">
          <button className="flex items-center gap-3 bg-violet-800 text-white px-4 py-2 rounded-md">
            <span className="material-symbols-outlined" title="Analysis">
              add
            </span>
            <span>Add New Website</span>
          </button>
        </div>
      </div>
      <WebsiteList />
    </div>
  )
}

export default Websites
