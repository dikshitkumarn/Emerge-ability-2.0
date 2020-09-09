import React from "react";
import "./OurVision.css";
import { Row, Col } from "reactstrap";

const OurVision = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="heading-with-background">
        <h1 className="orange">Our Vission</h1>
        <h2 className="mini-heading orange">Our Vission</h2>
      </div>
      <Row className="d-flex justify-content-center our-vision">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ maxHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left flexy">
            <h1 className="mini-heading orange">
              “Lifting up with hands of help... ”
            </h1>
            <p className="bold">
              Enable individuals to reach their full potential by highlighting
              their unique strengths/abilities and giving them the skills they
              need to succeed in this new world.
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container">
            <div className="img-13"></div>
            <div className=" img-13-shade"></div>
            <div className="img-14"></div>
            <div className=" img-14-shade"></div>
            <div className="img-15"></div>
            <div className=" img-15-shade"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurVision;
