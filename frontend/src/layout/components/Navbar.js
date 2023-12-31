const Navbar = () => {
  return (
    <nav className="bg-white p-4 mt-2 rounded-md flex items-center justify-between">
      <div className="logo text-lg font-bold">
        <a href="/" className="flex gap-2 items-center">
          <span className="material-symbols-outlined">west</span>
          <span>Analysis</span>
        </a>
      </div>
      <div className="right-pannel flex gap-8">
        <button className="px-7 py-1 bg-violet-800 text-sm text-white rounded-full">Upgrade</button>
        <div className="profile flex gap-2 items-center">
          <div className="profile-name">Neeraj</div>
          <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
