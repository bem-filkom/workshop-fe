import React from "react";
import { Route, Redirect } from "react-router-dom";
import CheckLogin from "./CheckLogin";

function LoginBarrier({ component: Component, ...rest }) {
  const isLoggedIn = !(CheckLogin())
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
}

export default LoginBarrier;