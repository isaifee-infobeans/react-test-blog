import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import "./List.css";

/**
 * List component to render the list of posts.
 * @returns {List} renders the list of Post components.
 */
const List = ({ posts }) => {
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

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishDate: PropTypes.string,
      author: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};

Post.defaultProps = {
  posts: [],
};
