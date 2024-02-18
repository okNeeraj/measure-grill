import { Link, useLocation } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

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
        <div className={`app-item bg-blue-100 hover:shadow-lg text-blue-800 rounded-full`}>
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center justify-center w-12 h-12" aria-label="Customise options">
                <span className="text-lg">N</span>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white shadow-lg pb-2 min-w-40 rounded-md dropdownMenuContent"
                sideOffset={5}
                collisionPadding={20}
                side="right"
              >
                <DropdownMenu.Item className="focus-visible:outline-none group">
                  <div className="py-4 px-3 flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full" aria-label="Customise options">
                      <span className="text-lg">N</span>
                    </div>
                    <div>
                      <span className="block">Neeraj Singh</span>
                      <span className="text-gray-400 text-xs block">neeraj.singh@zustq.com</span>
                    </div>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="border-t border-gray-100 mb-2" />
                <DropdownMenu.Item className="focus-visible:outline-none group">
                  <Link to={PAGE['dashboard']} className="py-2 px-3 hover:text-violet-800 flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-violet-800">person</span>
                    <span>Profile</span>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus-visible:outline-none group">
                  <Link to={PAGE['dashboard']} className="py-2 px-3 hover:text-violet-800 flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-violet-800">settings</span>
                    <span>Settings</span>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="border-t border-gray-100 my-2" />
                <DropdownMenu.Item className="focus-visible:outline-none group">
                  <Link to={PAGE['home']} className="py-2 px-3 hover:text-violet-800 flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-violet-800">logout</span>
                    <span>Logout</span>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Arrow className="fill-white" width={20} height={10} />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
