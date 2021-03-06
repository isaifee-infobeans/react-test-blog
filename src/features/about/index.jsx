import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sanitizeHtml from "sanitize-html";
import parseHtml from "html-react-parser";
import { fetchAboutPageAsync, selectAboutPage } from "../about/aboutSlice";

/**
 * About page component to show `about us` section from the Wordpress URL
 * @returns {div}
 */
const About = () => {
  const dispatch = useDispatch();
  const aboutPage = useSelector(selectAboutPage);

  useEffect(() => {
    dispatch(fetchAboutPageAsync());
  }, []);

  return (
    <div>
      <h1>{parseHtml(sanitizeHtml(aboutPage.title))}</h1>

      <div className="page"> {parseHtml(aboutPage.body)} </div>
    </div>
  );
};

export default About;
