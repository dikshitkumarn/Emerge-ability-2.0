import React from "react";
import "./SignUp.css";
import TextBox from "../UI/TextBox/TextBox";
import CheckBox from "../UI/CheckBox/CheckBox";

const SignUp = (props) => {
  return (
    <div>
      <div className="heading-with-background">
        <h1 className="pink">Sign Up</h1>
        <h2 className="mini-heading pink">Sign Up</h2>
      </div>
      <div>
        <h1
          className="capitalise mini-heading"
          style={{ maxWidth: 700, margin: "auto" }}
        >
          Join our community of innovative educators and changemakers as an
          EmergeAbility champion.
        </h1>
      </div>
      <br />
      <br />
      <div className="signUp">
        <TextBox
          value=""
          placeholder="First Name"
          onChange={() => {}}
          label="FirstName"
          textboxName="firstName"
          required
          borderColor="red"
          color="blue"
          width="30vw"
          height="50px"
        />
        <TextBox
          value=""
          placeholder="Last Name"
          onChange={() => {}}
          label="Last Name"
          textboxName="lastName"
          required
          borderColor="red"
          color="blue"
          width="30vw"
          height="50px"
        />
        <TextBox
          value=""
          type="email"
          placeholder="Email"
          onChange={() => {}}
          label="Email"
          textboxName="email"
          required
          borderColor="violet"
          color="violet"
          width="80vw"
          height="50px"
        />
        <br />
        <div className="text-left select-container">
          <label className="label">
            <p className="red">*</p>
            <h1 className={`textbox-label yellow`}>I am intrested as a</h1>
          </label>
          <p>&nbsp;&nbsp;Please Select an Option</p>
          <CheckBox
            name="parent"
            // onChange={() => {}}
            // checked={true}
            displayName="Parent"
          />
          <CheckBox
            name="gaurdian"
            // onChange={() => {}}
            // checked={false}
            displayName="Gaurdian"
          />
          <CheckBox
            name="educator"
            // onChange={() => {}}
            // checked={true}
            displayName="Educator"
          />
          <CheckBox
            name="learner"
            // onChange={() => {}}
            // checked={true}
            displayName="Learner"
          />
          <CheckBox
            name="Advocate"
            // onChange={() => {}}
            // checked={true}
            displayName="advocate"
          />
          <CheckBox
            name="other"
            // onChange={() => {}}
            // checked={true}
            defaultChecked
            displayName="Other"
          />
        </div>
        <TextBox
          value=""
          type="text"
          placeholder="Type Your Location"
          onChange={() => {}}
          label="Location"
          textboxName="location"
          required
          borderColor="violet"
          color="orange"
          width="80vw"
          height="50px"
        />
        <TextBox
          value=""
          type="text"
          onChange={() => {}}
          label="Why would you like to become an EmergeAbility Champion?"
          textboxName="whyChampion"
          borderColor="violet"
          color="red"
          width="80vw"
          height="70px"
        />
        <TextBox
          value=""
          type="text"
          onChange={() => {}}
          label="What challenges are you trying to address?"
          textboxName="challenges"
          borderColor="violet"
          color="yellowgreen"
          width="80vw"
          height="70px"
        />
        <TextBox
          value=""
          type="text"
          onChange={() => {}}
          label="Enter the URL of Your website"
          textboxName="website"
          borderColor="violet"
          color="blue"
          width="80vw"
          height="70px"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SignUp;
