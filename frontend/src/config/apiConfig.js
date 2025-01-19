import axios from "axios"

// export const BaseURL = "https://e-commerce-backend-ef1s.onrender.com"
// export const BaseURL = "http://localhost:8000"
export const BaseURL =
  process.env.NODE_ENV === "production"
    ? "https://e-commerce-backend-ashy-two.vercel.app"
    : "http://localhost:8000";


// const jwt = localStorage.getItem("jwt")

export const api = axios.create({
  baseURL: BaseURL,
  headers: {
    // "Authorization": `Bearer ${jwt}`,
    "Content-Type": 'application/json'
  }
})

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt"); // Get the latest token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);