import React, { useEffect, useState } from "react";
import "./OurMission.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
var brainVideo, playVideo;
const OurMission = (props) => {
  const [playing, setPlaying] = useState(false);
  const [ourMissionRef] = useState(props.getMissionRef());
  const [ourVisionRef] = useState(props.getVisionRef());

  useEffect(() => {
    playVideo = document.getElementById("our-mission-magnetic-button");
    brainVideo = document.getElementById("brain-video");
    brainVideo.onended = () => {
      setPlaying(false);
    };
  }, []);

  const playToggle = () => {
    playing ? brainVideo.pause() : brainVideo.play();
    setPlaying((prev) => !prev);
  };

  return (
    <div
      ref={ourMissionRef}
      className="our-mission"
      style={{ boxSizing: "border-box" }}
    >
      <div className="heading-with-background center-heading">
        <h1 className="pink" id="our--mission">
          Our Mission
        </h1>
        <h2 className="mini-heading pink">Our Mission</h2>
      </div>
      <Row
        className="d-flex justify-content-center change-in-mobile"
        id="mission"
      >
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="ourmission-image">
            <video
              id="brain-video"
              src={require("../../assets/images/videos/brain.mp4")}
              width="100%"
              height="100%"
              alt=" "
            />
            {/* <h1 className="heading pink">
              Brain
              <br /> Video
            </h1> */}
            <div className="our-mission-button">
              <MagneticButton
                id="our-mission-magnetic-button"
                name={playing ? "P A U S E" : "P L A Y V I D E O"}
                onClick={playToggle}
                width="200px"
                height="200px"
              />
            </div>
          </div>
        </Col>
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ minHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left our-mission-content">
            <h1 className="mini-heading pink">“If you can, you should... ”</h1>
            <p className="bold">
              Our goal is to remove barriers and ensure access and paicipation
              for all young people in education and employment regardless of
              cognitive dierences. We are building an open, inclusive ecosystem
              to bring education and employment into the 21st Century.
            </p>
          </div>
          <div className="ourmission-scroll-to">
            <MagneticButton
              id="ourmission-magnetic-button"
              name="K E E P &nbsp;  E X P L O R I N G"
              onClick={() => {
                window.scroll(0, ourVisionRef.current.offsetTop + 60);
              }}
              rotate="20deg"
              width="130px"
              height="130px"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurMission;
