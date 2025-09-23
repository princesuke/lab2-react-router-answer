import { useLoaderData } from "react-router";
import useTheme from "../contexts/useTheme";

export default function ProductDetail() {
  const product = useLoaderData();

  const { theme } = useTheme();

  // Data is loaded by the route loader; errors are handled by errorElement

  return (
    <div>
      <p>{theme}</p>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <p>Price: {product?.price}</p>
      <img src={product?.thumbnail} width={200} alt={product?.title} />
    </div>
  );
}
