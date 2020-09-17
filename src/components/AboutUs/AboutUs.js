import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import { Row, Col } from "reactstrap";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import ScrollButton from "../UI/ScrollButton/ScrollButton";
var rubixVideo, playVideo;

const AboutUs = (props) => {
  const [playing, setPlaying] = useState(false);
  const [aboutUsRef] = useState(props.getAboutRef());
  const [ourMissionRef] = useState(props.getMissionRef());

  useEffect(() => {
    playVideo = document.getElementById("about-us-button");
    rubixVideo = document.getElementById("rubix-video");
    rubixVideo.onended = () => {
      setPlaying(false);
    };
  }, []);

  const playToggle = () => {
    playing ? rubixVideo.pause() : rubixVideo.play();
    setPlaying((prev) => !prev);
  };
  return (
    <div
      className="about-us"
      ref={aboutUsRef}
      id="about"
      style={{ boxSizing: "border-box" }}
    >
      <div className="heading-with-background center-heading">
        <h1 className="red">About Us</h1>
        <h2 className="mini-heading red">About Us</h2>
      </div>
      <Row className="d-flex justify-content-center">
        <Col
          lg="4"
          md="12"
          sm="12"
          xs="12"
          className="d-flex justify-content-center"
          style={{ minHeight: 300, position: "relative" }}
        >
          <div className="slim-description text-left about-us-content">
            <h1 className="mini-heading red">
              “Participate in changing the world... ”
            </h1>
            <p className="bold">
              We are an innovative initiative with the aim to maximize the
              potential of individuals with cognitive differences via research,
              product development and advocacy.
            </p>
          </div>
          <div className="aboutus-scroll-to">
            {/* <MagneticButton
              id="about-us-magnetic-button"
              name="K E E P &nbsp; E X P L O R I N G"
              onClick={() => {
                window.scroll(0, ourMissionRef.current.offsetTop);
              }}
              hoverColor="#fd2955"
              rotate="20deg"
              width="150px"
              height="150px"
            /> */}
            <ScrollButton
              onClick={() => {
                window.scroll(0, ourMissionRef.current.offsetTop + 60);
              }}
              name="Our Mission"
              color="red"
              textColor="red"
            />
          </div>
        </Col>
        <Col lg="7" md="12" sm="12" xs="12" style={{ position: "relative" }}>
          <div className="aboutus-image">
            <video
              id="rubix-video"
              src={require("../../assets/images/videos/rubix.mp4")}
              width="100%"
              height="100%"
              alt=" "
            />
            {/* <h1 className="heading">
              Rubix
              <br /> Video
            </h1> */}
            <div className="aboutus-button">
              <MagneticButton
                hoverColor="#fd2955"
                id="aboutus-magnetic-button"
                name={playing ? "P A U S E" : "P L A Y  V I D E O"}
                onClick={playToggle}
                width="150px"
                height="150px"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
