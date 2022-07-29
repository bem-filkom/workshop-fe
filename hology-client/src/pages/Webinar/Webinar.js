import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import ImgContent from "../../assets/img/webinar/webinar-people.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import People1 from "../../assets/img/webinar/webinar1-people.png";
import People2 from "../../assets/img/webinar/webinar2-people.png";
import People3 from "../../assets/img/webinar/webinar2-people2.png";
import Clock from "../../assets/img/webinar-card/clock.svg";
import Location from "../../assets/img/webinar-card/location.svg";
import Calendar from "../../assets/img/webinar-card/calendar.svg";

import "./Webinar.scss";

const Webinar = () => {
  return (
    <>
      <Helmet>
        <title>Webinar | HOLOGY 4.0</title>
      </Helmet>
      <div className="webinar-section">
        <div className="webinar-regist">
          <div className="title">
            <Header size="l" noLine wrap>
              WEBINAR NATIONAL IT
              <br /> HOLOGY 4.0
            </Header>
          </div>
          <div className="content1">
            <div className="img-content">
              <img src={ImgContent} alt="" className="imgContent" />
            </div>
            <Link to="dashboard/webinar">
              {localStorage.setItem("h0_skmvc091fh29", "mvfjf0j9fh82p")}
              {localStorage.removeItem("h0_skmvc091fh28")}
              <div className="btn">
                <Button>Daftar Sekarang</Button>
              </div>
            </Link>
          </div>
        </div>
        <div className="title">
          <Header size="l" noLine wrap>
            WEBINAR LIST
          </Header>
        </div>
        <div className="content">
          <div className="box1">
            <div className="titlenya">
              <Paragraph large bold>
                WEBINAR 1 <br />
                Press the Leak Button: Understanding Data Breach and How to
                Prevent It
              </Paragraph>
            </div>
            <div className="wrapper-content">
              <div className="people-webinar">
                <img src={People1} alt="webinar1" className="people-webinar1" />
                <Paragraph bold>TEGUH APRIANTO</Paragraph>
                <Paragraph> Founder of Ethical Hacker Indonesia</Paragraph>
              </div>
              <div className="time-webinar">
                <div className="card-content">
                  <img src={Calendar} alt="Calendar" />
                  <Paragraph>11 SEPTEMBER 2021</Paragraph>
                </div>
                <div className="card-content">
                  <img src={Clock} alt="clock" />
                  <Paragraph>19.00 WIB</Paragraph>
                </div>
                <div className="card-content">
                  <img src={Location} alt="location" />
                  <Paragraph>YOUTUBE</Paragraph>
                </div>
              </div>
            </div>
          </div>

          <div className="box2">
            <div className="titlenya">
              <Paragraph large bold>
                WEBINAR 2 <br />
                is it crucial to be first product to market
              </Paragraph>
            </div>
            <div className="wrapper-contents">
              <div className="people-webinar">
                <div className="people1">
                  <img
                    src={People2}
                    alt="webinar1"
                    className="people-webinar1"
                  />
                  <Paragraph bold>
                    AYU MADE KRISNA DEWI
                    <Paragraph>Product Manager at GREDU</Paragraph>
                  </Paragraph>
                </div>
                <div className="people1">
                  <img
                    src={People3}
                    alt="webinar1"
                    className="people-webinar1"
                  />
                  <Paragraph bold>
                    KEVIN KENNEDY KIE
                    <Paragraph>Senior Product Owner at Mekari</Paragraph>
                  </Paragraph>
                </div>
              </div>
              <div className="time-webinar">
                <div className="card-content">
                  <img src={Calendar} alt="Calendar" />
                  <Paragraph>12 SEPTEMBER 2021</Paragraph>
                </div>
                <div className="card-content">
                  <img src={Clock} alt="clock" />
                  <Paragraph>13.00 WIB</Paragraph>
                </div>
                <div className="card-content">
                  <img src={Location} alt="location" />
                  <Paragraph>YOUTUBE</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle"></div>
      </div>

      <div className="flashback-section">
        <div className="background">
          <div className="title">
            <Header size="l" noLine wrap>
              FLASHBACK HOLOGY 3.0
            </Header>
          </div>
          <div className="fb-wrapper">
            <div className="contentssss">
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
            <div className="box3"></div>
          </div>
          <div className="buttons">
            <Link to="dashboard/webinar">
              <Button>Daftar Sekarang</Button>
            </Link>
          </div>
          <div className="home"></div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
