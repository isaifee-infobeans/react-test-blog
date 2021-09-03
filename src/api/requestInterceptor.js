import axios from "axios";

export default {
  setAuthInterceptors: (authToken) => {
    axios.interceptors.request.use(
      (config) => {
        const { origin } = new URL(config.url);
        const allowedOrigins = ["https://js1.10up.com"];

        if (allowedOrigins.includes(origin) && authToken) {
          config.headers.authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
};
