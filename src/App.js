import { React, useEffect, useState } from "react";

import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Router,
} from "react-router-dom";

import Welcome from "./Welcome";
import Onboarding from "./Onboarding";
import Home from "./Home";
import DripItem from "./DripItem";

function App() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="App">
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Welcome />} />
          <Route path="welcome" element={<Onboarding />} />
          <Route path="home" element={<Home />} />
          <Route path=":permalink" element={<DripItem />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
