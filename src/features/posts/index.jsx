import React from "react";
import "./index.css";
import Post from "./components/Post";

const Posts = () => {
  return (
    <div itemScope itemType="https://schema.org/Blog">
      <Post />
    </div>
  );
};

export default Posts;
