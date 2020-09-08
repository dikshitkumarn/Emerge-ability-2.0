import React, { useEffect, useState } from "react";
import "./App.css";
import MainLogo from "./components/MainLogo/MainLogo";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Fourth from "./components/Fourth/Fourth";
import Parallax from "./components/UI/Parallax/Parallax";
import Five from "./components/Five/Five";

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
    <Parallax speed={0.1}>
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
      </div>
    </Parallax>
  );
}

export default App;
