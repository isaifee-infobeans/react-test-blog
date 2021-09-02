import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Post from "./components/Post";
import { fetchPostsAsync, selectPosts } from "../posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return (
    <div itemScope itemType="https://schema.org/Blog">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
