import { useEffect } from "react";
import "./App.css";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Lenis from "lenis";

function App() {
  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Pricing />
      <FAQS />
      <Footer />
    </>
  );
}

export default App;
