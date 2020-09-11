import React, { useEffect } from "react";
import "./MagneticButton.css";
import { MagneticButtonRequirements } from "./MagneticButtonRequirements";

const MagneticButton = (props) => {
  useEffect(() => {
    new MagneticButtonRequirements(document.getElementById(props.id));
    var inner = document.getElementById(props.id + "inner");
    var outer = document.getElementById(props.id);
    outer.addEventListener("mouseenter", () => {
      outer.style.borderColor = props.hoverColor ? props.hoverColor : "#a717ee";
      inner.style = `
            box-sizing: border-box;
            width: calc(100% - 3px);
            height: calc(100% - 3px);
            position: absolute;
            border-radius: ${props.borderRadius ? props.borderRadius : "50%"};
            top: 1.5px;
            left: 1.5px;
            clip-path: circle(0% at 50% 50%);
            transition: clip-path 500ms ease;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: white;
            background-color: ${
              props.hoverColor ? props.hoverColor + ";" : "#a717ee;"
            } 
            clip-path: circle(100% at 50% 50%);`;
    });
    outer.addEventListener("mouseleave", () => {
      outer.style.borderColor = props.color ? props.color : "black";
      inner.style = `box-sizing: border-box;
            width: calc(100% - 3px);
            height: calc(100% - 3px);
            position: absolute;
            top: 1.5px;
            left: 1.5px;
            clip-path: circle(0% at 50% 50%);
            transition: clip-path 500ms ease;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;`;
    });
  }, []);

  return (
    <button
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
      style={{
        borderWidth: props.borderWidth ? props.borderWidth : 1,
        borderRadius: props.borderRadius ? props.borderRadius : "50%",
        transform: `rotate(${props.rotate ? props.rotate : 0})`,
        width: props.width ? props.width : 150,
        height: props.height ? props.height : 150,
        borderColor: props.color ? props.color : "black",
      }}
      className={`rounded-button ${props.className ? props.className : ""}`}
      id={props.id}
    >
      <div
        id={props.id + "inner"}
        style={{
          borderRadius: props.borderRadius ? props.borderRadius : "50%",
          borderColor: props.color ? props.color : "black",
        }}
      >
        {props.noimage ? null : (
          <img
            src={require("../../../assets/images/icons/forward.png")}
            alt=" "
            className="skip-icon"
            color="#a717ee"
          />
        )}
        <p
          style={{
            fontSize: props.fontSize ? props.fontSize : "x-small !important",
            textAlign: props.align ? props.align : "center",
            color: props.hoverTextColor ? props.hoverTextColor : "white",
          }}
        >
          {props.name}
        </p>
      </div>
      {props.noimage ? null : (
        <img
          src={require("../../../assets/images/icons/forward.png")}
          alt=" "
          className="skip-icon"
        />
      )}
      <p
        style={{
          fontSize: props.fontSize ? props.fontSize : "x-small !important",
          textAlign: props.align ? props.align : "center",
          color: props.color ? props.color : "black",
        }}
      >
        {props.name}
      </p>
    </button>
  );
};

export default MagneticButton;
