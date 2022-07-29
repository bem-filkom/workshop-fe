import React from "react";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  margiRight = false,
  marginLeft = false,
  onClicked,
}) => {
  return (
    <button
      className={`button ${margiRight ? "margin-right" : ""} ${marginLeft ? "margin-left" : ""} ${variant}`}
      onClick={onClicked}
    >
      {children}
    </button>
  );
};

export default Button;
