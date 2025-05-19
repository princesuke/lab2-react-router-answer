import { Outlet } from "react-router";
// import Header from "./Header";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div>
            {/* <Header /> */}
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout;