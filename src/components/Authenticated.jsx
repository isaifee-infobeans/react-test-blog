import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectSession,
  fetchAuthTokenAsync,
  sessionActions,
} from "../app/sessionSlice";

const Authenticated = ({ children }) => {
  const session = useSelector(selectSession);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session.isAuthenticated) return;

    fetchAuthTokenAsync()
      .then((data) => {
        console.log("DATA", data);
        dispatch(
          sessionActions.setSession({
            username: "",
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
