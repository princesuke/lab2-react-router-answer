import ProductLayout from "../components/ProductLayout";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

export const productRoutes = {
  path: "products",
  element: <ProductLayout />,
  children: [
    { index: true, element: <ProductList /> },
    { path: ":id", element: <ProductDetail /> },
  ],
};
