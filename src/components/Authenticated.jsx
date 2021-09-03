import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectSession,
  sessionActions,
  getAuthToken,
  deleteAuthToken,
} from "../app/sessionSlice";
import { validateAuthToken } from "../api/authApi";

const Authenticated = ({ children }) => {
  const session = useSelector(selectSession);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session.isAuthenticated) return;

    const authToken = getAuthToken();
    if (!authToken) {
      history.push("/login");
      return;
    }

    validateAuthToken()
      .then(() => {
        dispatch(
          sessionActions.setSession({
            displayName: "",
            isAuthenticated: true,
          })
        );
      })
      .catch(() => {
        deleteAuthToken();
        history.push("/login");
      });
  }, [session]);

  return <>{session.isAuthenticated && children}</>;
};

export default Authenticated;
