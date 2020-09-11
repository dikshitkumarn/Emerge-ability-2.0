import React from "react";
import "./Second.css";
import { Row, Col } from "reactstrap";

const Second = (props) => {
  return (
    <div id="two">
      <Row className="d-flex justify-content-center second">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ maxHeight: 300 }}
        >
          <div className="slim-description text-left secont-adjust">
            <h1 className="mini-heading orange">
              "Abilities Beyond Boundaries."
            </h1>
            <p className="bold">
              <br />
              Education is not a privilege, it is a fundamental human right. The
              UNESCO: Global Education 2030 Agenda Sustainable Development Goal
              (SDG) 4 on education calls for inclusive and equitable quality
              education.
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container">
            <div className="img-1"></div>
            <div className=" img-1-shade"></div>
            <div className="img-2"></div>
            <div className=" img-2-shade"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Second;
