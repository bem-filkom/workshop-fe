import React from "react";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";
import ImgContent from "../../assets/img/webinar/webinar-people.png";
import Logo1 from "../../assets/img/workshop/logo/logo1.svg"
import Logo2 from "../../assets/img/workshop/logo/logo2.svg"
import Logo3  from "../../assets/img/media/sponsor/dsi_logo.svg";
import Timeline from "../../assets/img/workshop/wr-times.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./WIP.scss";

const WIP = () => {
  return (
    <>
      <Helmet>
        <title>WIP | HOLOGY 5.0</title>
      </Helmet>
      <div className="academy-section">
        <div className="title">
          <Header size="l" noLine wrap>
            INI WIP
          </Header>
        </div>
        <div className="logo-content">
          <img src={Logo2} alt="Progate" />
          <img src={Logo1} alt="Hology" />
          <img src={Logo3} alt="Data Science Indonesia" />
        </div>
        <div className="description">
          <Paragraph justify>
            Workshop merupakan salah satu rangkaian acara yang diselenggarakan
            oleh HOLOGY dengan berkolaborasi bersama Progate dan Data Science
            Indonesia yang bertujuan untuk memberikan pengetahuan dan
            keterampilan secara luas kepada masyarakat umum terutama mahasiswa
            bersama para narasumber profesional di bidang IT. Terdapat 2 tema di
            hari berbeda yang dapat dipilih pada Workshop HOLOGY 4.0 kali ini.
            Kegiatan ini dapat diikuti secara gratis untuk seluruh kalangan
            masyarakat.
          </Paragraph>
        </div>
        <div className="registration">
          <div className="img-content">
            <img src={ImgContent} alt="" className="imgContent" />
          </div>
          <Link to="/dashboard/workshop">
            {localStorage.setItem("h0_skmvc091fh28", "jf0ncf2f48gjs")}
            {localStorage.removeItem("h0_skmvc091fh29")}
            <div className="btn">
              <Button>Daftar Sekarang</Button>
            </div>
          </Link>
        </div>
      </div>
      <div className="wr-timeline">
        <div className="title">
          <Header noLine wrap>
            Workshop Timeline
          </Header>
          <div className="img-time">
            <img src={Timeline} alt="timeline" className="wr-timeline-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WIP;
