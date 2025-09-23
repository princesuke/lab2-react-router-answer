import { useNavigate } from "react-router";

export default function ProductDetailError() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Product not found</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
