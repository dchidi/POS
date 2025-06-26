import { API_URL } from "../app_config";

export async function fetchProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}
