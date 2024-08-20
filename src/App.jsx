import React from "react";
import "./App.css";
// import { Outlet } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
