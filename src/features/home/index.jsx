import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import Posts from "../posts/index";
import { selectSession } from "../../app/sessionSlice";

const Home = () => {
  const session = useSelector(selectSession);

  return (
    <div className="home">
      <section className="welcome logged-in">{`Welcome ${session.displayName}!`}</section>
      <Posts />
    </div>
  );
};

export default Home;
