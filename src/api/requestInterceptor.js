import axios from "axios";
import { getAuthToken } from "../app/sessionSlice";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = ["https://js1.10up.com"];
    const token = getAuthToken();

    if (allowedOrigins.includes(origin) && token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
