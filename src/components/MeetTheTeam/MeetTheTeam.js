import React, { useState } from "react";
import "./MeetTheTeam.css";
import { Row, Col } from "reactstrap";
import EachMember from "./EachMember/EachMember";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const MeetTheTeam = (props) => {
  const [ref] = useState(props.getTeamRef());
  const [projectRef] = useState(props.getProjectRef());
  return (
    <div ref={ref} style={{ boxSizing: "border-box", position: "relative" }}>
      <div className="team-scroll-to">
        <MagneticButton
          id="my-team-magnetic-button"
          name="K E E P &nbsp; E X P L O R I N G"
          onClick={() => {
            window.scroll(0, projectRef.current.offsetTop + 60);
          }}
          color="#3e92c6"
          hoverColor="#3ebfc6"
          hoverTextColor="white"
          rotate="20deg"
          width="130px"
          height="130px"
        />
      </div>
      <div className="heading-with-background">
        <h1 className="sky-blue" id="theteam">
          Meet The Team
        </h1>
        <h2 className="mini-heading sky-blue">Meet The Team</h2>
      </div>
      <Row className="MeetTheTeam">
        <Col md="6" lg="6" sm="12" xs="12">
          <div className="adjust-team-1">
            <EachMember
              position="C o - f o u n d e r"
              name="Bhuvana Meenakshi Koteeswaran"
              job="Gender Gap and Socio-Technology Research| AR/
                VR/XR Evangelist | Mozillian| Wikimedian"
              email="Bhuvana@EmergeAbility.org"
              image={require("../../assets/images/Chidren/17.png")}
            />
          </div>
        </Col>
        <Col md="6" lg="6" sm="12" xs="12">
          <div className="adjust-team-2">
            <EachMember
              position="C o - f o u n d e r"
              name="Leena Haque"
              job="User Experience Designer | Neurodiversity
            specialist | Innovation Architect"
              email="Leena@EmergeAbility.org"
              image={require("../../assets/images/Chidren/18.png")}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MeetTheTeam;
