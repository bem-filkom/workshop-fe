import React from "react";
import {Redirect} from "react-router";
import Api from "./Api";
import { clearJwt } from "./SessionJWT";
// import {invalidateSession} from "./SessionHelper";

// eslint-disable-next-line react/prop-types
const CheckSession =  ({loggedOut = false, redirect = false, children = null}) => {
  let tokenBearer = localStorage.getItem("h0_ni128ehiond1289n")
  let tokenParsedJson = JSON.parse(localStorage.getItem("h0_s7yf8q7g398fh924"))
  let hasToken = localStorage.getItem("h0_s7yf8q7g398fh924")
    && tokenBearer
    && Date.now() < localStorage.getItem("h0_sd8h28jedf") * 1000;
  if(tokenParsedJson){
   Api.get(("/api/users/")+tokenParsedJson.user_id, {
      headers : {
        "Authorization" : "Bearer " + tokenBearer
      }
    }).then(()=>{
        return null
    }).catch((e)=>{
      clearJwt()
      return <Redirect to="/login"/>;
    })
  }
  
  if (!loggedOut && !hasToken) {
    if (redirect) {
      clearJwt();
      return <Redirect to="/login"/>;
    }
    return null;
  } else if (loggedOut && hasToken) {
    if (redirect) return <Redirect to="/dashboard"/>;
    return null;
  }
  if (children) return children;
  return null;
};

export default CheckSession;
