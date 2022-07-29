import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Timeline from "../../assets/img/competition/uiux-times.svg";
import "./CategoryCompetition.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const UIUX = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX | HOLOGY 4.0</title>
      </Helmet>
      <div className="wrapper-cat">
        <div className="sec-1">
          <div className="big-title">
            <Header size="xl" noLine>
              COMPETITION
            </Header>
          </div>
          <div className="title">
            <Header noLine>UI/UX Design</Header>
          </div>
          <div className="description">
            <Paragraph justify>
              Dalam HOLOGY 4.0 ini, diadakan ajang kompetisi UI / UX Design yang
              akan melatih dan mempertajam kemampuan kerja sama para peserta
              dalam mendesain UI / UX. Pada kompetisi UI / UX Design HOLOGY 4.0,
              para peserta berkesempatan untuk berkompetisi dengan mahasiswa
              dari seluruh Indonesia. Para peserta tidak hanya mengerjakan karya
              UI / UX, tetapi juga akan mendapat umpan balik dari
              ahli/profesional di bidang UI / UX. Tahapan dalam kompetisi ini
              terbagi menjadi 2 babak, yaitu babak penyisihan berupa pengumpulan
              proposal dan video, serta babak final dimana para finalis
              mempresentasikan karya tim masing-masing. Para peserta lomba
              dituntut agar dapat saling bekerja sama dalam mendesain antarmuka
              dan pengalaman pengguna yang berorientasi pada kenyamanan dan
              kemudahan bagi pengguna dengan menggunakan pendekatan metodologi
              desain terkait. Dengan demikian, desain antarmuka dan pengalaman
              pengguna yang telah dirancang memiliki kualitas UI / UX yang baik.
            </Paragraph>
          </div>
          <div className="button-wrapper">
            <Link to="/dashboard/competition" className="Link">
              <div className="guide-btn">
                <div className="btn">Daftar Lomba</div>
              </div>
            </Link>
            <div className="guide-btn">
              <a href="http://bit.ly/GuidebookUIUXHOLOGY_4" target="_blank" rel="noreferrer" className="Link">
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

export default UIUX;
