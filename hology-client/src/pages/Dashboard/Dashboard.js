import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, Link, NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import DashboardWorkshop from "./DashboardWorkshop";
import DashboardWebinar from "./DashboardWebinar";
import DashboardCompetition from "./DashBoardCompetition";
import DashboardEditProfile from "./DashboardEditProfile";
import { Helmet } from "react-helmet";

import Button from "../../components/Button/Button";
import "./Dashboard.scss";
import CheckLogin from "../../config/CheckLogin";
import Api from "../../config/Api";

const Dashboard = () => {

  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let parsedJsonData = JSON.parse(localStorage.getItem("h0_s7yf8q7g398fh924"));

  // useEffect(()=>{
  //   var nama = getNamaTim(parsedJsonData.team_id).data.message[0].team_name
  //   userData.userTeam = nama
  //   console.log(nama)
  // })

  const getNamaTim = (id) => {
    return Api.get("/api/teams/detail/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("h0_ni128ehiond1289n"),
      }
    }).then(res => {
      return res.data.message[0].team_name
    })
  }

  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userBirthDate, setUserBirthDate] = useState("");
  let [userGender, setUserGender] = useState("");
  let [userTeam, setUserTeam] = useState("");

  useEffect(async () => {
    setUserName(parsedJsonData.user_name);
    setUserEmail(parsedJsonData.user_email);
    setUserGender(
      parsedJsonData.user_gender === "M" ? "Laki-Laki" : "Perempuan"
    );
    setUserBirthDate(new Date(parsedJsonData.user_birthdate).getDate() + " " +
      namaBulan[new Date(parsedJsonData.user_birthdate).getMonth()] + " " +
      new Date(parsedJsonData.user_birthdate).getFullYear(),
    );
    setUserTeam(parsedJsonData.team_id !== null ? await  getNamaTim(parsedJsonData.team_id) : "Belum Ada Tim");
  });
  // let [userData] = useState({
  //   userName: parsedJsonData.user_name,
  //   userEmail: parsedJsonData.user_email,
  //   userGender: parsedJsonData.user_gender === "M" ? "Laki-Laki" : "Perempuan",
  //   userBirthDate: new Date(parsedJsonData.user_birthdate).getDate() + " " +
  //     namaBulan[new Date(parsedJsonData.user_birthdate).getMonth()] + " " +
  //     new Date(parsedJsonData.user_birthdate).getFullYear(),
  //   userTeam: parsedJsonData.team_id ? getNamaTim(parsedJsonData.team_id).then(res => {
  //     return res
  //   }) : "Belum Ada Tim"
  // });
  // let [userData] = useState({
  //   userName: parsedJsonData.user_name,
  //   userEmail: parsedJsonData.user_email,
  //   userGender: parsedJsonData.user_gender === "M" ? "Laki-Laki" : "Perempuan",
  //   userBirthDate: new Date(parsedJsonData.user_birthdate).getDate() + " " +
  //     namaBulan[new Date(parsedJsonData.user_birthdate).getMonth()] + " " +
  //     new Date(parsedJsonData.user_birthdate).getFullYear(),
  //   userTeam: parsedJsonData.team_id ? getNamaTim(parsedJsonData.team_id) : "Belum Ada Tim"
  // });

  return (
    <>
      <Helmet>
        <title>Dashboard | HOLOGY 4.0</title>
      </Helmet>
      <div className="dashboard-container">
        <div className="title">
          <Header noLine wrap>
            Hai, {userName}
          </Header>
        </div>
        <div className="user-data">
          <div className="title-data">
            <Header noLine wrap>
              Data Diri
            </Header>
          </div>
          <Paragraph marbot>Email: {userEmail} </Paragraph>
          <Paragraph marbot>Tanggal Lahir: {userBirthDate} </Paragraph>
          <Paragraph marbot>Jenis Kelamin: {userGender} </Paragraph>
          <Paragraph marbot>Nama Tim: {userTeam} </Paragraph>
          <Link to="/dashboard/editprofile" className="profile-link">
            <div className="sunting-profile">SUNTING PROFILE</div>
          </Link>
        </div>

        <div className="dashboard">
          <div className="sidebar">
            <NavLink
              className="sidebar_link"
              activeClassName="sidebar_link--active"
              to="/dashboard/competition"
            >
              Competition
            </NavLink>
            <NavLink
              className="sidebar_link"
              activeClassName="sidebar_link--active"
              to="/dashboard/webinar"
            >
              Webinar
            </NavLink>
            <NavLink
              className="sidebar_link"
              activeClassName="sidebar_link--active"
              to="/dashboard/workshop"
            >
              Workshop
            </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route
                exact
                path="/dashboard"
                render={() => <Redirect to="/dashboard/competition" />}
              />
              <Route
                path="/dashboard/webinar"
                render={() => <DashboardWebinar />}
              />
              <Route
                path="/dashboard/workshop"
                render={() => <DashboardWorkshop />}
              />
              <Route
                path="/dashboard/competition"
                render={() => <DashboardCompetition />}
              />
              <Route
                path="/dashboard/editprofile"
                render={() => <DashboardEditProfile />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;