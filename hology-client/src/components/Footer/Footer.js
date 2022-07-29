import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Facebook from "../../assets/img/sosmed/fb.svg";
import Twitter from "../../assets/img/sosmed/twt.svg";
import Youtube from "../../assets/img/sosmed/ytb.svg";
import Line from "../../assets/img/sosmed/line.svg";
import Instagram from "../../assets/img/sosmed/inst.svg";
import LinkedIn from "../../assets/img/sosmed/in.svg";
import Logo from "../../assets/img/logo/black-logo-footer.png";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="section-home-full-7">
        <div className="footer">
          <div className="logo">
            {/* TODO  ICONS*/}
          </div>
          <div className="text">
            <div className="description2">
              <Paragraph>KNOW MORE <span> ABOUT US</span> </Paragraph>
            </div>
          </div>
          <div className="sosmed">
            <div className="sosmed1">
              <a href="https://www.facebook.com/UBHology/" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="facebook" />
              </a>
            </div>
            <div className="sosmed1">
              <a href="https://twitter.com/HOLOGY_UB" target="_blank" rel="noreferrer">
                <img src={Twitter} alt="" />
              </a>
            </div>
            <div className="sosmed1">
              <a href="https://www.youtube.com/channel/UCmpZJv7Kk1TUoOLSSgZQaWg" target="_blank" rel="noreferrer">
                <img src={Youtube} alt="" />
              </a>
            </div>
            <div className="sosmed1">
              <a href="https://line.me/ti/p/~@hology" target="_blank" rel="noreferrer">
                <img src={Line} alt="" />
              </a>
            </div>
            <div className="sosmed1">
              <a href="https://www.instagram.com/hology_ub/" target="_blank" rel="noreferrer">
                <img src={Instagram} alt="" />
              </a>
            </div>
            <div className="sosmed1">
              <a href="https://www.linkedin.com/company/hology-ub/" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="to-top">
          back to top
        </a>
        <div className="watermark">Made With ❤️ by PIT HOLOGY 2022 </div>
      </div>
    </>
  );
};

export default Footer;
