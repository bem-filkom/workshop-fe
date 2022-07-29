import React from "react";
import "./Fieldinput.scss";

const Fieldinput = ({
  handleChange,
  handleKeyDown,
  label,
  marbott = false,
  pointer = false,
  fullWidth = false,
  fitWidth = false,
  ...otherProps
}) => {
  return (
    <div className={` field-input  ${marbott ? "margin-bottom" : ""}`}>
      <label className="label">{label}</label>
      <input
        className={` ${fullWidth ? "full-width" : fitWidth ? "fit" : "normal"} input  ${pointer ? 'button-pointer' : ''}`}
        placeholder="Ketik di sini..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...otherProps}
      />
    </div>
  );
};

export default Fieldinput;
