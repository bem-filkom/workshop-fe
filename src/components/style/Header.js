import React from "react";

const Header = (props) => {
  return <div className="bg-[#2F6568] fixed h-16 w-full">{props.children}</div>;
};

export default Header;
