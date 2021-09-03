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

export const selectSession = (state) => state.session.session;

export const sessionActions = sessionSlice.actions;
export default sessionSlice.reducer;
