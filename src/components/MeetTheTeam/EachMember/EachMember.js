import React from "react";
import "./EachMember.css";

const EachMember = (props) => {
  return (
    <div className="member-container">
      <div className="adjust">
        <div style={{ width: 50 }}>
          <div className="badge">
            <p className="uppercase">{props.position}</p>
          </div>
        </div>
        <div className="each-member-content text-left">
          <div style={{ position: "relative" }}>
            <img src={props.image} className="member-image" />
          </div>
          <p className="name"> {props.name}</p>
          <p> {props.job} </p>
          <div className="email">
            <p
              className="blue"
              onClick={() => (window.location.href = "mailto:" + props.email)}
            >
              <img
                src={require("../../../assets/images/icons/email.png")}
                alt=" "
                width="25px"
                height="15px"
              />
              &nbsp;
              {props.email}
            </p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="social-cont">
            <i className="fa fa-twitter bg-transparent shadow" />
            <i className="fa fa-linkedin bg-transparent shadow" />
            <i className="fa fa-facebook bg-transparent shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachMember;
