import React, { useRef, useState } from "react";
import MagneticButton from "../UI/MagneticButton/MagneticButton";
import "./Five.css";

const Five = (props) => {
  const [fifthRef] = useState(props.getFifthRef());
  const [sixthRef] = useState(props.getSixthRef());
  const fiveTwo = useRef();
  const fiveThree = useRef();
  return (
    <div style={{ position: "relative" }} style={{ boxSizing: "border-box" }}>
      <div className="controlled text-left">
        <h1 className="mini-heading">
          Neurodiversity <span className="red">is an</span>{" "}
          <span className="violet">umbrella</span>{" "}
          <span className="red">
            term which includes a range of conditions including:
            <br />
            <br />
            <br />
          </span>
        </h1>
      </div>
      <div
      // style={{ position: "relative" }}>
      >
        <div style={{ position: "relative" }} ref={fifthRef}>
          <div
            id="five"
            className="part-1"
            style={{
              background: "#fd2655b8",
              // borderTop: "1px solid #fd2655b8",
            }}
          >
            {/* <img
              className="red-bg-image"
              src={require("../../assets/images/BackGround Images/red.png")}
              alt=" "
            /> */}
            <div className="slant-container">
              <div className="slant"></div>
            </div>
            <img
              src={require("../../assets/images/Chidren/umbrella.png")}
              className="umbrella"
              alt=" "
            />
            <div className="no-rotate">
              <div className="each-row">
                <div style={{ margin: 10 }}>
                  <h1 className="number" style={{ color: "#d0254b" }}>
                    01
                  </h1>
                </div>
                <div className="para text-left">
                  <h5 className="bold yellow">ADHD</h5>
                  <p className="bold white light-weight">
                    Aention decit hyperactivity disorder (ADHD) is a mental
                    health disorder that can cause abovenormal levels of
                    hyperactive and impulsive behaviors.
                  </p>
                </div>
                <div className="empty-div">
                  {/* <img
                  src={require("../../assets/images/Chidren/brain.png")}
                  alt=" "
                  className="empty-div-img"
                /> */}
                </div>
              </div>

              <div className="each-row odd">
                <div className="empty-div brain-2"></div>
                <div className="para text-left">
                  <h5 className="bold yellow">Autism Spectrum Conditions</h5>
                  <p className="bold white light-weight">
                    Autism spectrum disorder is a condition related to brain
                    development that impacts how a person perceives and
                    socializes with others, causing problems in social
                    interaction and communication.
                  </p>
                </div>
                <div style={{ margin: 10 }}>
                  <h1 className="number" style={{ color: "#d0254b" }}>
                    02
                  </h1>
                </div>
              </div>

              <div className="each-row">
                <div style={{ boxSizing: "border-box" }}>
                  <h1 className="number" style={{ color: "#d0254b" }}>
                    03
                  </h1>
                </div>
                <div className="para text-left">
                  <h5 className="bold yellow">Dyslexia</h5>
                  <p className="bold white light-weight">
                    Dyslexia is a learning disorder that involves diculty
                    reading due to problems identifying speech sounds and
                    learning how they relate to leers and words (decoding). Also
                    called reading disability, dyslexia aects areas of the brain
                    that process language.
                  </p>
                </div>
                <div className="empty-div"></div>
                <div className="fifth-scroll">
                  <MagneticButton
                    rotate="30deg"
                    hoverColor="#d0254b"
                    name="K E E P &nbsp; E X P L O R I N G"
                    id="my-fivth-scroll-button"
                    color="white"
                    borderColor="white"
                    onClick={() => {
                      window.scroll(0, fiveTwo.current.offsetTop);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="part-1 odd-part" id="fivethtwo" ref={fiveTwo}>
          <div className="no-rotate">
            <div className="each-row">
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">04</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dyspraxia</h5>
                <p className="bold">
                  a developmental disorder of the brain in childhood causing
                  diculty in activities requiring coordination and movement.
                </p>
              </div>
              <div className="empty-div"></div>
            </div>

            <div className="each-row odd">
              <div className="empty-div"></div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dyscalculia</h5>
                <p className="bold">
                  Dyscalculia is a math learning disability that impairs an
                  individual's ability to learn number-related concepts, peorm
                  accurate math calculations, reason and problem solve, and
                  peorm other basic math skills.
                </p>
              </div>
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">05</h1>
              </div>
            </div>

            <div className="each-row">
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">06</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dysgraphia</h5>
                <p className="bold">
                  Dysgraphia is a neurological disorder of wrien expression that
                  06 impairs writing ability and ne motor skills.
                </p>
              </div>
              <div className="empty-div brain-3"></div>
              <div className="fifth-scroll">
                <MagneticButton
                  rotate="30deg"
                  hoverColor="#ffd4dd"
                  name="K E E P &nbsp; E X P L O R I N G"
                  id="fivetwo"
                  onClick={() => {
                    window.scroll(0, fiveThree.current.offsetTop);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="fifththree" ref={fiveThree}>
          <br />
          <br />
          <br />
          <div style={{ position: "relative" }}>
            {/* <div className="part-3-bg"></div> */}
            <div className="slant-container-right">
              <div className="slant-right"></div>
            </div>
            {/* style={{ background: "#fa6b18db" }} */}
            <div className="part-3">
              <img
                src={require("../../assets/images/Chidren/rainbow-small.png")}
                className="rainbow-small"
                alt=" "
              />
              <div className="no-rotate-2">
                <div className="each-row">
                  <div style={{ margin: 10 }}>
                    <h1 className="number" style={{ color: "#fb8746" }}>
                      07
                    </h1>
                  </div>
                  <div className="para text-left">
                    <h5 className="bold dark-red">
                      Developmental Language Disorders
                    </h5>
                    <p className="bold white light-weight">
                      Developmental language disorder (DLD) is a type of speech,
                      language and communication need (SLCN) that aects the way
                      that children understand and use language.
                    </p>
                  </div>
                  <div className="empty-div"></div>
                </div>

                <div className="each-row odd">
                  <div className="fifth-left-scroll">
                    <MagneticButton
                      rotate="30deg"
                      hoverColor="red"
                      name="K E E P &nbsp; E X P L O R I N G"
                      id="fivethreee"
                      color="white"
                      borderColor="white"
                      onClick={() => {
                        window.scroll(0, sixthRef.current.offsetTop);
                      }}
                    />
                  </div>
                  <div className="empty-div brain-2"></div>
                  <div className="para text-left">
                    <h5 className="bold dark-red">Tourette’s Syndrome</h5>
                    <p className="bold white light-weight">
                      Touree's syndrome is a problem with the nervous system
                      that causes people to make sudden movements or sounds,
                      called tics, that they can't control. For example, someone
                      with Touree's might blink or clear their throat over and
                      over again.
                    </p>
                  </div>
                  <div style={{ margin: 10 }}>
                    <h1 className="number" style={{ color: "#fb8746" }}>
                      08
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
