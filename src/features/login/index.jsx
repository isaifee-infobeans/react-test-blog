import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  sessionActions,
  fetchAuthTokenAsync,
  setAuthToken,
} from "../../app/sessionSlice";
import "./index.css";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAuthTokenAsync({ username: username, password: password })
      .then((data) => {
        setAuthToken(data.token);
        dispatch(
          sessionActions.setSession({
            username: username,
            displayName: data.user_display_name,
            email: data.user_email,
            isAuthenticated: true,
          })
        );
        history.push("/");
      })
      .catch((error) => {
        setErrors(error.response || "Failed to login");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <p className="error">{errors}</p>

      <div className="login">
        <form method="post">
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
