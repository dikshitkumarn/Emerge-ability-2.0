import React from "react";
import "./WhatWeDo.css";
import { Row, Col } from "reactstrap";

const WhatWeDo = (props) => {
  return (
    <div className="WhatWeDo">
      <div className="heading-with-background">
        <h1 className="red">What We Do</h1>
        <h2 className="mini-heading red">What We Do</h2>
      </div>
      <div className="mobile-version">
        <Row>
          <img
            alt=" "
            src={require("../../assets/images/Chidren/16.png")}
            className="bg-boy-image"
          />
        </Row>
        <Row>
          <Col md="12">
            <div>
              <p
                className="black light-weight text-left"
                style={{ padding: 20 }}
              >
                We provide data-enabled and technology - driven products and
                services which focus on enabling individuals to explore and take
                informed education/career decisions based on their interests and
                abilities.
                <br />
              </p>
            </div>
          </Col>
          <Col md="12">
            <div>
              <p
                className="black light-weight text-left"
                style={{ padding: 20 }}
              >
                We create interactive and immersive learning experiences (Eg.
                VR, AR, XR) to help educational institutions provide a more
                inclusive classroom experience for learners.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bg-boy">
        <Row>
          <Col md="6" lg="6" sm="6" xs="6" className="WhatWeDo-content-1">
            <div>
              <p className="white light-weight text-left">
                We provide data-enabled and technology - driven products and
                services which focus on enabling individuals to explore and take
                informed education/career decisions based on their interests and
                abilities.
              </p>
            </div>
          </Col>
          <Col md="6" lg="6" sm="6" xs="6" className="WhatWeDo-content-2">
            <div>
              <p className="white light-weight text-left">
                We create interactive and immersive learning experiences (Eg.
                VR, AR, XR) to help educational institutions provide a more
                inclusive classroom experience for learners.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhatWeDo;
