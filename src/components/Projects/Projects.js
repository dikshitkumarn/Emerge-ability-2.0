import React, { useState } from "react";
import "./Projects.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";

const Projects = (props) => {
  const [projectRef] = useState(props.getProjectRef);
  return (
    <div ref={projectRef} id="project" style={{ boxSizing: "border-box" }}>
      <div className="heading-with-background">
        <h1 className="light-orange" id="projeccts">
          Projects
        </h1>
        <h2 className="orange mini-heading">Projects</h2>
      </div>
      <div className="projects-content">
        <div className="My-Projects" style={{ position: "relative" }}>
          <Row className="d-flex justify-content-center">
            <Col>
              <div className="text-left flexy-projects">
                <h1 className="mini-heading light-orange bold">
                  “Inclusion is within everyone’s ability....”
                </h1>
                <p className="bold">
                  The aim of this survey is to give us, a snapshot of the
                  perceptions of educators towards inclusive education, and to
                  get respondents’ views of relevant training, as well as to
                  identify what is working well and what the gaps are.
                  <br />
                  <br />
                  Understanding the educators' knowledge and skills required to
                  create an inclusive environment, the involvement of support in
                  inclusive education and effective training programmes.
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
            <Col lg="3" sm="12">
              <div className="text-left top-down">
                <h1 className="mini-heading light-orange bold">
                  “Not all classrooms have four walls....”
                </h1>
                <p className="bold">
                  If you are a Preschool/ Higher Secondary school
                  Principal/teacher/tutor/counsellor kindly participate in our
                  research survey.
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
          <div className="projects-button">
            <MagneticButton
              hoverColor="orange"
              id="projects-magnetic-button"
              name="S U R V E Y &nbsp; L I N K"
              rotate="-30deg"
              onClick={() => {}}
              align="right"
              width="150px"
              height="150px"
              color="orange"
              align="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
