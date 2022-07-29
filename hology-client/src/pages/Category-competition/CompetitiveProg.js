import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Timeline from "../../assets/img/competition/cp-times.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./CategoryCompetition.scss";

const CompetitiveProg = () => {
  return (
    <>
      <Helmet>
        <title>Competitive Programming | HOLOGY 4.0</title>
      </Helmet>
      <div className="wrapper-cat">
        <div className="sec-1">
          <div className="big-title">
            <Header size="xl" noLine>
              COMPETITION
            </Header>
          </div>
          <div className="title">
            <Header noLine>Competitive Programming</Header>
          </div>
          <div className="description">
            <Paragraph justify>
              Competitive Programming adalah sebuah kontes pemrograman tingkat
              nasional yang diadakan oleh Fakultas Ilmu Komputer Universitas
              Brawijaya dalam rangkaian acara Hology 4.0. Kompetisi ini
              merupakan ajang untuk menguji kemampuan dan nalar peserta dalam
              menyelesaikan berbagai permasalahan komputasional yang diberikan.
              Peserta dituntut untuk memecahkan persoalan tersebut dalam kurun
              waktu tertentu dan dengan metode yang seefisien dan seefektif
              mungkin menggunakan bahasa pemrograman Java, C, atau C++.
              Perlombaan ini terdiri dari dua tahap, yakni penyisihan dan final
              yang setiap tahapannya dilaksanakan secara daring.
            </Paragraph>
          </div>
          <div className="button-wrapper">
            <Link to="/dashboard/competition" className="Link">
              <div className="guide-btn">
                <div className="btn">Daftar Lomba</div>
              </div>
            </Link>
            <div className="guide-btn">
              <a href="http://bit.ly/GuidebookCPHOLOGY_4" target="_blank" rel="noreferrer" className="Link">
                <div className="guide-btn">
                  <div className="btn">Download Guide Book</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="sec-2">
          <div className="big-title">
            <Header size="l" noLine wrap>
              Competition Timeline
            </Header>
          </div>
          <div className="img-time">
            <img src={Timeline} alt="timeline" className="ctf-timeline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitiveProg;
