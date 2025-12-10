// src/axios.js
import axios from "axios";
import Form from "vform";
import { useRouter } from "vue-router";

// Determine base URL in a way that works for Vue CLI and Vite
const baseURL = (typeof process.env !== "undefined" && process.env && process.env.VUE_APP_API_URL) || "";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
  },
  timeout: 15000,
});

// Optional: request interceptor (add token automatically if available)
instance.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore error messages
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    if (
      response?.data?.success === false &&
      response?.data?.code === 401 &&
      response?.data?.message === "Unauthorized"
    ) {
      const router = useRouter();

      // Clear token and redirect to login
      localStorage.removeItem("token");
      router.push({ name: "login" });
      //   window.location.href = '/log-in';
    }

    return Promise.resolve(response);
  },
  (error) => Promise.reject(error)
);

Form.axios = instance;
export default instance;
