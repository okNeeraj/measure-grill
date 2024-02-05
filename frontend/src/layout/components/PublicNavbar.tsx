import { Link, useLocation } from 'react-router-dom'
import { PAGE } from '@routes/index'
import AuditUrl from '@components/AuditUrl'
import { LOGO } from '@utils/constant'

const PublicNavbar = () => {
  return (
    <nav className="main-nav">
      <div className="bg-white bg-opacity-55 backdrop-blur-lg flex items-center px-4 py-2">
        <div className="logo-container">
          <Link to={'/'} className="flex gap-2 items-center">
            <div className="w-12 h-12">
              <img src={LOGO} alt="Measure Grill" />
            </div>
            <span className="logo-text text-lg font-bold">MeasureGrill</span>
          </Link>
        </div>
        <div className="nav-items flex gap-8 ml-20">
          <Link to={'/'} className="flex gap-2 items-center font-medium text-slate-500 hover:text-violet-800">
            <span>Solutions</span>
          </Link>
          <Link to={'/'} className="flex gap-2 items-center font-medium text-slate-500 hover:text-violet-800">
            <span>Products</span>
          </Link>
          <Link to={'/'} className="flex gap-2 items-center font-medium text-slate-500 hover:text-violet-800">
            <span>Resources</span>
          </Link>
          <Link to={'/'} className="flex gap-2 items-center font-medium text-slate-500 hover:text-violet-800">
            <span>Pricing</span>
          </Link>
        </div>
        <div className="right-pannel flex gap-4 ml-auto">
          <button className="flex items-center px-7 py-2 bg-gray-50 text-sm text-violet-800 border border-violet-800 rounded-full">
            <span className="material-symbols-outlined">bolt</span>
            <span className="uppercase text-xs font-bold">Try for Free</span>
          </button>
          <button className="flex items-center gap-4 px-7 py-2 bg-violet-800 text-sm text-white border border-violet-800 rounded-md">
            <span className="material-symbols-outlined">login</span>
            <span className="uppercase text-xs font-bold">Login</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default PublicNavbar
