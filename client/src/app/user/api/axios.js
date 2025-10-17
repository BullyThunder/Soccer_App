import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://soccer-app-5641.onrender.com", // базовый URL
  withCredentials: true, // чтобы куки шли автоматически
  headers: {
    "Content-Type": "application/json"
  },
});

export default api;