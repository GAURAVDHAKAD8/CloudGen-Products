const BASE_URL = "https://fakestoreapi.noksha.dev/api";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.data.map((product) => ({
    id: product._id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
  }));
}

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await response.json();
  const product = data.data || data;

  if (!product) {
    throw new Error("Product not found");
  }

  return {
    id: product._id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: product.rating,
  };
}
