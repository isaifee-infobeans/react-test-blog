import React from "react";
import { render } from "@testing-library/react";
import Post from "./Post";

describe("<Post> tests", () => {
  test("should render the Post data", () => {
    const postData = {
      title: "Blog title",
      publishDate: "01-01-2021",
      author: "John Doe",
      body: "This is test blog content",
    };

    const { container } = render(<Post id="123" post={postData} />);
    const title = container.querySelector(".post header h2");
    expect(title).toHaveTextContent(postData.title);

    const publishDate = container.querySelector(".date");
    expect(publishDate).toHaveTextContent("Publish Date");
    expect(publishDate).toHaveTextContent(postData.publishDate);

    const author = container.querySelector(".author");
    expect(author).toHaveTextContent("Author");
    expect(author).toHaveTextContent(postData.author);

    const body = container.querySelector(".content");
    expect(body).toHaveTextContent(postData.body);
  });
});
