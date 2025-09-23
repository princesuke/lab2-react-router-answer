import api from "./axios";

export async function getProducts() {
  try {
    const res = await api.get("/products");
    return res.data.products;
  } catch {
    throw new Response("Failed to fetch products", { status: 500 });
  }
}

export async function getProductById({ params }) {
  const { id } = params;
  //   console.log("Fetching product with ID:", id);
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch {
    throw new Response("Product Not Found", { status: 404 });
  }
}
