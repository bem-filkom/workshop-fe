import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import EventAJ from "../../assets/img/media/media/EVENT APA AJA.png";
import MalangJakarta from "../../assets/img/media/media/event malang jakarta.png";
import NewsID from "../../assets/img/media/media/EVENT NEWS ID 1.png";
import Pelajar from "../../assets/img/media/media/event pelajar.png";
import SuraBandung from "../../assets/img/media/media/event surabaya bandung.png";
import Lingkaran from "../../assets/img/media/media/lingkaran.png";
import EventKampus from "../../assets/img/media/media/LOGO @eventcampus.png";
import EMUB from "../../assets/img/media/media/LOGO EM UB 2021.png";
import InfoEvent from "../../assets/img/media/media/LOGO INFORMASI EVENT.png";
import InfoLomba from "../../assets/img/media/media/logo-@infolomba-png.png";
import MahasiswaID from "../../assets/img/media/media/LOMBA MAHASISWA ID 1.png";
import MediaEvent from "../../assets/img/media/media/MediaEvent.png";
import RMahasiswa from "../../assets/img/media/media/ruang mahasiswa.png";
import TeknoEvent from "../../assets/img/media/media/tekno-event-logo-2.png";
import DewaWeb from "../../assets/img/media/sponsor/dewaweb-square-logo-rgb.png";
import DSI from "../../assets/img/media/sponsor/dsi_logo.png";
import Logo1 from "../../assets/img/media/sponsor/logo1.svg";
import SejutaCita from "../../assets/img/media/media/sejutacita.png";

import LombaMHS from "../../assets/img/media/media/LombaMahasiswa.png";
import LombaLomba from "../../assets/img/media/media/lombaLomba.png";
import KompetisiMaha from "../../assets/img/media/media/KompetisiMahasisw.png";
import KampusUpdate from "../../assets/img/media/media/KampusUpdate.png";
import LombaOnline from "../../assets/img/media/media/LombaOnline.png";
import InformasiEvent from "../../assets/img/media/media/InformasiEvent.png";
import InfoLombaEvent from "../../assets/img/media/media/InfoLombaEvent.png";
import SiswaMalang from "../../assets/img/media/media/SiswaMalang.png";
import LukanAnakIT from "../../assets/img/media/media/LukanAnakIT.png";
import InfoLombaNasional from "../../assets/img/media/media/InfoLombaNasional.png";
import MHSUB from "../../assets/img/media/media/MHSUB.png";
import MHSMLG from "../../assets/img/media/media/MHSMLG.png";
import KampusMalang from "../../assets/img/media/media/KampusMalang.png";
import AcaraMahasiswa from "../../assets/img/media/media/AcaraMahasiswa.png";

import "./Media.scss";

const Media = () => {
  return (
    <>
      <div className="section-home-full-6">
        <div className="square-box-1">
          <div className="description">
            <Paragraph>Sponsor</Paragraph>
            <div className="partner-img-container">
              <img src={DewaWeb} alt="logo-lembaga" className="logo-style-sp" />
              <img src={DSI} alt="logo-lembaga" className="logo-style-sp" />
              <img src={Logo1} alt="logo-lembaga" className="logo-style-sp" />
            </div>
          </div>
        </div>
        <div className="square-box-1">
          <div className="description">
            <Paragraph>Media Partner</Paragraph>
            <div className="partner-img-container">
              <img src={EventAJ} alt="logo-lembaga" className="logo-style" />
              <img
                src={MalangJakarta}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img src={NewsID} alt="logo-lembaga" className="logo-style" />
              <img src={Pelajar} alt="logo-lembaga" className="logo-style" />
              <img
                src={SuraBandung}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img src={Lingkaran} alt="logo-lembaga" className="logo-style" />
              <img
                src={EventKampus}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img src={EMUB} alt="logo-lembaga" className="logo-style" />
              <img src={InfoEvent} alt="logo-lembaga" className="logo-style" />
              <img src={InfoLomba} alt="logo-lembaga" className="logo-style" />
              <img
                src={MahasiswaID}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img src={MediaEvent} alt="logo-lembaga" className="logo-style" />
              <img src={RMahasiswa} alt="logo-lembaga" className="logo-style" />
              <img src={TeknoEvent} alt="logo-lembaga" className="logo-style" />
              <img src={SejutaCita} alt="logo-lembaga" className="logo-style" />

              <img src={LombaMHS} alt="logo-lembaga" className="logo-style" />
              <img src={LombaLomba} alt="logo-lembaga" className="logo-style" />
              <img
                src={KompetisiMaha}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={KampusUpdate}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={LombaOnline}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={InformasiEvent}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={InfoLombaEvent}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={SiswaMalang}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={LukanAnakIT}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={InfoLombaNasional}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img src={MHSUB} alt="logo-lembaga" className="logo-style" />
              <img src={MHSMLG} alt="logo-lembaga" className="logo-style" />
              <img
                src={KampusMalang}
                alt="logo-lembaga"
                className="logo-style"
              />
              <img
                src={AcaraMahasiswa}
                alt="logo-lembaga"
                className="logo-style"
              />
            </div>
          </div>
        </div>
        <div className="crystal1"></div>
        <div className="crystal2"></div>
      </div>
    </>
  );
};

export default Media;
