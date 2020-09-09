import React from "react";
import "./ContactUs.css";

const ContactUs = (props) => {
  return (
    <div>
      <div className="heading-with-background">
        <h1 className="pink">Contact Us</h1>
        <h2 className="mini-heading pink">Contact Us</h2>
      </div>
      <div>
        <h1
          className="capitalise mini-heading"
          style={{ maxWidth: 500, margin: "auto" }}
        >
          Feel free to drop an email for further communications
        </h1>
      </div>
      <br />
      <br />
      <div>
        <div className="each-contact-row d-flex justify-content-left">
          <div className="emp"></div>
          <div style={{ margin: 10 }}>
            <h1 className="contact-us-number pink" style={{ opacity: 0.3 }}>
              01
            </h1>
          </div>
          <div className="para text-left contact-us-para">
            <p className="bold">
              Are you interested in driving change in education? If you are
              interested in collaborating with us, please ll in the form below.
              The more detail you can share, the beer
            </p>
          </div>
        </div>

        <div className="each-contact-row d-flex justify-content-end">
          <div style={{ margin: 10 }}>
            <h1 className="contact-us-number pink" style={{ opacity: 0.3 }}>
              02
            </h1>
          </div>
          <div className="para text-left contact-us-para">
            <p className="bold">
              This will help us learn which hubs we could launch, where and
              when, as well as put Champions in touch with each other to build
              learning ecosystems. We will share this information later in the
              year.
            </p>
          </div>
          <div className="emp"></div>
        </div>

        <div className="each-contact-row d-flex justify-content-left">
          <div className="emp"></div>
          <div style={{ margin: 10 }}>
            <h1 className="contact-us-number pink" style={{ opacity: 0.3 }}>
              03
            </h1>
          </div>
          <div className="para text-left contact-us-para">
            <p className="bold">
              In the meantime, please let us know if you ’d like to receive news
              and updates about EmergeAbility ’s growth and evolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
