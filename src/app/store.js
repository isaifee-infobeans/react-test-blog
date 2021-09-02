import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import aboutPageReducer from "../features/about/aboutSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    about: aboutPageReducer,
  },
});
export default store;
