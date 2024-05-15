import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { SectionFAQ } from "./Sections/SectionFAQ";
import { SectionFooter } from "./Sections/SectionFooter";
import {  SectionSTAKE } from "./Sections/SectionSTAKE";
import { Navigation } from "./Navigation";

function App() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <Router>
      <>

        <Navigation />

        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/faq" element={<SectionFAQ />} />
          <Route path="/stake" element={<SectionSTAKE />} />
        </Routes>

        <SectionFooter />
      </>
    </Router>
  );
}

export default App;