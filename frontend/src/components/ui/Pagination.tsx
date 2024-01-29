const Pagination = () => {
  return (
    <>
      <div className="pagination flex justify-center mt-10">
        <nav className="paginate flex gap-3 items-center">
          <div className="previous">
            <a href="#!" className="py-2 px-4 flex items-center gap-2 hover:bg-violet-100 rounded-md">
              <span className="material-symbols-outlined">keyboard_backspace</span>
              <span className="uppercase">Previous</span>
            </a>
          </div>
          <ol className="page-list flex items-center gap-1">
            <li className="w-8 h-8 flex items-center justify-center hover:bg-violet-100 cursor-pointer rounded-md">1</li>
            <li className="w-8 h-8 flex items-center justify-center bg-violet-800 text-white cursor-default rounded-md">2</li>
            <li className="w-8 h-8 flex items-center justify-center hover:bg-violet-100 cursor-pointer rounded-md">3</li>
            <li className="w-8 h-8 flex items-center justify-center hover:bg-violet-100 cursor-pointer rounded-md">4</li>
            <li className="w-8 h-8 flex items-center justify-center hover:bg-violet-100 cursor-pointer rounded-md">5</li>
          </ol>
          <div className="next">
            <a href="#!" className="py-2 px-4 flex items-center gap-2 hover:bg-violet-100 rounded-md">
              <span className="uppercase">Next</span>
              <span className="material-symbols-outlined">east</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Pagination
