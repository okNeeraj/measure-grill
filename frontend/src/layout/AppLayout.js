import { Home } from "../pages";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Home />
      </main>
    </>
  )
}

export default AppLayout;
