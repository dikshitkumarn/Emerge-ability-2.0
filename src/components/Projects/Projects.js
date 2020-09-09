import React from "react";
import "./Projects.css";
import { Row, Col } from "reactstrap";

const Projects = (props) => {
  return (
    <div>
      <div className="heading-with-background">
        <h1 className="light-orange">Projects</h1>
        <h2 className="orange mini-heading">Projects</h2>
      </div>
      <div className="projects-content">
        <div className="My-Projects">
          <Row className="d-flex justify-content-center">
            <Col lg="4">
              <div className="slim-description text-left margin-auto">
                <h1 className="mini-heading light-orange bold">
                  “We rise by lifting others.... ”
                </h1>
                <p className="bold">
                  The aim of this survey is to give us, a snapshot of the
                  perceptions of educators towards inclusive education, and to
                  get respondents’ views of relevant training, as well as to
                  identify what is working well and what the gaps are.
                  Understanding the educators' knowledge and skills required to
                  create an inclusive environment, the involvement of suppo in
                  inclusive education and eective training programmes.
                </p>
              </div>
            </Col>
            <Col
              style={{ position: "relative" }}
              lg="4"
              className="hide-in-mobile"
            >
              <div className="img-19"></div>
              <div className="img-19-shade"></div>
              <div className="img-20"></div>
              <div className="img-20-shade"></div>
            </Col>
            <Col lg="2">
              <div className="slim-description text-left top-down">
                <h1 className="mini-heading light-orange bold">
                  “Those who are happiest are those who do the most for
                  others.... ”
                </h1>
                <p className="bold">
                  If you are a Preschool/ Higher Secondary school Principal/
                  teacher/tutor/counsellor kindly paicipate in our research
                  survey.
                </p>
              </div>
            </Col>
            <Col
              style={{ position: "relative" }}
              lg="4"
              sm="12"
              className="show-in-mobile"
            >
              <div className="img-19"></div>
              <div className="img-19-shade"></div>
              <div className="img-20"></div>
              <div className="img-20-shade"></div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
