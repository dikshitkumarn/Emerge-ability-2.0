import React from "react";
import "./Fourth.css";
import { Row, Col } from "reactstrap";

const Fourth = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center fourth">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ maxHeight: 300, position: "relative" }}
        >
          <div
            className="slim-description text-left flexy"
            style={{ maxWidth: 250 }}
          >
            <h1 className="mini-heading sky-blue">
              “Every child deserves a future. ”
            </h1>
            <p className="bold">
              They often face a multitude of barriers from an inaccessible
              learning environment to a lack of suppo and understanding of their
              unique learning and thinking processes.
              <br />
              <br />
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container">
            <div className="img-5"></div>
            <div className=" img-5-shade"></div>
            <div className="img-6"></div>
            <div className=" img-6-shade"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Fourth;
