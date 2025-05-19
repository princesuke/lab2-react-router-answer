import {Outlet} from "react-router";

export default function ProductLayout() {
    return (
        <div>
            <h1>Product Viewer</h1>
            <Outlet/>
        </div>
    )
}