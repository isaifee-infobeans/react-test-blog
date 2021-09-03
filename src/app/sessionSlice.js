import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    username: "",
    isAuthenticated: false,
  },
};

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

export const setSession = sessionSlice.actions.setSession;
export default sessionSlice.reducer;
