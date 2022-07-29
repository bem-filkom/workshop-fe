import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Timeline from "../../assets/img/competition/ctf-times.svg";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import "./CategoryCompetition.scss";

const CaptureTheFlag = () => {
  return (
    <>
      <Helmet>
        <title>Capture The Flag | HOLOGY 4.0</title>
      </Helmet>
      <div className="wrapper-cat">
        <div className="sec-1">
          <div className="big-title">
            <Header size="xl" noLine>
              COMPETITION
            </Header>
          </div>
          <div className="title">
            <Header noLine>Capture The Flag</Header>
          </div>
          <div className="description">
            <Paragraph justify>
              Capture The Flag adalah sebuah kompetisi di bidang jaringan dan
              keamanan informasi yang diselenggarakan oleh Fakultas Ilmu
              Komputer Universitas Brawijaya (FILKOM UB). Kompetisi Capture The
              Flag juga mengangkat isu yang berkaitan dengan implementasi
              pemecahan masalah yang dikaji sistem keamanan jaringan dan
              komputer serta keamanan informasi. Dalam kompetisi ini, peserta
              mencari dan mendeteksi lalu mengeksploitasi kelemahan dalam
              berbagai macam permasalahan untuk mendapatkan dan mengumpulkan
              flag sebanyak-banyaknya.
            </Paragraph>
          </div>
          <div className="button-wrapper">
            <Link to="/dashboard/competition" className="Link">
              <div className="guide-btn">
                <div className="btn">Daftar Lomba</div>
              </div>
            </Link>
            <div className="guide-btn">
              <a href="http://bit.ly/GuidebookCTFHOLOGY_4" target="_blank" rel="noreferrer" className="Link">
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

export default CaptureTheFlag;
