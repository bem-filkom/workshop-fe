import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Redirect, useParams } from "react-router";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet";
import {useLocation} from "react-router-dom";
import "./ForgotPass.scss";
import Api from "../../config/Api";

const NewPass = () => {
  const search = useLocation().search
  const [isSuccess, setIsSuccess] = useState("maybe");
  const [isSending, setIsSending] = useState(false);
  const [isValid, setValid] = useState(true);

  const userEmail = new URLSearchParams(search).get('email');
  const userToken = new URLSearchParams(search).get('token');

  const [payload, setPayload] = useState({
    email: "",
    password: "",
    token: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setPayload({...payload, email: userEmail, token: userToken})
    console.log(payload.email)
    console.log(payload.token)
  }, [])

  const sendConfirmation = () => {
    Api.post("/api/auth/password/change/", payload)
    .then(res => {
      console.log(res)
      alert("Berhasil terganti!")
      setIsSuccess(true)
    })
    .catch(e => console.log(e))
  }

  return (
    <>
      <Helmet>
        <title>New Password | HOLOGY 4.0</title>
      </Helmet>
      {isSuccess === true && <Redirect to="/login" />}

      {!isValid && isSuccess === false && (
        <>
          <div className="wrapper">
            <div className="title">
              <Header size="r" center noLine>
                Link tidak valid!
              </Header>
            </div>
          </div>
        </>
      )}

      {isValid && (
        <div className="wrapper">
          <div className="title">
            <Header size="r" center noLine>
              Masukkan Password Baru
            </Header>
          </div>
          <Fieldinput
            label="Password"
            name="password"
            type="password"
            placeholder="8-25 char upper/lowercase/digits"
            marbott
            required
            value={payload.password}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
          <Fieldinput
            label="Konfirmasi Password"
            name="confirm_password"
            type="password"
            placeholder="8-25 char upper/lowercase/digits"
            marbott
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <br />
          {confirmPassword !== "" && confirmPassword !== payload.password && (
            <Paragraph>
              Konfirmasi password tidak cocok! Pastikan isian password sama.
              <br />
              <br />
              <br />
            </Paragraph>
          )}
          <br />
          <br />
          <Button
          onClicked = {
            () => sendConfirmation()
          }
          >
            Ubah password saya
          </Button>
        </div>
      )}
    </>
  );
};

export default NewPass;
