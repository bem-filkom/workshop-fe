import React, {useState} from "react";
import Fieldinput from "../../components/Field-input/Fieldinput";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";
import "./ForgotPass.scss";
import Api from "../../config/Api";

const ForgotPass = () => {
  const [email, setEmail] = useState()

  const sendEmail = () => {
    Api.post("/api/auth/forgot-password/", {"email": email})
    .then(res => {
      alert('Berhasil mengirimkan email!')
      })
    .catch(e => console.log(e))
  }

  return (
    <>
      <Helmet>
        <title>Forgot Password | HOLOGY 4.0</title>
      </Helmet>
      <div>
        <div className="wrapper">
          <div className="title">
            <Header size="r" center noLine>
              Lupa Password
            </Header>
          </div>
          <Fieldinput
            label="Email Anda"
            name="email"
            type="email"
            marbott
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <br />
          <Button onClicked={() => {sendEmail()}}>Kirimkan email pemulihan</Button>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
