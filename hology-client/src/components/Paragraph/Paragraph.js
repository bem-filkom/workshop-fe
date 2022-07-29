import React from "react";
import "./Paragraph.scss";

const Paragraph = ({
  children,
  header = false,
  large = false,
  justify = false,
  bold = false,
  marbot = false,
  small = false,
  color = false,
  center = false,
  italic = false,
  left = false,
  note = false,
  responsive = false,
}) => {
  return (
    <p
      className={`paragraph ${justify ? "justify" : ""} ${left ? "left" : ""} ${
        note ? "note" : ""
      } ${center ? "center" : ""} ${italic ? "italic" : ""} ${
        bold ? "bold" : ""
      } ${header ? "paragraph-header" : ""} ${large ? "paragraph-large" : ""} ${
        marbot ? "marbot" : ""
      } ${small ? "small" : ""}${color ? "color" : ""} ${
        responsive ? "responsive" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
