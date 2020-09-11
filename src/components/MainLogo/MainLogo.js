import React from "react";
import "./MainLogo.css";
import Parallax from "../UI/Parallax/Parallax";
import HamburgerIcon from "../UI/HamburgerIcon/HamburgerIcon";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const MainLogo = (props) => {
  const goto = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="one" id="home">
      <div className="hamburgur-container">
        <HamburgerIcon onClick={props.onClick} />
      </div>
      <div
        className="social-links small responsive-small"
        style={{ background: "transparent" }}
      >
        <MagneticButton
          id="main-fb"
          borderRadius="10px"
          fontSize="20px"
          noimage
          hoverColor="#139BF0"
          width="fit-content"
          height="fit-content"
          name="Facebook"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
        <MagneticButton
          id="main-ln"
          borderRadius="10px"
          fontSize="20px"
          noimage
          hoverColor="#A050FF"
          width="fit-content"
          height="fit-content"
          name="Linkedin"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
        <MagneticButton
          id="main-twitter"
          borderRadius="10px"
          fontSize="20px"
          noimage
          hoverColor="#ddc736"
          width="fit-content"
          height="fit-content"
          name="Twitter"
          borderWidth="0"
          onClick={() => goto("http://jsonplaceholder.com")}
          style={{ cursor: "pointer" }}
          className="bold green-hover social-icons-main"
        />
      </div>
      <div className="rainbow"></div>

      <div className="main-logo-heading">
        <Parallax speed={0.4}>
          <div className="logo"></div>
          <div className="main-heading">
            <h1 className="heading">
              <span className="blue">Emerge</span>
              <span className="violet-fade">Ability</span>
            </h1>
            <p className="uppercase font-size-small bold responsive-small">
              A b i l i t i e s &nbsp; B e y o n d &nbsp; B o u n d a r i e s .
            </p>
          </div>
        </Parallax>
      </div>
      <div className="button-container">
        <MagneticButton
          id="mainLogoButton"
          name="E &nbsp;&nbsp;X &nbsp;&nbsp;P &nbsp;&nbsp;L &nbsp;&nbsp;O &nbsp;&nbsp;R &nbsp;&nbsp;E"
          onClick={() => {}}
          rotate={"-30deg"}
          width="180px"
          height="180px"
        />
      </div>
    </div>
  );
};

export default MainLogo;
