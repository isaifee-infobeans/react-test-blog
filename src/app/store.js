import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import aboutPageReducer from "../features/about/aboutSlice";
import sessionReducer from "./sessionSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    about: aboutPageReducer,
    session: sessionReducer,
  },
});
export default store;
