import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./components/List";
import { fetchPostsAsync, selectPosts } from "../posts/postsSlice";

/**
 * Component to fetch the list of posts from the Wordpress URL.
 * @returns {Posts} renders the List component which contains list of posts.
 */
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return <List posts={posts} />;
};

export default Posts;
