import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const AppLayout = () => {
  return (
    <>
      <div className="app-layout">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="app-container">
          <div className="top-navbar px-4">
            <Navbar />
          </div>
          <main className="page-container mt-6 px-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default AppLayout
