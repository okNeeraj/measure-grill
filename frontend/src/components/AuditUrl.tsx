import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setReport } from '@store/reportSlice'

const AuditUrl = () => {
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const getReport = async () => {
    setLoading(true)
    const url = `http://localhost:8000/api/v1/analyse?url=${websiteUrl}`
    const response = await fetch(url)
    const result = await response.json()
    if (result) {
      setLoading(false)
      dispatch(setReport(result?.data?.lighthouseResult))
    }
  }
  const handleWebsiteUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWebsiteUrl(e.target.value)
  }

  return (
    <>
      <div className="text-center">
        <div className="flex justify-center">
          <input
            type="text"
            value={websiteUrl}
            onChange={handleWebsiteUrl}
            className="border px-4 py-2 w-96 rounded-sm focus-within:outline-none"
            placeholder="Enter website URL"
          />
          <button
            onClick={getReport}
            disabled={websiteUrl === '' ? true : false}
            className=" bg-violet-800 disabled:bg-violet-500 disabled:cursor-not-allowed px-4 mx-1 rounded-sm border-none text-white text-sm"
          >
            {loading ? 'Analysing...' : 'Get Report'}
          </button>
        </div>
      </div>
    </>
  )
}

export default AuditUrl
