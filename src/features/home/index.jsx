import React from "react";
import "./index.css";
import Posts from "../posts/index";

const Home = () => {
  return (
    <>
      <section className="welcome logged-in">Welcome username!</section>
      <Posts />
    </>
  );
};

export default Home;
