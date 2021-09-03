import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import List from "./components/List";
import { fetchPostsAsync } from "../posts/postsSlice";

/**
 * Component to fetch the list of posts from the Wordpress URL.
 * @returns {Posts} renders the List component which contains list of posts.
 */
const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  return <List />;
};

export default Posts;
