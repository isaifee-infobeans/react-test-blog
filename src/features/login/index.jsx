import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setSession } from "../../app/sessionSlice";
import fetchAuthToken from "../../api/authApi";
import Form from "./components/Form";

/**
 * Login page component for login form
 * @returns {Login} returns login form with username and password fields.
 */
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState("");
  const [, setAuthToken] = useCookies(["authToken"]);

  const handleSubmit = (params) => {
    fetchAuthToken(params)
      .then((data) => {
        setAuthToken("authToken", data.token);
        dispatch(
          setSession({
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
