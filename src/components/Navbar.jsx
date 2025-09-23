import { NavLink } from "react-router";
import useTheme from "../contexts/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="app-nav">
      {/*  This is the navigation bar */}
      <NavLink to="/news">News |</NavLink>
      <NavLink to="/subscribe">Subscribe</NavLink>
      <NavLink to="/products">Product</NavLink>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
