import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sessionActions, deleteAuthToken } from "../../app/sessionSlice";

/**
 * Logout page component to logout and destroy the JWT session token.
 */
const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    deleteAuthToken();
    dispatch(
      sessionActions.setSession({
        isAuthenticated: false,
      })
    );
    history.push("/login");
  }, []);

  return <h1> Logging out </h1>;
};

export default Logout;
