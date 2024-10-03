import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"

const MainLayout = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout