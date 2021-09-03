import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { selectSession, setSession } from "../app/sessionSlice";
import { validateAuthToken } from "../api/authApi";

/**
 * Wrapper component for the protected routes.
 * @param {children} - Array of child components which gets rendered after authentication.
 * @returns {render children} after successful authentication renders children
 */
const Authenticated = ({ children }) => {
  const session = useSelector(selectSession);
  const history = useHistory();
  const dispatch = useDispatch();
  const [authToken, , deleteAuthToken] = useCookies(["authToken"]);

  useEffect(() => {
    if (session.isAuthenticated) return;

    if (!authToken) {
      history.push("/login");
      return;
    }

    validateAuthToken()
      .then(() => {
        dispatch(
          setSession({
            displayName: "",
            isAuthenticated: true,
          })
        );
      })
      .catch(() => {
        deleteAuthToken("authToken");
        history.push("/login");
      });
  }, [session]);

  return <>{session.isAuthenticated && children}</>;
};

export default Authenticated;
