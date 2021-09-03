import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { setSession } from "../../app/sessionSlice";

/**
 * Logout page component to logout and destroy the JWT session token.
 */
const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [, , deleteAuthToken] = useCookies(["authToken"]);

  useEffect(() => {
    deleteAuthToken("authToken");
    dispatch(
      setSession({
        isAuthenticated: false,
      })
    );
    history.push("/login");
  }, []);

  return <h1> Logging out </h1>;
};

export default Logout;
