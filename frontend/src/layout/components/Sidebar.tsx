import { Link, useLocation } from 'react-router-dom'
import { PAGE } from '@routes/index'
import { LOGO, W3CICON } from '@utils/constant'

const Sidebar = () => {
  const location = useLocation()
  return (
    <aside className="sidebar-aside h-screen flex items-center flex-col justify-between gap-3 fixed left-4">
      <div className="flex justify-center items-center flex-col gap-3 mt-4">
        <div
          className={`app-item bg-white shadow-lg hover:text-violet-800 rounded-lg border ${location.pathname === PAGE['dashboard'] ? 'text-violet-800 border-violet-800' : 'text-black border-transparent'}`}
        >
          <Link to={PAGE['dashboard']} className="flex items-center justify-center w-12 h-12">
            <span className="material-symbols-outlined">dashboard</span>
          </Link>
        </div>
        <div
          className={`app-item bg-white shadow-lg hover:text-violet-800 rounded-lg border ${location.pathname === PAGE['websites'] ? 'text-violet-800 border-violet-800' : 'text-black border-transparent'}`}
        >
          <Link to={PAGE['websites']} className="flex items-center justify-center w-12 h-12">
            <span className="material-symbols-outlined">language</span>
          </Link>
        </div>
        <div
          className={`app-item bg-white shadow-lg hover:text-violet-800 rounded-lg border ${location.pathname === PAGE['analysis'] ? 'text-violet-800 border-violet-800' : 'text-black border-transparent'}`}
        >
          <Link to={PAGE['analysis']} className="flex items-center justify-center w-12 h-12">
            <span className="material-symbols-outlined">monitoring</span>
          </Link>
        </div>
        <div
          className={`app-item bg-white shadow-lg hover:text-violet-800 rounded-lg border ${location.pathname === PAGE['w3c'] ? 'text-violet-800 border-violet-800' : 'text-black border-transparent'}`}
        >
          <Link to={PAGE['w3c']} className="flex items-center justify-center w-12 h-12">
            <img src={W3CICON} alt="w3c" width={30} />
          </Link>
        </div>
        <div
          className={`app-item bg-white shadow-lg hover:text-violet-800 rounded-lg border ${location.pathname === PAGE['performance'] ? 'text-violet-800 border-violet-800' : 'text-black border-transparent'}`}
        >
          <Link to={PAGE['performance']} className="flex items-center justify-center w-12 h-12">
            <span className="material-symbols-outlined">speed</span>
          </Link>
        </div>
      </div>
      <div className="sidebar-bottom mb-6">
        <div className={`app-item bg-violet-100 hover:shadow-lg text-violet-800 rounded-full`}>
          <button className="flex items-center justify-center w-12 h-12">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
