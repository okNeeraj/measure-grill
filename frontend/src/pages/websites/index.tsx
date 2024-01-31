import { useState } from 'react'
import { WebsiteList } from './components/WebsiteList'
import Dialog from '@components/ui/Dialog'
const Websites = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  return (
    <div className="mb-10">
      <div className="border-l-4 border-gray-300 pl-4 flex items-center">
        <div className="head-info">
          <h1 className="text-2xl">Websites</h1>
          <div className="audit-url text-gray-500">Get overview and Manage all your websites</div>
        </div>
        <div className="head-action ml-auto">
          <button onClick={openDialog} className="flex items-center gap-3 bg-violet-800 text-white px-4 py-2 rounded-md">
            <span className="material-symbols-outlined" title="Analysis">
              add
            </span>
            <span>Add New Website</span>
          </button>
        </div>
      </div>
      <Dialog isOpen={isOpen} onClose={closeDialog} title={'Add New Website'}>
        <div className="py-3">
          <div className="input mb-6">
            <label className="text-xs text-slate-600 mb-2 block">Website Name</label>
            <input
              type="text"
              placeholder="Enter Website Name"
              className="px-4 py-3 text-xs bg-gray-100 rounded-sm w-full focus-within:outline-none focus-within:bg-gray-200"
              value=""
            />
          </div>
          <div className="input mb-6">
            <label className="text-xs text-slate-600 mb-2 block">Website URL</label>
            <input
              type="text"
              placeholder="Enter Website URL"
              className="px-4 py-3 text-xs bg-gray-100 rounded-sm w-full focus-within:outline-none focus-within:bg-gray-200"
              value=""
            />
          </div>
          <div className="">
            <button className="flex w-full justify-center items-center gap-3 bg-violet-800 text-white px-8 py-3 rounded-md uppercase">Save & Run Audit</button>
          </div>
        </div>
      </Dialog>
      <WebsiteList />
    </div>
  )
}

export default Websites
