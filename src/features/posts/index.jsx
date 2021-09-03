import React, { useEffect, useMemo } from "react";
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

  const postData = useMemo(() => {
    return posts.map((post) => <Post key={post.id} post={post} />);
  }, [posts]);

  return (
    <div itemScope itemType="https://schema.org/Blog">
      {postData}
    </div>
  );
};

export default Posts;
