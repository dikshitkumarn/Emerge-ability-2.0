import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const changeFontSize = () => {
    // props.getAppId().querySelector("p").style.color = "red";
    document.querySelector("p").style.fontSize = "2em";
  };
  return (
    <div className="navbar">
      <button onClick={changeFontSize}>Change</button>
    </div>
  );
};

export default Navbar;
