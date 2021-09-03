import React from "react";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./App.css";
import Header from "./components/Header";
import Home from "./features/home";
import About from "./features/about";
import Authenticated from "./components/Authenticated";
import Login from "./features/login";
import Logout from "./features/logout";
import requestInceptor from "./api/requestInterceptor";

const App = () => {
  const [cookie] = useCookies(["authToken"]);
  requestInceptor.setAuthInterceptors(cookie.authToken);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        {/* A wrapper component for protected paths */}
        <Authenticated>
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={Home} />
        </Authenticated>
      </Switch>
    </div>
  );
};

export default App;
