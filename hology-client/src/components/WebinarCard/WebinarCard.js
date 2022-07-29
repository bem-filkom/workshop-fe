import React from "react";
import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Clock from "../../assets/img/webinar-card/clock.svg";
import Location from "../../assets/img/webinar-card/location.svg";
import Calendar from "../../assets/img/webinar-card/calendar.svg";
import PlayButton from "../../assets/img/webinar-card/playButton.svg";
import ParagraphWebCard from "../../components/ParagraphWebCard/ParagraphWebCard";

import "./WebinarCard.scss";

const WebinarCard = ({
  header,
  title,
  ticketFor,
  typeFor,
  date,
  media,
  clock,
  expired = false,
  Button = false,
  status = 1,
  linkDaftar = "",
  registerBtn,
}) => {
  if (status === 1) {
    return (
      <div className={`card-body ${expired ? "expired" : ""}`}>
        <center>
          <div className="title-webinar">
            <Header noLine>{header}</Header>{" "}
          </div>
        </center>
        <div className="description">
          <div className="card-content">
            <Paragraph small>
              {ticketFor}
            </Paragraph>
          </div>
          <div className="card-content">
            <Paragraph small>
              {typeFor}
            </Paragraph>
          </div>
          <br />
          <div className="card-content">
            <img src={PlayButton} alt="playButton" />
            <ParagraphWebCard justify small>
              {title}
            </ParagraphWebCard>
          </div>
          <br></br>
          <div className="card-content">
            <img src={Calendar} alt="Calendar" />
            <Paragraph>{date}</Paragraph>
          </div>
          <div className="card-content">
            <img src={Clock} alt="clock" />
            <Paragraph>{clock}</Paragraph>
          </div>
          <div className="card-content">
            <img src={Location} alt="location" />
            <Paragraph>{media}</Paragraph>
          </div>
        </div>
        {Button ? (
          ""
        ) : (
          <div className="regist-btn" onClick={registerBtn}>
            DAFTAR
          </div>
        )}
      </div>
    );
  } else if (status === 2) {
    return (
      <div className={`card-body-verif ${expired ? "expired" : ""}`}>
        <div className="title-verif">
          <Header noLine wrap>
            {header}: Tidak Terverifikasi
          </Header>
        </div>
        <div className="content">
          <Paragraph large>
            Terima Kasih telah mendaftar di workshop HOLOGY 4.0. Mohon untuk
            melengkapi berkas dan menunggu pengumuman kelulusan berkas pada
            tanggal 15 September 2021.
          </Paragraph>
        </div>
        <a href={linkDaftar} style={{textDecoration:"none", color:"white"}}><div className="regist-btn">Lengkapi Data</div></a>
      </div>
    );
  } else if (status === 3) {
    return (
      <div className={`card-body-verif ${expired ? "expired" : ""}`}>
        <div className="title-verif">
          <Header noLine wrap>
            {header}: Terdaftar
          </Header>
        </div>
        <div className="content">
          <Paragraph large>Status : Lulus Seleksi Pendaftaran</Paragraph>
        </div>
        <a href={header === "Workshop Day 1" ? "https://chat.whatsapp.com/D6LdtuStkRqHRJVCbcWC8Y" : "https://chat.whatsapp.com/CjsxGQPomfX0JyNyWGIStf"} style={{textDecoration:"none", color:"white"}}><div className="regist-btn">Link grup</div></a>
      </div>
    );
  } else if (status === 4) {
    return (
      <div className={`card-body-verif ${expired ? "expired" : ""}`}>
        <div className="title-verif">
          <Header noLine wrap>
            {header} : Terdaftar
          </Header>
        </div>
        <div className="content">
          <Paragraph large>Status : Lulus Workshop</Paragraph>
        </div>
        <a href={header === "Workshop Day 2" ? "https://docs.google.com" : "https://docs.google.com"} style={{textDecoration:"none", color:"white"}}><div className="regist-btn">Link Form Commitment Fee</div></a>
      </div>
    );
  } else {
    return <></>;
  }
};

export default WebinarCard;
