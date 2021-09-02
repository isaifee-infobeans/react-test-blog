import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./features/home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
