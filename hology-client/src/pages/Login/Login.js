import React, { useState } from "react";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./Login.scss";
import Api from "../../config/Api";
import { StoreJwt } from "../../config/SessionJWT";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onEnterEvent = (e) => {
    if (e.keyCode === 13) userLogin()
  }

  const userLogin = async () => {
    try {
      await Api.post("/api/auth/signin/", login, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          let jwtToken = res.data.message.token;
          StoreJwt(jwtToken);
          if (localStorage.getItem("h0_skmvc091fh28")) history.push("/dashboard/workshop")
          else if (localStorage.getItem("h0_skmvc091fh29")) history.push("/dashboard/webinar")
          else history.push("/dashboard");
        })
        .catch((e) => {
          alert('Password atau Email yang dimasukkan salah!')
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | HOLOGY 4.0</title>
      </Helmet>
      <div className="container">
        <div className="form-login-container">
          <div className="title">
            <Header size="r" noLine children="Login" />
          </div>
          <Fieldinput
            label="Email"
            name="email"
            type="email"
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            onKeyDown={(e) => onEnterEvent(e)}
            required
            marbott
            fullWidth
          />
          <Fieldinput
            label="Password"
            name="password"
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            onKeyDown={(e) => onEnterEvent(e)}
            marbott
            required
            fullWidth
          />
          <div className="forgot-pass">
            <Paragraph>
              <Link className="link-register" to="/forgot-password">
                Forgot password?
              </Link>
            </Paragraph>
          </div>
          <div className="button-wrap">
            <Button
              children="LOGIN"
              variant="secondary"
              onClicked={userLogin}
            />
          </div>
          <div className="text-wrap">
            <div className="description">
              <Paragraph children="if you have no account" />
            </div>
            <Paragraph>
              <Link className="link-register" to="/register">
                CREATE AN ACCOUNT
              </Link>
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
