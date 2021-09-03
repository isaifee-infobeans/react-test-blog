import axios from "axios";
import { sessionActions } from "../app/sessionSlice";

export default {
  setAuthInterceptors: (store) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          store.dispatch(sessionActions.setSession({ isAuthenticated: false }));
        }
        return Promise.reject(error);
      }
    );
  },
};
