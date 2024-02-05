import { Outlet } from 'react-router-dom'
import PublicNavbar from './components/PublicNavbar'

const AppLayout = () => {
  return (
    <>
      <div className="top-navbar sticky top-0 z-50">
        <PublicNavbar />
      </div>
      <div className="app-layoutf">
        <div className="app-container">
          <main className="page-container mt-6 px-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default AppLayout
