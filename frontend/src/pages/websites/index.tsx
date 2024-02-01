import { useState } from 'react'
import { WebsiteList } from './components/WebsiteList'
import Dialog from '@components/ui/Dialog'
import { postData } from '@utils/postData'
import { BACKEND_API_ENDPOINT } from '@utils/constant'

const Websites = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [websiteName, setWebsiteName] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

  const handleName = (e) => {
    setWebsiteName(e.target.value)
  }
  const handleUrl = (e) => {
    setWebsiteUrl(e.target.value)
  }

  const saveWebsiteDetails = () => {
    if (websiteName === '') return
    if (websiteUrl === '') return
    const websiteData = {
      name: websiteName,
      url: websiteUrl,
    }
    postData(`${BACKEND_API_ENDPOINT}/website/add`, websiteData).then((data) => {
      console.log('sr-data ', data)
    })
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
              onChange={handleName}
              placeholder="Enter Website Name"
              className="px-4 py-3 text-xs bg-gray-100 rounded-sm w-full focus-within:outline-none focus-within:bg-gray-200"
              value={websiteName}
            />
          </div>
          <div className="input mb-6">
            <label className="text-xs text-slate-600 mb-2 block">Website URL</label>
            <input
              type="text"
              onChange={handleUrl}
              placeholder="Enter Website URL"
              className="px-4 py-3 text-xs bg-gray-100 rounded-sm w-full focus-within:outline-none focus-within:bg-gray-200"
              value={websiteUrl}
            />
          </div>
          <div className="">
            <button
              onClick={saveWebsiteDetails}
              className="flex w-full justify-center items-center gap-3 bg-violet-800 text-white px-8 py-3 rounded-md uppercase"
            >
              Save & Run Audit
            </button>
          </div>
        </div>
      </Dialog>
      <WebsiteList />
    </div>
  )
}

export default Websites
