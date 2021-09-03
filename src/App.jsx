import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./features/home";
import About from "./features/about";
import Authenticated from "./components/Authenticated";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Authenticated>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Authenticated>
      </Switch>
    </div>
  );
};

export default App;
