import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import News from "../pages/News";
import Subscribe from "../pages/Subscribe";
import NotFound from "../pages/NotFound";
import Success from "../pages/Success";
import { subscribeAction } from "../actions/subscribe";
import { productRoutes } from "./products.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "news", element: <News /> },
      { path: "subscribe", element: <Subscribe />, action: subscribeAction },
      { path: "success/:email", element: <Success /> },
      //   {
      //     path: "products",
      //     element: <ProductLayout />,
      //     children: [
      //       { index: true, element: <ProductList /> },
      //       { path: ":id", element: <ProductDetail /> },
      //     ],
      //   },
      productRoutes,
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
