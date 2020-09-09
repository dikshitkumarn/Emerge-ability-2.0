import React from "react";
import "./App.css";
import MainLogo from "./components/MainLogo/MainLogo";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Fourth from "./components/Fourth/Fourth";
// import Parallax from "./components/UI/Parallax/Parallax";
import Five from "./components/Five/Five";
import Six from "./components/Six/Six";
import Seven from "./components/Seven/Seven";
import AboutUs from "./components/AboutUs/AboutUs";
import OurMission from "./components/OurMission/OurMission";
import OurVision from "./components/OurVission/OurVision";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/ContactUs/ContactUs";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  // const [backgroundImage, setBackgroundImage] = useState(
  //   "./assets/images/BackGround Images/20127.png"
  // );

  // useEffect(() => {
  //   console.log("hell");
  //   window.addEventListener("scroll", handleScroll);
  // });

  // const handleScroll = () => {
  //   if (window.pageYOffset > 0) {
  //     setBackgroundImage(
  //       "./assets/images/BackGround Images/BackgroundElements.png"
  //     );
  //   }
  // };

  // console.log(`url('` + backgroundImage + `')`);

  return (
    // <Parallax speed={0.1}>
    <div
      className="App"
      id="app"
      // style={{
      //   backgroundImage: `url('` + backgroundImage + `')`,
      // }}
    >
      <MainLogo />
      <Second />
      <Third />
      <Fourth />
      <Five />
      <Six />
      <Seven />
      <AboutUs />
      <OurMission />
      <OurVision />
      <WhatWeDo />
      <MeetTheTeam />
      <Projects />
      <ContactUs />
      <SignUp />
      <Footer />
    </div>
    // </Parallax>
  );
}

export default App;
