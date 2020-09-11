import React, { useState } from "react";
import "./SideBar.css";
import CloseIcon from "../CloseIcon/CloseIcon";
import MagneticButton from "../MagneticButton/MagneticButton";

const SideBar = (props) => {
  const [menuLinks, setMenuLinks] = useState([
    { name: "Home", id: "01", goto: "#home", color: "yellow", active: true },
    { name: "About", id: "02", goto: "#about", color: "red", active: false },
    { name: "Team", id: "03", goto: "#team", color: "#FF69B4", active: false },
    {
      name: "Contact",
      id: "04",
      goto: "#contact",
      color: "#A97AD0",
      active: false,
    },
    {
      name: "Project",
      id: "05",
      goto: "#project",
      color: "purple",
      active: false,
    },
    { name: "Blog", id: "06", goto: "#blog", color: "#00BFFF", active: false },
    {
      name: "Sign Up",
      id: "07",
      goto: "#signup",
      color: "green",
      active: false,
    },
  ]);

  const setActive = (id) => {
    setMenuLinks((prev) => {
      let clone = prev.map((el) => {
        if (el.id === id) {
          el.active = true;
        } else {
          el.active = false;
        }
        return el;
      });
      return clone;
    });
  };

  const goto = (link) => {
    window.open(link, "_blank");
  };

  console.log(menuLinks);
  let classNames = ["SideBar", props.show ? "open" : "close"];

  return (
    <div
      className={classNames.join(" ")}
      // style={{  transform: props.show ? "translateX(0)" : "translateX(200vw)" }}
    >
      <div className="rainbow-sidebar"></div>
      <div className="mobile-only">
        <CloseIcon onClick={props.onClick} />
      </div>
      <div className="sidebar-button">
        <MagneticButton
          id="side-bar-mag-netic-button"
          name="B A C K"
          rotate="-20deg"
          onClick={props.onClick}
        />
      </div>
      <img
        src={require("../../../assets/images/BackGround Images/footer-logo.png")}
        alt=" "
        className="sidebar-logo"
      />
      <div className="sidebar-social-links">
        <i
          onClick={() => goto("http://jsonplaceholder.com")}
          className="fa fa-twitter shadow white"
          style={{ color: "white", cursor: "pointer" }}
        />
        <i
          onClick={() => goto("http://jsonplaceholder.com")}
          className="fa fa-linkedin shadow white"
          style={{ color: "white", cursor: "pointer" }}
        />
        <i
          onClick={() => goto("http://jsonplaceholder.com")}
          className="fa fa-facebook shadow white"
          style={{ color: "white", cursor: "pointer" }}
        />
      </div>
      <div className="sidebar-social-links-words">
        <MagneticButton
          id="main-sidebar-fb"
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
          id="main-sidebar-ln"
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
          id="main-sidebar-twitter"
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
      <div className="navs text-left">
        {menuLinks.map((el) => (
          <div key={el.id} className="each-nav">
            <div className="nav-number">
              <p style={{ color: el.color }}>{el.id}</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="nav-name"
              onClick={() => {
                window.location.href = el.goto;
                setActive(el.id);
                props.onClick();
              }}
            >
              <h1 style={{ color: el.color, opacity: el.active ? 1 : 0.15 }}>
                {el.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
