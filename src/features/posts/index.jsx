import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Post from "./components/Post";
import { fetchPostsAsync, selectPosts } from "../posts/postsSlice";

/**
 * Posts component to render the list of posts.
 * @returns {Posts} renders the list of Post components.
 */
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
