import React from "react";
import parseHtml from "html-react-parser";

const Post = ({ post }) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      className="post"
    >
      <header>
        <h2 itemProp="headline">{post.title}</h2>

        <div className="date">
          <strong>Publish Date</strong>:
          <span itemProp="datePublished">
            <time dateTime={post.publishDate}> {post.publishDate}</time>
          </span>
        </div>

        <div className="author">
          <strong>Author</strong>:<span itemProp="author"> {post.author}</span>
        </div>
      </header>

      <div itemProp="articleBody" className="content">
        {parseHtml(post.body)}
      </div>
    </article>
  );
};

export default Post;
