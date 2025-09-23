import ProductLayout from "../components/ProductLayout";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import ProductDetailError from "../pages/ProductDetailError";
import { getProductById, getProducts } from "../api/products";

export const productRoutes = {
  path: "products",
  element: <ProductLayout />,
  children: [
    { index: true, element: <ProductList />, loader: getProducts },
    {
      path: ":id",
      element: <ProductDetail />,
      loader: getProductById,
      errorElement: <ProductDetailError />,
    },
  ],
};
