import React from "react";
import "./MeetTheTeam.css";
import { Row, Col } from "reactstrap";
import EachMember from "./EachMember/EachMember";

const MeetTheTeam = (props) => {
  return (
    <div id="team">
      <div className="heading-with-background">
        <h1 className="sky-blue">Meet The Team</h1>
        <h2 className="mini-heading sky-blue">Meet The Team</h2>
      </div>
      <Row className="MeetTheTeam">
        <Col md="12" lg="6" sm="12" xs="12">
          <div className="adjust-team-1">
            <EachMember
              position="C o - f o u n d e r"
              name="Bhuvana Meenakshi Koteeswaran"
              job="Gender Gap and Socio-Technology Research| AR/
                VR/XR Evangelist | Mozillian| Wikimedian"
              email="Bhuvana@EmergeAbility.org"
              image={require("../../assets/images/Chidren/17.jpg")}
            />
          </div>
        </Col>
        <Col md="12" lg="6" sm="12" xs="12">
          <div className="adjust-team-2">
            <EachMember
              position="C o - f o u n d e r"
              name="Leena Haque"
              job="User Experience Designer | Neurodiversity
            specialist | Innovation Architect"
              email="Leena@EmergeAbility.org"
              image={require("../../assets/images/Chidren/18.jpg")}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MeetTheTeam;
