import React from "react";
import "./Seven.css";
import { Row, Col } from "reactstrap";

const Seven = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="d-flex justify-content-center seven">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ position: "relative" }}
          //   className="flexy"
        >
          <div className="slim-description text-left flexy-seven">
            <h1 className="mini-heading light-green">
              “Let your abilities define you.. ”
            </h1>
            <p className="bold">
              The understanding of inclusive education is different across
              various regions of the world. One of the key difficulties
              surrounding inclusive education in developing countries is the
              lack of research about education in these countries. The studies
              show that there are serious gaps in the developing nations’
              education system to make it fit for everyone in a community.
              <br />
              <br />
              Children with special needs have the right to receive the
              schooling and social supports they need within the ordinary
              structures available in their local communities. Strong advocacy
              is needed for this to happen. In particular parents need to be
              empowered, communities mobilised and professionals trained in new
              ways of working.
              <br />
              <br />
              EmergeAbility aims to make education more inclusive for all
              children to reach their true potential by shaping and promoting
              future-ready paradigms for learning beyond boundaries.
            </p>
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="absolute-container-seven">
            <div className="img-9"></div>
            <div className=" img-9-shade"></div>
            <div className="img-10"></div>
            <div className=" img-10-shade"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Seven;
