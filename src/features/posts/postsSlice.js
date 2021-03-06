import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchPosts from "../../api/postsApi";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const response = await fetchPosts();
    return response;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPostsAsync.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPostsAsync.fulfilled]: (state, action) => {
      state.status = "idle";
      state.data = action.payload.map((post) => ({
        id: post.id,
        title: post.title.rendered,
        publishDate: post.date,
        body: post.content.rendered,
        author: post.author,
      }));
    },
    [fetchPostsAsync.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.errors;
    },
  },
});

export const selectPosts = (state) => state.posts.data;
export default postsSlice.reducer;
