import { Link, useLocation } from 'react-router-dom'
import { PAGE } from '@routes/index'
import { LOGO } from '@utils/constant'

const Sidebar = () => {
  const location = useLocation()
  console.log(location)
  return (
    <aside className="h-full flex items-center flex-col gap-3">
      <div className="w-14 h-14 mt-5">
        <img src={LOGO} alt="Measure Grill" />
      </div>
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
          className={`app-item bg-white shadow-lg hover:text-violet-800 rounded-lg border ${location.pathname === PAGE['performance'] ? 'text-violet-800 border-violet-800' : 'text-black border-transparent'}`}
        >
          <Link to={PAGE['performance']} className="flex items-center justify-center w-12 h-12">
            <span className="material-symbols-outlined">speed</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
