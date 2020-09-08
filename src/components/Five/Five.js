import React from "react";
import "./Five.css";

const Five = (props) => {
  return (
    <div>
      <div className="controlled text-left">
        <h1 className="mini-heading">
          Neurodiversity <span className="red">is an</span>{" "}
          <span className="violet">umbrella</span>{" "}
          <span className="red">
            term which includes a range of conditions including:
          </span>
        </h1>
      </div>
      <div>
        <div className="part-1 bg-red">
          <div className="no-rotate">
            <div className="each-row">
              <div style={{ margin: 10 }}>
                <h1 className="number light-orange">01</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold yellow">ADHD</h5>
                <p className="bold white light-weight">
                  Aention decit hyperactivity disorder (ADHD) is a mental health
                  disorder that can cause abovenormal levels of hyperactive and
                  impulsive behaviors.
                </p>
              </div>
              <div className="empty-div"></div>
            </div>

            <div className="each-row">
              <div className="empty-div"></div>
              <div style={{ margin: 10 }}>
                <h1 className="number light-orange">02</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold yellow">Autism Spectrum Conditions</h5>
                <p className="bold white light-weight">
                  Autism spectrum disorder is a condition related to brain
                  development that impacts how a person perceives and socializes
                  with others, causing problems in social interaction and
                  communication.
                </p>
              </div>
            </div>

            <div className="each-row">
              <div className="empty-div-2"></div>
              <div style={{ margin: 10 }}>
                <h1 className="number light-orange">03</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold yellow">Dyslexia</h5>
                <p className="bold white light-weight">
                  Dyslexia is a learning disorder that involves diculty reading
                  due to problems identifying speech sounds and learning how
                  they relate to leers and words (decoding). Also called reading
                  disability, dyslexia aects areas of the brain that process
                  language.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="part-1">
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

            <div className="each-row">
              <div className="empty-div"></div>
              <div style={{ margin: 10 }}>
                <h1 className="number faded-pink">05</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold sky-blue">Dyscalculia</h5>
                <p className="bold">
                  Dyscalculia is a math learning disability that impairs an
                  individual's ability to learn number-related concepts, peorm
                  accurate math calculations, reason and problem solve, and
                  peorm other basic math skills
                </p>
              </div>
            </div>

            <div className="each-row">
              <div className="empty-div-2"></div>
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
            </div>
          </div>
        </div>

        <div className="part-3 bg-faded-orange">
          <div className="no-rotate-2">
            <div className="each-row">
              <div style={{ margin: 10 }}>
                <h1 className="number faded-orange">07</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold dark-red">
                  Developmental Language Disorders
                </h5>
                <p className="bold">
                  Developmental language disorder (DLD) is a type of speech,
                  language and communication need (SLCN) that aects the way that
                  children understand and use language.
                </p>
              </div>
              <div className="empty-div"></div>
            </div>

            <div className="each-row">
              <div className="empty-div"></div>
              <div style={{ margin: 10 }}>
                <h1 className="number faded-orange">08</h1>
              </div>
              <div className="para text-left">
                <h5 className="bold dark-red">Tourette’s Syndrome</h5>
                <p className="bold">
                  Touree's syndrome is a problem with the nervous system that
                  causes people to make sudden movements or sounds, called tics,
                  that they can't control. For example, someone with Touree's
                  might blink or clear their throat over and over again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
