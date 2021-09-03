import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  sessionActions,
  fetchAuthTokenAsync,
  setAuthToken,
} from "../../app/sessionSlice";
import Form from "./components/Form";

/**
 * Login page component for login form
 * @returns {Login} returns login form with username and password fields.
 */
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState("");

  const handleSubmit = (params) => {
    fetchAuthTokenAsync(params)
      .then((data) => {
        setAuthToken(data.token);
        dispatch(
          sessionActions.setSession({
            username: params.username,
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

  return <Form onSubmit={handleSubmit} errors={errors} />;
};

export default Login;
