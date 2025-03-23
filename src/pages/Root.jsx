import Sidebar from "../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="container">
      <Sidebar/>
      <main className="content">
        <Outlet/>
      </main>
    </div>
  )
}