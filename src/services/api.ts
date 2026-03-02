import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "/api", // Proxy handles redirection to localhost:5000
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here (e.g., 401 Unauthorized)
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  },
);

// --- Product API ---
export const getProducts = async (params?: unknown) => {
  const { data } = await api.get("/products", { params: params as any });
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const featureCard = async (id: string) => {
  const { data } = await api.get(`/products/eightCardForHome/product`);
  return data;
};
export const getNewestProduct = async (id: string) => {
  const { data } = await api.get(`/products/newestProduct/product`);
  return data;
};

export const getAllSets = async (id: string) => {
  const { data } = await api.get(`/sets`);
  return data;
};

export const getSets = async () => {
  const { data } = await api.get("/sets");
  return data;
};

// --- News API ---
export const getNews = async (params?: unknown) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await api.get("/news", { params: params as any });
  return data;
};

export const getNewsBySlug = async (slug: string) => {
  const { data } = await api.get(`/news/${slug}`);
  return data;
};

export default api;
