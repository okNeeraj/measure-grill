import AuditUrl from "../../components/AuditUrl";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 mt-2 rounded-md flex items-center justify-between">
      <div className="logo text-lg font-bold">
        <a href="/" className="flex gap-2 items-center">
          <span className="material-symbols-outlined">west</span>
          <span>Analysis</span>
        </a>
      </div>
      <div>
        <AuditUrl />
      </div>
      <div className="right-pannel flex gap-8">
        <button className="flex items-center px-7 py-1 bg-gray-50 text-sm text-violet-800 border border-violet-800 rounded-full">
          <span className="material-symbols-outlined">bolt</span>
          <span className="uppercase text-xs font-bold">Upgrade</span>
        </button>
        <div className="profile flex gap-2 items-center">
          <div className="profile-name">Neeraj</div>
          <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
