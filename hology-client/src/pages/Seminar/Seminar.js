import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import BackgroundDecoration from "../../components/BackgrounDecorations/BackgroundDecoration";
import vector from "../../assets/img/background-decorations/bg-decoration-2.png";

import "./Seminar.scss";
import Speaker from "./Components/Speaker";

const Seminar = () => {
  return (
    <>
      <Helmet>
        <title>Seminar | HOLOGY 5.0</title>
      </Helmet>
      <section className="seminar-hero">
        <div className="hero">
          <div className="info">
            <h1 className="info-title">
              National <span className="accent">Seminar</span>
            </h1>
            <p className="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              debitis.
            </p>
            <div className="button-container">
              <button>Register Now</button>
              <button>Download PDF</button>
            </div>
            <div className="date-container">
              <div className="date-item">
                <h4>Date</h4>
                <h2>9 JULY 2022</h2>
              </div>
              <div className="date-item">
                <h4>Time</h4>
                <h2>7 AM - 12PM</h2>
              </div>
              <div className="date-item">
                <h4>Place</h4>
                <h2>Auditorium Algoritma</h2>
              </div>
            </div>
          </div>

          <div className="vector left"></div>
          <div className="vector right"></div>
        </div>
      </section>

      {/* <div className="test"></div>
      <div className="test-2"></div>
      <div className="test-3"></div> */}

      <section className="seminar-speaker">
        <div className="speaker">
          <h2 className="speaker-title">
            OUR <span className="accent">SPEAKER</span>
          </h2>
          <div className="speaker-container">
            <Speaker></Speaker>
            <Speaker></Speaker>
            <Speaker></Speaker>
            <Speaker></Speaker>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seminar;
