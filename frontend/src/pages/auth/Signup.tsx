import { PAGE } from '@routes/index'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="h-screen bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-violet-200 md:col-span-3 lg:col-span-2 p-4"></div>
      <div className="bg-white h-full md:col-span-3 lg:col-span-1 p-4">
        <div className="h-full auth-wraper flex items-center">
          <div className="w-full p-4">
            <div className="heading mb-8">
              <h1 className="text-4xl mb-2">
                Welcome to <span className="text-violet-800 font-bold">ZustQ</span>
              </h1>
              <p className="text-sm text-slate-500">Create an account to automate your website's auditing.</p>
            </div>
            <div>
              <div className="mb-4">
                <label className="mb-1 block">
                  Email <sup className="text-red-600">*</sup>
                </label>
                <input type="text" className="py-4 px-6 w-full border border-violet-100 rounded-md" placeholder="Email ID" />
              </div>
              <div className="action">
                <button className="flex items-center justify-center gap-3 bg-violet-800 text-white px-4 py-4 rounded-md w-full uppercase">Next</button>
                <span className="string-seprator text-center block relative my-5">
                  <span className="text-gray-400">Or, Signup with</span>
                </span>
                <button className="flex items-center justify-center gap-3 text-violet-800 border border-violet-800 px-4 py-4 rounded-md w-full">
                  <span className="w-4">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c">
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                  </span>
                  <span>Sign up with Google</span>
                </button>
                <div className="mt-6 flex gap-1 items-center justify-center">
                  <span>Alreay registered?</span>
                  <Link to={PAGE['login']} className="text-violet-800 hover:underline">
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
