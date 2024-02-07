import { PAGE } from '@routes/index'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthScreen from './components/AuthScreen'

const Verify = () => {
  const [resendTime, setResendTime] = useState(0)
  return (
    <div className="h-screen bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-violet-200 md:col-span-3 lg:col-span-2 relative">
        <AuthScreen />
      </div>
      <div className="bg-white h-full md:col-span-3 lg:col-span-1 p-4">
        <div className="h-full auth-wraper flex items-center">
          <div className="w-full p-4">
            <div className="heading mb-8">
              <h1 className="text-4xl mb-2 font-bold text-slate-700">Account Verification</h1>
              <p className="text-sm text-slate-500">Enter the six digit OTP sent to your email address</p>
              <div className="mt-4 flex items-center gap-1">
                <span className="text-slate-600">neerajonetwo@gmail.com</span>
                <Link to={PAGE['signup']} className="material-symbols-outlined text-violet-800">
                  edit_square
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <input type="text" className="py-4 px-6 w-full border border-violet-100 rounded-md" placeholder="OTP" />
              </div>
              <div className="flex items-center justify-between my-4">
                <div className="flex gap-2 items-center"></div>
              </div>
              <div className="action">
                <Link to={PAGE['dashboard']} className="flex items-center justify-center gap-3 bg-violet-800 text-white px-4 py-4 rounded-md w-full uppercase">
                  Submit
                </Link>
                <div className="help flex gap-1 items-center justify-center mt-4">
                  Didn't receive the OTP ?
                  <button
                    className="font-bold hover:underline disabled:hover:no-underline text-violet-800 disabled:text-gray-400"
                    disabled={resendTime === 0 ? false : true}
                  >
                    {resendTime === 0 ? 'Resend' : <span>Resend in {resendTime} second</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify
