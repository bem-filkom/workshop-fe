import React from "react";
import "./Header.scss";

const Header = ({
  children,
  center = false,
  size = "r",
  lineWhite = false,
  line = false,
  line1 = false,
  wrap = false,
  noLine = false,
  notice = false,
  black = false,
  mb = false,
}) => {
  return (
    <div>
      <span className="header">
      <h1 className={`text ${wrap ? "wrap" : ""} ${size} ${center ? "center" : ""} ${notice ? "notice" : ""}  ${black ? "black" : ""} ${mb ? 'mb' : ''}`} >{children}</h1>
        {!noLine && (
          <hr className={`${lineWhite ? "line-white" : ""} ${line ? "line" : "nonline"} ${line1 ? "line1" : ""}`} align="left" />
        )}
      </span>
    </div>
  );
};

export default Header;
