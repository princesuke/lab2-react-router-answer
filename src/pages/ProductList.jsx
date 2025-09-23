import { Link, useLoaderData } from "react-router";

export default function ProductList() {
  const products = useLoaderData();

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}
