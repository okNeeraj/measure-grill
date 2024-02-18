import { Link, useLocation } from 'react-router-dom'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { PAGE } from '@routes/index'
import AuditUrl from '@components/AuditUrl'
import { LOGO } from '@utils/constant'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="main-nav">
      <div className="bg-white bg-opacity-55 backdrop-blur-lg flex items-center px-4 py-2">
        <div className="w-12 h-12">
          <img src={LOGO} alt="Measure Grill" />
        </div>
        <div className="logo text-lg font-bold ml-[28px]">
          <Link to={PAGE['websites']} className="flex gap-2 items-center">
            <span className="material-symbols-outlined">west</span>
            <span>Anaylsis</span>
          </Link>
        </div>
        {location.pathname.split('/').includes('analysis') && (
          <div className="m-auto">
            <AuditUrl variant="sm" />
          </div>
        )}
        <div className="right-pannel flex gap-4 ml-auto">
          <button className="flex items-center px-7 py-1 bg-gray-50 text-sm text-violet-800 border border-violet-800 rounded-full">
            <span className="material-symbols-outlined">bolt</span>
            <span className="uppercase text-xs font-bold">Upgrade</span>
          </button>

          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger asChild>
              <div className="relative w-10 h-10 flex border border-gray-100 items-center justify-center rounded-full hover:bg-gray-50 cursor-pointer">
                <span className="material-symbols-outlined font-bold">notifications</span>
                <span className="bg-red-700 border border-red-50 text-white w-5 h-5 flex justify-center items-center rounded-full text-xs absolute top-[-5px] right-[-5px]">
                  3
                </span>
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white shadow-lg py-2 max-w-80 rounded-md z-90 dropdownMenuContent"
                sideOffset={5}
                collisionPadding={20}
                side="bottom"
              >
                <DropdownMenu.Item className="focus-visible:outline-none group">
                  <div className="py-2 px-3">
                    <h3 className="text-lg mb-3">Quick Notification</h3>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nemo dolore neque commodi velit sapiente rerum. Illum ab blanditiis odit tempora
                    quam voluptas facilis veritatis libero? Quo quibusdam beatae ipsum!
                  </div>
                </DropdownMenu.Item>

                <DropdownMenu.Arrow className="fill-white" width={14} height={7} />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <div className="flex items-center justify-center cursor-pointer hover:bg-gray-50 w-10 h-10 rounded-full">
            <span className="material-symbols-outlined font-bold">apps</span>
          </div>
        </div>
      </div>
      {location.pathname.split('/').includes('analysis') && (
        <div className="sub-nav flex gap-8 pl-[96px] bg-violet-100 bg-opacity-65 backdrop-blur-lg pt-1">
          <a href="#!" className="py-2 flex border-b-2 border-b-violet-800 text-violet-800 font-medium hover:text-violet-800">
            Report
          </a>
          <a href="#!" className="py-2 flex border-b-2 border-b-transparent text-slate-400 font-medium hover:text-slate-600">
            Timeline
          </a>
          <a href="#!" className="py-2 flex border-b-2 border-b-transparent text-slate-400 font-medium hover:text-slate-600">
            Compititor Analysis
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
