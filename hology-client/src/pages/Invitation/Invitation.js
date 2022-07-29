import React, { useEffect, useState } from "react";
import "../Homepage/Home.scss";
import Logo from "../../assets/img/logo/logo-color.png";
import Button from "../../components/Button/Button"
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import jwtDecode from "jwt-decode";
import Api from "../../config/Api";

const Invitation = () => {
  const [Check, setCheck] = useState(4);
  const search = useLocation().search
  const [errorMessage, setErrorMessage] = useState("Silahkan coba lagi.")
  const teamTokenGetFromQuery = (new URLSearchParams(search).get('token') == null) ? "" : new URLSearchParams(search).get('token');
  const isPatternMatch = (new RegExp("^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\\-\\+\\/=]*)").test(teamTokenGetFromQuery))
  const teamTokenDecoded = !isPatternMatch ? "Invalid" : jwtDecode(teamTokenGetFromQuery)

  const gabungKeTeam = (teamId) => {
    Api.post(`api/teams/addMember`, {team_id: teamId}, {
      headers: {
        Authorization: "Bearer " + String(localStorage.getItem("h0_ni128ehiond1289n"))
      }
    })
    .then(res => {
      console.log(res)
      setCheck(5)
    })
    .catch(err => {
      console.log(JSON.stringify(err))
    })
  }

  const menujuDashboard = () => {
    localStorage.clear()
  }

  useEffect(() => {
    if (teamTokenDecoded === "Invalid") setCheck(1)
    // if (!teamTokenGetFromQuery) setCheck(2)
    if (localStorage.getItem("h0_ni128ehiond1289n") === null || localStorage.getItem("h0_s7yf8q7g398fh924") === null || localStorage.getItem("h0_sd8h28jedf") === null) setCheck(2)
    console.log(teamTokenDecoded.team_id)
    if (localStorage.getItem("h0_s7yf8q7g398fh924") !== null && JSON.parse(localStorage.getItem("h0_s7yf8q7g398fh924")).team_id !== null) {
      setErrorMessage("Anda sudah memiliki tim!")
      setCheck(3)
    }
  }, [])
  return (
    <>
      <div className="section-home-full-1">
        <div className="text">
          {Check === 1 && (
            <div className="title">
              <Header size="l" noLine>Link tidak valid</Header>
            </div>
          )}
          {Check === 2 && (
            <div className="title">
              <Header size="l" noLine>Anda belum Login</Header>
            </div>
          )}
          {Check === 3 && (
            <>
              <div className="title">
                <Header size="l" noLine>Gagal</Header>
              </div>
              <div className="description">
                <Paragraph>{errorMessage}</Paragraph>
              </div>
            </>
          )}
          {Check === 4 && (
            <>
              <div className="title">
                <Header size="l" noLine>Siap bergabung?</Header>
              </div>
              <div className="description">
                <Button onClicked={() => {gabungKeTeam(teamTokenDecoded.team_id)}}>Ya, saya anggota tim ini!</Button>
              </div>
            </>
          )}
          {Check === 5 && (
            <>
              <div className="title">
                <Header size="l" noLine>Sukses!</Header>
              </div>
              <div className="description">
                <Link to="/dashboard">
                  <Button onClicked={() => menujuDashboard}>Menuju dashboard</Button>
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo hology" className="logo" />
        </div>
      </div>
      {/*{(status === 1 || status === 3) && (*/}
      {/*  <Redirect to="/dashboard"/>*/}
      {/*)}*/}
      {/*{status === 2 && (*/}
      {/*  <Redirect to={"/login/" + token}/>*/}
      {/*)}*/}
    </>
  );
};

export default Invitation;
