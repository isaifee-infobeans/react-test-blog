import { createSlice } from "@reduxjs/toolkit";
import fetchAuthToken from "../api/authApi";

const initialState = {
  session: {
    username: "",
    isAuthenticated: false,
  },
};

export const fetchAuthTokenAsync = (params) => fetchAuthToken(params);

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const getAuthToken = () => sessionStorage.getItem("authToken");
export const setAuthToken = (token) =>
  sessionStorage.setItem("authToken", token);
export const deleteAuthToken = () => sessionStorage.removeItem("authToken");

export const selectSession = (state) => state.session.session;

export const setSession = sessionSlice.actions.setSession;
export default sessionSlice.reducer;
