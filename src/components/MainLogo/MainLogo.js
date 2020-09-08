import React, { useEffect, useState } from "react";
import "./MainLogo.css";
import Parallax from "../UI/Parallax/Parallax";

const MainLogo = (props) => {
  return (
    <div className="one">
      <div
        className="social-links uppercase small responsive-small"
        style={{ background: "transparent" }}
      >
        <p className="bold">Instagram</p>
        <p className="bold">Youtube</p>
        <p className="bold">FaceBook</p>
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
    </div>
  );
};

export default MainLogo;
