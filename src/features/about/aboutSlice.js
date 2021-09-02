import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAboutPage from "../../api/aboutPageApi";

const initialState = {
  title: "",
  body: "",
  status: "idle",
};

export const fetchAboutPageAsync = createAsyncThunk(
  "about/fetchAboutPage",
  async () => {
    const response = await fetchAboutPage();
    return response;
  }
);
export const aboutSlice = createSlice({
  name: "about",
  initialState,
  extraReducers: {
    [fetchAboutPageAsync.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAboutPageAsync.fulfilled]: (state, action) => {
      state.status = "idle";
      state.title = action.payload[0].title.rendered;
      state.body = action.payload[0].content.rendered;
    },
    [fetchAboutPageAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.errors;
    },
  },
});

export const selectAboutPage = (state) => state.about;
export default aboutSlice.reducer;
