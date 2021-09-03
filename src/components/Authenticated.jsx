import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSession, sessionActions } from "../app/sessionSlice";
import { validateAuthToken } from "../api/authApi";

const Authenticated = ({ children }) => {
  const session = useSelector(selectSession);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session.isAuthenticated) return;

    const token = sessionStorage.getItem("authToken");
    if (!token) {
      history.push("/login");
      return;
    }

    validateAuthToken(token)
      .then(() => {
        dispatch(
          sessionActions.setSession({
            displayName: "",
            isAuthenticated: true,
          })
        );
      })
      .catch(() => {
        history.push("/login");
      });
  }, [session]);

  return <>{session.isAuthenticated && children}</>;
};

export default Authenticated;
