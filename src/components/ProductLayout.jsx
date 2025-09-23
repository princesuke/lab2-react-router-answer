import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div>
      <h1>Product Viewer</h1>
      <Outlet />
    </div>
  );
}
