import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const gotoMyWebsite = () => {
    window.open("http://www.dikshit.live", "_blank");
  };

  return (
    <div className="Footer">
      <img
        src={require("../../assets/images/BackGround Images/footer-logo.png")}
        alt=" "
        className="footer-logo"
      />
      <div className="footer-social-links">
        <i className="fa fa-twitter shadow" />
        <i className="fa fa-linkedin shadow" />
        <i className="fa fa-facebook shadow" />
      </div>
      <p className="copyright white light-weight">
        &copy; 2020 All Rights Reserved to EmergeAbility. Developed by{" "}
        <span style={{ cursor: "pointer" }} onClick={gotoMyWebsite}>
          Dikshit
        </span>
      </p>
    </div>
  );
};

export default Footer;
