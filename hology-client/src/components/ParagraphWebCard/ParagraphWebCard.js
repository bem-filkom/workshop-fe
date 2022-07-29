import React from "react";
import "./Paragraph.scss";


const ParagraphWebCard = ({
  children,
  header = false,
  large = false,
  justify = false,
  bold = false,
  marbot = false,
  small = false,
}) => {
  return (
    <p
      className={`paragraph ${justify ? "justify" : ""} ${bold ? "bold" : ""} ${
        header ? "paragraph-header" : ""
      } ${large ? "paragraph-large" : ""} ${marbot ? "marbot" : ""} ${
        small ? "small" : ""
      }`}
    >
      {children}
    </p>
  );
};

export default ParagraphWebCard;
