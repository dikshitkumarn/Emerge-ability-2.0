import React from "react";
import "./OurMission.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const OurMission = (props) => {
  return (
    <div className="our-mission">
      <div className="heading-with-background">
        <h1 className="pink">Our Mission</h1>
        <h2 className="mini-heading pink">Our Mission</h2>
      </div>
      <Row className="d-flex justify-content-center change-in-mobile">
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="ourmission-image">
            <h1 className="heading pink">
              Brain
              <br /> Video
            </h1>
            <div className="our-mission-button">
              <MagneticButton
                id="our-mission-magnetic-button"
                name="P L A Y &nbsp; V I D E O"
                onClick={() => {}}
                align="right"
                width="250px"
                height="250px"
              />
            </div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ minHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left our-mission-content">
            <h1 className="mini-heading pink">“If you can, you should... ”</h1>
            <p className="bold">
              Our goal is to remove barriers and ensure access and paicipation
              for all young people in education and employment regardless of
              cognitive dierences. We are building an open, inclusive ecosystem
              to bring education and employment into the 21st Century.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurMission;
