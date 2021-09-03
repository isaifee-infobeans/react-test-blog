import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./features/home";
import About from "./features/about";
import Authenticated from "./components/Authenticated";
import Login from "./features/login";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

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
