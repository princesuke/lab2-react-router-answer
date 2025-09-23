import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Navbar from "./Navbar";
import useTheme from "../contexts/useTheme";

function Layout() {
  const { theme } = useTheme();

  const themeClass =
    theme === "dark" ? "app-root theme-dark" : "app-root theme-light";

  return (
    <div className={themeClass}>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
