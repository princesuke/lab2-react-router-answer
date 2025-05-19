import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      {/*  This is the navigation bar */}
      <NavLink to="/news">News |</NavLink> 
      <NavLink to="/subscribe">Subscribe</NavLink>
      <NavLink to="/products">Product</NavLink>
    </nav>
  );
}

export default Navbar;
