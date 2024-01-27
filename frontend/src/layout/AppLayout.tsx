// import Dashboard from "@pages/dashboard";
import Websites from '@pages/websites'
import Analysis from '../pages/analysis'

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
            {/* <Dashboard /> */}
            {/* <Analysis /> */}
            <Websites />
          </main>
        </div>
      </div>
    </>
  )
}

export default AppLayout
