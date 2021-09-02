import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import parseHtml from "html-react-parser";
import { fetchAboutPageAsync, selectAboutPage } from "../about/aboutSlice";

const About = () => {
  const dispatch = useDispatch();
  const aboutPage = useSelector(selectAboutPage);

  useEffect(() => {
    dispatch(fetchAboutPageAsync());
  }, []);

  return (
    <div>
      <h1>{parseHtml(aboutPage.title)}</h1>

      <div className="page"> {parseHtml(aboutPage.body)} </div>
    </div>
  );
};

export default About;
