import React from "react";
import "./AboutUs.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const AboutUs = (props) => {
  return (
    <div className="about-us" id="about">
      <div className="heading-with-background">
        <h1 className="red">About Us</h1>
        <h2 className="mini-heading red">About Us</h2>
      </div>
      <Row className="d-flex justify-content-center">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ minHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left about-us-content">
            <h1 className="mini-heading red">
              “Participate in changing the world... ”
            </h1>
            <p className="bold">
              We are an innovative initiative with the aim to maximize the
              potential of individuals with cognitive dierences via research and
              consultancy
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="aboutus-image">
            <h1 className="heading">
              Rubix
              <br /> Video
            </h1>
            <div className="aboutus-button">
              <MagneticButton
                id="aboutus-magnetic-button"
                name="P L A Y &nbsp; V I D E O"
                onClick={() => {}}
                align="right"
                width="200px"
                height="200px"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
