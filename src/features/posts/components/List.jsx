import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../posts/postsSlice";
import Post from "./Post";
import "./List.css";

/**
 * List component to render the list of posts.
 * @returns {div}
 */
const List = () => {
  const posts = useSelector(selectPosts);

  const postData = useMemo(() => {
    return posts.map((post) => <Post key={post.id} post={post} />);
  }, [posts]);

  return (
    <div itemScope itemType="https://schema.org/Blog">
      {postData}
    </div>
  );
};

export default List;
