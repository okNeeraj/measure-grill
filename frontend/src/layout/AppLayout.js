import {
  Dashboard,
  Analysis
} from "../pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <>
      <div className="app-layout">
        <div className="left-sidebar">
          <Sidebar />
        </div>
        <div className="app-container">
          <div className="top-navbar">
            <Navbar />
          </div>
          <main className="page-container">
            <Analysis />
            {/* <Dashboard /> */}
          </main>
        </div>
      </div>
    </>
  )
}

export default AppLayout;
