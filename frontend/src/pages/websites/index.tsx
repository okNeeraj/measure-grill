import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { WebsiteList } from './components/WebsiteList'
import Dialog from '@components/ui/Dialog'
import { postData } from '@utils/postData'
import { BACKEND_API_ENDPOINT } from '@utils/constant'
import { validate } from '@validations/validate'

type WebsiteValidationType = string | boolean

const Websites = () => {
  const [nameValidation, setNameValidation] = useState<WebsiteValidationType>()
  const [urlValidation, setUrlValidation] = useState<WebsiteValidationType>()
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
    const validates = validate([
      {
        name: 'websiteName',
        type: 'text',
        value: websiteName,
      },
      {
        name: 'websiteUrl',
        type: 'url',
        value: websiteUrl,
      },
    ])

    setNameValidation(!validates['websiteName']?.status ? validates['websiteName']?.message : '')
    setUrlValidation(!validates['websiteUrl']?.status ? validates['websiteUrl']?.message : '')

    if (validates['websiteName']?.status && validates['websiteUrl']?.status) {
      const websiteData = {
        name: websiteName,
        url: websiteUrl,
      }
      postData(`${BACKEND_API_ENDPOINT}/website/add`, websiteData).then((data) => {
        console.log('sr-data ', data)
        toast.success('New website add successfully')
        setWebsiteName('')
        setWebsiteUrl('')
        setIsOpen(false)
      })
    }
  }

  return (
    <div className="mb-10">
      <div className="border-l-4 border-gray-300 pl-4 flex items-center">
        <div className="head-info">
          <h1 className="text-2xl">Pages</h1>
          <div className="audit-url text-gray-500">Get overview and Manage all your websites</div>
        </div>
        <div className="head-action ml-auto">
          <button onClick={openDialog} className="flex items-center gap-3 bg-violet-800 text-white px-4 py-2 rounded-md">
            <span className="material-symbols-outlined" title="Analysis">
              add
            </span>
            <span>Add New Page</span>
          </button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
      <Dialog isOpen={isOpen} onClose={closeDialog} title={'Add New Website'}>
        <div className="py-3">
          <div className={`input ${nameValidation ? 'mb-2' : 'mb-6'}`}>
            <label className="text-xs text-slate-600 mb-2 block font-bold">Website Name</label>
            <input
              type="text"
              onChange={handleName}
              placeholder="Enter Website Name"
              className={`${nameValidation ? 'border-b border-red-600' : 'border-b border-transparent'} px-4 py-3 text-xs bg-gray-100 rounded-sm w-full focus-within:outline-none focus-within:bg-gray-200`}
              value={websiteName}
            />
            {nameValidation && <div className="error text-red-500 text-xs py-1">{nameValidation}</div>}
          </div>
          <div className={`input ${urlValidation ? 'mb-2' : 'mb-6'}`}>
            <label className="text-xs text-slate-600 mb-2 block font-bold">Website URL</label>
            <input
              type="text"
              onChange={handleUrl}
              placeholder="Enter Website URL"
              className={`${urlValidation ? 'border-b border-red-600' : 'border-b border-transparent'} px-4 py-3 text-xs bg-gray-100 rounded-sm w-full focus-within:outline-none focus-within:bg-gray-200`}
              value={websiteUrl}
            />
            {urlValidation && <div className="error text-red-500 text-xs py-1">{urlValidation}</div>}
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
