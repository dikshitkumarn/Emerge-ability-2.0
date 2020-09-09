import React from "react";
import "./Six.css";
import { Row, Col } from "reactstrap";

const Six = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center six">
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-six">
            <div className="img-7"></div>
            <div className=" img-7-shade"></div>
            <div className="img-8"></div>
            <div className=" img-8-shade"></div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center d-flex justify-content-center"
        >
          <div className="slim-description text-left">
            <h1 className="mini-heading purple">
              “Neurodiversity it’s not a symptom, it’s a feature.. ”
            </h1>
            <p className="bold">
              Neurodiversity considers brain dierences as normal, rather than
              decits. Embracing this concept can benet children and young people
              with learning and thinking differences.
              <br />
              Inclusive education advocates that all children can learn and that
              all pupils, including many considered to be disabled, need some
              form of suppo in learning during their time at school.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Six;
