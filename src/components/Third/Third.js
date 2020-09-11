import React from "react";
import "./Third.css";
import { Row, Col } from "reactstrap";

const Third = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center third">
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-third">
            <div className="img-3"></div>
            <div className=" img-3-shade"></div>
            <div className="img-4"></div>
            <div className=" img-4-shade"></div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center d-flex justify-content-center"
        >
          <div className="slim-description text-left six-align">
            <br />
            <br />
            <br />
            <h1 className="mini-heading red">
              “I am different,&nbsp;&nbsp;&nbsp; not less”
            </h1>
            <p className="bold">
              75 million school-aged children and youth are in desperate need of
              educational suppo, either in danger of, or already missing out on
              their education.
              <br />
              Children and young people with disabilities and neurodivergent
              conditions are the most marginalised and vulnerable in many
              countries, and they are most likely to be excluded from education
              and future employment.
              <br />
              <br />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Third;
